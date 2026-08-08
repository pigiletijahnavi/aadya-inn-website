"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress bar simulation (2.5 seconds total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow fade-out animation to finish
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal overflow-hidden"
        >
          {/* Animated Morning Mist Overlay */}
          <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-radial from-white/10 to-transparent blur-3xl animate-[pulse_8s_infinite]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-radial from-white/10 to-transparent blur-3xl animate-[pulse_10s_infinite]" />
          </div>

          <div className="relative flex flex-col items-center max-w-md px-6 text-center z-10">
            {/* Shimmering Logo Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-72 h-72 mb-6 drop-shadow-[0_10px_20px_rgba(212,175,55,0.15)]"
            >
              {/* Shimmer overlay effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-temple-gold/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              </div>
              <Image
                src="/logo.png"
                alt="Aadya Inn Tirupati Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Spiritual tagline/Status text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-temple-gold tracking-[0.2em] text-sm uppercase mb-1"
            >
              Aadya Inn Tirupati
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-sans text-xs tracking-wider uppercase text-ivory-white/80"
            >
              Preparing your blissful stay...
            </motion.p>
          </div>

          {/* Progress Bar Container at the bottom */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-temple-gold/60 via-temple-gold to-temple-gold/60 shadow-[0_0_8px_#D4AF37]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
