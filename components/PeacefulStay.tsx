"use client";

import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Heart, Moon } from "lucide-react";

export default function PeacefulStay() {
  const comfortDetails = [
    {
      icon: <Moon className="w-5 h-5 text-temple-gold" />,
      title: "Soundproof Serenity",
      description: "Acoustically insulated windows block out traffic noise, ensuring you get deep, uninterrupted sleep before or after Darshan.",
    },
    {
      icon: <Heart className="w-5 h-5 text-temple-gold" />,
      title: "Sanitized Premium Linens",
      description: "We maintain the highest hygiene standards with freshly washed, crisp white sheets, plush pillows, and sanitized bathrooms.",
    },
    {
      icon: <Coffee className="w-5 h-5 text-temple-gold" />,
      title: "Morning Refreshments",
      description: "Every room features a water kettle with complimentary tea and coffee options for a fresh, energizing start to your day.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-temple-gold" />,
      title: "Peace of Mind Security",
      description: "Your focus belongs on your pilgrimage. Keep your cash and valuables safe in our electronic safe deposit boxes.",
    },
  ];

  return (
    <section
      id="peaceful-stay"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* Description Column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] block">
          Restful Experience
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          A Peaceful <br className="hidden sm:inline" />
          <span className="text-temple-gold">Night&apos;s Sleep</span>
        </h2>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          At Aadya Inn, we understand that a pilgrimage can be physically demanding. That is why we have engineered our rooms to be quiet, clean, and highly comfortable, letting you wake up refreshed and spiritually focused.
        </p>
      </motion.div>

      {/* Grid Highlights */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {comfortDetails.map((detail, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3 group hover:border-temple-gold/25 transition-colors duration-300"
            >
              <div className="p-2.5 rounded-lg bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center w-fit group-hover:bg-temple-gold/15 transition-colors">
                {detail.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-white tracking-wide group-hover:text-temple-gold transition-colors">
                {detail.title}
              </h3>
              <p className="text-xs text-ivory-white/60 leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
