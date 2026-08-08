"use client";

import { motion } from "framer-motion";
import { Coffee, Wifi, Users, Map } from "lucide-react";

export default function Lobby() {
  const lobbyAmenities = [
    {
      icon: <Users className="w-5 h-5 text-temple-gold" />,
      title: "Cozy Family Lounge",
      description: "Comfortable seating spaces designed for families and senior pilgrims to relax during check-in or check-out.",
    },
    {
      icon: <Wifi className="w-5 h-5 text-temple-gold" />,
      title: "Complementary High-Speed Wi-Fi",
      description: "Stay connected. Enjoy high-speed wireless internet access throughout the lobby area and guest rooms.",
    },
    {
      icon: <Coffee className="w-5 h-5 text-temple-gold" />,
      title: "Mineral Water Station",
      description: "Quench your thirst. Pure mineral drinking water is readily available in the lounge for guests.",
    },
    {
      icon: <Map className="w-5 h-5 text-temple-gold" />,
      title: "Travel Assistance",
      description: "Review local tour pamphlets, check train status, or consult our desk for direct car hire services.",
    },
  ];

  return (
    <section
      id="lobby"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row-reverse items-center justify-between gap-12"
    >
      {/* Description Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] block">
          Lobby Lounge
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          A Comforting <br className="hidden sm:inline" />
          <span className="text-temple-gold">Lounge Space</span>
        </h2>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          Our lobby is designed as a welcoming sanctuary where traveling families can sit together in peaceful, air-conditioned comfort. Enjoy high-speed internet, refresh yourselves, and coordinates travel plans seamlessly.
        </p>
      </motion.div>

      {/* Amenities Grid */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {lobbyAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3 group hover:border-temple-gold/25 transition-colors duration-300"
            >
              <div className="p-2.5 rounded-lg bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center w-fit group-hover:bg-temple-gold/15 transition-colors">
                {amenity.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-white tracking-wide group-hover:text-temple-gold transition-colors">
                {amenity.title}
              </h3>
              <p className="text-xs text-ivory-white/60 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
