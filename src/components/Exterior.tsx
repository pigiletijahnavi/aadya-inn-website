"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Zap, Users } from "lucide-react";

export default function Exterior() {
  const buildingHighlights = [
    {
      icon: <Truck className="w-5 h-5 text-temple-gold" />,
      title: "Secure Parking",
      description: "Dedicated safe parking space on-site for guest vehicles and pilgrim tour cars.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-temple-gold" />,
      title: "Elevator / Lift Access",
      description: "Modern, spacious elevator serving all floors, ensuring comfortable transit for elders.",
    },
    {
      icon: <Zap className="w-5 h-5 text-temple-gold" />,
      title: "100% Power Backup",
      description: "Heavy-duty power generator backing up AC, lighting, and hot water systems non-stop.",
    },
    {
      icon: <Users className="w-5 h-5 text-temple-gold" />,
      title: "Intimate Meeting Hall",
      description: "A compact conference and gathering hall with capacity for 20-30 guests.",
    },
  ];

  return (
    <section
      id="exterior"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row-reverse items-center justify-between gap-12"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] block">
          Modern Property Highlights
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          A Peaceful <br className="hidden sm:inline" />
          <span className="text-temple-gold">Modern Haven</span>
        </h2>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          Aadya Inn features a newly built, clean facade designed to blend modern elegance with warm pilgrim-friendly functionality. Feel completely secure with round-the-clock facilities designed around the needs of families and traveling groups.
        </p>
      </motion.div>

      {/* Grid Highlights */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {buildingHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3 group hover:border-temple-gold/25 transition-colors duration-300"
            >
              <div className="p-2.5 rounded-lg bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center w-fit group-hover:bg-temple-gold/15 transition-colors">
                {highlight.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-white tracking-wide group-hover:text-temple-gold transition-colors">
                {highlight.title}
              </h3>
              <p className="text-xs text-ivory-white/60 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
