import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `Our Team & Leadership - ${siteConfig.name}`,
  description: 'Meet the executive leadership, management, IT, and certified spray specialists behind Peso Pest Control.',
};

export default function TeamPage() {
  const { founder, technicalDirector, legalAdvisor, managementHead, itHead } = siteConfig;

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Organizational Structure & Team
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Our Leadership & Team
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            A cohesive team of executive leadership, certified entomology, legal compliance, operational management, IT infrastructure, and licensed spray technicians.
          </p>
        </div>
      </section>

      {/* CORE EXECUTIVE PILLARS */}
      <section className="w-full py-16 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
          
          {/* 1. FOUNDER & MANAGING DIRECTOR */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-md flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="flex flex-col items-center gap-4 shrink-0 w-full lg:w-80">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Founder & MD</span>
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <span className="text-xs text-slate-300">{founder.degree}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center w-full max-w-xs">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 italic">
                  “{founder.motto}”
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 text-slate-800 dark:text-slate-200">
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Founder Profile
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                  {founder.name}
                </h2>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {founder.title} — {founder.company}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {founder.degree}
                </div>
              </div>

              <div className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p>{founder.bio}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700/80 flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase">
                    <span className="material-symbols-outlined text-sm">verified</span>
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{founder.mission}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700/80 flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300">{founder.vision}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#101b33] border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-1">
                  Our Commitment
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {founder.commitment}
                </p>
              </div>
            </div>
          </div>

          {/* 2. TECHNICAL DIRECTOR & ENTOMOLOGY SPECIALIST */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-md flex flex-col lg:flex-row-reverse gap-10 items-center lg:items-start">
            <div className="flex flex-col items-center gap-4 shrink-0 w-full lg:w-80">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                <img
                  src={technicalDirector.image}
                  alt={technicalDirector.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Technical Director</span>
                  <h3 className="text-xl font-bold">{technicalDirector.name}</h3>
                  <span className="text-xs text-slate-300 line-clamp-1">{technicalDirector.degree}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center w-full max-w-xs">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 italic">
                  “{technicalDirector.motto}”
                </span>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
                  {technicalDirector.framework}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 text-slate-800 dark:text-slate-200">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  Technical Directorate & Entomology
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                  {technicalDirector.name}
                </h2>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {technicalDirector.title} — {technicalDirector.company}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {technicalDirector.degree}
                </div>
              </div>

              <div className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p>{technicalDirector.bio}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700/80">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase mb-1">
                  <span className="material-symbols-outlined text-sm">science</span>
                  <span>Professional Approach</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {technicalDirector.approach}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
                  Technical Expertise:
                </span>
                <div className="flex flex-wrap gap-2">
                  {technicalDirector.expertise.map((item: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. LEGAL ADVISOR */}
          <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-md flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="flex flex-col items-center gap-4 shrink-0 w-full lg:w-80">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                <img
                  src={legalAdvisor.image}
                  alt={legalAdvisor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Legal Advisor</span>
                  <h3 className="text-xl font-bold">{legalAdvisor.name}</h3>
                  <span className="text-xs text-slate-300">{legalAdvisor.degree}</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center w-full max-w-xs">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 italic">
                  “{legalAdvisor.motto}”
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 text-slate-800 dark:text-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Legal Directorate & Governance
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                  {legalAdvisor.name}
                </h2>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {legalAdvisor.title} — {legalAdvisor.company}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {legalAdvisor.degree}
                </div>
              </div>

              <div className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p>{legalAdvisor.bio}</p>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
                  Key Legal Responsibilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {legalAdvisor.responsibilities.map((resp: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2"
                    >
                      <span className="material-symbols-outlined text-xs text-blue-500 shrink-0 mt-0.5">gavel</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MANAGEMENT & IT DIGITAL LEADERSHIP */}
      <section className="w-full py-16 bg-slate-50 dark:bg-[#070D1F] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Operations, Administration & Technology
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Management & Digital Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Fareeha Noureen (Management Head) */}
            <div className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 shadow-sm flex flex-col justify-between gap-6 hover:border-emerald-500/40 transition-all">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-[#111e38] border border-emerald-200 dark:border-emerald-800 shrink-0 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                  <span className="material-symbols-outlined text-5xl">manage_accounts</span>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
                    Administration & Planning
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {managementHead.name}
                  </h3>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {managementHead.title}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {managementHead.degree}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {managementHead.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">task_alt</span>
                  <span>Operational Governance</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">task_alt</span>
                  <span>Customer Support Coordination</span>
                </span>
              </div>
            </div>

            {/* M. Jazib (Head of IT & Digital Infrastructure) */}
            <div className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 shadow-sm flex flex-col justify-between gap-6 hover:border-emerald-500/40 transition-all">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border border-slate-300 dark:border-slate-700 shadow-md">
                  <img src={itHead.image} alt={itHead.name} className="w-full h-full object-cover object-top" />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">
                    Digital Platforms & Infrastructure
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {itHead.name}
                  </h3>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {itHead.title}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {itHead.degree}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {itHead.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">terminal</span>
                  <span>Digital Dispatch & Platforms</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">sync_alt</span>
                  <span>Booking Automation</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FIELD SPRAY SPECIALISTS & ON-GROUND TECHNICIANS */}
      <section className="w-full py-16 bg-white dark:bg-[#0B132B] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase w-fit">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                <span>Field Operations Crew</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Certified Spray Technicians & Applicators
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Our on-ground workforce consists of trained, safety-certified spray operators equipped with commercial ULV misting machines, thermal foggers, personal protective equipment (PPE), and odorless chemical spray gear for precision treatment at your site.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                  <span>ULV Cold Misting</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                  <span>Thermal Deep Fogging</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                  <span>Sub-Slab Termite Injections</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                  <span>Odorless Gel Baits</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/order"
                className="px-8 py-4 rounded-2xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all text-center"
              >
                Schedule Spray Service
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-bold text-sm bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all flex items-center gap-2 text-center"
              >
                <span className="material-symbols-outlined text-base text-emerald-500">chat</span>
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-STEP SCIENTIFIC IPM PROTOCOL */}
      <section className="w-full py-16 bg-slate-50 dark:bg-[#070D1F] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              The Science Behind Pest Control
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Integrated Pest Management (IPM) Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 flex flex-col gap-2">
              <span className="text-2xl font-black text-emerald-500">01</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Identify</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Accurate identification of pest species, biological cycle, and behavior patterns.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 flex flex-col gap-2">
              <span className="text-2xl font-black text-emerald-500">02</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Inspect</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Comprehensive assessment of infestation hotspots, entry cracks, and environment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 flex flex-col gap-2">
              <span className="text-2xl font-black text-emerald-500">03</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Control</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Application of targeted, bio-safe, and odor-free treatments to eliminate colonies.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 flex flex-col gap-2">
              <span className="text-2xl font-black text-emerald-500">04</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Prevent</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Long-term barrier sealing, exclusion measures, and periodic preventive monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
