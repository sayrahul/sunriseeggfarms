"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Users, ShoppingBag, Building, Globe, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Products", href: "/products" },
  { name: "Global Exports", href: "/exports" },
  { name: "Contact Us", href: "/contact" },
];

const mobileBottomLinks = [
  { name: "Home", href: "/", Icon: Home },
  { name: "About", href: "/about", Icon: Users },
  { name: "Products", href: "/products", Icon: ShoppingBag },
  { name: "Exports", href: "/exports", Icon: Globe },
  { name: "Contact", href: "/contact", Icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex flex-col bg-transparent">
        
        {/* Top Information Strip (Disappears on scroll via negative margin or opacity/transform) */}
        <div 
          className={`bg-slate-900 text-slate-300 py-1.5 px-4 md:px-6 text-xs md:text-sm font-medium transition-all duration-300 origin-top pointer-events-auto ${
            scrolled ? "h-0 opacity-0 overflow-hidden py-0 border-none pointer-events-none" : "h-auto opacity-100 border-b border-slate-800/20 flex justify-between items-center"
          }`}
        >
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            {/* Left Side: Location */}
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand" />
              <span>Maddilapalem, Visakhapatnam</span>
            </div>

            {/* Right Side: Contact Info */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="tel:+9199963755766" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-3.5 h-3.5 text-brand" />
                <span>+91 99963 755766</span>
              </a>
              <a href="mailto:sunriseeggfarms@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-3.5 h-3.5 text-brand" />
                <span className="hidden sm:inline">sunriseeggfarms@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div 
          className={`w-full transition-all duration-500 pointer-events-auto border-b backdrop-blur-xl ${
            scrolled ? "bg-white/95 shadow-xl shadow-slate-900/10 py-3 border-slate-200/50" : "bg-white/90 py-4 border-transparent"
          }`}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-0">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <Image src="/images/logo.png" alt="Sunrise Egg Farms Logo" fill className="object-contain w-auto h-auto" priority />
              </div>
              <div className="flex items-center justify-start ml-1 shrink-0">
                <img src="/images/logo-text.png" alt="Sunrise Egg Farms Text" className="h-5 sm:h-7 md:h-8 w-auto object-contain object-left group-hover:opacity-90 transition-opacity" />
              </div>
            </Link>

            {/* Desktop Nav Tabs */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm xl:text-[15px] font-bold transition-all px-2 py-1 relative group ${
                      isActive ? "text-brand" : "text-slate-700 hover:text-brand"
                    }`}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand transform origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-slate-800 p-2 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors pointer-events-auto"
            >
               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-slate-950/95 border-t border-slate-200/10 backdrop-blur-xl shadow-[0_-18px_40px_-20px_rgba(15,23,42,0.45)]">
        <nav className="container mx-auto px-2 py-2 overflow-x-auto">
          <ul className="flex items-center gap-2 min-w-full">
            {mobileBottomLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.Icon;
              return (
                <li key={item.name} className="flex-1 min-w-[90px]">
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center justify-center gap-1 rounded-3xl px-3 py-2 text-center transition-all duration-200 ${
                      isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[11px] font-semibold leading-none">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[100px] z-40 bg-white/95 backdrop-blur-2xl px-6 py-6 overflow-y-auto lg:hidden flex flex-col gap-2 shadow-2xl border-t border-slate-200/50"
          >
            <p className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">Navigation</p>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold py-4 border-b border-gray-100 flex items-center justify-between transition-colors ${
                    isActive ? "text-brand" : "text-slate-800 hover:text-brand"
                  }`}
                >
                  {link.name}
                  {isActive && <div className="w-2 h-2 rounded-full bg-brand" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
