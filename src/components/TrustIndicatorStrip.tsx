import { GraduationCap, Building2, ShoppingBag, Briefcase, Sparkles } from 'lucide-react';

export default function TrustIndicatorStrip() {
  const partners = [
    { name: 'Sekolah Negeri & Swasta', icon: GraduationCap, detail: 'Portal PPDB & Akademik' },
    { name: 'Instansi Pemerintah Daerah', icon: Building2, detail: 'Portal Publik & Pengaduan' },
    { name: 'Sentra UMKM Pekalongan', icon: ShoppingBag, detail: 'E-Commerce & Catalog' },
    { name: 'Korporasi Swasta', icon: Briefcase, detail: 'Company Profile & Custom SaaS' }
  ];

  return (
    <div id="trust-indicator-strip" className="bg-gradient-to-b
from-[#3A121C]
to-[#2A0A10] border-y border-[#C8102E]/20 py-8 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at top center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 65%)",
  }}
/>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#C8102E]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2 shrink-0 text-left">
            <Sparkles className="w-4 h-4 text-[#E8394F] animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-muted">
              Dipercaya Lintas Sektor Karesidenan:
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto items-center">
            {partners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 justify-center md:justify-start px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#C8102E]/30 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-brand-muted group-hover:text-[#E8394F] transition-colors" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-brand-offwhite group-hover:text-brand-offwhite transition-colors">{partner.name}</div>
                    <div className="text-[9px] font-mono text-brand-muted/70 tracking-tight">{partner.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
