"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Globe, Globe2, Mail, Phone, Plane, Egg, Ship } from "lucide-react";
import { motion } from "framer-motion";

export default function Exports() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6 relative overflow-hidden">

      {/* Background Decorative Map SVG */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center -z-10">
        <svg viewBox="0 0 1000 500" className="w-[120%] h-auto max-w-[1500px]">
          <path fill="currentColor" d="M141.5,134.5 C150,130 160,135 165,145 C170,160 160,175 145,175 C130,175 125,160 135,145 Z" />
          <path fill="currentColor" d="M441.5,234.5 C460,220 480,240 475,255 C470,270 450,285 435,270 C420,250 430,240 441.5,234.5 Z" />
          <path fill="currentColor" d="M741.5,184.5 C760,170 780,190 775,205 C770,220 750,235 735,220 C720,200 730,190 741.5,184.5 Z" />
          <path fill="currentColor" d="M210,320 C230,310 240,330 230,345 C215,360 200,350 195,335 C190,315 200,325 210,320 Z" />
        </svg>
      </div>

      <AnimatedSection className="text-center mb-20 flex flex-col items-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand text-white rounded-full mb-8 shadow-xl">
          <Globe2 className="w-10 h-10 animate-pulse" />
        </div>
        <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight dark:text-white">
            Global
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-400 tracking-tighter drop-shadow-sm leading-none pb-2">
            Exports
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
          From the heart of Visakhapatnam to the world. We ensure that our premium eggs retain their freshness across thousands of miles.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection delay={0.2} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-dark mb-6 border-b border-slate-100 pb-4">Export Inquiries</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our international sales division is dedicated to forging lasting partnerships globally. For bulk orders, shipping details, and international compliance, contact our dedicated Export Manager.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-egg rounded-full flex items-center justify-center text-brand shrink-0 group-hover:scale-110 transition-transform">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">International Sales Manager</p>
                <p className="text-lg font-bold text-slate-dark">Sanjay Reddy Alluri</p>
              </div>
            </div>

            <a href="mailto:sunriseexports.ind@gmail.com" className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <p className="font-semibold text-slate-700">sunriseexports.ind@gmail.com</p>
            </a>

            <a href="tel:+917989702164" className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-2 -ml-2 rounded-xl transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <p className="font-semibold text-slate-700">+91 7989702164</p>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="relative h-[400px] w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-slate-800">
          {/* Subtle Warm Background Glow */}
          <div 
            className="absolute inset-0 opacity-20" 
            style={{ backgroundImage: "radial-gradient(circle at center, #F59E0B 0%, transparent 60%)" }}
          />

          {/* Center Rotating Globe (Replaces "GLOBAL" text) */}
          <motion.div 
            className="absolute z-10 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            <Globe className="w-24 h-24 text-slate-400 opacity-30" strokeWidth={1} />
          </motion.div>

          {/* Outer Orbit: The Airplane Flight Path */}
          <div className="absolute w-72 h-72 border-[0.5px] border-slate-700 border-dashed rounded-full flex items-center justify-center pointer-events-none">
            <motion.div 
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              {/* Airplane Icon with glowing shadow */}
              <Plane className="absolute -top-3 left-1/2 text-white w-6 h-6 -ml-3 rotate-45 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" fill="currentColor" />
            </motion.div>
          </div>

          {/* Inner Orbit: The Egg / Product Path */}
          <div className="absolute w-48 h-48 border-[0.5px] border-brand/20 rounded-full flex items-center justify-center pointer-events-none">
            <motion.div 
              className="absolute w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {/* Golden Egg Drop shadow */}
              <Egg className="absolute -top-3 left-1/2 text-brand w-6 h-6 -ml-3 rotate-[130deg] drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" fill="currentColor" />
            </motion.div>
          </div>
          
          {/* Decorative Core Ring */}
          <div className="absolute w-36 h-36 border-[0.5px] border-brand/10 rounded-full pointer-events-none"></div>
        </AnimatedSection>
      </div>
    </div>
  );
}
