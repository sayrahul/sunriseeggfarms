"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Dummy submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-6">
      <AnimatedSection className="text-center mb-20 flex flex-col items-center">
        <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          <span className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight dark:text-white">
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
          <div className="bg-slate-dark text-white p-8 rounded-3xl shadow-xl border border-slate-800">
            <h2 className="text-2xl font-bold mb-8 text-egg">Headquarters</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    # 53-17-43/1, Rajanna Reddy Street,<br />
                    Behind Automotives, Maddilapalem,<br />
                    Visakhapatnam - 530013.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-slate-400 text-sm">
                    Directors / Office: <a href="tel:+917989702164" className="hover:text-brand transition-colors">+91 7989702164</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email / Web</h3>
                  <a href="mailto:sunriseeggfarms@gmail.com" className="block text-slate-400 hover:text-brand transition-colors text-sm mb-1">
                    sunriseeggfarms@gmail.com
                  </a>
                  <a href="https://www.sunriseeggfarms.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-brand transition-colors text-sm">
                    www.sunriseeggfarms.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection delay={0.2} className="lg:col-span-3">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-dark mb-6">Send us a message</h2>
            
            {success && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
                <CheckCircle2 className="w-5 h-5" />
                <p className="font-medium">Message sent successfully! We will get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand focus:ring-brand'} focus:outline-none focus:ring-1 transition-colors`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /.+@.+\..+/, message: "Invalid email" }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand focus:ring-brand'} focus:outline-none focus:ring-1 transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand focus:ring-brand'} focus:outline-none focus:ring-1 transition-colors`}
                  placeholder="Inquiry about..."
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-brand focus:ring-brand'} focus:outline-none focus:ring-1 transition-colors resize-none`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 w-full md:w-auto bg-brand hover:bg-brand-dark text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
