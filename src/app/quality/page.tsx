"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { ShieldCheck, Stethoscope, Droplets, Activity } from "lucide-react";

export default function Quality() {
  const steps = [
    { icon: Stethoscope, title: "Veterinary Oversight", desc: "Dr. Jalli Sujith Reddy leads our veterinary team ensuring all hens receive precise nutrition, proactive medical care, and continuous monitoring." },
    { icon: Droplets, title: "Continuous Sanitization", desc: "Automated cleaning matrices operate 24/7. Water lines, feed trays, and egg collection belts are regularly sanitized without human contact." },
    { icon: ShieldCheck, title: "Biosecurity Checkpoints", desc: "Every entry point is secured. Vehicles and personnel pass through rigorous sanitization baths, isolating our flock from external pathogens." },
    { icon: Activity, title: "Egg Grading & Testing", desc: "Every egg is scanned, graded, and quality tested. Damaged or irregular eggs are automatically diverted to ensure only the best reach the consumer." }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-dark mb-6">Quality & <span className="text-brand">Hygiene</span></h1>
        <p className="text-lg text-slate-600">
          We don&apos;t compromise. Our strict biosecurity measures and continuous sanitization protocols guarantee an unconditionally safe environment.
        </p>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <StaggerItem key={idx}>
            <div className="bg-white rounded-3xl p-8 border-t-4 border-brand shadow-sm h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-egg rounded-full flex items-center justify-center text-brand mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <AnimatedSection className="mt-20 bg-slate-dark text-white rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Zero-Touch Automation</h2>
          <p className="text-slate-300 mb-6">
            From the moment the egg is laid to its final packaging, human intervention is completely minimized. This drastically reduces the risk of contamination, securing 100% hygienic conditions.
          </p>
          <div className="inline-flex px-6 py-3 bg-brand text-white font-bold rounded-full text-sm">
            International ISO Compliant
          </div>
        </div>
        <div className="md:w-1/2 relative h-64 w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center shadow-inner">
          {/* Dummy image representation */}
          <div className="text-slate-500 flex flex-col items-center gap-2">
            <ShieldCheck className="w-12 h-12 opacity-50" />
            <span className="text-sm font-semibold tracking-wider">HYGIENE SYSTEM</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
