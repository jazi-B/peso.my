import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `About Us - ${siteConfig.name}`,
  description: 'Learn more about our mission, certified entomology standards, and eco-friendly safety protocols.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-20 px-4 sm:px-6 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
            <span className="material-symbols-outlined text-sm">shield</span>
            About Peso Pest Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Protecting Homes & Health With Science
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700/80 p-8 sm:p-12 shadow-sm flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Our Mission: Precision Eradication Without Environmental Compromise
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              At <strong>{siteConfig.name}</strong>, we believe you shouldn&apos;t have to choose between effective pest eradication and the health of your family, pets, or food supply. Founded with a vision to modernize pest defense across Pakistan, we utilize government-approved, odorless, bio-rational chemistries that eradicate pest colonies without leaving toxic airborne or surface residues.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">verified_user</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Licensed & Vetted</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Every technician undergoes rigorous background checks and continuous training in entomology safety protocols.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">eco</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">100% Eco-Safe</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Formulated to specifically target cold-blooded insect biological systems without harming humans or pets.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">thumb_up</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">100% Satisfaction</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  We don&apos;t leave until the infestation is completely eliminated. Backed by free warranty re-treatments.
                </p>
              </div>
            </div>

            {/* Meet Our Team Link */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Meet Our Technical Directorate</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Discover our leadership, certified entomologists, and field commanders.
                </p>
              </div>
              <Link
                href="/team"
                className="px-6 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-1.5"
              >
                <span>View Team & Credentials</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
