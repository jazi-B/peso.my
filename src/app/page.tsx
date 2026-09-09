'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  const router = useRouter();

  // Hero Quick Quote Form State
  const [heroPest, setHeroPest] = useState('Termites');
  const [heroProperty, setHeroProperty] = useState('Residential House');
  const [heroContact, setHeroContact] = useState('');
  const [heroFeedback, setHeroFeedback] = useState(false);

  // Interactive Calculator State
  const [calcProperty, setCalcProperty] = useState<'apartment' | 'house' | 'villa' | 'commercial'>('house');
  const [calcPest, setCalcPest] = useState('general');
  const [calcRooms, setCalcRooms] = useState(3);
  const [calcUrgency, setCalcUrgency] = useState(false);

  // Active FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active Pest Tab
  const [activePestIndex, setActivePestIndex] = useState(0);

  // Calculate estimated price
  const calculatePrice = () => {
    let base = 4000;
    if (calcProperty === 'apartment') base = 3500;
    if (calcProperty === 'house') base = 5000;
    if (calcProperty === 'villa') base = 7500;
    if (calcProperty === 'commercial') base = 9000;

    let pestMultiplier = 1;
    if (calcPest === 'termites') pestMultiplier = 1.7;
    if (calcPest === 'fumigation') pestMultiplier = 1.4;
    if (calcPest === 'bedbugs') pestMultiplier = 1.3;
    if (calcPest === 'rodent') pestMultiplier = 1.2;

    const roomAddition = (calcRooms - 1) * 600;
    const urgencyAddition = calcUrgency ? 1000 : 0;

    const total = Math.round((base * pestMultiplier) + roomAddition + urgencyAddition);
    return total.toLocaleString();
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHeroFeedback(true);
    setTimeout(() => {
      router.push(`/order?service=${encodeURIComponent(heroPest)}&property=${encodeURIComponent(heroProperty)}&contact=${encodeURIComponent(heroContact)}`);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Flash Alert Sub-Banner */}
      <section className="w-full bg-[#0B132B] py-2 px-4 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/20 text-red-400">
              <span className="material-symbols-outlined text-sm">warning</span>
            </span>
            <span className="font-semibold text-white">
              Seasonal Pest Alert: High Termite & Mosquito Activity Reported Across Major Hubs
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-emerald-400">verified</span>
              Govt-Licensed PCO #MY-89240
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-amber-400 font-bold">Avg Arrival: 45 Mins</span>
          </div>
        </div>
      </section>

      {/* 2. Hero Section with Split Interactive Quote Console */}
      <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0B132B] dark:via-[#111e38] dark:to-[#0B132B] py-16 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Headings & Social Proof */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Badges Stack */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800">
                  <span className="material-symbols-outlined text-sm text-emerald-600 dark:text-emerald-400">shield</span>
                  Hospital-Grade Biosecurity
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-800">
                  <span className="material-symbols-outlined text-sm text-amber-600 dark:text-amber-400">eco</span>
                  100% Odorless & Pet Safe
                </span>
              </div>

              {/* Master Headline */}
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                  Pest-Free Living, <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500">
                    100% Guaranteed.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                  Government-licensed precision fumigation, thermal insect eradication, and long-term termite barrier defense. Protecting over 5,000+ residences, villas, and commercial facilities with zero toxic residue.
                </p>
              </div>

              {/* Trust Metric Micro-Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {siteConfig.trustStats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                      <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                      <span className="text-xl font-extrabold text-slate-900 dark:text-white">{stat.value}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Review Stars & Verified Badge */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs border-2 border-white dark:border-slate-900 shadow">
                    5★
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs border-2 border-white dark:border-slate-900 shadow">
                    ✓
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white font-bold flex items-center justify-center text-xs border-2 border-white dark:border-slate-900 shadow">
                    +5k
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    {'★★★★★'}
                    <span className="font-bold text-slate-900 dark:text-white ml-1">4.9 / 5.0</span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Verified Homeowners, Restaurants & Commercial Facilities
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Embedded Instant Assessment & Booking Console */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white/95 dark:bg-[#15223e]/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700/80">
                <div className="absolute -top-1 left-8 right-8 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-teal-500"></div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Instant Free Assessment</h3>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    60-Sec Booking
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  Select your pest issue to get an instant scope estimate and prioritized dispatch slot.
                </p>

                <form onSubmit={handleHeroSubmit} className="flex flex-col gap-4">
                  {/* Select Target Pest */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Target Pest / Infestation Issue
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'Termites', icon: 'pest_control' },
                        { name: 'Cockroaches', icon: 'bug_report' },
                        { name: 'Bed Bugs', icon: 'pest_control_rodent' },
                        { name: 'Fumigation', icon: 'cloud' },
                      ].map((pest) => (
                        <button
                          type="button"
                          key={pest.name}
                          onClick={() => setHeroPest(pest.name)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                            heroPest === pest.name
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-sm'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="material-symbols-outlined text-base text-emerald-600 dark:text-emerald-400">{pest.icon}</span>
                          <span>{pest.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Property Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Property Category
                    </label>
                    <select
                      value={heroProperty}
                      onChange={(e) => setHeroProperty(e.target.value)}
                      className="w-full p-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option value="Residential House">Residential House / Home</option>
                      <option value="Apartment / Flat">Apartment / Flat</option>
                      <option value="Villa / Bungalow">Villa / Bungalow</option>
                      <option value="Commercial Office / Restaurant">Commercial Office / Restaurant</option>
                      <option value="Industrial Warehouse">Industrial Warehouse</option>
                    </select>
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Your Contact / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={heroContact}
                      onChange={(e) => setHeroContact(e.target.value)}
                      placeholder="+92 333 1234567"
                      className="w-full p-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{heroFeedback ? 'Opening Booking Portal...' : 'Proceed to Fast Booking'}</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-emerald-500">lock</span>
                      Zero spam guarantee
                    </span>
                    <span>100% Free Initial Advice</span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Pest Diagnostic Matrix & Bio-Risk Library */}
      <section id="pest-library" className="w-full py-20 bg-white dark:bg-[#0B132B] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3 border border-red-200 dark:border-red-900">
              <span className="material-symbols-outlined text-sm">biotech</span>
              Bio-Threat Diagnostic Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Interactive Pest Identifier & Risk Library
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Identify your infestation symptoms and understand biological risks before structural or health damage escalates.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {siteConfig.pestLibrary.map((pest, index) => (
              <button
                key={pest.name}
                onClick={() => setActivePestIndex(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activePestIndex === index
                    ? 'bg-[#0B132B] dark:bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="material-symbols-outlined text-base">{pest.icon}</span>
                <span>{pest.name}</span>
                <span
                  className="px-1.5 py-0.5 rounded text-[10px] font-bold text-white"
                  style={{ backgroundColor: pest.riskColor }}
                >
                  {pest.risk}
                </span>
              </button>
            ))}
          </div>

          {/* Active Pest Spotlight Card */}
          {(() => {
            const currentPest = siteConfig.pestLibrary[activePestIndex];
            return (
              <div className="rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-black text-white"
                      style={{ backgroundColor: currentPest.riskColor }}
                    >
                      THREAT SEVERITY: {currentPest.risk}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                      Taxonomy: {currentPest.scientific}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {currentPest.name}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase mb-1.5">
                        <span className="material-symbols-outlined text-base">search</span>
                        Signs of Infestation
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {currentPest.signs}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white dark:bg-[#111e38] border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase mb-1.5">
                        <span className="material-symbols-outlined text-base">dangerous</span>
                        Health & Structural Damage
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {currentPest.damage}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                    <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-2xl shrink-0">
                      verified
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase">
                        Recommended Treatment Protocol
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 mt-0.5">
                        {currentPest.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-4 bg-white dark:bg-[#111e38] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl">{currentPest.icon}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Need Immediate Eradication?
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Our certified field technicians can dispatch to your location with hospital-grade equipment.
                  </p>

                  <Link
                    href={`/order?service=${encodeURIComponent(currentPest.name)}`}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Book {currentPest.name} Eradication</span>
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Peso,%20I%20have%20an%20issue%20with%20${encodeURIComponent(currentPest.name)}.%20Please%20advise.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    Ask Specialist on WhatsApp
                  </a>
                </div>
              </div>
            );
          })()}

          {/* "Unsure What Pest You Have?" Help Card */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#0B132B] to-[#1D3557] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">photo_camera</span>
              </div>
              <div>
                <h4 className="text-base font-bold">Unsure What Pest You Are Dealing With?</h4>
                <p className="text-xs text-slate-300">
                  Take a quick photo and WhatsApp our entomologist triage team for instant identification in &lt; 4 mins.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=Hello%20Peso,%20I%20am%20sending%20a%20photo%20of%20a%20pest%20for%20identification.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-900 shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Send Pest Photo via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Interactive Cost Calculator & Instant Quote Estimator */}
      <section id="calculator" className="w-full py-20 bg-slate-50 dark:bg-[#111e38] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 dark:border-emerald-800">
              <span className="material-symbols-outlined text-sm">calculate</span>
              Transparent Investment Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Interactive Instant Quote Calculator
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Configure your property specs and pest vector for an immediate baseline estimate. Fixed pricing, no surprise fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Calculator Controls */}
            <div className="lg:col-span-7 bg-white dark:bg-[#15223e] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col gap-6">
              {/* Step 1: Property Type */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  1. Select Property Footprint
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'apartment', label: 'Apartment', icon: 'apartment' },
                    { id: 'house', label: 'House', icon: 'home' },
                    { id: 'villa', label: 'Villa', icon: 'villa' },
                    { id: 'commercial', label: 'Commercial', icon: 'storefront' },
                  ].map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setCalcProperty(p.id as any)}
                      className={`p-3 rounded-xl flex flex-col items-center gap-1 text-xs font-bold border transition-all ${
                        calcProperty === p.id
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{p.icon}</span>
                      <span>{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Pest */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  2. Select Pest Service Needed
                </label>
                <select
                  value={calcPest}
                  onChange={(e) => setCalcPest(e.target.value)}
                  className="w-full p-3.5 rounded-xl text-sm font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                >
                  <option value="general">General Pest Control (Cockroaches, Ants, Spiders)</option>
                  <option value="termites">Termite Proofing & Colony Elimination (5-Yr Warranty)</option>
                  <option value="fumigation">Deep Fumigation & Thermal Fogging</option>
                  <option value="bedbugs">Bed Bug Heat & Residual Treatment</option>
                  <option value="rodent">Rodent Exclusion & Trapping</option>
                </select>
              </div>

              {/* Step 3: Room / Area Counter */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    3. Approximate Number of Rooms / Zones
                  </label>
                  <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                    {calcRooms} {calcRooms === 1 ? 'Room' : 'Rooms / Zones'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={calcRooms}
                  onChange={(e) => setCalcRooms(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1 Room</span>
                  <span>5 Rooms</span>
                  <span>10+ Rooms</span>
                </div>
              </div>

              {/* Step 4: Urgency Toggle */}
              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={calcUrgency}
                  onChange={(e) => setCalcUrgency(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-amber-500">bolt</span>
                    Need Urgent Same-Day Emergency Dispatch (+Rs. 1,000)
                  </span>
                  <span className="text-[11px] text-amber-700 dark:text-amber-300">
                    Guaranteed arrival within 45-60 minutes across city hubs.
                  </span>
                </div>
              </label>
            </div>

            {/* Calculated Breakdown Card */}
            <div className="lg:col-span-5 bg-[#0B132B] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                  <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    Estimated Cost Estimate
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    100% Guaranteed
                  </span>
                </div>

                <div className="my-6">
                  <div className="text-xs text-slate-400">Estimated Total (Inclusive of Chemicals):</div>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1 text-emerald-400">
                    Rs. {calculatePrice()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    * Final quote confirmed post on-site inspection.
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span>Target Service:</span>
                    <span className="font-bold text-white uppercase">{calcPest}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Property Footprint:</span>
                    <span className="font-bold text-white uppercase">{calcProperty} ({calcRooms} Rooms)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Warranty Included:</span>
                    <span className="font-bold text-emerald-400">Full Free Re-treatment</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Chemical Safety:</span>
                    <span className="font-bold text-white">100% Odorless & Pet-Safe</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/order?service=${encodeURIComponent(calcPest)}&property=${encodeURIComponent(calcProperty)}`}
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Lock This Price & Book</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Services Grid (with Warranty Badges) */}
      <section id="services" className="w-full py-20 bg-white dark:bg-[#0B132B] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 dark:border-emerald-800">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Engineered Disinfestation Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hospital-Grade Pest Control Solutions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
              Certified biocide formulations backed by official warranty certificates and post-treatment inspections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-slate-50 dark:bg-[#15223e] border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B132B]/80 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-800">
                    {service.warranty}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                      {service.shortDesc}
                    </p>

                    <div className="flex flex-col gap-1.5 mt-4">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                          <span className="material-symbols-outlined text-xs text-emerald-500">check_circle</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Starting from</span>
                      <span className="text-lg font-black text-slate-900 dark:text-white">{service.startingPrice}</span>
                    </div>
                    <Link
                      href={`/order?service=${encodeURIComponent(service.title)}`}
                      className="px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center gap-1"
                    >
                      <span>Book Service</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Meet Our Leadership & Certified Specialists" Section */}
      <section className="w-full py-20 bg-[#0B132B] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider w-fit border border-emerald-800">
                <span className="material-symbols-outlined text-sm">engineering</span>
                Scientific Directorate & Field Command
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Meet the Experts Behind Your Pest-Free Space
              </h2>
              <p className="text-slate-400 text-sm">
                Certified urban entomologists, structural defense engineers, and licensed fumigation directors with 15+ years of combined experience.
              </p>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-colors w-fit"
            >
              <span>View Full Leadership & Field Team</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.teamMembers.map((member, i) => (
              <div
                key={i}
                className="bg-[#15223e] p-6 rounded-2xl border border-slate-800 flex flex-col justify-between gap-4 hover:border-emerald-500/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {member.badge}
                    </span>
                    <span className="text-xs text-amber-400 font-bold">{member.experience}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs text-slate-400 font-semibold mb-3">{member.title}</div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex flex-col gap-1 text-[11px] text-slate-400">
                  <div className="text-emerald-400 font-bold">Specialization:</div>
                  <div className="truncate">{member.specialization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 3-Step "How It Works" Protocol */}
      <section className="w-full py-20 bg-slate-50 dark:bg-[#111e38] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200 dark:border-amber-800">
              <span className="material-symbols-outlined text-sm">sync</span>
              Standard Operating Procedure
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              3-Step Precision Eradication Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Thermal & Acoustic Scan',
                desc: 'Our technician maps hidden wall cavities, sub-floor colonies, and pest runways using acoustic sensors and thermal diagnostics.',
                icon: 'radar',
              },
              {
                step: '02',
                title: 'Eco-Biocide Precision Strike',
                desc: 'Application of targeted, odorless bio-rational formulas, insect growth regulators (IGR), and deep barrier injections.',
                icon: 'pest_control',
              },
              {
                step: '03',
                title: 'Warranty & Follow-Up Check',
                desc: 'Post-treatment barrier inspection with an official Warranty Certificate. Free re-treatments guaranteed if pests return.',
                icon: 'verified',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between"
              >
                <div className="text-4xl font-black text-slate-200 dark:text-slate-800 mb-4">{item.step}</div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Interactive FAQ Accordion */}
      <section className="w-full py-20 bg-white dark:bg-[#0B132B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Everything you need to know about our chemicals, dispatch time, safety, and warranties.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {siteConfig.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-[#15223e] transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="material-symbols-outlined text-lg shrink-0 text-slate-400">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Bottom Emergency Dispatch Banner */}
      <section className="w-full bg-gradient-to-r from-emerald-700 via-teal-700 to-[#0B132B] py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-black">Severe Infestation? Don&apos;t Wait for Property Damage.</h3>
            <p className="text-slate-200 text-sm">
              Our emergency eradication teams are on standby 24/7 across all metropolitan zones.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-900 shadow-xl flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-lg">phone_in_talk</span>
              <span>Call Emergency Hotline</span>
            </a>

            <Link
              href="/order"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-100 text-emerald-900 shadow-xl flex items-center gap-2 transition-all"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Book On-Site Inspection</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
