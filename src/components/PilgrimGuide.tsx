"use client";

import { motion } from "framer-motion";
import { Info, Map, Sparkles, AlertCircle } from "lucide-react";

export default function PilgrimGuide() {
  const nearbyTemples = [
    { name: "Srivari Temple, Tirumala", distance: "22 km", info: "The main hill shrine of Lord Venkateswara." },
    { name: "Sri Govindaraja Swamy Temple", distance: "1.8 km", info: "Historic temple located in the heart of Tirupati." },
    { name: "Sri Kapileswara Swamy Temple", distance: "2.5 km", info: "Ancient Shiva temple at the foot of Tirumala hills." },
    { name: "Sri Padmavathi Ammavari Temple", distance: "5.2 km", info: "Sacred shrine of Goddess Padmavathi in Tiruchanur." },
  ];

  const guidelines = [
    {
      icon: <Info className="w-5 h-5 text-temple-gold" />,
      title: "Darshan Reporting",
      description: "Report at the specified entry point in Tirumala at least 30 minutes before your slot. Bring a printout of your ticket.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-temple-gold" />,
      title: "Traditional Dress Code",
      description: "Traditional attire is mandatory. Men: Dhoti/Kurta. Women: Saree/Salwar Kameez with Dupatta. Western clothes are not allowed.",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-temple-gold" />,
      title: "Required Documents",
      description: "You must carry the original government ID card (preferably Aadhaar Card) used during the ticket booking process.",
    },
  ];

  return (
    <section
      id="guide"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row-reverse items-center justify-between gap-12"
    >
      {/* Guidelines Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] block">
          Spiritual Guide
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          Your Pilgrimage <br className="hidden sm:inline" />
          <span className="text-temple-gold">Darshan Guide</span>
        </h2>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          Ensure a smooth and blissful spiritual experience by following the official rules. Our desk is always ready to coordinate your local travel, cabs, and updates on queue lines.
        </p>

        {/* Guidelines List */}
        <div className="space-y-4 max-w-xl mx-auto lg:mx-0 text-left">
          {guidelines.map((guide, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-xl glass-panel border-white/5">
              <div className="p-2 bg-temple-gold/10 border border-temple-gold/20 rounded-lg h-fit text-temple-gold shrink-0">
                {guide.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white tracking-wide">{guide.title}</h4>
                <p className="text-xs text-ivory-white/60 leading-relaxed">{guide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Shrines Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-lg"
      >
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-temple-gold/15 space-y-6">
          <div className="flex items-center gap-3">
            <Map className="w-6 h-6 text-temple-gold" />
            <h3 className="font-display text-xl font-bold text-white tracking-wide">
              Sacred Shrines & Distances
            </h3>
          </div>
          <div className="space-y-4">
            {nearbyTemples.map((temple, idx) => (
              <div
                key={idx}
                className="flex justify-between items-start border-b border-white/5 pb-3 last:border-0 last:pb-0 group"
              >
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-temple-gold transition-colors duration-200">
                    {temple.name}
                  </h4>
                  <p className="text-xs text-ivory-white/45 mt-0.5 leading-relaxed">
                    {temple.info}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-temple-gold">
                    {temple.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
