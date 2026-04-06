"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf } from "lucide-react";

export function ProcessAnimation() {
  return (
    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 bg-slate-900 group">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
      
      {/* Advanced SVG Animation: Automated Egg Scanning */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center z-0 group-hover:scale-105 transition-transform duration-[2s]">
        {/* Subtle Blueprint Grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="relative w-64 h-64 flex items-center justify-center -translate-y-12">
          {/* Glowing Pedestal */}
          <motion.div 
            className="absolute bottom-0 w-40 h-10 bg-gradient-to-r from-transparent via-brand/30 to-transparent rounded-[50%] blur-md"
            animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* The Premium 3D Egg SVG */}
          <motion.svg 
            width="120" 
            height="120" 
            viewBox="0 0 36 36" 
            className="z-10 drop-shadow-[0_10px_25px_rgba(245,158,11,0.4)] group-hover:drop-shadow-[0_15px_35px_rgba(245,158,11,0.6)] transition-all duration-700"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <defs>
              <radialGradient id="premiumEggGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="20%" stopColor="#FDE68A" />
                <stop offset="65%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350f" />
              </radialGradient>
            </defs>
            <path 
              d="M23.142 3.403C21.492 1.899 19.712 1 18 1C12.375 1 6 10.611 6 20c0 .975.079 1.899.202 2.791C7.261 30.484 12.623 35 18 35c6 0 12-5.611 12-15c0-6.531-3.086-13.161-6.858-16.597z" 
              fill="url(#premiumEggGrad)"
            />
          </motion.svg>

          {/* Outer Scanning Ring (Gold) */}
          <motion.div 
            className="absolute w-56 h-56 border border-brand/50 rounded-full border-t-amber-400 border-l-transparent z-20 mix-blend-screen"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Analytical Ring (Emerald) */}
          <motion.div 
            className="absolute w-44 h-44 border border-emerald-400/30 rounded-full border-b-emerald-400/80 border-r-transparent z-0 mix-blend-screen"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Vertical Sweeping Laser */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_#F59E0B] z-30"
            animate={{ top: ["10%", "90%", "10%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating Data Particles */}
          <div className="absolute inset-0 z-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-sm bg-emerald-400 shadow-[0_0_5px_#34d399]"
                style={{
                  width: i % 2 === 0 ? '6px' : '3px',
                  height: i % 2 === 0 ? '2px' : '3px',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  y: [0, -30 - Math.random() * 40],
                  x: (Math.random() - 0.5) * 80
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-12 z-20">
        <h3 className="text-white text-4xl md:text-5xl font-black drop-shadow-2xl mb-4 relative">
          Uncompromising<br/>Quality. Daily.
        </h3>
        <p className="text-slate-200 text-lg md:text-xl font-medium drop-shadow-md max-w-md relative">
          Our automated systems ensure every egg meets the highest standards of quality and safety.
        </p>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 z-20">
        <CheckCircle2 className="w-8 h-8 text-white" aria-hidden="true" />
      </div>
      <div className="absolute top-8 left-8 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 z-20">
        <Leaf className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
    </div>
  );
}
