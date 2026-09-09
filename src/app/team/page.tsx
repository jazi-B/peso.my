import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `Our Team - ${siteConfig.name}`,
  description: 'Meet our leadership, certified entomologists, and professional fumigation technicians.',
};

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Meet Our Leadership & Field Team
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Certified entomologists, structural defense specialists, and licensed technicians dedicated to your protection.
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="w-full py-16 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.teamMembers.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 shadow-sm flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                      {member.experience}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {member.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Specs */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Credentials & Specialization:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Need Professional Assistance?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-lg">
              Reach out directly to schedule an inspection with our specialists.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/order"
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all"
              >
                Book Inspection
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base text-emerald-500">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
