"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { History, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-slate-950 text-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_20%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection className="text-center mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 text-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Built on trust, quality, and transparent farming.
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              From our early backyard farm to a modern export-ready operation, Sunrise Egg Farms delivers premium eggs with unwavering hygiene, animal welfare and sustainable practices at every step.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <AnimatedSection className="space-y-6">
              <div className="flex items-center gap-3 text-brand font-semibold text-sm uppercase tracking-[0.3em]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" /> Our Promise
              </div>
              <div className="rounded-[2rem] bg-slate-950/80 border border-white/10 p-8 shadow-2xl shadow-slate-950/20">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-4">Why Sunrise Egg Farms?</h2>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  We combine science-backed poultry care, zero-waste systems, and premium quality controls so every egg reaches you safe, fresh and sustainably produced. Our family-first approach means quality, cleanliness, and trust are never negotiable.
                </p>
              </div>
            </AnimatedSection>

            <StaggerChildren className="grid gap-6 md:grid-cols-2">
              <StaggerItem className="rounded-[1.75rem] bg-white shadow-2xl border border-brand/10 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white mb-5">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  To provide families and businesses worldwide with the highest quality farm-fresh eggs while maintaining strict hygiene, animal welfare, and environmental sustainability.
                </p>
              </StaggerItem>

              <StaggerItem className="rounded-[1.75rem] bg-slate-900 border border-white/10 p-7 shadow-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-brand mb-5">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  To be recognized globally for premium poultry products, continuous improvement, and a zero-waste farming model that protects our people and planet.
                </p>
              </StaggerItem>
            </StaggerChildren>
          </div>

          <div className="rounded-[2rem] bg-slate-950/90 border border-white/10 p-8 shadow-2xl shadow-slate-950/20">
            <div className="inline-flex items-center gap-3 bg-brand/10 text-brand rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] mb-6">
              <History className="w-4 h-4" /> Timeline
            </div>
            <div className="space-y-8">
              {[
                { year: "2010", title: "The Beginning", desc: "Started with a small shed and a dedication to quality." },
                { year: "2015", title: "Facility Expansion", desc: "Upgraded to automated feeding and watering systems." },
                { year: "2020", title: "Zero Waste Initiative", desc: "Launched sustainable waste management across the farm." },
                { year: "2024", title: "Global Exports", desc: "Expanded into international markets under Sunrise Exports." }
              ].map((item, index) => (
                <div key={index} className="relative rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/20">
                  <div className="absolute -left-4 top-6 h-3 w-3 rounded-full border-4 border-slate-950 bg-brand shadow-lg" />
                  <div className="ml-6">
                    <span className="text-brand font-semibold text-sm uppercase tracking-[0.22em]">{item.year}</span>
                    <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
