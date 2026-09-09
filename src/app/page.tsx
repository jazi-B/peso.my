'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Clean Premium Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#0B132B] via-[#111e38] to-[#0B132B] text-white py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Professional Pest Control & Fumigation
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Pest-Free Living, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
              Guaranteed.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/order"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all flex items-center gap-2"
            >
              <span>Book a Service</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Peso%20Pest%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg text-emerald-400">chat</span>
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Quick Trust Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80 w-full max-w-3xl">
            {siteConfig.features.map((feat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-1">
                <span className="material-symbols-outlined text-emerald-400 text-2xl">{feat.icon}</span>
                <span className="text-xs font-bold text-white">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core 5 Services Grid */}
      <section id="services" className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Specialized Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Comprehensive pest management tailored for homes, apartments, offices, and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="group rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="flex flex-col gap-1.5 pt-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/order?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book {service.title}</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leadership & Team Section */}
      <section className="w-full py-20 bg-slate-50 dark:bg-[#111e38] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                Certified Professionals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Meet Our Leadership & Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                Experienced directors, certified entomologists, and trained technicians.
              </p>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>View Full Team & Specs</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.teamMembers.slice(0, 3).map((member, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#15223e] p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-3 border border-slate-200 dark:border-slate-700">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{member.title}</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                  <span>Specialization: </span>
                  <strong className="text-slate-700 dark:text-slate-300">{member.specialization}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Choose {siteConfig.fullName}?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              We provide unmatched dedication to quality, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="w-full py-20 bg-slate-50 dark:bg-[#111e38] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Common questions regarding our services, chemicals, and scheduling.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {siteConfig.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-[#15223e]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined text-base text-slate-400 shrink-0">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
