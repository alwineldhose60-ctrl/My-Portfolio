"use client";

import { useEffect, useRef } from "react";

interface CanvasVideoProps {
  src: string;
  className?: string;
  playbackRate?: number;
}

export default function CanvasVideo({ src, className = "", playbackRate = 1 }: CanvasVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for no transparency
    if (!ctx) return;

    const video = document.createElement("video");
    
    video.src = src;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.playbackRate = playbackRate;
    video.autoplay = true;

    let isPlaying = false;

    // Set canvas dimensions once we know video dimensions
    video.addEventListener("loadedmetadata", () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    });

    const renderLoop = () => {
      if (isPlaying && video.readyState >= 2) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      requestRef.current = requestAnimationFrame(renderLoop);
    };

    video.addEventListener("play", () => {
        isPlaying = true;
    });
    video.addEventListener("pause", () => {
        isPlaying = false;
    });

    video.play().then(() => {
        requestRef.current = requestAnimationFrame(renderLoop);
    }).catch(e => {
        console.error("Video auto-play failed", e);
    });

    return () => {
      isPlaying = false;
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      video.pause();
      video.src = "";
      video.load();
    };
  }, [src, playbackRate]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full object-cover pointer-events-none ${className}`}
    />
  );
}
