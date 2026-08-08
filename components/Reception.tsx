"use client";

import { motion } from "framer-motion";
import { UserCheck, Shield, CreditCard, Sparkles } from "lucide-react";

export default function Reception() {
  const policies = [
    {
      icon: <UserCheck className="w-5 h-5 text-temple-gold" />,
      title: "Express Pilgrim Check-In",
      description: "Produce any valid government ID for immediate check-in. We keep the process under 3 minutes so you can rest.",
    },
    {
      icon: <Shield className="w-5 h-5 text-temple-gold" />,
      title: "Safe Deposit Lockers",
      description: "Rest easy during your Darshan. Safe locker storage is available at the front desk for your valuables.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-temple-gold" />,
      title: "Digital Payments & UPI",
      description: "Seamless payments. We accept all major Credit/Debit cards, GPay, PhonePe, UPI, and cash.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-temple-gold" />,
      title: "Darshan Assistance",
      description: "Our front desk is staffed with local experts ready to guide you on temple queue timings and reporting points.",
    },
  ];

  return (
    <section
      id="reception"
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
          24/7 Front Desk
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
          A Reverent <br className="hidden sm:inline" />
          <span className="text-temple-gold">Reception</span>
        </h2>
        <p className="text-sm sm:text-base text-ivory-white/70 max-w-xl leading-relaxed">
          From the moment you step through our doors, our dedicated front desk staff is at your service. We ensure that your check-in is swift, secure, and respectful of your schedule, leaving you free to focus on your spiritual pilgrimage.
        </p>
      </motion.div>

      {/* Policies Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full max-w-xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {policies.map((policy, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3 group hover:border-temple-gold/25 transition-colors duration-300"
            >
              <div className="p-2.5 rounded-lg bg-temple-gold/10 border border-temple-gold/20 flex items-center justify-center w-fit group-hover:bg-temple-gold/15 transition-colors">
                {policy.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-white tracking-wide group-hover:text-temple-gold transition-colors">
                {policy.title}
              </h3>
              <p className="text-xs text-ivory-white/60 leading-relaxed">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
