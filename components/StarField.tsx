"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-yellow-100"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 6}px rgba(255,220,120,.8)`,
          }}
          animate={{
            opacity: [
              star.opacity * 0.4,
              star.opacity,
              star.opacity * 0.4,
            ],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large glowing stars */}

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`big-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 8}%`,
            top: `${15 + (i % 5) * 15}%`,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute h-8 w-[1px] bg-yellow-200/70" />
            <div className="absolute w-8 h-[1px] bg-yellow-200/70" />

            <div className="h-2 w-2 rounded-full bg-yellow-100 shadow-[0_0_18px_rgba(255,220,120,.9)]" />
          </div>
        </motion.div>
      ))}

      {/* Floating Dust */}

      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-yellow-100/20"
          style={{
            width: 2,
            height: 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}