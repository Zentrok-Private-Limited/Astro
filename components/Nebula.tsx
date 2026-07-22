"use client";

import { motion } from "framer-motion";

const clouds = [
  {
    size: 650,
    color: "rgba(59,130,246,0.18)", // Blue
    left: "-10%",
    top: "-15%",
    duration: 30,
  },
  {
    size: 550,
    color: "rgba(168,85,247,0.15)", // Purple
    left: "60%",
    top: "5%",
    duration: 35,
  },
  {
    size: 700,
    color: "rgba(251,191,36,0.10)", // Gold
    left: "15%",
    top: "55%",
    duration: 40,
  },
  {
    size: 500,
    color: "rgba(14,165,233,0.12)", // Cyan
    left: "70%",
    top: "65%",
    duration: 28,
  },
];

export default function Nebula() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Background gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#081225] via-[#040712] to-black" />

      {/* Animated nebula clouds */}

      {clouds.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-[140px]"
          style={{
            width: cloud.size,
            height: cloud.size,
            left: cloud.left,
            top: cloud.top,
            background: cloud.color,
          }}
          animate={{
            x: [-30, 30, -30],
            y: [-20, 20, -20],
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center golden glow */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,80,0.12) 0%, rgba(255,210,80,0.05) 40%, transparent 75%)",
          filter: "blur(120px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft blue ambient light */}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          filter: "blur(150px)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small glowing fog blobs */}

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 140 + Math.random() * 120,
            height: 140 + Math.random() * 120,
            background:
              i % 2 === 0
                ? "rgba(99,102,241,.08)"
                : "rgba(250,204,21,.06)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [-40, 40, -40],
            y: [-30, 30, -30],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}