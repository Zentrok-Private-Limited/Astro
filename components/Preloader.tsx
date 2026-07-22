"use client";

import { AnimatePresence, motion } from "framer-motion";

import "./preloader.css";

import StarField from "./StarField";
import Nebula from "./Nebula";
import ShootingStars from "./ShootingStars";
import ZodiacWheel from "./ZodiacWheel";
import OrbitingPlanets from "./OrbitingPlanets";

interface Props {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: Props) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#040712]"
        >
          {/* Background */}

          <Nebula />

          <StarField />

          <ShootingStars />

          {/* Vignette */}

          <div className="absolute inset-0 bg-black/25" />

          {/* Golden radial glow */}

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/5 blur-[140px]" />

          {/* Center */}

          <div className="relative flex h-full items-center justify-center">

            {/* Outer pulse */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute h-[420px] w-[420px] rounded-full bg-yellow-300/10 blur-[80px]"
            />

            <OrbitingPlanets />

            <ZodiacWheel />

            {/* Bottom Text */}

            <div className="absolute top-[calc(50%+210px)] flex flex-col items-center">

              <motion.h2
                className="loader-title"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                Aligning The Cosmos
              </motion.h2>

              <motion.p
                className="loader-subtitle"
                animate={{
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
              >
                Reading the Stars...
              </motion.p>

              <div className="mt-6 flex gap-2">

                {[0,1,2].map((dot)=>(
                  <motion.div
                    key={dot}
                    className="h-2 w-2 rounded-full bg-yellow-300"
                    animate={{
                      y:[0,-8,0],
                      opacity:[0.4,1,0.4]
                    }}
                    transition={{
                      repeat:Infinity,
                      duration:.8,
                      delay:dot*.25
                    }}
                  />
                ))}

              </div>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}