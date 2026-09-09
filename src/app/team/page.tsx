import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `Our Leadership & Team - ${siteConfig.name}`,
  description: 'Meet Jawad Ahmad Ch, Founder & Managing Director, and our certified entomology and field operations team.',
};

export default function TeamPage() {
  const { founder } = siteConfig;

  const servicesScope = [
    'Cockroach Control',
    'Termite Control',
    'Mosquito Control',
    'Fly Control',
    'Bed Bug Control',
    'Ant Control',
    'Rodent Management',
    'ULV Fogging',
    'Thermal Fogging',
    'Commercial Pest Control',
    'Residential Pest Control',
    'Industrial Pest Management',
    'Agricultural Pest Management'
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Leadership & Expertise
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            Dedicated leadership, certified entomologists, and licensed field specialists committed to delivering professional, safe, and effective pest management solutions.
          </p>
        </div>
      </section>

      {/* FOUNDER & MANAGING DIRECTOR SPOTLIGHT */}
      <section className="w-full py-16 bg-white dark:bg-[#0B132B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-lg flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            
            {/* Founder Image & Quick Card */}
            <div className="flex flex-col items-center gap-4 shrink-0 w-full lg:w-80">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Founder & MD</span>
                  <h3 className="text-xl font-bold">{founder.name}</h3>
                  <span className="text-xs text-slate-300">{founder.degree}</span>
                </div>
              </div>

              {/* Quote Badge */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center w-full max-w-xs">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 italic">
                  “{founder.motto}”
                </span>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col gap-6 flex-1 text-slate-800 dark:text-slate-200">
              <div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Executive Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
                  {founder.name}
                </h2>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  {founder.title} — {founder.company}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {founder.degree}
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p>{founder.bio}</p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-base">verified</span>
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {founder.mission}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700/80 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <span className="material-symbols-outlined text-base">visibility</span>
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {founder.vision}
                  </p>
                </div>
              </div>

              {/* Commitment */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-[#101b33] border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-1">
                  Our Commitment
                </span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {founder.commitment}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNICAL & FIELD LEADERSHIP GRID */}
      <section className="w-full py-16 bg-slate-50 dark:bg-[#070D1F] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Technical Directorate & Field Operations
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Pest Specialists & Operations Team
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Our multidisciplinary team ensures scientific treatment protocols, certified safety compliance, and rapid client dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.teamMembers.slice(1).map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex flex-col justify-between gap-6 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {member.experience}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {member.title}
                    </div>
                    {member.qualification && (
                      <div className="text-[11px] text-slate-400">
                        {member.qualification}
                      </div>
                    )}
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Specs */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[12px] text-emerald-500">check_circle</span>
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES & EXPERTISE SCOPE */}
      <section className="w-full py-16 bg-white dark:bg-[#0B132B] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  Comprehensive Coverage
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  Our Pest Control & Management Capabilities
                </h3>
              </div>
              <Link
                href="/order"
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white self-start sm:self-auto transition-all"
              >
                Book Inspection
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
              {servicesScope.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-700/70 flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  <span className="material-symbols-outlined text-emerald-500 text-base">verified</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
