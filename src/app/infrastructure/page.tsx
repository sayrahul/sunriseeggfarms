"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Factory, Warehouse, Zap, HardDrive } from "lucide-react";

export default function Infrastructure() {
  const infraItems = [
    { title: "Expansive Automated Sheds", desc: "Our sheds span over several acres, utilizing fully automated climate control and feeding mechanisms to keep the environment optimal 24/7.", icon: Factory },
    { title: "Large-Scale Feed Warehouses", desc: "We formulate and store premium feed internally, eliminating external contamination risks and ensuring high-quality nutrition.", icon: Warehouse },
    { title: "Conveyor Egg Collection", desc: "A massive network of continuous conveyor belts gently transports eggs from the sheds directly to the grading room.", icon: HardDrive },
    { title: "Power & Backup Systems", desc: "Independent multi-megawatt backup systems guarantee that climate controls and robotics never suffer a moment of downtime.", icon: Zap },
  ];

  return (
    <div className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-dark mb-6">Massive <span className="text-brand">Infrastructure</span></h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Scale meets precision in our state-of-the-art facilities designed for maximum efficiency and animal welfare.
        </p>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

        <StaggerChildren className="space-y-20">
          {infraItems.map((item, idx) => (
            <StaggerItem key={idx} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group">
              <div className={`md:w-1/2 flex flex-col ${idx % 2 === 0 ? "md:text-right md:items-end" : "md:order-2 md:text-left md:items-start"}`}>
                <div className="w-16 h-16 bg-egg text-brand rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-dark mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed max-w-md">{item.desc}</p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 top-1/2 w-4 h-4 bg-brand rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_0_8px_white] hidden md:block"></div>

              {/* Placeholder image representation */}
              <div className={`md:w-1/2 w-full h-64 bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden relative shadow-sm ${idx % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                  <item.icon className="w-16 h-16 opacity-20" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
