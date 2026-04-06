"use client";

import { Leaf, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

export function StepsGrid() {
  const steps = [
    { num: "01", icon: Leaf, title: "Premium Feed", desc: "Hens receive scientifically formulated nutrition stored in sterile warehouses.", color: "from-green-500 to-emerald-600" },
    { num: "02", icon: ShieldCheck, title: "Automated Care", desc: "Climate control and automated water lines ensure optimal health and comfort.", color: "from-blue-500 to-indigo-600" },
    { num: "03", icon: CheckCircle2, title: "Zero-Touch Grading", desc: "Eggs are transported via conveyors, scanned, and graded without human contact.", color: "from-purple-500 to-violet-600" },
    { num: "04", icon: Globe, title: "Safe Export", desc: "Packaged securely for domestic wholesale and extensive global export.", color: "from-orange-500 to-red-500" }
  ];

  return (
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, idx) => (
        <StaggerItem key={idx}>
          <div className="group bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full flex flex-col hover:bg-white/80">
            <div className="absolute -right-8 -top-8 text-[8rem] font-black text-slate-50 opacity-50 group-hover:text-brand/10 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">
              {step.num}
            </div>
            
            <div className="relative z-10 flex-1">
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 border-4 border-white/50 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <step.icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand transition-colors duration-300">{step.title}</h4>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
            
            <div className="mt-6 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-brand to-amber-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
