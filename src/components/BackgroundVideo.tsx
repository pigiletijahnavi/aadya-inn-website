"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface BackgroundVideoProps {
  videoSrc: string;
  showVolumeToggle?: boolean;
}

export default function BackgroundVideo({ videoSrc, showVolumeToggle = true }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Auto-play safety check for modern browsers
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented by the browser. Video will start muted.", err);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-charcoal select-none pointer-events-none">
      {/* Main Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Ambient Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-linear-to-b from-charcoal/80 via-charcoal/40 to-charcoal/90 z-[1]" />
      <div className="absolute inset-0 bg-radial-to-c from-transparent via-transparent to-black/70 z-[1]" />

      {/* Floating Sound Toggle Button (Z-index 20 to allow clicks) */}
      {showVolumeToggle && (
        <motion.button
          onClick={toggleMute}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-6 right-6 z-20 pointer-events-auto p-3.5 rounded-full glass-button flex items-center justify-center cursor-pointer select-none group"
          title={isMuted ? "Unmute Ambient Sound" : "Mute Sound"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <Volume2 className="w-5 h-5 text-temple-gold transition-transform duration-300 group-hover:scale-110" />
          )}
        </motion.button>
      )}
    </div>
  );
}
