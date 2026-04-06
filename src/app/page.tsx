"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Egg, Sun, ShieldCheck, Globe, Leaf, CheckCircle2, TrendingUp, Award, Clock } from "lucide-react";
import { AnimatedSection, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Rising Egg Motif Transform
  const eggSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const eggY = useTransform(eggSpring, [0, 1], ["100vh", "-20vh"]);
  const eggScale = useTransform(eggSpring, [0, 0.5, 1], [0.5, 1, 1.2]);
  const eggRotate = useTransform(eggSpring, [0, 1], [0, 360]);

  // Global Page Gradient Progress
  const gradientOverlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);

  return (
    <div ref={containerRef} className="relative flex flex-col min-h-screen pb-16 md:pb-0 font-sans overflow-hidden">
      
      {/* Subtle Sky Gradient Background */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-b from-orange-50 via-amber-50 to-sky-100 transition-colors duration-1000"></div>
      <motion.div 
        className="fixed inset-0 z-[-1] bg-gradient-to-b from-sky-50 via-sky-100 to-blue-50 pointer-events-none"
        style={{ opacity: gradientOverlayOpacity }}
      ></motion.div>

      {/* Persistent Rising Egg Scroll Motif */}
      <motion.div 
        className="fixed left-[5vw] xl:left-[10vw] z-0 pointer-events-none opacity-20 drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]"
        style={{ y: eggY, scale: eggScale, rotate: eggRotate }}
      >
        <div className="w-40 h-52 bg-gradient-to-tr from-brand to-yellow-300 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] blur-[2px]"></div>
      </motion.div>


      {/* Hero Section */}
      <section className="relative min-h-[72vh] lg:min-h-[68vh] flex flex-col justify-center overflow-hidden pt-24 pb-32 lg:pt-28 lg:pb-40 bg-slate-900">
        
        {/* Enhanced Background Layers */}
        <div className="absolute inset-0">
          <Image 
            src="/images/farm-eggs.jpg" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10 animate-pulse mix-blend-overlay"></div>
          
          {/* Floating orbs for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] bg-[length:50px_50px]"></div>
          </div>
        </div>

        {/* Hero Content with Glassmorphism */}
        <div className="container relative z-10 px-4 md:px-6 text-center mt-8">
          <StaggerChildren className="max-w-5xl mx-auto space-y-6">
            <StaggerItem>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 text-yellow-300 font-semibold tracking-wide text-xs sm:text-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <Sun className="w-5 h-5 animate-spin-slow text-yellow-300 drop-shadow-lg" />
                <span className="drop-shadow-md">A New Dawn in Poultry Farming</span>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-2xl leading-tight mb-4">
                Premium Eggs, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-300 to-amber-200 animate-gradient-x">
                  Sustainable Future
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-base md:text-lg text-slate-100 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-lg opacity-90 mb-8">
                Sunrise Egg Farms delivers the highest quality, farm-fresh eggs nurtured with continuous zero-waste practices and veterinary oversight.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link href="/products" className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand to-amber-500 hover:from-brand-dark hover:to-orange-600 text-white rounded-2xl font-semibold text-base transition-all hover:scale-105 shadow-[0_8px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.45)] flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm">
                  <Egg className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View Products
                </Link>
                <Link href="/exports" className="group w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold text-base transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-white/30 backdrop-blur-xl hover:border-white/50">
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Global Exports
                </Link>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stunning Intro Image Break */}
      <section className="relative z-20 -mt-16 mb-24 container px-4 md:px-6">
        <AnimatedSection>
          <div className="w-full h-[450px] md:h-[750px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-4 border-white/40 ring-1 ring-slate-100 group bg-slate-900">
            <Image 
              src="/images/farm-eggs.jpg" 
              alt="Quality farm eggs image" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col justify-end">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-100 text-xs uppercase tracking-[0.28em] font-semibold mb-4 shadow-lg shadow-amber-500/10 w-fit">
                High quality golden eggs
              </span>
              <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-md">Uncompromising Quality. Daily.</h3>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Feature Cards (Modern Glassmorphism Design) */}
      <section className="mb-12 container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 relative overflow-hidden hover:bg-white/90 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.25)]"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-brand to-amber-500 rounded-3xl flex items-center justify-center shadow-xl text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/50">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors duration-300">Hygiene First</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Continuous sanitization and 24/7 veterinary oversight ensure absolute safety and quality for every egg we produce.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand/10 rounded-full blur-xl group-hover:bg-brand/20 transition-colors duration-500"></div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 relative overflow-hidden hover:bg-white/90 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.25)]"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-xl text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/50">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-green-600 transition-colors duration-300">Eco-Friendly</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Zero-waste management systems and sustainable farming practices are at the heart of our operations, benefiting local ecosystems.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-colors duration-500"></div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -15, scale: 1.02 }}
            className="group bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 relative overflow-hidden hover:bg-white/90 transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.25)]"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-4 border-white/50">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">Global Reach</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Exporting premium eggs worldwide while maintaining farm-fresh quality through advanced supply chain logistics and careful packaging.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
          </motion.div>

        </div>
      </section>

      {/* Interactive Process / Farm-to-Table */}
      <section className="py-16 lg:py-20 relative overflow-hidden z-10 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <AnimatedSection className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-16 h-1.5 bg-gradient-to-r from-brand to-amber-400 rounded-full shadow-lg"></span>
                <h2 className="text-brand font-black uppercase tracking-widest text-sm">The Sunrise Process</h2>
              </div>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter drop-shadow-sm mb-8">
                From Farm to Table with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-400">Absolute Precision.</span>
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed font-medium max-w-xl mb-8">
                We believe that premium eggs are the result of rigorous processes. Every step, from the formulation of chicken feed to the final packaging, is meticulously monitored and automated.
              </p>
              
              {/* Process stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-black text-brand mb-2">24/7</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-brand mb-2">100%</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-brand mb-2">0%</div>
                  <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Waste</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="lg:w-1/2 w-full">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 bg-slate-900 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
                  <h3 className="text-white text-4xl md:text-5xl font-black drop-shadow-lg mb-4">Uncompromising Quality. Daily.</h3>
                  <p className="text-slate-200 text-lg font-medium drop-shadow-md max-w-md">
                    Our automated systems ensure every egg meets the highest standards of quality and safety.
                  </p>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-brand/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 z-20">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-8 left-8 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 z-20">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", icon: Leaf, title: "Premium Feed", desc: "Hens receive scientifically formulated nutrition stored in sterile warehouses.", color: "from-green-500 to-emerald-600" },
              { num: "02", icon: ShieldCheck, title: "Automated Care", desc: "Climate control and automated water lines ensure optimal health and comfort.", color: "from-blue-500 to-indigo-600" },
              { num: "03", icon: CheckCircle2, title: "Zero-Touch Grading", desc: "Eggs are transported via conveyors, scanned, and graded without human contact.", color: "from-purple-500 to-violet-600" },
              { num: "04", icon: Globe, title: "Safe Export", desc: "Packaged securely for domestic wholesale and extensive global export.", color: "from-orange-500 to-red-500" }
            ].map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="group bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full flex flex-col hover:bg-white/80">
                  {/* Background Number */}
                  <div className="absolute -right-8 -top-8 text-[8rem] font-black text-slate-50 opacity-50 group-hover:text-brand/10 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 pointer-events-none">
                    {step.num}
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 border-4 border-white/50 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand transition-colors duration-300">{step.title}</h4>
                    <p className="text-slate-600 text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand to-amber-400 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-24 relative overflow-hidden mt-12 mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_25%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_20%)]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-slate-950/30 overflow-hidden">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand/10 blur-3xl opacity-60" />
            <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl opacity-50" />

            <div className="relative px-6 py-16 md:px-12 md:py-20 text-center">
              <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 mx-auto">
                <Award className="w-5 h-5 text-brand" />
                <span className="text-white font-semibold text-sm">Trusted by Global Partners</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
                Partner with the leaders in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-300 to-amber-200">quality eggs</span>.
              </h2>

              <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed font-medium mb-10">
                Whether you’re a local distributor or an international wholesaler, Sunrise Egg Farms guarantees the volume, quality, and hygiene you demand. Join our network of satisfied partners worldwide.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand to-amber-500 px-10 py-4 text-lg font-black text-white shadow-[0_18px_40px_-20px_rgba(245,158,11,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(245,158,11,0.9)]">
                  Get in Touch Today
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
                <Link href="/about" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  Learn More About Us
                  <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left md:text-center">
                {[
                  { value: "500+", label: "Happy Partners" },
                  { value: "50+", label: "Countries Served" },
                  { value: "10M+", label: "Eggs Monthly" },
                  { value: "99.9%", label: "Quality Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-black text-brand mb-2">{stat.value}</div>
                    <div className="text-sm uppercase tracking-[0.26em] text-slate-300 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
