"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function ScrollBackground({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rising Egg Motif Transform
  const eggSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const eggY = useTransform(eggSpring, [0, 1], ["100vh", "-20vh"]);
  const eggScale = useTransform(eggSpring, [0, 0.5, 1], [0.5, 1, 1.2]);
  const eggRotate = useTransform(eggSpring, [0, 1], [0, 360]);

  // Global Page Gradient Progress
  const gradientOverlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);

  return (
    <div ref={containerRef} className="relative flex flex-col min-h-screen pb-16 md:pb-0 font-sans overflow-hidden">
      {/* Subtle Sky Gradient Background */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-b from-orange-50 via-amber-50 to-sky-100 transition-colors duration-1000"></div>
      <motion.div 
        className="fixed inset-0 z-[-1] bg-gradient-to-b from-sky-50 via-sky-100 to-blue-50 pointer-events-none"
        style={{ opacity: gradientOverlayOpacity }}
      ></motion.div>

      {/* Persistent Rising Egg Scroll Motif */}
      <motion.div 
        className="fixed left-[5vw] xl:left-[10vw] z-0 pointer-events-none opacity-20 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]"
        style={{ y: eggY, scale: eggScale, rotate: eggRotate }}
      >
        <div className="w-40 h-52 bg-gradient-to-tr from-brand to-yellow-300 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] blur-[2px]"></div>
      </motion.div>

      {children}
    </div>
  );
}
