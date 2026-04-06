"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [success, setSuccess] = useState(false);
  const [errorVisible, setErrorVisible] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setErrorVisible(null);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    try {
      const response = await sendContactEmail(formData);
      if (response.success) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setErrorVisible("Failed to send message. Please try again.");
      }
    } catch (e) {
      setErrorVisible("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
      
      {success && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 border border-green-200">
          <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
          <p className="font-medium">Message sent successfully! We will get back to you soon.</p>
        </div>
      )}

      {errorVisible && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 border border-red-200">
          <p className="font-medium">{errorVisible}</p>
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
              <Send className="w-5 h-5" aria-hidden="true" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
