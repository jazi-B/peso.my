'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

function OrderForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
    service: siteConfig.services[0].title,
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState<number | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      const match = siteConfig.services.find(
        (s) => s.title.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to place order. Please try again.');
      }

      setPlacedOrderId(data.id || 1);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    const whatsappMsg = encodeURIComponent(
      `Hello Peso Pest Solutions! I just booked a service.\n\n*Order ID:* #${placedOrderId}\n*Name:* ${formData.name}\n*Contact:* ${formData.contact}\n*Service:* ${formData.service}\n*Location:* ${formData.location}\n\nPlease confirm our appointment.`
    );

    return (
      <div className="max-w-xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white dark:bg-[#15223e] border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-xl text-center flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl">
            ✓
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Booking Submitted!
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Thank you for choosing <strong>{siteConfig.name}</strong>. We will contact you shortly to confirm your appointment.
            </p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Confirm on WhatsApp</span>
          </a>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({
                  name: '',
                  email: '',
                  contact: '',
                  location: '',
                  service: siteConfig.services[0].title,
                  notes: '',
                });
              }}
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
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
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Book a Service
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
          Fill out the form below or contact us directly via WhatsApp for immediate assistance.
        </p>
      </div>

      <div className="bg-white dark:bg-[#15223e] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-10 shadow-xl">
        {error && (
          <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-semibold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-base">error</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Contact / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="+92 333 6218102"
              className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Location / Address *
            </label>
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. House #12, Street 4, City"
              className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Service Type *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {siteConfig.services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Additional Notes (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any specific instructions or details about the infestation..."
              className="w-full p-3.5 rounded-xl text-sm bg-slate-50 dark:bg-[#111e38] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>{loading ? 'Submitting...' : 'Submit Order'}</span>
            <span className="material-symbols-outlined text-lg">check_circle</span>
          </button>
        </form>

        {/* Direct WhatsApp Callout */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400">Prefer direct contact?</span>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappClean}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Chat Directly on WhatsApp ({siteConfig.contact.whatsapp})</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<div className="max-w-2xl mx-auto px-4 py-20 text-center text-slate-500">Loading...</div>}>
      <OrderForm />
    </Suspense>
  );
}
