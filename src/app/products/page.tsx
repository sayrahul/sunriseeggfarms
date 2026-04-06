"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { Egg, CheckCircle2 } from "lucide-react";

export default function Products() {
  const products = [
    { title: "Premium White Eggs", desc: "Farm-fresh white eggs with bright yolks, packed with daily essential proteins.", protein: "6g", vitamins: "A, D, B12" },
    { title: "Brown Free-Range", desc: "Nutrient-rich brown eggs from hens with access to natural surroundings.", protein: "6.5g", vitamins: "A, D, E, B12" },
    { title: "Omega-3 Enriched", desc: "Special diet-fed hens producing eggs highly enriched with heart-healthy Omega-3s.", protein: "6g", vitamins: "A, D, B12, Omega-3" },
    { title: "Commercial Bulk Packaging", desc: "Safely packaged trays for wholesale and commercial baking needs.", protein: "6g", vitamins: "A, D, B12" }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-20 flex flex-col items-center">
        <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight dark:text-white">
            Our
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-400 tracking-tighter drop-shadow-sm leading-none pb-2">
            Products
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
          Nutritious, high-quality eggs catered to every household, baker, and international distributor.
        </p>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((prod, idx) => (
          <StaggerItem key={idx}>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 shrink-0 bg-egg rounded-full flex items-center justify-center text-brand">
                <Egg className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-dark mb-2">{prod.title}</h3>
                <p className="text-slate-600 mb-4">{prod.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-brand" /> Protein: {prod.protein}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-brand" /> Rich in: {prod.vitamins}
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
