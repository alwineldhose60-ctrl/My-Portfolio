"use client";

import { useEffect, useRef } from "react";

class Particle {
  r: number;
  baseAngle: number;
  size: number;
  color: string;
  opacity: number;

  x = 0;
  y = 0;
  baseX = 0;
  baseY = 0;
  vx = 0;
  vy = 0;

  constructor(r: number, angle: number) {
    this.r = r;
    this.baseAngle = angle;

    this.size = Math.random() * 1.2 + 0.6;
    this.opacity = Math.random() * 0.5 + 0.5;

    this.color =
      Math.random() > 0.5
        ? "0,255,255"     // Neon Cyan
        : "176,38,255";   // Neon Purple
  }

  updateBase(cx: number, cy: number, rotation: number) {
    const angle = this.baseAngle + rotation;
    this.baseX = cx + Math.cos(angle) * this.r;
    this.baseY = cy + Math.sin(angle) * this.r;
  }

  update(mouseX: number, mouseY: number, active: boolean) {
    const spring = 0.035;
    const friction = 0.87;

    let targetX = this.baseX;
    let targetY = this.baseY;

    if (active) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repelRadius = 150;

      if (dist < repelRadius && dist > 0.1) {
        const force = (repelRadius - dist) / repelRadius;
        const push = force * 120;

        targetX += (dx / dist) * push;
        targetY += (dy / dist) * push;
      }
    }

    const dx = targetX - this.x;
    const dy = targetY - this.y;

    this.vx += dx * spring;
    this.vy += dy * spring;

    this.vx *= friction;
    this.vy *= friction;

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
    const dx = cx - this.x;
    const dy = cy - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const dirX = dist > 0.1 ? dx / dist : 0;
    const dirY = dist > 0.1 ? dy / dist : 0;

    const dashLength = 4 + this.r * 0.01;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x + dirX * dashLength,
      this.y + dirY * dashLength
    );

    ctx.strokeStyle = `rgba(${this.color},${this.opacity})`;
    ctx.lineWidth = this.size;
    ctx.lineCap = "round";

    ctx.shadowBlur = 6;
    ctx.shadowColor = `rgba(${this.color},${this.opacity})`;

    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}

export default function MagneticParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      init();
    };

    let centerX = 0;
    let centerY = 0;
    let rotation = 0;

    const init = () => {
      particles = [];

      centerX = window.innerWidth * 0.8; // 🔥 off-screen to right
      centerY = window.innerHeight * 0.5;

      const count = 360;

      for (let i = 0; i < count; i++) {
        const radius = Math.pow(Math.random(), 1.4) * 700;
        const angle = Math.random() * Math.PI * 2 + radius * 0.003;

        const p = new Particle(radius, angle);
        p.updateBase(centerX, centerY, 0);
        p.x = p.baseX;
        p.y = p.baseY;

        particles.push(p);
      }
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
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.0006;

      for (const p of particles) {
        p.updateBase(centerX, centerY, rotation);
        p.update(mouse.x, mouse.y, mouse.active);
        p.draw(ctx, centerX, centerY);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 left-0 w-12"
      aria-hidden="true"
    />
  );
}