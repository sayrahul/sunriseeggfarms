"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

// The reviews array as requested.
const reviews = [
  {
    content: "The biosecurity at Sunrise is world-class. You can taste the quality in every egg.",
    author: "Local Distributor"
  },
  {
    content: "Sanjay and the team made the export process to the Middle East seamless. 5-star service.",
    author: "International Wholesaler"
  },
  {
    content: "Verified Farm-Fresh quality. The best in Andhra Pradesh.",
    author: "Retail Partner"
  }
];

export function ReviewsSection() {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent hydration mismatch on resize
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationControls = useRef<any>(null);

  // Check viewport sizing
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Run immediately on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop Imperative Auto-Scroller with Pause/Play logic
  useEffect(() => {
    if (!isMobile && scrollerRef.current) {
      animationControls.current = animate(
        scrollerRef.current,
        { x: ["0%", "-50%"] },
        { 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }
      );
    }
    return () => {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [isMobile]);

  // Mobile Single-Card Auto Carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isMobile) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile && animationControls.current) {
      animationControls.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && animationControls.current) {
      animationControls.current.play();
    }
  };

  // Duplicate items twice for the infinite trick
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#FFFDF5] to-[#F0F9FF]">
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 tracking-tight">
          What Our <span className="text-[#F59E0B]">Partners</span> Say
        </h2>
      </div>

      {isMobile ? (
        // MOBILE VIEW: Single card fade carousel
        <div className="container mx-auto px-4 relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-sm"
            >
              <ReviewCard review={reviews[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        // DESKTOP VIEW: Infinite Horizontal Marquee
        <div 
          className="relative w-full overflow-hidden flex py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle gradient edges to mask the scrolling elements entering/leaving */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFFDF5] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F0F9FF] to-transparent z-20 pointer-events-none"></div>

          <div 
            ref={scrollerRef} 
            className="flex items-center gap-8 w-max px-4"
          >
            {infiniteReviews.map((review, idx) => (
              <motion.div 
                key={idx} 
                className="w-[450px] shrink-0"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Powered by Google watermark */}
      <div className="container mx-auto px-4 md:px-6 mt-8 flex justify-end">
        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Powered by</span>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-bold text-slate-700">Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual review cards
function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl shadow-slate-200/50 rounded-3xl p-8 flex flex-col h-full cursor-grab active:cursor-grabbing">
      <div className="flex items-center justify-between mb-6">
        {/* 5-Star Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
          ))}
        </div>
        {/* Verified Accent */}
        <div className="flex items-center gap-1.5 bg-[#F59E0B]/10 px-3 py-1.5 rounded-full">
          <BadgeCheck className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wide">Verified</span>
        </div>
      </div>
      
      <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed mb-8 flex-1 italic">
        "{review.content}"
      </p>
      
      <div className="flex items-center gap-3 mt-auto border-t border-slate-200/50 pt-4">
        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-black text-slate-500 shrink-0">
          {review.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-sm md:text-base">{review.author}</h4>
          <p className="text-xs text-slate-500 font-medium tracking-wide">Google Reviewer</p>
        </div>
      </div>
    </div>
  );
}
