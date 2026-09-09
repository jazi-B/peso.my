import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const Footer = () => {
  return (
    <footer className="bg-[#0B132B] text-white border-t border-slate-800 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Peso Logo" className="h-8 w-auto object-contain" />
              <span className="text-2xl font-black tracking-tight text-emerald-400">{siteConfig.name}</span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800">
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Govt-Approved Chemicals
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-950 text-amber-400 text-xs font-bold border border-amber-800">
                <span className="material-symbols-outlined text-sm">eco</span>
                100% Pet-Safe
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-emerald-400 transition-colors">Our Team</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/order" className="hover:text-emerald-400 transition-colors">Book a Service</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Contact & Inquiries</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 text-white hover:text-amber-400 font-bold transition-colors">
                <span className="material-symbols-outlined text-amber-400 text-lg">call</span>
                <span>{siteConfig.contact.phone}</span>
              </a>

              <a href={`https://wa.me/${siteConfig.contact.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-emerald-400 font-bold transition-colors">
                <span className="material-symbols-outlined text-emerald-400 text-lg">chat</span>
                <span>WhatsApp: {siteConfig.contact.whatsapp}</span>
              </a>

              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <span className="material-symbols-outlined text-lg text-slate-500">mail</span>
                <span className="truncate">{siteConfig.contact.email}</span>
              </a>

              <a href={siteConfig.contact.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <span className="material-symbols-outlined text-lg text-blue-400">thumb_up</span>
                <span>Facebook Page</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Customer Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
