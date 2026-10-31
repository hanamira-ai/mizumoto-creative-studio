import { Handshake, MessageSquare, Mail, MapPin, ExternalLink } from 'lucide-react';
import { COVERAGE_AREAS } from '../data';

interface FooterProps {
  view: string;
  setView: (v: string) => void;
}

export default function Footer({ view, setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Layanan Digital', action: () => { setView('home'); setTimeout(() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Tentang Studio', action: () => { setView('home'); setTimeout(() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Portofolio Projek', action: () => { setView('home'); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Proses Kerja', action: () => { setView('home'); setTimeout(() => document.getElementById('proses')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Dashboard Analitik', action: () => { setView('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: 'Reservasi Luring', action: () => { setView('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: 'Formulir Kontak', action: () => { setView('home'); setTimeout(() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' }), 100); } }
  ];

  return (
    <footer id="main-footer" className="bg-[#1A0307] border-t border-[#C8102E]/20 text-brand-muted py-16 relative overflow-hidden">
      
      {/* Subtle Glows */}
      <div id="footer-glow" className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#C8102E]/15">
          
          {/* Column 1: Brand & Bio (4 spans) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <button
  onClick={() => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }}
  className="inline-block bg-transparent border-0 cursor-pointer focus:outline-none p-0 group"
>
  <img
    src="/logo-mizumoto-cs-white.png"
    alt="Mizumoto Creative Studio"
    className="
      h-20
      w-auto
      object-contain
      transition-all
      duration-300
      group-hover:scale-105
group-hover:opacity-95
    "
  />
</button>
            
            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Jasa pembuatan website & aplikasi digital premium berbasis di Kota Pekalongan. Berdiri sejak 2014, menghadirkan estetika visual tinggi, kecepatan optimal, dan kepatuhan regulasi penuh untuk kemajuan digital Anda.
            </p>

            <div className="text-xs font-mono flex items-center gap-2 text-brand-offwhite/70">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Aktif Melayani Karesidenan Pekalongan</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 spans) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-offwhite mb-6 border-b border-[#C8102E]/10 pb-2">
              Navigasi Cepat
            </h4>
            <ul className="space-y-3.5 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="hover:text-[#E8394F] text-brand-muted bg-transparent border-0 p-0 text-left cursor-pointer focus:outline-none transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Scope Details (4 spans) */}
          <div className="lg:col-span-4 text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-brand-offwhite mb-6 border-b border-[#C8102E]/10 pb-2">
              Jangkauan Layanan Lokal
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed mb-4">
              Tim Mizumoto siap melakukan pertemuan offline/onsite langsung ke kantor atau tempat usaha Anda untuk area karesidenan berikut:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {COVERAGE_AREAS.map((area) => (
                <span
                  key={area.name}
                  className="text-[11px] font-mono bg-[#5C0F1A]/20 border border-[#C8102E]/20 text-brand-muted px-2.5 py-1 rounded-md"
                >
                  {area.name}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright metadata row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono text-brand-muted/70 text-center sm:text-left">
          <div>
            <p>© {currentYear} Mizumoto Creative Studio. Hak Cipta Dilindungi.</p>
            <p className="mt-1 text-[10px]">Pekalongan, Jawa Tengah • 10+ Tahun Menemani Transparansi Digital Indonesia</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-end items-center">
            <button
              onClick={() => { setView('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-brand-red bg-transparent border-0 p-0 cursor-pointer focus:outline-none transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-[#C8102E]/40">|</span>
            <button
              onClick={() => { setView('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-brand-red bg-transparent border-0 p-0 cursor-pointer focus:outline-none transition-colors"
            >
              Terms of Use
            </button>
            <span className="text-[#C8102E]/40">|</span>
            <a
              href="https://wa.me/6285640066619"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-red transition-colors flex items-center gap-1"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
