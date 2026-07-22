import { motion } from 'motion/react';
import { Award, Users, CheckCircle2, ShieldCheck, Landmark } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '10+', label: 'Tahun Berdiri', desc: 'Sejak tahun 2014 konsisten berkarya' },
    { value: '350+', label: 'Proyek Selesai', desc: 'Website & aplikasi terintegrasi' },
    { value: '98%', label: 'Kepuasan Klien', desc: 'Sesuai ekspektasi dan regulasi' },
    { value: '8+', label: 'Jangkauan Wilayah', desc: 'Karesidenan Pekalongan & sekitarnya' },
  ];

  const coreStrengths = [
    {
      icon: Users,
      title: 'Tim Lokal Pekalongan',
      desc: 'Mudah berkoordinasi langsung, rapat luring (offline), dan pendampingan pasca rilis langsung di kantor Anda.',
      highlight: true
    },
    {
      icon: Landmark,
      title: 'Kepatuhan Regulasi',
      desc: 'Website sekolah & portal pemerintah disesuaikan dengan aturan formal Kemendikbud dan Kominfo.',
      highlight: false
    },
    {
      icon: Award,
      title: 'Estetika Premium',
      desc: 'Setiap desain melewati proses kurasi visual tingkat tinggi agar merepresentasikan prestise brand Anda.',
      highlight: false
    },
    {
      icon: ShieldCheck,
      title: 'Keamanan Data',
      desc: 'Protokol perlindungan siber modern, enkripsi SSL, pencegahan SQL Injection, serta backup otomatis berkala.',
      highlight: false
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-[#F8F6F4] text-[#1A0307] relative overflow-hidden">
      
      {/* Decorative Subtle Light Background Accent */}
      <div id="about-light-decor" className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          <motion.div
            id="about-text-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
              SIAPA KAMI
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A0307] leading-tight">
              Tentang <span className="text-[#C8102E]">Mizumoto</span>: Rekayasa Teknologi & Reputasi Digital
            </h2>
            <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              Berdiri sejak tahun 2014 di Kota Pekalongan, kami telah mendampingi ratusan lembaga pendidikan, pelaku UMKM, startup teknologi, hingga instansi pemerintahan daerah bertransformasi secara digital.
            </p>
            <p className="mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
              Logo hexagon merah kami melambangkan kekuatan struktur, sedangkan motif dua tangan berjabat melambangkan komitmen kemitraan, kolaborasi erat, dan transparansi penuh di setiap proyek. Kami tidak sekadar membuat website, kami mendesain reputasi digital Anda.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-lg text-xs font-mono text-[#1A0307]">
                <CheckCircle2 className="w-4 h-4 text-[#C8102E]" />
                <span>Berlisensi Resmi</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-lg text-xs font-mono text-[#1A0307]">
                <CheckCircle2 className="w-4 h-4 text-[#C8102E]" />
                <span>Koordinasi Onsite / Offline</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Presentation / Tim Photo Stock Placeholder */}
          <motion.div
            id="about-visual-showcase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-gray-200 aspect-video bg-gray-900">
              {/* Photo team/collaboration Pekalongan */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Mizumoto Creative Studio Team Collaboration Pekalongan"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-xs font-mono tracking-wider bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-brand-red/10">
                  Studio Kolaboratif & Workshop Mizumoto
                </p>
              </div>
            </div>
            
            {/* Background highlights */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red/10 rounded-xl pointer-events-none -z-0 blur-md" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#C8102E]/5 rounded-xl pointer-events-none -z-0 blur-md" />
          </motion.div>

        </div>

        {/* Core Strengths Bento Grid with 1 card highlighted */}
        <div className="mb-20">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-center mb-10 text-[#1A0307]">
            Mengapa Memilih Kami dibanding Jasa Lainnya?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {coreStrengths.map((strength, idx) => {
              const Icon = strength.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-xl transition-all duration-300 shadow-sm ${
                    strength.highlight
                      ? 'bg-gradient-to-b from-[#C8102E] to-[#5C0F1A] border border-brand-red-bright text-brand-offwhite scale-100 md:scale-105 z-10 shadow-lg shadow-brand-red/20'
                      : 'bg-white border border-gray-200/80 hover:border-[#C8102E]/30 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 border ${
                    strength.highlight 
                      ? 'bg-white/10 border-white/20 text-white' 
                      : 'bg-[#C8102E]/10 border-[#C8102E]/20 text-[#C8102E]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className={`font-display font-bold text-base sm:text-lg mb-2 ${
                    strength.highlight ? 'text-white' : 'text-[#1A0307]'
                  }`}>
                    {strength.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    strength.highlight ? 'text-brand-offwhite/90' : 'text-gray-600'
                  }`}>
                    {strength.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Strip Editorial - Styled as a distinct Dark Maroon Card Strip */}
        <div id="about-stats-container" className="bg-[#1A0307] border border-[#C8102E]/20 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-[#F5F1EC] mt-16">
          {/* Background grid accent */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C8102E 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#E8394F] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#F5F1EC] mt-3 font-mono uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-[11px] text-brand-muted mt-1 max-w-[180px]">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
