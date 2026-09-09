'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Wizard Step: 1, 2, or 3
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
    service: siteConfig.services[0].title,
    propertyType: 'Residential House',
    rooms: '3-4 Rooms',
    preferredDate: '',
    timeSlot: 'Morning (9:00 AM - 12:00 PM)',
    urgentDispatch: false,
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [placedOrder, setPlacedOrder] = useState<any>(null);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const propertyParam = searchParams.get('property');
    const contactParam = searchParams.get('contact');

    if (serviceParam) {
      const match = siteConfig.services.find(
        (s) => s.title.toLowerCase().includes(serviceParam.toLowerCase()) || s.id.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      }
    }
    if (propertyParam) {
      setFormData((prev) => ({ ...prev, propertyType: propertyParam }));
    }
    if (contactParam) {
      setFormData((prev) => ({ ...prev, contact: contactParam }));
    }
  }, [searchParams]);

  const handleNext = () => {
    setError('');
    if (currentStep === 1) {
      if (!formData.service) {
        setError('Please select a service.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.preferredDate && !formData.urgentDispatch) {
        setError('Please choose a preferred inspection date or select Urgent Dispatch.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    setError('');
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Prepare note payload
    const formattedNotes = `[Property: ${formData.propertyType} | Rooms: ${formData.rooms} | Slot: ${formData.urgentDispatch ? 'URGENT DISPATCH' : `${formData.preferredDate} (${formData.timeSlot})`}] ${formData.notes ? `| Note: ${formData.notes}` : ''}`;

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || null,
          contact: formData.contact,
          location: formData.location,
          service: formData.service,
          notes: formattedNotes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit order. Please try again.');
      }

      setPlacedOrder(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Find active service details
  const selectedServiceObj = siteConfig.services.find((s) => s.title === formData.service) || siteConfig.services[0];

  // Success State View
  if (placedOrder) {
    const whatsappMessage = encodeURIComponent(
      `Hello Peso Pest Solutions! I just booked an order online.\n\n*Order ID:* #${placedOrder.id || 'NEW'}\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Service:* ${formData.service}\n*Property:* ${formData.propertyType}\n*Location:* ${formData.location}\n*Schedule:* ${formData.urgentDispatch ? 'URGENT DISPATCH' : `${formData.preferredDate} (${formData.timeSlot})`}\n\nPlease confirm our appointment.`
    );

    return (
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-2xl text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-4xl shadow-lg animate-bounce">
            🎉
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Booking Confirmed
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              Order Placed Successfully!
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-lg mt-1">
              Thank you for choosing <strong>{siteConfig.name}</strong>. Your inspection request has been logged in our central dispatch system.
            </p>
          </div>

          {/* Ticket ID Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-800 w-full max-w-md flex items-center justify-between">
            <div className="text-left">
              <span className="text-[11px] text-slate-400 uppercase font-bold block">Dispatch Reference ID</span>
              <span className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                #PESO-{placedOrder.id || '1082'}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
              Status: Pending Dispatch
            </span>
          </div>

          {/* Instant WhatsApp Verification Button */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md py-4 rounded-2xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Open WhatsApp for Instant Confirmation</span>
          </a>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button
              onClick={() => {
                setPlacedOrder(null);
                setCurrentStep(1);
              }}
              className="hover:underline text-emerald-600 dark:text-emerald-400 font-bold"
            >
              Book Another Service
            </button>
            <span>•</span>
            <Link href="/" className="hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 dark:border-emerald-800">
          <span className="material-symbols-outlined text-sm">calendar_month</span>
          Frictionless 3-Step Rapid Booking
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Book Pest Eradication & Fumigation
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 max-w-xl">
          Complete the quick steps below to secure your priority inspection slot. Zero upfront fee required.
        </p>

        {/* Step Progress Bar */}
        <div className="flex items-center gap-3 mt-8">
          {[
            { step: 1, label: 'Service & Space' },
            { step: 2, label: 'Schedule' },
            { step: 3, label: 'Details' },
          ].map((item, idx) => (
            <div key={item.step} className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  currentStep === item.step
                    ? 'bg-emerald-600 text-white shadow-md'
                    : currentStep > item.step
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[11px]">
                  {currentStep > item.step ? '✓' : item.step}
                </span>
                <span>{item.label}</span>
              </div>
              {idx < 2 && <span className="text-slate-300 dark:text-slate-700">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid: Wizard Form Left + Live Summary Sidebar Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Container (7 Cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-[#15223e] rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-10 shadow-xl">
          {error && (
            <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              <span>{error}</span>
            </div>
          )}

          {/* STEP 1: SERVICE & PROPERTY */}
          {currentStep === 1 && (
            <div className="flex flex-col gap-6 animate-fade-in">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center">1</span>
                <span>Select Target Pest Service</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {siteConfig.services.map((srv) => (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => setFormData({ ...formData, service: srv.title })}
                    className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between gap-3 ${
                      formData.service === srv.title
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 shadow-md text-emerald-900 dark:text-emerald-100'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-2xl text-emerald-600 dark:text-emerald-400">
                        {srv.icon}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {srv.warranty}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-sm">{srv.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {srv.shortDesc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Property Details */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex flex-col gap-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Property Category & Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Residential House">Residential House (Single/Double)</option>
                      <option value="Apartment / Flat">Apartment / High-Rise Flat</option>
                      <option value="Villa / Bungalow">Villa / Large Bungalow</option>
                      <option value="Commercial Kitchen / Café">Commercial Kitchen / Restaurant</option>
                      <option value="Corporate Office">Corporate Office Space</option>
                      <option value="Industrial Warehouse">Industrial Warehouse / Factory</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1">Approximate Footprint</label>
                    <select
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="1-2 Rooms (Small)">1-2 Rooms (Up to 1,000 sq ft)</option>
                      <option value="3-4 Rooms (Medium)">3-4 Rooms (1,200 - 2,500 sq ft)</option>
                      <option value="5-7 Rooms (Large)">5-7 Rooms (2,500 - 4,500 sq ft)</option>
                      <option value="Full Building / Villa">Full Building / Villa (5,000+ sq ft)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Continue to Step 2 (Schedule)</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          )}

          {/* STEP 2: SCHEDULE & DISPATCH */}
          {currentStep === 2 && (
            <div className="flex flex-col gap-6 animate-fade-in">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center">2</span>
                <span>Select Preferred Date & Timing</span>
              </h3>

              {/* Emergency Dispatch Toggle */}
              <label className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.urgentDispatch}
                  onChange={(e) => setFormData({ ...formData, urgentDispatch: e.target.checked })}
                  className="w-5 h-5 accent-amber-500 mt-0.5"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-amber-500">bolt</span>
                    Request 24/7 Urgent Immediate Dispatch
                  </span>
                  <span className="text-xs text-amber-700 dark:text-amber-300 mt-0.5">
                    Our nearest field unit will be dispatched to your location within 45 to 60 minutes.
                  </span>
                </div>
              </label>

              {!formData.urgentDispatch && (
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Inspection Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Morning (9:00 AM - 12:00 PM)',
                        'Afternoon (1:00 PM - 5:00 PM)',
                        'Evening (6:00 PM - 9:00 PM)',
                      ].map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                            formData.timeSlot === slot
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-1/3 py-4 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-2/3 py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Continue to Step 3 (Details)</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT & LOCATION */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fade-in">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs flex items-center justify-center">3</span>
                <span>Contact & Property Address</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="+92 333 1234567"
                    className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Full Location / Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. House #14, Street 5, Phase 6, DHA"
                  className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Special Instructions / Infestation Details (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention severe areas (e.g. kitchen cabinets, wooden frames, basement)..."
                  className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-1/3 py-4 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-2/3 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'Submitting Order...' : 'Confirm & Place Booking'}</span>
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Live Order Summary Sidebar (5 Cols) */}
        <div className="lg:col-span-5 bg-[#0B132B] text-white rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="text-base font-bold text-white">Live Booking Summary</h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-800">
              {selectedServiceObj.warranty}
            </span>
          </div>

          <div className="flex flex-col gap-4 text-xs">
            <div className="flex items-start justify-between">
              <span className="text-slate-400">Selected Service:</span>
              <span className="font-bold text-white text-right max-w-[200px]">{formData.service}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Property Category:</span>
              <span className="font-bold text-white">{formData.propertyType}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Footprint Scale:</span>
              <span className="font-bold text-white">{formData.rooms}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">Schedule:</span>
              <span className="font-bold text-amber-400">
                {formData.urgentDispatch
                  ? '⚡ URGENT IMMEDIATE DISPATCH'
                  : formData.preferredDate
                  ? `${formData.preferredDate} (${formData.timeSlot.split(' ')[0]})`
                  : 'Pending Selection'}
              </span>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>100% Free Re-treatment Warranty</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              If any target pests resurface during your warranty coverage, our eradication team returns at zero cost.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Payment Mode:</span>
            <span className="font-bold text-white">Pay After Treatment (Cash / Online)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">Loading Booking Portal...</div>}>
      <BookingContent />
    </Suspense>
  );
}
