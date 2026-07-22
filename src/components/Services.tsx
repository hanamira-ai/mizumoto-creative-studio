import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { GraduationCap, ShoppingBag, Cpu, Building2, Briefcase, Check, Sparkles } from 'lucide-react';

// Dynamic Icon Renderer Map
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  GraduationCap: GraduationCap,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Building2: Building2,
  Briefcase: Briefcase,
};

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="layanan" className="py-24 relative bg-white">
      
      {/* Decorative Subtle Accent */}
      <div id="services-blur" className="absolute top-1/2 left-0 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="services-header" className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUSI SPESIFIK & SEKTORAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A0307] leading-tight">
            Menghadirkan Layanan Pembuatan <span className="text-[#C8102E]">Website & Aplikasi</span> Terstandarisasi Premium
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl">
            Dari e-commerce UMKM yang ramah kantong dan instan hingga sistem portal pendidikan sekolah terpadu serta dashboard instansi pemerintah yang memiliki kepatuhan keamanan tinggi.
          </p>
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Cpu;
            
            return (
              <motion.div
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group relative bg-[#F8F6F4] border border-gray-200/80 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#C8102E]/30"
              >
                {/* Accent Corner Light */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C8102E]/5 group-hover:bg-[#C8102E]/10 rounded-bl-3xl blur-md transition-all duration-300 pointer-events-none" />

                <div className="relative">
                  {/* Icon & Target Audience Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white border border-gray-200 rounded-xl text-[#C8102E] group-hover:text-brand-red-bright transition-colors group-hover:scale-105 duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C8102E] bg-[#C8102E]/10 border border-[#C8102E]/20 px-3 py-1 rounded-full">
                      {service.targetAudience}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-[#1A0307] group-hover:text-[#C8102E] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Key Features Bullet List */}
                <div className="border-t border-gray-200/80 pt-4 mt-auto">
                  <p className="text-xs font-mono font-bold tracking-wider text-[#1A0307] mb-3">FITUR UTAMA:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5 text-xs text-gray-600">
                        <Check className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
