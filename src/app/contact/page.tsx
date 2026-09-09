'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-20 px-4 sm:px-6 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            24/7 Rapid Client Support
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Contact Our Field Support & Dispatch
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Have questions about an ongoing infestation or require commercial quotation? We&apos;re on standby to assist.
          </p>
        </div>
      </section>

      {/* Main Form & Contacts */}
      <section className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Col (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-[#15223e] p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Send us an Inquiry
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Our support team typically responds to inquiries within 15 minutes during operating hours.
            </p>

            {status === 'success' && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                <span>Message submitted successfully! We will get back to you shortly.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">error</span>
                <span>Failed to send message. Please try calling us directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full p-3.5 rounded-xl text-sm bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full p-3.5 rounded-xl text-sm bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Message / Inquiry *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can our pest specialists assist you today?"
                  className="w-full p-3.5 rounded-xl text-sm bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>{loading ? 'Sending Inquiry...' : 'Submit Message'}</span>
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          </div>

          {/* Contact Direct Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            {/* Phone */}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase font-bold">24/7 Phone Support</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {siteConfig.contact.phone}
                </span>
                <span className="text-[11px] text-slate-500">Tap to call emergency helpline</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase font-bold">WhatsApp Hotline</span>
                <span className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {siteConfig.contact.whatsapp}
                </span>
                <span className="text-[11px] text-slate-500">Live chat with entomologist</span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 uppercase font-bold">Corporate Email</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors truncate max-w-[220px]">
                  {siteConfig.contact.email}
                </span>
                <span className="text-[11px] text-slate-500">Commercial audits & contracts</span>
              </div>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
