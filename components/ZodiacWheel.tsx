"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ZodiacWheel() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Main Aura */}

      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full bg-yellow-300/10 blur-[90px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Outer Ring */}

      <motion.div
        className="absolute h-[430px] w-[430px] rounded-full border border-yellow-300/15"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dashed Ring */}

      <motion.div
        className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-yellow-300/25"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Decorative Ring */}

      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full border border-yellow-300/20"
        animate={{
          rotate: 360,
          scale: [1, 1.03, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
          },
        }}
      />

      {/* Zodiac Wheel */}

      <motion.div
        animate={{
          scale:4,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative z-20"
      >
        <Image
          src="/images/om3.png"
          alt="Astrology Wheel"
          width={200}
          height={200}
          priority
          className="
            select-none
            pointer-events-none
            drop-shadow-[0_0_35px_rgba(255,215,0,.8)]
          "
        />
      </motion.div>

      {/* Sacred Geometry */}

      <motion.svg
        className="absolute h-[240px] w-[240px]"
        viewBox="0 0 100 100"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <polygon
          points="50,5 95,27 95,73 50,95 5,73 5,27"
          fill="none"
          stroke="rgba(255,215,0,.35)"
          strokeWidth="0.8"
        />

        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(255,215,0,.25)"
          strokeWidth="0.8"
        />

        <line
          x1="50"
          y1="5"
          x2="50"
          y2="95"
          stroke="rgba(255,215,0,.25)"
        />

        <line
          x1="5"
          y1="27"
          x2="95"
          y2="73"
          stroke="rgba(255,215,0,.25)"
        />

        <line
          x1="95"
          y1="27"
          x2="5"
          y2="73"
          stroke="rgba(255,215,0,.25)"
        />
      </motion.svg>

      {/* Core

      <motion.div
        className="
          absolute
          z-30
          h-7
          w-7
          rounded-full
          bg-yellow-200
          shadow-[0_0_40px_rgba(255,215,0,1)]
        "
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      /> */}

      {/* Tiny Orbiting Lights */}

      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute h-[260px] w-[260px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + i * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-3
              w-3
              -translate-x-1/2
              rounded-full
              bg-yellow-300
              shadow-[0_0_15px_rgba(255,215,0,.9)]
            "
            style={{
              transform: `translateX(-50%) rotate(${deg}deg)`,
            }}
          />
        </motion.div>
      ))}

    </div>
  );
}