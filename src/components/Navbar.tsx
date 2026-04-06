"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Users, ShoppingBag, Globe, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navArchitecture = [
  { name: "Home", href: "/" },
  { 
    name: "About Us", 
    href: "#",
    dropdown: [
      { name: "Company Overview", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Infrastructure & Facilities", href: "/infrastructure" },
      { name: "Sustainability", href: "/sustainability" }
    ]
  },
  { 
    name: "Products & Standards",
    href: "#",
    dropdown: [
      { name: "Our Products", href: "/products" },
      { name: "Quality & Hygiene", href: "/quality" },
      { name: "Farm Gallery", href: "/gallery" }
    ]
  },
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex flex-col bg-transparent pointer-events-none">
        
        {/* Top Information Strip */}
        <div 
          className={`grid transition-[grid-template-rows,opacity] duration-300 origin-top pointer-events-auto bg-slate-900 text-slate-300 text-xs md:text-sm font-medium border-slate-800/20 ${scrolled ? "grid-rows-[0fr] opacity-0 pointer-events-none border-b-0" : "grid-rows-[1fr] opacity-100 border-b"}`}
        >
          <div className="overflow-hidden">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 py-1.5 px-4 md:px-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                <span>Maddilapalem, Visakhapatnam</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <a href="tel:+9199963755766" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                  <span>+91 99963 755766</span>
                </a>
                <a href="mailto:sunriseeggfarms@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
                  <span className="hidden sm:inline">sunriseeggfarms@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div 
          className={`w-full transition-all duration-500 pointer-events-auto border-b backdrop-blur-xl ${scrolled ? "bg-white/95 shadow-xl shadow-slate-900/10 py-3 border-slate-200/50" : "bg-white/90 py-4 border-transparent"}`}
        >
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0 min-w-0">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <Image src="/images/logo.png" alt="Sunrise Egg Farms Logo" fill className="object-contain w-auto h-auto" priority />
              </div>
              <div className="relative h-9 sm:h-10 md:h-11 w-48 sm:w-56 md:w-64 ml-1 shrink-0">
                <Image 
                  src="/images/logo-text.png" 
                  alt="Sunrise Egg Farms Text Logo" 
                  fill
                  className="object-contain object-left group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>

            {/* Desktop Nav Tabs */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4" onMouseLeave={handleMouseLeave}>
              {navArchitecture.map((link) => {
                const isDropdownOpen = activeDropdown === link.name;
                const isActive = pathname === link.href || isDropdownOpen;
                const hasDropdown = !!link.dropdown;

                return (
                  <div key={link.name} className="relative" onMouseEnter={() => handleMouseEnter(link.name)}>
                    {hasDropdown ? (
                      <button className={`flex items-center gap-1.5 text-sm xl:text-[15px] font-bold px-3 py-2 rounded-xl transition-all ${isActive ? 'text-brand' : 'text-slate-700 hover:text-brand'}`}>
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand' : 'text-slate-400'}`} aria-hidden="true" />
                      </button>
                    ) : link.name === "Contact Us" ? (
                      <Link
                        href={link.href as string}
                        className="ml-2 flex items-center justify-center bg-brand text-white text-sm xl:text-[15px] font-bold px-6 py-2.5 rounded-full shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] hover:scale-105 active:scale-95 hover:bg-amber-600 transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={link.href as string}
                        className={`flex items-center text-sm xl:text-[15px] font-bold transition-all px-3 py-2 rounded-xl relative group ${pathname === link.href ? "text-brand" : "text-slate-700 hover:text-brand"}`}
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* Desktop Dropdown Panel */}
                    <AnimatePresence>
                      {hasDropdown && isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-2 w-64 z-50 pointer-events-auto"
                        >
                          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2 flex flex-col gap-1">
                            {link.dropdown?.map(sublink => (
                              <Link 
                                key={sublink.name} 
                                href={sublink.href}
                                onClick={() => setActiveDropdown(null)}
                                className="px-4 py-3 rounded-xl text-slate-600 font-bold text-sm hover:bg-orange-50 hover:text-amber-600 transition-colors flex items-center"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-slate-800 p-2 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors pointer-events-auto z-50 relative"
            >
               {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-slate-950/95 border-t border-slate-200/10 backdrop-blur-xl shadow-[0_-18px_40px_-20px_rgba(15,23,42,0.45)] pb-safe">
        <nav className="w-full px-1 py-2 sm:px-2 max-w-full">
          <ul className="flex items-center justify-between w-full gap-1 sm:gap-2">
            {mobileBottomLinks.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith('#') && false); 
              const Icon = item.Icon;
              return (
                <li key={item.name} className="flex-1 flex justify-center">
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center justify-center gap-1 rounded-2xl sm:rounded-3xl w-full py-2 px-1 text-center transition-all duration-200 ${isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
                  >
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5" aria-hidden="true" />
                    <span className="text-[10px] sm:text-[11px] font-semibold leading-none truncate w-full px-0.5">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Full screen mobile menu with Accordions */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[80px] sm:top-[100px] z-40 bg-white/95 backdrop-blur-3xl px-6 py-6 pb-32 overflow-y-auto lg:hidden shadow-2xl border-t border-slate-200/50 flex flex-col gap-2 pointer-events-auto"
          >
            <p className="text-xs font-black text-slate-400 mb-2 uppercase tracking-[0.2em] px-2">Navigation Directory</p>
            {navArchitecture.map((link) => (
              <MobileAccordionItem key={link.name} link={link} setIsOpen={setIsOpen} pathname={pathname} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Sub-component for Mobile Accordions
function MobileAccordionItem({ link, setIsOpen, pathname }: { link: any, setIsOpen: (v: boolean) => void, pathname: string }) {
  const [open, setOpen] = useState(false);
  const hasDropdown = !!link.dropdown;
  const isActive = pathname === link.href;

  if (!hasDropdown) {
    if (link.name === "Contact Us") {
      return (
        <Link
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="mt-6 flex items-center justify-center tracking-wide bg-brand hover:bg-amber-600 text-white text-lg font-bold py-4 px-6 rounded-full shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] active:scale-95 transition-all duration-300"
        >
          {link.name}
        </Link>
      );
    }
    return (
      <Link
        href={link.href}
        onClick={() => setIsOpen(false)}
        className={`text-xl font-bold py-4 px-2 border-b border-gray-100 flex items-center justify-between transition-colors ${isActive ? "text-brand" : "text-slate-800 hover:text-brand"}`}
      >
        {link.name}
        {isActive && <div className="w-2 h-2 rounded-full bg-brand" />}
      </Link>
    );
  }

  return (
    <div className="flex flex-col border-b border-gray-100">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex items-center justify-between py-4 px-2 text-xl font-bold text-slate-800 hover:text-brand transition-colors"
      >
        {link.name}
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180 text-brand' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col gap-1 px-4"
          >
            <div className="pb-4 pt-1 flex flex-col gap-2 border-l-2 border-brand/20 ml-2 pl-4">
              {link.dropdown.map((sub: any) => (
                <Link 
                  key={sub.name} 
                  href={sub.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 text-[17px] text-slate-600 font-semibold hover:text-brand transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
