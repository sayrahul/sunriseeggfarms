"use client";

import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { User, Briefcase, Mail } from "lucide-react";

export default function Team() {
  const team = [
    { name: "Gutta Jagdish Prasad", role: "Director", desc: "Visionary leader driving the strategic direction and growth of Sunrise Egg Farms." },
    { name: "Baireddy Ramesh", role: "Managing Director", desc: "Expert in operational scaling, ensuring the farm meets its daily ambitious production goals." },
    { name: "Jalli Sujith Reddy", role: "Consultant, Veterinary Doctor", desc: "Overseeing biosecurity, continuous sanitization, and the health of every hen on the farm." },
    { name: "Sanjay Reddy Alluri", role: "International Sales Manager", desc: "Spearheading global exports to bring Sunrise eggs to the international market." }
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-20 flex flex-col items-center">
        <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight dark:text-white">
            Our
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-400 tracking-tighter drop-shadow-sm leading-none pb-2">
            Leadership
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Meet the experienced team of professionals dedicated to maintaining the highest standards of poultry farming.
        </p>
      </AnimatedSection>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <StaggerItem key={idx}>
            <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand/30 transition-all duration-300 text-center h-full flex flex-col items-center">
              <div className="w-24 h-24 bg-egg rounded-full flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-2">{member.name}</h3>
              <div className="flex items-center gap-2 text-brand font-medium text-sm mb-4">
                <Briefcase className="w-4 h-4" />
                <span>{member.role}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {member.desc}
              </p>
              {member.name === "Sanjay Reddy Alluri" && (
                <div className="mt-auto px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-xs flex items-center gap-2 group-hover:bg-brand/10 transition-colors">
                  <Mail className="w-3 h-3 text-brand" />
                  sunriseexports.ind@gmail.com
                </div>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
