import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `Our Leadership & Certified Specialists - ${siteConfig.name}`,
  description: 'Meet our executive leadership, certified urban entomologists, and licensed fumigation technicians.',
};

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Banner */}
      <section className="relative w-full bg-[#0B132B] text-white py-20 px-4 sm:px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider w-fit border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Scientific Vanguard & Field Command
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight max-w-3xl leading-tight">
            Meet the Experts Behind Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
              Pest-Free Environment
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our multi-disciplinary team combines academic entomology with industrial field logistics. Every technician is fully vetted, licensed, and trained in medical-grade biosecurity standards.
          </p>

          {/* Statutory Verification Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Govt-Licensed PCO</span>
                <span className="text-xs text-slate-400">Department of Agriculture Approved</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">shield</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">100% Background Checked</span>
                <span className="text-xs text-slate-400">Fully Vetted & Insured Staff</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-xl">biotech</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Academic Entomology</span>
                <span className="text-xs text-slate-400">Bio-Rational & Pet Safe Formulations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Team Showcase */}
      <section className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Executive Leadership & Technical Directorate
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Guiding strategic field operations, regulatory compliance, and environmental safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.teamMembers.map((member, i) => (
              <div
                key={i}
                className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700/80 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between gap-6 group"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border border-slate-300 dark:border-slate-700 shadow-inner flex items-center justify-center">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {member.badge}
                      </span>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                        {member.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                      {member.title}
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Specs & Credentials */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex flex-col gap-3">
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Core Specializations & Credentials:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {member.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="p-2.5 rounded-xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs text-emerald-500 shrink-0">check_circle</span>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Consultation Link */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Specialization: <strong className="text-slate-800 dark:text-slate-200">{member.specialization}</strong>
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello,%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(member.name)}%20regarding%20pest%20control.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Consult Directly</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Callout */}
          <div className="mt-8 p-8 rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 text-center flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Dealing with a Severe or Commercial Infestation?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl">
              Request a comprehensive on-site diagnostic audit conducted directly by our senior technical director and certified entomologist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <Link
                href="/order"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all"
              >
                Schedule Technical Audit
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>Speak with Directorate: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
