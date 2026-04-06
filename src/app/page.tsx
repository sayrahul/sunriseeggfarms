import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Egg, Sun, Globe, Award } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ScrollBackground } from "@/components/ScrollBackground";
import { ProcessAnimation } from "@/components/ProcessAnimation";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { StepsGrid } from "@/components/StepsGrid";

export default function Home() {
  return (
    <ScrollBackground>
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
          <div className="max-w-5xl mx-auto space-y-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 text-yellow-300 font-semibold tracking-wide text-xs sm:text-sm hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <Sun className="w-5 h-5 animate-spin-slow text-yellow-300 drop-shadow-lg" aria-hidden="true" />
                <span className="drop-shadow-md">A New Dawn in Poultry Farming</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white drop-shadow-2xl leading-tight mb-4">
                Premium Eggs, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-300 to-amber-200 animate-gradient-x">
                  Sustainable Future
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-base md:text-lg text-slate-100 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-lg opacity-90 mb-8">
                Sunrise Egg Farms delivers the highest quality, farm-fresh eggs nurtured with continuous zero-waste practices and veterinary oversight.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link href="/products" className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand to-amber-500 hover:from-brand-dark hover:to-orange-600 text-white rounded-2xl font-semibold text-base transition-all hover:scale-105 shadow-[0_8px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_8px_40px_rgba(245,158,11,0.45)] flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm">
                  <Egg className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  View Products
                </Link>
                <Link href="/exports" className="group w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold text-base transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg border border-white/30 backdrop-blur-xl hover:border-white/50">
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  Global Exports
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Intro Image Break */}
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

      {/* Features Grid Component (Client) */}
      <FeaturesGrid />

      {/* Process Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden z-10 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <AnimatedSection className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-16 h-1.5 bg-gradient-to-r from-brand to-amber-400 rounded-full shadow-lg"></span>
                <h2 className="text-brand font-black uppercase tracking-widest text-sm">The Sunrise Process</h2>
              </div>
              <h3 className="flex flex-col gap-2 mb-10">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">
                  From Farm to Table
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                  <span className="text-3xl lg:text-4xl font-serif italic text-slate-400 font-medium">with</span>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-400 tracking-tighter drop-shadow-sm leading-tight pb-2">
                    Absolute Precision.
                  </span>
                </div>
              </h3>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-xl mb-8">
                We believe that premium eggs are the result of rigorous processes. Every step, from the formulation of chicken feed to the final packaging, is meticulously monitored and automated.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 border-t border-slate-200/80 pt-10">
                <div className="flex flex-col items-start border-l-[3px] border-amber-500 pl-5">
                  <div className="text-4xl md:text-5xl font-black text-slate-900 mb-1 drop-shadow-sm tracking-tight">24/7</div>
                  <div className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">Monitoring</div>
                </div>
                <div className="flex flex-col items-start border-l-[3px] border-orange-500 pl-5">
                  <div className="text-4xl md:text-5xl font-black text-slate-900 mb-1 drop-shadow-sm tracking-tight">100%</div>
                  <div className="text-xs md:text-sm font-bold text-orange-600 uppercase tracking-[0.2em]">Automated</div>
                </div>
                <div className="flex flex-col items-start border-l-[3px] border-brand pl-5">
                  <div className="text-4xl md:text-5xl font-black text-slate-900 mb-1 drop-shadow-sm tracking-tight">0%</div>
                  <div className="text-xs md:text-sm font-bold text-brand uppercase tracking-[0.2em]">Waste</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3} className="lg:w-1/2 w-full">
              <ProcessAnimation />
            </AnimatedSection>
          </div>

          {/* Steps Grid Component (Client) */}
          <StepsGrid />
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
                <Award className="w-5 h-5 text-brand" aria-hidden="true" />
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
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
                </Link>
                <Link href="/about" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  Learn More About Us
                  <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
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

      {/* Trust & Google Reviews Scroller */}
      <ReviewsSection />
    </ScrollBackground>
  );
}
