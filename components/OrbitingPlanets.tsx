"use client";

import { motion } from "framer-motion";

const planets = [
  {
    name: "Sun",
    size: 18,
    orbit: 175,
    duration: 10,
    color: "#facc15",
    glow: "0 0 30px rgba(250,204,21,.9)",
    angle: 0,
    ring: false,
  },
  {
    name: "Mars",
    size: 12,
    orbit: 225,
    duration: 16,
    color: "#ef4444",
    glow: "0 0 22px rgba(239,68,68,.8)",
    angle: 90,
    ring: false,
  },
  {
    name: "Neptune",
    size: 14,
    orbit: 270,
    duration: 22,
    color: "#60a5fa",
    glow: "0 0 24px rgba(96,165,250,.8)",
    angle: 180,
    ring: false,
  },
  {
    name: "Saturn",
    size: 16,
    orbit: 320,
    duration: 30,
    color: "#fde68a",
    glow: "0 0 24px rgba(253,230,138,.8)",
    angle: 270,
    ring: true,
  },
];

function Planet({
  orbit,
  duration,
  angle,
  size,
  color,
  glow,
  ring,
}: (typeof planets)[number]) {
  return (
    <motion.div
      className="absolute"
      style={{
        width: orbit * 2,
        height: orbit * 2,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute left-1/2 top-0"
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="relative rounded-full"
          style={{
            width: size,
            height: size,
            background: color,
            boxShadow: glow,
          }}
        >
          {ring && (
            <div
              className="absolute left-1/2 top-1/2 border border-yellow-100/70 rounded-full"
              style={{
                width: size + 14,
                height: size / 2 + 6,
                transform:
                  "translate(-50%, -50%) rotate(-25deg)",
              }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OrbitingPlanets() {
  return (
    <>
      {/* Orbit Lines */}

      {[175, 225, 270, 320].map((radius) => (
        <div
          key={radius}
          className="absolute rounded-full border border-white/5"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />
      ))}

      {/* Planets */}

      {planets.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}

      {/* Floating Energy Orbs */}

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-300/60"
          style={{
            width: 4,
            height: 4,
            left: `${45 + Math.cos(i) * 20}%`,
            top: `${45 + Math.sin(i) * 20}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}