"use client";

import { motion } from "framer-motion";
import { Users, Shield, Check, Calendar } from "lucide-react";

interface RoomSectionProps {
  id: string;
  subtitle: string;
  title: string;
  price: string;
  occupancy: string;
  description: string;
  features: string[];
}

export default function RoomSection({
  id,
  subtitle,
  title,
  price,
  occupancy,
  description,
  features,
}: RoomSectionProps) {
  return (
    <section
      id={id}
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* Room Details Panel */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] block">
          {subtitle}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          {title}
        </h2>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <span className="font-display text-2xl font-bold text-temple-gold border-r border-white/10 pr-4">
            {price}
          </span>
          <span className="text-xs text-ivory-white/60 flex items-center gap-1.5 uppercase tracking-widest">
            <Users className="w-4 h-4 text-temple-gold" /> {occupancy}
          </span>
        </div>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          {description}
        </p>

        {/* Feature Checkmarks */}
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-temple-gold/15 border border-temple-gold/25 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-temple-gold" />
              </div>
              <span className="text-xs sm:text-sm text-ivory-white/85">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Booking Prompt Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-md"
      >
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-temple-gold/15 space-y-5 text-center">
          <div className="p-4 rounded-full bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center w-fit mx-auto">
            <Shield className="w-8 h-8 text-temple-gold" />
          </div>
          <h3 className="font-display text-xl font-bold text-white tracking-wide">
            Reserve this Room
          </h3>
          <p className="text-xs text-ivory-white/60 leading-relaxed max-w-xs mx-auto">
            Experience pristine cleanliness, soundproof windows, and relaxing bedding. Perfect for families looking for peaceful nights.
          </p>
          <div className="pt-2">
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-temple-gold hover:bg-temple-gold-hover text-charcoal font-bold rounded-xl text-sm tracking-wider uppercase transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Reserve Room
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
