import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `Our Services - ${siteConfig.name}`,
  description: 'Explore our full range of certified pest control and fumigation services.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="w-full bg-[#0B132B] text-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Our Pest Control Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Professional, eco-friendly, and effective solutions for all types of infestations.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-16 bg-white dark:bg-[#0B132B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md bg-slate-200 dark:bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {service.details}
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <span className="material-symbols-outlined text-sm text-emerald-500">check_circle</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center gap-4">
                  <Link
                    href={`/order?service=${encodeURIComponent(service.title)}`}
                    className="px-6 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-1.5"
                  >
                    <span>Book {service.title}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Peso,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl font-bold text-xs bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-all flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-sm text-emerald-500">chat</span>
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
