"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format number to 3 digits, e.g., 000, 001, 010, 119
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNumber}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  // Draw the initial frame once the first image is loaded
  useEffect(() => {
    if (images.length > 0 && images[0].complete && canvasRef.current) {
      drawFrame(0);
    }
  }, [imagesLoaded]);

  // Use Framer Motion to tie scroll progress to frame index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    drawFrame(frameIndex);
  });

  const drawFrame = (index: number) => {
    if (!images[index] || !images[index].complete || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual size in memory (scaled to account for extra pixel density)
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    // Normalize coordinate system to use css pixels
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;
    
    let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image
      drawWidth = rect.width;
      drawHeight = rect.width / imgRatio;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      // Canvas is taller than image
      drawHeight = rect.height;
      drawWidth = rect.height * imgRatio;
      offsetX = (rect.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle window resize logic for the canvas
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        // Redraw current frame
        const latest = scrollYProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(latest * FRAME_COUNT)
        );
        drawFrame(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[800vh] bg-[#121212]">
      {/* Loading Overlay */}
      {imagesLoaded < FRAME_COUNT && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212] flex-col gap-4">
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-100 ease-out" 
              style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
            />
          </div>
          <p className="text-white/60 text-sm font-sans tracking-widest uppercase">
            Loading Experience...
          </p>
        </div>
      )}

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          // Prevents the canvas element itself from resizing visually when properties are set
          style={{ width: "100%", height: "100%" }}
        />
        
        {/* Helper overlay for development or aesthetic text could go here later */}
        {/* <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
            <h1 className="text-white text-6xl mix-blend-difference font-bold tracking-tighter">SCROLL.</h1>
        </div> */}
      </div>
    </div>
  );
}
