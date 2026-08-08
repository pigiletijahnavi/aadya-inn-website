"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundVideo from "@/components/BackgroundVideo";
import Navbar from "@/components/Navbar";
import BookingWidget from "@/components/BookingWidget";
import MobileBottomBar from "@/components/MobileBottomBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Arrival from "@/components/Arrival";
import Exterior from "@/components/Exterior";
import Reception from "@/components/Reception";
import Lobby from "@/components/Lobby";
import RoomsHeader from "@/components/RoomsHeader";
import RoomSection from "@/components/RoomSection";
import PeacefulStay from "@/components/PeacefulStay";
import PilgrimGuide from "@/components/PilgrimGuide";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import { Star, ChevronDown, MapPin } from "lucide-react";

const BASE_PATH = "/addyainn";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeBg, setActiveBg] = useState<string>("video");

  useEffect(() => {
    if (isLoading) return;

    const sections = [
      { id: "hero-container", bg: "video" },
      { id: "why-choose-us-section", bg: "hills" },
      { id: "arrival-section", bg: "entrance" },
      { id: "exterior-section", bg: "drone" },
      { id: "reception-section", bg: "reception" },
      { id: "lobby-section", bg: "lobby" },
      { id: "rooms", bg: "rooms" },
      { id: "queen-room-section", bg: "queen" },
      { id: "king-room-section", bg: "king" },
      { id: "suite-room-section", bg: "suite" },
      { id: "peaceful-stay-section", bg: "peaceful" },
      { id: "guide-section", bg: "guide" },
      { id: "reviews", bg: "reviews" },
      { id: "contact", bg: "contact" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bg = sections.find((s) => s.id === entry.target.id)?.bg;
          if (bg) {
            setActiveBg(bg);
          }
        }
      });
    }, observerOptions);

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isLoading]);

  return (
    <>
      {/* Scene 1: Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Home Screen Layout */}
      {!isLoading && (
        <div className="relative min-h-screen flex flex-col selection:bg-temple-gold/30 selection:text-white bg-charcoal">
          {/* Global Header Navigation */}
          <Navbar />

          {/* BACKGROUND LAYER SYSTEM (Cross-fading layers) */}
          <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            {/* Background 1: Hero Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: (activeBg === "video" || activeBg === "contact") ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/vekateswara_swami_video.mp4`} showVolumeToggle={activeBg === "video"} />
            </div>

            {/* Background 2: Scene 4 Journey Mountains Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${BASE_PATH}/tirumala_road.png')`,
                opacity: (activeBg === "hills" || activeBg === "guide" || activeBg === "reviews") ? 1 : 0,
              }}
            />
            {/* Ambient Overlays for Mountains Image */}
            <div
              className="absolute inset-0 bg-linear-to-b from-charcoal/85 via-charcoal/50 to-charcoal/95 z-[1] transition-opacity duration-1000"
              style={{ opacity: (activeBg === "hills" || activeBg === "guide" || activeBg === "reviews") ? 1 : 0 }}
            />

            {/* Background 3: Arrival, Reception & Lobby Entrance Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: (activeBg === "entrance" || activeBg === "reception" || activeBg === "lobby" || activeBg === "rooms") ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/hotel_entrance.mp4`} showVolumeToggle={activeBg === "entrance" || activeBg === "reception" || activeBg === "lobby"} />
            </div>

            {/* Background 4: Exterior Drone Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: activeBg === "drone" ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/hotel_drone.mp4`} showVolumeToggle={activeBg === "drone"} />
            </div>

            {/* Background 5: Queen Room Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: activeBg === "queen" ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/room_showcase_1.mp4`} showVolumeToggle={activeBg === "queen"} />
            </div>

            {/* Background 6: King Room Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: activeBg === "king" ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/room_showcase_2.mp4`} showVolumeToggle={activeBg === "king"} />
            </div>

            {/* Background 7: Suite Room Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: activeBg === "suite" ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/room_walkthrough.mp4`} showVolumeToggle={activeBg === "suite"} />
            </div>

            {/* Background 8: Peaceful Stay Video */}
            <div
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              style={{ opacity: activeBg === "peaceful" ? 1 : 0 }}
            >
              <BackgroundVideo videoSrc={`${BASE_PATH}/room_showcase_1.mp4`} showVolumeToggle={activeBg === "peaceful"} />
            </div>
          </div>

          {/* Section 1: Hero Container (Scene 3) */}
          <div id="hero-container" className="relative z-10 min-h-screen flex flex-col justify-between">
            <main
              id="home"
              className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-24 md:py-36 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"
            >
              {/* Hero Left Content Column */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                {/* Near Tirumala Location Badge */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-temple-gold/30 text-temple-gold text-xs font-semibold uppercase tracking-widest mb-6"
                >
                  <MapPin className="w-3.5 h-3.5 text-temple-gold animate-bounce" />
                  Near Leela Mahal Circle, Tirupati
                </motion.div>

                {/* Cinematic Headline */}
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-white leading-tight mb-4 drop-shadow-md">
                  Spend a <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-warm-sand to-temple-gold">
                    Blissful Stay
                  </span>
                </h1>

                {/* Sub-headline / Tagline */}
                <p className="font-sans text-base sm:text-lg text-ivory-white/80 max-w-xl mb-8 leading-relaxed drop-shadow-sm">
                  Experience spiritual peace, royal comfort, and authentic hospitality in the sacred foothills of Tirumala. Designed for families and pilgrims seeking a serene sanctuary.
                </p>

                {/* Google Ratings Trust Badges */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex items-center gap-2 glass-panel px-4.5 py-2.5 rounded-xl border-white/5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white tracking-wider">
                      4.6/5 <span className="text-ivory-white/50 font-normal">Google Rating</span>
                    </span>
                  </div>
                  <div className="text-xs text-ivory-white/60 tracking-wider">
                    ✓ 24-Hour Front Desk & Flexible Check-in
                  </div>
                </div>
              </motion.div>

              {/* Hero Right Booking Column */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                id="booking"
                className="flex-1 w-full"
              >
                <BookingWidget />
              </motion.div>
            </main>

            {/* Interactive Scroll Down Prompt */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 2, duration: 1 }}
              className="w-full flex flex-col items-center justify-center pb-8 select-none pointer-events-none hidden md:flex"
            >
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-ivory-white/50 mb-2">
                Scroll down to begin your journey
              </span>
              <ChevronDown className="w-5 h-5 text-temple-gold animate-bounce" />
            </motion.div>
          </div>

          {/* Section 2: Journey & Why Choose Us (Scene 4) */}
          <div id="why-choose-us-section" className="relative z-10 w-full bg-transparent">
            <WhyChooseUs />
          </div>

          {/* Section 3: Arrival (Scene 5) */}
          <div id="arrival-section" className="relative z-10 w-full bg-transparent">
            <Arrival />
          </div>

          {/* Section 4: Exterior Façade (Scene 6) */}
          <div id="exterior-section" className="relative z-10 w-full bg-transparent">
            <Exterior />
          </div>

          {/* Section 5: Reception Area (Scene 7) */}
          <div id="reception-section" className="relative z-10 w-full bg-transparent">
            <Reception />
          </div>

          {/* Section 6: Lobby Lounge (Scene 8) */}
          <div id="lobby-section" className="relative z-10 w-full bg-transparent">
            <Lobby />
          </div>

          {/* Rooms Header Section */}
          <RoomsHeader />

          {/* Section 7: Room Experience - Queen Room (Scene 9 Part 1) */}
          <div id="queen-room-section" className="relative z-10 w-full bg-transparent">
            <RoomSection
              id="queen-room"
              subtitle="Cozy Sanctuary"
              title="The Queen Room"
              price="₹1,799 / night"
              occupancy="Up to 2 Guests"
              description="Our Queen Room is designed for couples or individual travelers seeking a quiet, comfortable space to recharge. Furnished with a plush double bed, a functional desk, and all essential modern conveniences."
              features={[
                "Plush Double Bed",
                "Individually Controlled AC",
                "High-Speed Wi-Fi",
                "In-Room Safety Deposit Safe",
                "24-Hour Hot & Cold Water",
                "Complimentary Mineral Water",
              ]}
            />
          </div>

          {/* Section 8: Room Experience - King Room (Scene 9 Part 2) */}
          <div id="king-room-section" className="relative z-10 w-full bg-transparent">
            <RoomSection
              id="king-room"
              subtitle="Spacious Comfort"
              title="The King Room"
              price="₹2,199 / night"
              occupancy="Up to 3 Guests"
              description="Our King Room features a premium king-sized bed and a separate single sleeping area or pull-out setup, offering extra space for families or groups of three pilgrims. Enjoy top-tier comfort and security close to the temple."
              features={[
                "Plush King-Sized Bed",
                "Individually Controlled AC",
                "High-Speed Wi-Fi",
                "In-Room Safety Deposit Safe",
                "24-Hour Hot & Cold Water",
                "Extra Sleeping Area / Couch Bed",
              ]}
            />
          </div>

          {/* Section 9: Room Experience - Suite Room (Scene 9 Part 3) */}
          <div id="suite-room-section" className="relative z-10 w-full bg-transparent">
            <RoomSection
              id="suite-room"
              subtitle="Royal Splendor"
              title="The Suite Room"
              price="₹3,199 / night"
              occupancy="Up to 4 Guests"
              description="For the ultimate luxury, our Suite Room provides an expansive layout featuring a grand master bedroom, a beautifully styled living area, and premium in-room specifications. Perfect for large families or groups seeking a royal sanctuary."
              features={[
                "Spacious Master Bed + Sitting Area",
                "Individually Controlled AC",
                "High-Speed Wi-Fi",
                "In-Room Safety Deposit Safe",
                "24-Hour Hot & Cold Water",
                "Mini Fridge & Dining Setup",
              ]}
            />
          </div>

          {/* Section 10: Peaceful Stay (Scene 10) */}
          <div id="peaceful-stay-section" className="relative z-10 w-full bg-transparent">
            <PeacefulStay />
          </div>

          {/* Section 11: Pilgrim Guide (Scene 11) */}
          <div id="guide-section" className="relative z-10 w-full bg-transparent">
            <PilgrimGuide />
          </div>

          {/* Reviews Section */}
          <Reviews />

          {/* Contact & Footer Section */}
          <Contact />

          {/* Mobile Bottom Fixed Action Bar */}
          <MobileBottomBar />
        </div>
      )}
    </>
  );
}
