import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-36 lg:pb-12 border-t border-slate-700/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="flex items-center gap-3 bg-white w-fit pr-5 rounded-2xl p-2 shadow-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105">
              <div className="relative w-12 h-12 flex items-center justify-center bg-transparent shrink-0">
                <Image src="/images/logo.png" alt="Sunrise Egg Farms" width={40} height={40} className="object-contain w-auto h-auto" />
              </div>
              <div className="relative h-5 md:h-6 w-32 border-l border-slate-200 pl-3 shrink-0">
                <Image 
                  src="/images/logo-text.png" 
                  alt="Sunrise Egg Farms Text Logo" 
                  fill
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing premium, hygienic, and nutritious eggs with sustainable and zero-waste farming practices.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Award className="w-4 h-4 text-brand" aria-hidden="true" />
                <span className="font-semibold tracking-wide">ISO 22000 Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-lg text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Quality & Hygiene", href: "/quality" },
                { name: "Sustainability", href: "/sustainability" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand transition-colors text-sm font-bold tracking-tight">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us - Elite Functional Links */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-6 text-lg text-white">Contact Us</h4>
            <ul className="space-y-5">
              <li>
                <a 
                  href="https://maps.app.goo.gl/AXbukKBJuAyRnhLPA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-slate-400 hover:text-brand transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span className="text-sm font-medium leading-relaxed">
                    # 53-17-43/1, Rajanna Reddy Street, Behind Automotives,<br className="hidden sm:block" />
                    Maddilapalem, Visakhapatnam - 530013.
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+9199963755766" className="flex items-center gap-4 text-slate-400 hover:text-brand transition-colors group">
                  <Phone className="w-5 h-5 text-brand shrink-0 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  <span className="text-sm font-bold font-mono">+91 99963 755766 (Sales)</span>
                </a>
              </li>
              <li>
                <a href="tel:+917989702164" className="flex items-center gap-4 text-slate-400 hover:text-brand transition-colors group">
                  <Phone className="w-5 h-5 text-brand shrink-0 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                  <span className="text-sm font-bold font-mono">+91 7989702164 (Exports)</span>
                </a>
              </li>
              <li>
                <a href="mailto:sunriseeggfarms@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-brand transition-colors group">
                  <Mail className="w-5 h-5 text-brand shrink-0 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                  <span className="text-sm font-bold">sunriseeggfarms@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="border-t border-slate-700/30 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-slate-500 text-sm font-medium">
              © {currentYear} Sunrise Egg Farms. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-brand transition-colors font-bold uppercase tracking-wider text-[10px]">Privacy</Link>
              <Link href="/terms" className="text-slate-400 hover:text-brand transition-colors font-bold uppercase tracking-wider text-[10px]">Terms</Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-brand transition-colors font-bold uppercase tracking-wider text-[10px]">Sitemap</Link>
            </div>
          </div>

          {/* Agency Attribution - Visibility Fix */}
          <div className="flex justify-center items-center pb-8 md:pb-0">
            <div className="bg-white/5 backdrop-blur-sm px-6 py-2.5 rounded-full border border-white/5 shadow-inner">
              <p className="text-xs text-slate-400 font-bold tracking-tight">
                Designed & Developed by <a href="https://www.proventure.in/" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-amber-400 transition-colors">ProVenture Digital Agency</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
