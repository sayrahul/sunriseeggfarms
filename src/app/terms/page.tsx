"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 md:px-6">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-egg rounded-full flex items-center justify-center text-brand shrink-0">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Terms and <span className="text-brand">Conditions</span></h1>
            <p className="text-slate-500 font-medium tracking-wide text-sm uppercase mt-1">Last Updated: April 2026</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand hover:prose-a:text-brand-dark space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
        
        <section>
          <h2 className="text-2xl mt-0 border-b border-slate-100 pb-3">1. Agreement to Terms</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Sunrise Egg Farms ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">2. Intellectual Property Rights</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">3. Products and Pricing</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            All physical agricultural products, bulk packages, and export shipments are subject to availability. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change without notice. International export pricing may vary based on shipping, tariffs, and distribution logistics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">4. Quality Assurance and Returns</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            Due to the perishable and biodegradable nature of agricultural produce, we maintain strict biosecurity and hygiene standards. Returns or refunds are evaluated on a case-by-case basis strictly for damaged consignments upon verified arrival. Standard local shipments are non-refundable once dispatched from our facility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">5. User Representations</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">6. Modifications and Interruptions</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">7. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            In order to resolve a complaint regarding the Site, request bulk operational agreements, or to receive further information, please <Link href="/contact" className="font-semibold underline hover:text-brand-dark">contact us directly.</Link>
          </p>
        </section>

      </AnimatedSection>
    </div>
  );
}
