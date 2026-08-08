"use client";

import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rooms", href: "#rooms" },
    { name: "Amenities", href: "#amenities" },
    { name: "Pilgrim Guide", href: "#guide" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-12 flex items-center justify-between"
      >
        {/* Floating Glassmorphic Container */}
        <div className="absolute inset-0 mx-6 my-3 rounded-2xl glass-panel pointer-events-none z-[-1]" />

        <div className="flex items-center gap-3 py-1 pointer-events-auto pl-8">
          <div className="relative w-10 h-10">
            <img
              src="/addyainn/logo.png"
              alt="Aadya Inn Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display font-semibold tracking-widest text-temple-gold text-lg hidden sm:inline-block">
            AADYA INN
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 pr-4 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wider text-ivory-white/80 hover:text-temple-gold transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 pr-8 pointer-events-auto">
          <a
            id="nav-call-now"
            href="tel:07893237660"
            className="flex items-center gap-2 text-xs font-semibold text-ivory-white/70 hover:text-temple-gold transition-colors tracking-widest uppercase"
          >
            <Phone className="w-3.5 h-3.5" /> Call Now
          </a>
          <a
            id="nav-book-room"
            href="#booking"
            className="glass-button px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Room
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden pr-8 pointer-events-auto">
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-ivory-white hover:text-temple-gold p-2 cursor-pointer focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[76px] z-30 md:hidden bg-charcoal/95 backdrop-blur-xl border-t border-temple-gold/10 px-8 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-widest text-ivory-white hover:text-temple-gold transition-colors uppercase border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <a
                id="mobile-nav-call-now"
                href="tel:07893237660"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg border border-white/10 hover:border-temple-gold text-sm font-semibold tracking-widest uppercase text-ivory-white"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                id="mobile-nav-book-room"
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-temple-gold hover:bg-temple-gold-hover text-charcoal font-semibold text-sm tracking-widest uppercase"
              >
                <Calendar className="w-4 h-4" /> Book Room
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
