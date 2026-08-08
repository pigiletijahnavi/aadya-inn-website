"use client";

import { Phone, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileBottomBar() {
  const whatsappNumber = "919121314009";
  const whatsappMessage = encodeURIComponent(
    "Hello Aadya Inn Tirupati, I would like to make a room booking inquiry."
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-charcoal/90 backdrop-blur-md border-t border-temple-gold/20 px-4 py-3 flex items-center justify-around gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.4)]"
    >
      <a
        href="tel:07893237660"
        className="flex flex-col items-center justify-center gap-1 flex-1 py-1 text-ivory-white hover:text-temple-gold transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 flex-1 py-1 text-emerald-500 hover:text-emerald-400 transition-colors"
      >
        <MessageSquare className="w-5 h-5 fill-emerald-500/10" />
        <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
      </a>

      <a
        href="#booking"
        className="flex items-center justify-center gap-1.5 flex-2 py-2.5 px-4 bg-temple-gold hover:bg-temple-gold-hover text-charcoal rounded-full font-bold text-xs tracking-wider uppercase shadow-md shadow-temple-gold/10"
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </a>
    </motion.div>
  );
}
