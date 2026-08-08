"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ShieldCheck, Car } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-temple-gold" />,
      title: "Sacred Proximity",
      description:
        "Located near Leela Mahal Circle on Mangalam Road, offering direct and quick transit access to the Alipiri pathway and Tirumala hills.",
    },
    {
      icon: <Clock className="w-6 h-6 text-temple-gold" />,
      title: "24-Hour Pilgrimage Support",
      description:
        "We support 24-hour front desk services and flexible check-in schedules, accommodating pilgrims arriving at any hour of the day or night.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-temple-gold" />,
      title: "Cozy & Safe Sanctuary",
      description:
        "Rest peacefully in clean, secure rooms equipped with electronic safes, air conditioning, and 24-hour hot water for your cleansing baths.",
    },
    {
      icon: <Car className="w-6 h-6 text-temple-gold" />,
      title: "Pilgrim Travel Desk",
      description:
        "Seamless car hires, local travel guides, and expert coordination to assist you with your Darshan visits and sightseeing around Tirupati.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="amenities"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center"
    >
      {/* Section Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-16 md:mb-20"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] mb-3 block">
          A Sanctuary for Pilgrims
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight mb-4">
          Why Pilgrims Choose <span className="text-temple-gold">Aadya Inn</span>
        </h2>
        <div className="w-24 h-[1px] bg-temple-gold mx-auto mb-6" />
        <p className="text-sm sm:text-base text-ivory-white/70 leading-relaxed">
          We combine the quiet sanctity of a traditional retreat with modern amenities to make your spiritual journey to Lord Venkateswara completely comfortable.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.4)" }}
            className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-5 border border-temple-gold/10 transition-colors duration-300 group"
          >
            {/* Animated Icon Ring */}
            <div className="p-3.5 rounded-xl bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center shrink-0 group-hover:bg-temple-gold/15 group-hover:scale-105 transition-all duration-300">
              {feature.icon}
            </div>

            {/* Feature Text */}
            <div className="space-y-2">
              <h3 className="font-display text-xl font-semibold text-white tracking-wide group-hover:text-temple-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-ivory-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
