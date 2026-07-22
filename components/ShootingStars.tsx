"use client";

import { motion } from "framer-motion";

const meteors = [
  {
    top: "8%",
    left: "-20%",
    duration: 6,
    delay: 0,
    width: 220,
    rotate: 18,
  },
  {
    top: "22%",
    left: "-30%",
    duration: 9,
    delay: 3,
    width: 180,
    rotate: 24,
  },
  {
    top: "40%",
    left: "-25%",
    duration: 8,
    delay: 5,
    width: 260,
    rotate: 16,
  },
  {
    top: "5%",
    left: "110%",
    duration: 10,
    delay: 2,
    width: 200,
    rotate: -30,
    reverse: true,
  },
];

export default function ShootingStars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {meteors.map((meteor, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: meteor.top,
            left: meteor.left,
            rotate: `${meteor.rotate}deg`,
          }}
          animate={
            meteor.reverse
              ? {
                  x: ["0vw", "-150vw"],
                  y: ["0vh", "100vh"],
                  opacity: [0, 1, 1, 0],
                }
              : {
                  x: ["0vw", "150vw"],
                  y: ["0vh", "100vh"],
                  opacity: [0, 1, 1, 0],
                }
          }
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "linear",
          }}
        >
          {/* Meteor Head */}
          <div className="relative flex items-center">

            <motion.div
              className="h-3 w-3 rounded-full bg-yellow-100 shadow-[0_0_30px_rgba(255,230,150,.95)]"
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            />

            {/* Tail */}

            <div
              style={{
                width: meteor.width,
              }}
              className="h-[2px] bg-gradient-to-r from-yellow-100 via-yellow-300/70 to-transparent"
            />

          </div>
        </motion.div>
      ))}

      {/* Small random sparkle flashes */}

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 10}%`,
            top: `${10 + (i % 4) * 18}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.6, 0.5],
          }}
          transition={{
            duration: 2 + i * 0.4,
            repeat: Infinity,
            delay: i,
          }}
        >
          <div className="relative flex items-center justify-center">

            <div className="absolute h-6 w-[1px] bg-yellow-200/60" />
            <div className="absolute w-6 h-[1px] bg-yellow-200/60" />

            <div className="h-2 w-2 rounded-full bg-yellow-100 shadow-[0_0_20px_rgba(255,220,120,.9)]" />

          </div>
        </motion.div>
      ))}

    </div>
  );
}