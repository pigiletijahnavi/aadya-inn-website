"use client";

import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Moon, ArrowRight } from "lucide-react";

export default function RoomsHeader() {
  const roomsOverview = [
    {
      id: "queen-room-section",
      name: "Queen Room",
      price: "₹1,799",
      tagline: "Cozy & Quiet Sanctum",
      capacity: "Up to 2 Guests",
      icon: <Moon className="w-5 h-5 text-temple-gold" />,
    },
    {
      id: "king-room-section",
      name: "King Room",
      price: "₹2,199",
      tagline: "Spacious Family Comfort",
      capacity: "Up to 3 Guests",
      icon: <Coffee className="w-5 h-5 text-temple-gold" />,
    },
    {
      id: "suite-room-section",
      name: "Suite Room",
      price: "₹3,199",
      tagline: "Royal Pilgrimage Luxury",
      capacity: "Up to 4 Guests",
      icon: <ShieldCheck className="w-5 h-5 text-temple-gold" />,
    },
  ];

  return (
    <section
      id="rooms"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-8 md:pt-32 flex flex-col items-center"
    >
      {/* Heading Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-12"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] mb-3 block">
          Divine Sanctuary
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight mb-4">
          Our Sanctum <span className="text-temple-gold">Rooms</span>
        </h2>
        <div className="w-24 h-[1px] bg-temple-gold mx-auto mb-6" />
        <p className="text-sm sm:text-base text-ivory-white/70 leading-relaxed">
          Cleanliness is next to godliness. We offer pristine, acoustically insulated sanctuary rooms near Leela Mahal Circle with 24-hour hot water and flexible check-ins to make your pilgrimage perfectly peaceful.
        </p>
      </motion.div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {roomsOverview.map((room, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.4)" }}
            className="glass-panel p-6.5 rounded-2xl border border-temple-gold/10 flex flex-col justify-between transition-colors duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center group-hover:bg-temple-gold/15 transition-all duration-300">
                  {room.icon}
                </div>
                <span className="text-xs font-bold text-temple-gold bg-temple-gold/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {room.capacity}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-temple-gold transition-colors">
                  {room.name}
                </h3>
                <p className="text-xs text-ivory-white/50">{room.tagline}</p>
              </div>
              <div className="pt-2 border-t border-white/5 flex items-baseline gap-1">
                <span className="font-display text-2xl font-bold text-white">{room.price}</span>
                <span className="text-xs text-ivory-white/40">/ night</span>
              </div>
            </div>
            <div className="pt-6">
              <a
                href={`#${room.id}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 hover:bg-temple-gold hover:text-charcoal border border-white/10 hover:border-temple-gold text-white font-semibold rounded-xl text-xs tracking-wider uppercase transition-all duration-300"
              >
                Explore Details
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
