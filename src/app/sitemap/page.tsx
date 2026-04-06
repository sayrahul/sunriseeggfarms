"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import Link from "next/link";
import { FolderTree, ArrowRight, Home, Info, Users, ShoppingBag, Globe, Mail, ShieldCheck, FileText } from "lucide-react";

export default function Sitemap() {
  const routes = [
    {
      category: "Main Pages",
      icon: <Home className="w-5 h-5 text-brand" />,
      links: [
        { name: "Home", href: "/", desc: "Sunrise Egg Farms official homepage." },
        { name: "About Us", href: "/about", desc: "Discover our farm's history and sustainable practices." },
        { name: "Our Team", href: "/team", desc: "Meet the leadership and operational team." },
      ]
    },
    {
      category: "Business & Commerce",
      icon: <ShoppingBag className="w-5 h-5 text-brand" />,
      links: [
        { name: "Products", href: "/products", desc: "Browse our premium white, brown, and omega-3 eggs." },
        { name: "Global Exports", href: "/exports", desc: "Information on bulk orders and international shipping." },
        { name: "Contact Us", href: "/contact", desc: "Get in touch with sales or operational support." },
      ]
    },
    {
      category: "Legal & Policies",
      icon: <ShieldCheck className="w-5 h-5 text-brand" />,
      links: [
        { name: "Privacy Policy", href: "/privacy", desc: "How we protect and manage your personal data." },
        { name: "Terms & Conditions", href: "/terms", desc: "Legal requirements and guidelines for using our services." },
        { name: "Sitemap", href: "/sitemap", desc: "Overview of all accessible website pages." },
      ]
    }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-egg rounded-full flex items-center justify-center text-brand">
            <FolderTree className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Site<span className="text-brand">map</span></h1>
            <p className="text-slate-500 font-medium tracking-wide text-sm uppercase mt-1">Directory Overview</p>
          </div>
        </div>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {routes.map((group, idx) => (
          <StaggerItem key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
              {group.icon}
              <h2 className="text-xl font-bold text-slate-800">{group.category}</h2>
            </div>
            
            <ul className="space-y-6">
              {group.links.map((link, linkIdx) => (
                <li key={linkIdx} className="group flex flex-col items-start">
                  <Link href={link.href} className="inline-flex items-center gap-2 text-slate-700 hover:text-brand font-semibold text-lg transition-colors">
                    {link.name}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {link.desc}
                  </p>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
