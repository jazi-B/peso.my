import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `Our Specialized Pest Services - ${siteConfig.name}`,
  description: 'Explore our full range of certified pest control, termite proofing, and fumigation services.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-20 px-4 sm:px-6 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Comprehensive Treatment Catalog
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Specialized Disinfestation & Biosecurity
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
            All services utilize government-approved, odorless, child and pet-safe bio-rational formulations backed by our 100% Satisfaction Re-treatment Warranty.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700/80 p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row gap-10 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Col */}
              <div className="w-full lg:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-lg relative bg-slate-200 dark:bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-[#0B132B]/90 backdrop-blur-md text-emerald-400 font-bold text-xs border border-emerald-800">
                  {service.warranty}
                </div>
              </div>

              {/* Details Col */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Official Protocol
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {service.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {service.details}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <span className="material-symbols-outlined text-sm text-emerald-500">check_circle</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Baseline Pricing</span>
                    <span className="text-xl font-black text-slate-900 dark:text-white">{service.startingPrice}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/order?service=${encodeURIComponent(service.title)}`}
                      className="px-6 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-1.5"
                    >
                      <span>Book {service.title}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
