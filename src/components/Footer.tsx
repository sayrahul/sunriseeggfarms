import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Award } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-20 pb-8 border-t border-slate-700/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 bg-white w-fit pr-5 rounded-2xl p-2 shadow-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105">
              <div className="relative w-12 h-12 flex items-center justify-center bg-transparent shrink-0">
                <Image src="/images/logo.png" alt="Sunrise Egg Farms" width={40} height={40} className="object-contain w-auto h-auto" />
              </div>
              <div className="flex items-center justify-start border-l border-slate-200 pl-3 shrink-0">
                <img src="/images/logo-text.png" alt="Sunrise Egg Farms Text Logo" className="h-5 md:h-6 w-auto object-contain object-left" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing premium, hygienic, and nutritious eggs with sustainable and zero-waste farming practices.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Award className="w-4 h-4 text-brand" />
                <span>ISO 22000 Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Quality & Hygiene", href: "/quality" },
                { name: "Sustainability", href: "/sustainability" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <span># 53-17-43/1, Rajanna Reddy Street, Behind Automotives,
                  Maddilapalem, Visakhapatnam - 530013.
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <span>+91 99963 755766 (Sales) | +91 7989702164 (International)</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <span>sunriseeggfarms@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-slate-400 text-sm">
              © 2026 Sunrise Egg Farms. All Rights Reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-brand transition-colors font-medium">Privacy Policy</Link>
              <Link href="#" className="text-slate-400 hover:text-brand transition-colors font-medium">Terms and Conditions</Link>
              <Link href="#" className="text-slate-400 hover:text-brand transition-colors font-medium">Sitemap</Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-sm text-slate-500 font-medium">
              Design and Developed by <a href="https://www.proventure.in/" target="_blank" rel="noopener noreferrer" className="text-brand font-bold hover:text-amber-400 transition-colors tracking-wide">ProVenture Digital Agency</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
