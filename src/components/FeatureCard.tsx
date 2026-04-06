"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string;
}

export function FeatureCard({ icon: Icon, title, description, colorClass }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 relative overflow-hidden hover:bg-white/90 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.25)]"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className={`w-20 h-20 bg-gradient-to-br ${colorClass.replace('/5', '')} rounded-3xl flex items-center justify-center shadow-xl text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/50`}>
          <Icon className="w-10 h-10" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 text-lg leading-relaxed font-medium">
          {description}
        </p>
      </div>
      
      {/* Decorative element */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-xl group-hover:bg-brand/20 transition-colors duration-500"></div>
    </motion.div>
  );
}
