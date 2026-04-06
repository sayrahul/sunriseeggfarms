"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 md:px-6">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-egg rounded-full flex items-center justify-center text-brand shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Privacy <span className="text-brand">Policy</span></h1>
            <p className="text-slate-500 font-medium tracking-wide text-sm uppercase mt-1">Last Updated: April 2026</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand hover:prose-a:text-brand-dark space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
        
        <section>
          <h2 className="text-2xl mt-0 border-b border-slate-100 pb-3">1. Introduction</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            At Sunrise Egg Farms, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">2. The Data We Collect About You</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">3. How We Use Your Personal Data</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., fulfilling export or bulk orders).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">4. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">5. Cookies</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl border-b border-slate-100 pb-3">6. Contact Details</h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <div className="bg-slate-50 p-6 rounded-xl mt-4 border border-slate-100">
            <p className="m-0 text-slate-700">Email: <a href="mailto:sunriseeggfarms@gmail.com" className="text-brand font-semibold hover:underline">sunriseeggfarms@gmail.com</a></p>
            <p className="m-0 mt-2 text-slate-700">Phone: +91 99963 755766</p>
            <p className="m-0 mt-2 text-slate-700">Address: # 53-17-43/1, Rajanna Reddy Street, Visakhapatnam - 530013.</p>
          </div>
        </section>

      </AnimatedSection>
    </div>
  );
}
