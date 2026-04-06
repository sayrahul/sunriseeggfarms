"use client";

import { Award, TrendingUp, Clock } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesGrid() {
  return (
    <section className="mb-12 container px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Award}
          title="Hygiene First"
          description="Continuous sanitization and 24/7 veterinary oversight ensure absolute safety and quality for every egg we produce."
          colorClass="from-brand/5 to-amber-500/5"
        />
        <FeatureCard 
          icon={TrendingUp}
          title="Eco-Friendly"
          description="Zero-waste management systems and sustainable farming practices are at the heart of our operations, benefiting local ecosystems."
          colorClass="from-green-500/5 to-emerald-500/5"
        />
        <FeatureCard 
          icon={Clock}
          title="Global Reach"
          description="Exporting premium eggs worldwide while maintaining farm-fresh quality through advanced supply chain logistics and careful packaging."
          colorClass="from-blue-500/5 to-indigo-500/5"
        />
      </div>
    </section>
  );
}
