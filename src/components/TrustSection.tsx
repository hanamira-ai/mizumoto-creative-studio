import { motion } from 'motion/react';
import { Shield, Zap, Award, Target, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const advantages = [
    {
      icon: Zap,
      title: 'Optimalisasi Kecepatan & Core Web Vitals',
      desc: 'Setiap baris kode dioptimalkan untuk respons cepat. Kami menerapkan server-side rendering, optimasi kompresi gambar otomatis, dan meminimalkan script pemblokir render.',
    },
    {
      icon: Shield,
      title: 'Standar Keamanan Tingkat Korporat',
      desc: 'Perlindungan maksimal terhadap SQL Injection, Cross-Site Scripting (XSS), dan serangan DDoS. Database relasional terlindungi dan dipantau berkala.',
    },
    {
      icon: Award,
      title: '10+ Tahun Pengalaman Teruji Lokal',
      desc: 'Sejak 2014, kami memahami keunikan alur bisnis lokal mulai dari kepatuhan regulasi PPDB Sekolah hingga strategi SEO lokal untuk peningkatan konversi UMKM.',
    }
  ];

  const stats = [
    { label: 'Uptime Server Rata-rata', value: '99.99%', sub: 'Keandalan infrastruktur cloud' },
    { label: 'Waktu Loading Laman', value: '< 1.2 Detik', sub: 'Standar hijau Core Web Vitals' },
    { label: 'Kepuasan Mitra Lokal', value: '100%', sub: 'Berdasarkan 350+ proyek rilis' },
  ];

  return (
    <section id="trust-section" className="py-24 bg-[#2A0A10] text-brand-offwhite relative overflow-hidden">
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8102E_1px,transparent_1px),linear-gradient(to_bottom,#C8102E_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />
      
      {/* Neon Crimson accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Core Advantages */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#5C0F1A] border border-[#C8102E]/30 text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>KEUNGGULAN REKAYASA TEKNOLOGI</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-offwhite leading-tight">
                Mizumoto Dipercaya <span className="text-[#E8394F]">Lintas Sektor</span> Skala Nasional
              </h2>
              <p className="text-brand-muted text-base mt-4 max-w-xl">
                Kami menggabungkan seni visual tingkat tinggi dengan standar rekayasa perangkat lunak modern untuk menciptakan pengalaman digital tanpa kompromi.
              </p>
            </div>

            <div className="space-y-6">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div 
                    key={idx}
                    className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#5C0F1A]/20 border border-[#C8102E]/30 flex items-center justify-center text-[#E8394F] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-brand-offwhite mb-1.5">{adv.title}</h3>
                      <p className="text-brand-muted text-xs leading-relaxed">{adv.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Statistics/Illustration */}
          <div className="lg:col-span-5 w-full">
            <div className="p-1 bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-md relative">
                
                {/* Glowing decorative spot */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C8102E]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-muted">
                    Sistem Pemantauan Performa Real-Time
                  </span>
                </div>

                <div className="space-y-6">
                  {stats.map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="border-b border-[#C8102E]/10 pb-4 last:border-b-0 last:pb-0 text-left"
                    >
                      <div className="text-xs text-brand-muted font-mono uppercase tracking-wider mb-1">
                        {stat.label}
                      </div>
                      <div className="font-display text-4xl font-black text-brand-offwhite tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-brand-muted/70 mt-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8394F]" />
                        <span>{stat.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[#C8102E]/10 text-left">
                  <div className="p-3.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg text-[11px] text-brand-muted leading-relaxed font-mono">
                    <span className="text-[#E8394F] font-bold">INFO INFRASTRUKTUR:</span> Kami menggunakan CDN global berlatensi rendah untuk mempercepat pengiriman aset gambar dan file di seluruh kota Karesidenan Pekalongan.
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
