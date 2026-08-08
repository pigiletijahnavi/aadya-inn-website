"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail, MessageSquare, Clock, ArrowUp } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "919121314009";
  const whatsappMessage = encodeURIComponent(
    "Hello Aadya Inn Tirupati, I would like to make an enquiry."
  );

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full bg-charcoal/95 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col gap-16">
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold text-temple-gold uppercase tracking-[0.3em] mb-3 block">
            Plan Your Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight mb-4">
            Connect With <span className="text-temple-gold">Aadya Inn</span>
          </h2>
          <div className="w-24 h-[1px] bg-temple-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-ivory-white/70 leading-relaxed">
            Get in touch with our 24/7 travel desk for bookings, check-in coordinations, or customized pilgrim tour plans around Tirupati.
          </p>
        </motion.div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-5 justify-between"
          >
            {/* Address */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-temple-gold/10 border border-temple-gold/20 text-temple-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-ivory-white/50 uppercase tracking-widest">
                    Location Address
                  </h4>
                  <p className="text-sm text-white leading-relaxed font-semibold">
                    Aadya Inn
                  </p>
                  <p className="text-xs sm:text-sm text-ivory-white/70 leading-relaxed">
                    First left, Leela Mahal Circle, towards Mangalam Road, Tirupati, Andhra Pradesh 517501
                  </p>
                </div>
              </div>
            </div>

            {/* Calling Details */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-temple-gold/10 border border-temple-gold/20 text-temple-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2 w-full">
                  <h4 className="text-xs font-bold text-ivory-white/50 uppercase tracking-widest">
                    Call For Bookings
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:+917893237660"
                      className="text-sm font-semibold text-white hover:text-temple-gold transition-colors flex items-center justify-between"
                    >
                      <span>+91 78932 37660</span>
                      <span className="text-[10px] text-ivory-white/40 font-normal uppercase tracking-wider">
                        Front Desk
                      </span>
                    </a>
                    <a
                      href="tel:+919121314009"
                      className="text-sm font-semibold text-white hover:text-temple-gold transition-colors flex items-center justify-between"
                    >
                      <span>+91 91213 14009</span>
                      <span className="text-[10px] text-ivory-white/40 font-normal uppercase tracking-wider">
                        Enquiries
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & WhatsApp Details */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-temple-gold/10 border border-temple-gold/20 text-temple-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-3 w-full">
                  <h4 className="text-xs font-bold text-ivory-white/50 uppercase tracking-widest">
                    Write to us
                  </h4>
                  <a
                    href="mailto:info@addyainn.com"
                    className="text-sm font-semibold text-white hover:text-temple-gold transition-colors block"
                  >
                    info@addyainn.com
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors uppercase tracking-wider"
                  >
                    <MessageSquare className="w-4 h-4 fill-emerald-500/10" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Check-In Timings */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-temple-gold/10 border border-temple-gold/20 text-temple-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-ivory-white/50 uppercase tracking-widest">
                    Check-in Policies
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-white/70 leading-relaxed">
                    Flexible 24-hour arrivals supported. Let us know your arrival details beforehand to expedite your room key handout.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 h-[350px] lg:h-auto rounded-2xl overflow-hidden glass-panel border border-white/10 relative"
          >
            {/* Embedded styled map frame */}
            <iframe
              src="https://maps.google.com/maps?q=Aadya%20Inn%20Leela%20Mahal%20Circle%20Tirupati&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(10%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aadya Inn Tirupati Map Location"
              id="google-maps-frame"
            />
          </motion.div>
        </div>

        <div className="w-full h-[1px] bg-white/5" />

        {/* Footer Area */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <img
                src="/addyainn/logo.png"
                alt="Aadya Inn Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-semibold tracking-widest text-temple-gold text-base">
              AADYA INN
            </span>
          </div>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#home" className="text-xs uppercase tracking-wider text-ivory-white/60 hover:text-temple-gold transition-colors font-medium">
              Home
            </a>
            <a href="#rooms" className="text-xs uppercase tracking-wider text-ivory-white/60 hover:text-temple-gold transition-colors font-medium">
              Rooms
            </a>
            <a href="#amenities" className="text-xs uppercase tracking-wider text-ivory-white/60 hover:text-temple-gold transition-colors font-medium">
              Amenities
            </a>
            <a href="#guide" className="text-xs uppercase tracking-wider text-ivory-white/60 hover:text-temple-gold transition-colors font-medium">
              Pilgrim Guide
            </a>
            <a href="#reviews" className="text-xs uppercase tracking-wider text-ivory-white/60 hover:text-temple-gold transition-colors font-medium">
              Reviews
            </a>
            <button onClick={scrolltoTop} className="text-xs uppercase tracking-wider text-ivory-white/60 hover:text-temple-gold transition-colors font-medium flex items-center gap-1.5 focus:outline-none">
              Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-[11px] text-ivory-white/40 border-t border-white/5 pt-8">
          <p>© 2026 Aadya Inn Tirupati. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Blissful Pilgrimages</span>
            <span className="text-temple-gold">•</span>
            <span>Near Leela Mahal Circle, Tirupati</span>
          </p>
        </div>
      </div>
    </section>
  );
}
