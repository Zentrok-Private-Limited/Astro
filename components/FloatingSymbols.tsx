"use client";

import { motion } from "framer-motion";

const zodiac = [
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
];

export default function FloatingSymbols() {
  return (
    <>
      {/* Main rotating zodiac ring */}

      <motion.div
        className="absolute h-[520px] w-[520px]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {zodiac.map((symbol, index) => {
          const angle = (360 / zodiac.length) * index;

          return (
            <motion.div
              key={symbol}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-260px)
                  rotate(-${angle}deg)
                `,
              }}
              animate={{
                y: [0, -6, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                className="
                  text-2xl
                  md:text-3xl
                  font-light
                  text-yellow-300
                  select-none
                "
                style={{
                  textShadow:
                    "0 0 15px rgba(255,215,0,.7)",
                }}
              >
                {symbol}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating free symbols */}

      {Array.from({ length: 14 }).map((_, i) => {
        const symbol = zodiac[i % zodiac.length];

        return (
          <motion.div
            key={i}
            className="absolute text-yellow-300/25 text-xl"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              rotate: [-8, 8, -8],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Sparkles around the wheel */}

      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${50 + Math.cos(i) * 18}%`,
            top: `${50 + Math.sin(i) * 18}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1.4, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute h-5 w-[1px] bg-yellow-200/50" />
            <div className="absolute w-5 h-[1px] bg-yellow-200/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-100 shadow-[0_0_12px_rgba(255,215,0,.9)]" />
          </div>
        </motion.div>
      ))}
    </>
  );
}