import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, ShieldCheck, MapPin, Award, MessageSquare, FileText } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const clientSegments = [
    { label: 'Sekolah', hoverText: 'Portal PPDB & Web Sekolah' },
    { label: 'UMKM', hoverText: 'Toko Online & Katalog Produk' },
    { label: 'Corporate', hoverText: 'Web Company Profile Elegan' },
    { label: 'Pemerintah', hoverText: 'Portal Publik & Sistem Aman' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br
from-[#5C1527]
via-[#4A1120]
to-[#2A0A10] text-[#F5F1EC] selection:bg-[#C8102E] selection:text-white"
    >
      {/* Background Decorative Grid Accent */}
      <div 
        id="hero-grid-overlay"
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--color-brand-red) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Floating Red Glow Spots for Depth */}
      <div id="glow-spot-1" className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-red rounded-full blur-[160px] opacity-20 pointer-events-none" />
      <div id="glow-spot-2" className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-secondary-dark rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div
  id="hero-ambient-light"
  className="
    absolute
    top-[12%]
    right-[18%]
    w-[520px]
    h-[520px]
    rounded-full
    pointer-events-none
    blur-[140px]
    opacity-23
    bg-white
  "
/>
{/* Hero Spotlight */}
<div
  className="
    absolute
    top-[8%]
    right-[12%]
    w-[700px]
    h-[700px]
    rounded-full
    pointer-events-none
    opacity-60
  "
  style={{
    background:
      "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 35%, rgba(255,255,255,0) 72%)",
    filter: "blur(40px)",
  }}
/>
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 30%)",
  }}
/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <motion.div
          id="hero-motion-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left"
        >
          {/* Left Column (Main Headline Content) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Badge: 10+ Years Trust */}
            <motion.div
              id="hero-badge"
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary-dark/60 border border-brand-red/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-brand-red-bright mb-6"
            >
              <Award className="w-4 h-4 text-brand-red-bright animate-pulse" />
              <span>10+ Tahun Pengalaman Teruji Lokal</span>
            </motion.div>

            {/* Headline Display Editorial */}
            <motion.h1
              id="hero-headline"
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-offwhite max-w-4xl leading-[1.08] mb-6 uppercase"
            >
              SOLUSI DIGITAL YANG <span className="text-brand-red font-black">TERPERCAYA</span> UNTUK INSTITUSI ANDA
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.p
              id="hero-description"
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-brand-muted max-w-3xl leading-relaxed mb-8 font-sans"
            >
              Mizumoto Creative Studio menghadirkan layanan rekayasa perangkat lunak premium khusus Portal Akademik PPDB Sekolah, E-Commerce UMKM lokal Pekalongan, serta Portal Pelayanan Publik Instansi Pemerintah yang aman dan responsif.
            </motion.p>

            {/* 2 CTA Buttons (WhatsApp + Request Penawaran) */}
            <motion.div
              id="hero-cta-buttons"
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto mb-10"
            >
              <a
                id="hero-whatsapp-cta"
                href="https://wa.me/6285640066619?text=Halo%20Mizumoto%20Creative%20Studio%2C%20saya%20tertarik%20untuk%20konsultasi%20jasa%20pembuatan%20website"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-red hover:bg-brand-red-bright text-brand-offwhite font-bold rounded-lg shadow-lg shadow-brand-red/20 border border-brand-red-bright/30 flex items-center justify-center gap-2 group transition-all duration-300 transform hover:-translate-y-0.5 text-xs uppercase tracking-widest cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Fast Response
              </a>
              <a
                id="hero-quotation-cta"
                href="#b2g-quotation-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('b2g-quotation-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="
w-full sm:w-auto
px-7 py-3.5
bg-brand-secondary-dark/50
hover:bg-brand-secondary-dark-alt
text-brand-offwhite
font-bold
rounded-lg
border
border-brand-red/35
flex
items-center
justify-center
gap-2
transition-all
duration-300
hover:border-brand-red-bright/60
hover:shadow-lg
hover:shadow-brand-red/20
hover:-translate-y-0.5
text-xs
uppercase
tracking-widest
cursor-pointer
"
              >
                <FileText className="w-4 h-4" />
                Request Penawaran Resmi
              </a>
            </motion.div>

            {/* Client Segments */}
            <motion.div
              id="hero-segments"
              variants={itemVariants}
              className="w-full max-w-3xl"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-offwhite/80 mb-4">
                Segmen Layanan Terfokus:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {clientSegments.map((segment) => (
                  <div
                    key={segment.label}
                    className="px-4 py-2 bg-[#C8102E] border border-brand-red-bright/30 rounded-full text-xs text-white font-bold hover:bg-brand-red-bright transition-all duration-300 cursor-default shadow-md shadow-[#C8102E]/20"
                    title={segment.hoverText}
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
                    {segment.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Placeholder Foto/Mockup) */}
          <motion.div
            id="hero-mockup"
            variants={itemVariants}
            animate={{
        y: [0, -8, 0]
    }}
    transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
    }}
            className="lg:col-span-5 w-full relative"
          >
            {/* Premium Ambient Radial Glow behind the mockup (soft corporate feel) */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                width: '130%',
                height: '130%',
                background:'radial-gradient(circle, rgba(232,57,79,0.55) 0%, rgba(232,57,79,0) 70%)',
                filter: 'blur(100px)',
              }}
            />
            
            <div className="relative z-10 p-1 bg-brand-red/10 rounded-2xl border border-brand-red/20 overflow-hidden shadow-2xl backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                alt="Workspace Web App Dashboard Mockup"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover object-center rounded-xl hover:scale-(1.02) transition-all duration-700"
              />
              
              {/* Overlaid stats label for visual credibility */}
              <div className="absolute bottom-4 left-4 right-4 bg-brand-dark-base/85 border border-[#C8102E]/30 backdrop-blur-md p-4 rounded-xl flex items-center justify-between text-left">
                <div>
                  <div className="text-[10px] font-mono text-[#E8394F] uppercase font-bold tracking-widest mb-1">Audit Keamanan Siber</div>
                  <div className="font-display font-black text-brand-offwhite text-sm sm:text-base">Sertifikat SSL & SQLi Safe</div>
                </div>
                <div className="w-10 h-10 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center text-green-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating High-trust micro cards */}
        <motion.div
          id="hero-trust-metrics"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-20 border-t border-brand-secondary-dark/30 pt-10 text-left"
        >
          <div className="
flex
items-start
gap-4
p-5
rounded-xl
bg-white/[0.025]
border
border-white/10
transition-all
duration-300
hover:bg-white/[0.05]
hover:border-brand-red/25
hover:-translate-y-1
">
            <div className="p-3 rounded-lg bg-brand-secondary-dark/45 border border-brand-red/20 text-brand-red-bright">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-brand-offwhite font-display font-bold text-base">Komitmen Mutu 10+ Tahun</h4>
              <p className="text-brand-muted text-xs mt-1">Beroperasi konsisten sejak 2014 melayani ratusan kemitraan digital.</p>
            </div>
          </div>
          
          <div className="
flex
items-start
gap-4
p-5
rounded-xl
bg-white/[0.025]
border
border-white/10
transition-all
duration-300
hover:bg-white/[0.05]
hover:border-brand-red/25
hover:-translate-y-1
">
            <div className="p-3 rounded-lg bg-brand-secondary-dark/45 border border-brand-red/20 text-brand-red-bright">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-brand-offwhite font-display font-bold text-base">Kehadiran Offline Nyata</h4>
              <p className="text-brand-muted text-xs mt-1">Studio fisik di Pekalongan untuk berkoordinasi & rapat luring kapan saja.</p>
            </div>
          </div>

          <div className="
flex
items-start
gap-4
p-5
rounded-xl
bg-white/[0.025]
border
border-white/10
transition-all
duration-300
hover:bg-white/[0.05]
hover:border-brand-red/25
hover:-translate-y-1
">
            <div className="p-3 rounded-lg bg-brand-secondary-dark/45 border border-brand-red/20 text-brand-red-bright">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-brand-offwhite font-display font-bold text-base">Garansi & SLA Terukur</h4>
              <p className="text-brand-muted text-xs mt-1">Garansi purnajual penuh 3 bulan menjamin keandalan sistem Anda.</p>
            </div>
          </div>
        </motion.div>
        
      </div>

      {/* Subtle Horizontal Light Streak Divider */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #E8394F, transparent)',
          boxShadow: '0 0 40px 10px rgba(232,57,79,0.55)',
        }}
      />
    </section>
  );
}
