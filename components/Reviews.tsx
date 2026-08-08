"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Balaji K.",
      location: "Chennai",
      category: "Family Visit",
      rating: 5,
      text: "Aadya Inn was the perfect choice for our Tirumala trip. It's located right near Leela Mahal Circle making travel to Alipiri super quick. The rooms were exceptionally clean and soundproofed so my parents slept soundly.",
    },
    {
      name: "Venkatesh P.",
      location: "Hyderabad",
      category: "Pilgrimage Group",
      rating: 5,
      text: "We arrived late at 2 AM due to train delays, but the front desk was welcoming and checked us in immediately. The AC was chilly, and the 24-hour hot water was exactly what we needed before Darshan.",
    },
    {
      name: "Meenakshi S.",
      location: "Bengaluru",
      category: "Family Stay",
      rating: 5,
      text: "Highly recommend the Suite room for families. Very spacious and feels extremely premium. Digital payment via UPI was seamless, and the travel desk helped book a cab to local temples easily.",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center"
    >
      {/* Heading Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-16 md:mb-20"
      >
        <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] mb-3 block">
          Blessed Testimonials
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight mb-4">
          What Our Blessed <span className="text-temple-gold">Guests Say</span>
        </h2>
        <div className="w-24 h-[1px] bg-temple-gold mx-auto mb-6" />
        <p className="text-sm sm:text-base text-ivory-white/70 leading-relaxed">
          We are committed to delivering the ultimate comfort and spiritual serenity. Here is the feedback from our valued guest pilgrims.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">
        {/* Rating Summary Card (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 glass-panel-heavy p-8 rounded-2xl border border-temple-gold/20 flex flex-col items-center text-center space-y-6"
        >
          <div className="space-y-2">
            <h3 className="font-display text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-temple-gold">
              4.6
            </h3>
            <div className="flex text-amber-400 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ivory-white/50">
              Google Verified Rating
            </p>
          </div>

          <div className="w-full h-[1px] bg-white/5" />

          <div className="space-y-3.5">
            <div className="flex items-center gap-2 text-xs text-ivory-white/80 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Cleanliness & Hygiene: 4.8 / 5</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-ivory-white/80 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Location near Circle: 4.9 / 5</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-ivory-white/80 justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Staff Hospitality: 4.7 / 5</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/5" />

          <p className="text-xs text-ivory-white/60 leading-relaxed">
            Rated by over 500+ families and individual travelers visiting the Tirumala hill shrines.
          </p>
        </motion.div>

        {/* Testimonials List (Right) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className={`glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 transition-all duration-300 relative group ${
                idx === 2 ? "md:col-span-2" : ""
              }`}
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-4 right-6 w-10 h-10 text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none" />

              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-ivory-white/75 leading-relaxed font-sans italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {review.name}
                  </h4>
                  <span className="text-[10px] text-ivory-white/45 tracking-widest uppercase">
                    From {review.location}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-temple-gold bg-temple-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {review.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
