import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-20 flex flex-col items-center">
        <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-slate-900 dark:text-white">
          <span className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            Contact
          </span>
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-500 to-amber-400 tracking-tighter drop-shadow-sm leading-none pb-2">
            Us
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Get in touch with our team for bulk orders, export inquiries, or any general questions. We are here to help.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact Information */}
        <AnimatedSection className="lg:col-span-2 space-y-8">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-8 text-brand">Headquarters</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <a 
                    href="https://maps.app.goo.gl/AXbukKBJuAyRnhLPA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand transition-colors text-sm leading-relaxed"
                  >
                    # 53-17-43/1, Rajanna Reddy Street,<br />
                    Behind Automotives, Maddilapalem,<br />
                    Visakhapatnam - 530013.
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <div className="space-y-1">
                    <p className="text-slate-400 text-sm">
                      Sales: <a href="tel:+9199963755766" className="hover:text-brand transition-colors font-bold">+91 99963 755766</a>
                    </p>
                    <p className="text-slate-400 text-sm">
                      Exports: <a href="tel:+917989702164" className="hover:text-brand transition-colors font-bold">+91 7989702164</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email / Web</h3>
                  <a href="mailto:sunriseeggfarms@gmail.com" className="block text-slate-400 hover:text-brand transition-colors text-sm mb-1 font-bold">
                    sunriseeggfarms@gmail.com
                  </a>
                  <Link href="/" className="block text-slate-400 hover:text-brand transition-colors text-sm uppercase tracking-wider font-bold">
                    www.sunriseeggfarms.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form Container */}
        <AnimatedSection delay={0.2} className="lg:col-span-3">
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
