"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Leaf, Recycle, Sun as SunIcon, Droplets } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="py-24 max-w-6xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Sustainable <span className="text-brand">Farming</span></h1>
        <p className="text-lg text-slate-600">
          Our commitment extends beyond quality eggs. We operate on a strict zero-waste policy, transforming every byproduct into valuable agricultural resources.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <AnimatedSection className="order-2 md:order-1 relative rounded-3xl overflow-hidden bg-egg border border-orange-100 aspect-square md:aspect-auto md:h-full min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent"></div>
          <Leaf className="w-32 h-32 text-brand m-auto opacity-80" />
        </AnimatedSection>

        <StaggerChildren className="order-1 md:order-2 space-y-8">
          <StaggerItem>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-brand text-white rounded-xl flex items-center justify-center shadow-sm">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Zero-Waste Management</h3>
                <p className="text-slate-600 leading-relaxed">
                  All poultry waste is systematically collected, treated, and converted into high-grade organic fertilizer used by local farmers to enrich soil quality.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-sm">
                <SunIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Renewable Energy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our facilities are heavily supplemented by solar power installations, reducing our carbon footprint and driving energy independence.
                </p>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-sm">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Water Conservation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Advanced multi-stage water filtration and recycling ensure that water used for cleaning is purified and reused safely, minimizing water waste.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </div>
  );
}
