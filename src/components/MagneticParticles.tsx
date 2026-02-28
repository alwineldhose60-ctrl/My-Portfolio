"use client";

import { useEffect, useRef } from "react";

class Particle {
    x: number;
    y: number;
    angle: number;
    radius: number;
    baseRadius: number;
    speed: number;
    sizeX: number;
    sizeY: number;
    color: string;

    constructor(canvasWidth: number, canvasHeight: number) {
        // Distribute particles in a large circle centered roughly on the right side of the screen
        const centerX = canvasWidth * 0.7; // 70% across the screen
        const centerY = canvasHeight * 0.5;

        // Spread them out across a huge radius
        this.baseRadius = Math.random() * (canvasWidth * 0.8) + 50;
        this.radius = this.baseRadius;
        this.angle = Math.random() * Math.PI * 2;

        // Slower speed for inner rings, faster for outer to maintain "solid" spiral feel
        this.speed = (Math.random() * 0.0005 + 0.0002) * (this.baseRadius > 500 ? 0.5 : 1.5);

        // Dash shape
        this.sizeX = Math.random() * 4 + 2; // 2 to 6px long
        this.sizeY = Math.random() * 1.5 + 0.5; // very thin vertically

        // Colors: mostly pure white, occasionally sci-fi cyan/blue
        const isBlue = Math.random() > 0.85;
        const opacity = Math.random() * 0.6 + 0.2; // 0.2 to 0.8

        if (isBlue) {
            this.color = `rgba(100, 180, 255, ${opacity})`;
        } else {
            this.color = `rgba(255, 255, 255, ${opacity})`;
        }

        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
    }

    draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        ctx.save();
        ctx.translate(this.x, this.y);

        // Rotate the dash to match its orbit tangentially
        // Add PI/2 (90deg) so it's tangential instead of pointing to center
        ctx.rotate(this.angle + Math.PI / 2);

        ctx.fillStyle = this.color;

        // Draw centered rectangle with rounded edges (dash)
        ctx.beginPath();
        // Since we rotated the context, we draw it horizontally along its new local X axis
        ctx.roundRect(-this.sizeX / 2, -this.sizeY / 2, this.sizeX, this.sizeY, this.sizeY);
        ctx.fill();

        ctx.restore();
    }

    update(mouse: { x: number; y: number; active: boolean }, centerX: number, centerY: number) {
        // Base polar rotation
        this.angle -= this.speed; // Negative for counter-clockwise

        // Subtle magnetic mouse interaction
        if (mouse.active) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distToMouse = Math.sqrt(dx * dx + dy * dy);

            // Interaction radius
            if (distToMouse < 250) {
                // If close to cursor, slightly bend radius outwards or inwards
                const force = (250 - distToMouse) / 250;
                // Add a swirling force (perpendicular to mouse)
                this.angle -= force * 0.002;
                // Add a slight repulsive force
                this.radius += force * 0.5;
            } else {
                // Spring back to base radius
                if (this.radius !== this.baseRadius) {
                    this.radius += (this.baseRadius - this.radius) * 0.05;
                }
            }
        } else {
            // Spring back to base radius
            if (this.radius !== this.baseRadius) {
                this.radius += (this.baseRadius - this.radius) * 0.05;
            }
        }

        // Convert back to cartesian for drawing
        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;
    }
}

export default function MagneticParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;

        const mouse = {
            x: -1000,
            y: -1000,
            active: false
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        let centerX = 0;
        let centerY = 0;

        const resize = () => {
            if (canvas) {
                canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
                canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
                centerX = canvas.width * 0.7; // Vortex center point X
                centerY = canvas.height * 0.5; // Vortex center point Y
                init();
            }
        };

        const init = () => {
            particles = [];
            // Calculate a great density: roughly 800 particles for a standard 1080p hero
            const area = canvas.width * canvas.height;
            const particleCount = Math.floor(area / 2500); // Much denser than previous iteration to form the rings

            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(mouse, centerX, centerY);
                particles[i].draw(ctx, centerX, centerY);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Delay initial resize slightly to prevent sizing issues on rapid loads
        const initialTimer = setTimeout(() => {
            resize();
            animate();
        }, 100);

        window.addEventListener("resize", resize);

        return () => {
            clearTimeout(initialTimer);
            window.removeEventListener("resize", resize);
            if (canvas) {
                canvas.removeEventListener("mousemove", handleMouseMove);
                canvas.removeEventListener("mouseleave", handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto z-10"
            aria-hidden="true"
        />
    );
}
