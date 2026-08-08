"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Milestone } from "lucide-react";

export default function Arrival() {
  const distances = [
    { destination: "Tirupati Railway Station", distance: "1.5 km", time: "5 mins" },
    { destination: "Tirupati RTC Bus Stand", distance: "1.8 km", time: "6 mins" },
    { destination: "Alipiri Foothills Toll Gate", distance: "4.5 km", time: "12 mins" },
    { destination: "Renigunta Airport (TIR)", distance: "14 km", time: "25 mins" },
  ];

  return (
    <section
      id="arrival"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* Content Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center lg:text-left"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] block">
          Arrival & Location
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          Step into a <br className="hidden sm:inline" />
          <span className="text-temple-gold">Warm Welcome</span>
        </h2>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          Conveniently located at Leela Mahal Circle, Aadya Inn acts as your peaceful gateway. Whether you arrive by rail, air, or road, checking in is smooth, ensuring you are relaxed before your Darshan journey.
        </p>

        {/* Address Card */}
        <div className="glass-panel p-6 rounded-2xl border border-white/5 max-w-xl mx-auto lg:mx-0 text-left space-y-3.5">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-temple-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Hotel Address
              </h4>
              <p className="text-xs sm:text-sm text-ivory-white/75 mt-1 leading-relaxed">
                First left, Leela Mahal Circle, towards Mangalam Road, Tirupati, Andhra Pradesh 517501
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-t border-white/5 pt-3">
            <Clock className="w-5 h-5 text-temple-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                Flexible Check-In Policy
              </h4>
              <p className="text-xs sm:text-sm text-ivory-white/75 mt-1 leading-relaxed">
                Standard check-in is at 12:00 PM, but we accommodate late-night or early-morning pilgrim arrivals whenever possible.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Distance Chart Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-lg"
      >
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-temple-gold/15 space-y-6">
          <div className="flex items-center gap-3">
            <Milestone className="w-6 h-6 text-temple-gold" />
            <h3 className="font-display text-xl font-bold text-white tracking-wide">
              Distance to Key Landmarks
            </h3>
          </div>
          <div className="space-y-4">
            {distances.map((landmark, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0 group"
              >
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-temple-gold transition-colors duration-200">
                    {landmark.destination}
                  </h4>
                  <span className="text-[10px] text-ivory-white/40 uppercase tracking-widest">
                    Approx Travel Time: {landmark.time}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-temple-gold">
                    {landmark.distance}
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
