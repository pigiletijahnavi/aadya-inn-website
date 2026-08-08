"use client";

import React, { useState } from "react";
import { Calendar, Users, Home, Phone, CheckCircle, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingWidget() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Queen Room (₹1,799/night)",
    guests: 2,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuestsChange = (amount: number) => {
    setFormData((prev) => ({
      ...prev,
      guests: Math.max(1, Math.min(10, prev.guests + amount)),
    }));
  };

  // Prepares the WhatsApp booking link
  const getWhatsAppLink = () => {
    const phoneNum = "919121314009"; // Official Aadya Inn number format
    const text = `Hello Aadya Inn Tirupati, I would like to make a room booking inquiry.

*Details:*
- *Name:* ${formData.name || "Guest"}
- *Phone:* ${formData.phone || "Not provided"}
- *Room Type:* ${formData.roomType}
- *Check-In Date:* ${formData.checkIn || "Not set"}
- *Check-Out Date:* ${formData.checkOut || "Not set"}
- *Guests:* ${formData.guests} people

Please let me know if this is available. Thank you!`;

    return `https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.checkIn || !formData.checkOut) {
      setErrorMsg("Please fill in all required fields (Name, Phone, Dates).");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      await submitEnquiry({
        name: formData.name,
        email: formData.email || "no-email@example.com",
        phone: formData.phone,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        roomType: formData.roomType.split(" (")[0], // Clean price helper text
        guests: formData.guests,
      });

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        checkIn: "",
        checkOut: "",
        roomType: "Queen Room (₹1,799/night)",
        guests: 2,
      });
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to submit inquiry. Please try WhatsApp booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto z-10">
      <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-radial from-temple-gold/15 to-transparent pointer-events-none" />

        <h3 className="font-display text-2xl text-temple-gold mb-2 tracking-wide text-center sm:text-left">
          Reserve Your Pilgrimage Stay
        </h3>
        <p className="text-sm text-ivory-white/60 mb-6 text-center sm:text-left">
          Conveniently located near Leela Mahal Circle with easy access to Tirumala hills.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 flex flex-col items-center justify-center"
            >
              <CheckCircle className="w-16 h-16 text-temple-gold mb-4 animate-[bounce_1.5s_infinite]" />
              <h4 className="font-display text-xl text-white mb-2">Request Received Successfully!</h4>
              <p className="text-sm text-ivory-white/70 max-w-sm mb-6">
                Our front desk will contact you within 30 minutes to confirm your check-in dates and details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="glass-button px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Make Another Inquiry
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Form Input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-1.5 font-medium">
                    Phone Number *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-1.5 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-temple-gold" /> Check-In *
                  </label>
                  <input
                    id="booking-check-in"
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg text-sm scheme-dark"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-1.5 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-temple-gold" /> Check-Out *
                  </label>
                  <input
                    id="booking-check-out"
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full glass-input px-4 py-3 rounded-lg text-sm scheme-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-1.5 font-medium flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-temple-gold" /> Select Room
                  </label>
                  <select
                    id="booking-room-type"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full glass-input px-4 py-3 rounded-lg text-sm bg-charcoal"
                  >
                    <option>Queen Room (₹1,799/night)</option>
                    <option>King Room (₹2,199/night)</option>
                    <option>Suite Room (₹3,199/night)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory-white/60 mb-1.5 font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-temple-gold" /> Guests
                  </label>
                  <div className="flex items-center justify-between glass-input px-4 py-2.5 rounded-lg">
                    <button
                      id="btn-guests-decrement"
                      type="button"
                      onClick={() => handleGuestsChange(-1)}
                      className="text-temple-gold hover:text-white text-lg font-bold w-8 h-8 flex items-center justify-center focus:outline-none"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{formData.guests}</span>
                    <button
                      id="btn-guests-increment"
                      type="button"
                      onClick={() => handleGuestsChange(1)}
                      className="text-temple-gold hover:text-white text-lg font-bold w-8 h-8 flex items-center justify-center focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {errorMsg && (
                <p className="text-red-400 text-xs mt-1 text-center font-medium">
                  {errorMsg}
                </p>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <a
                  id="btn-book-whatsapp"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-emerald-950/20 active:scale-98"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  Book via WhatsApp
                </a>
                <button
                  id="btn-submit-inquiry"
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-temple-gold hover:bg-temple-gold-hover text-charcoal font-semibold text-sm transition-all duration-300 shadow-lg shadow-temple-gold/10 active:scale-98 disabled:opacity-55"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
