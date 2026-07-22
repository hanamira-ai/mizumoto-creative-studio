import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { Sparkles } from 'lucide-react';

export default function Process() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="proses" className="py-24 bg-[#F8F6F4] relative">
      
      {/* Decorative Blur BG */}
      <div id="process-glow" className="absolute top-1/4 right-0 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ALUR KERJA TERSTRUKTUR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A0307] leading-tight">
            Metodologi Profesional <span className="text-[#C8102E]">Mizumoto</span> untuk Kualitas Tanpa Kompromi
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4">
            Kami menerapkan tahapan pengerjaan transparan berstandar korporat global untuk menjamin produk akhir yang fungsional, andal, dan minim risiko bug.
          </p>
        </div>

        {/* Timeline Horizontal/Vertical list */}
        <motion.div
          id="process-steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative"
        >
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative p-6 bg-white border border-gray-200 shadow-sm rounded-xl hover:border-[#C8102E]/30 transition-all duration-300 group hover:shadow-md"
            >
              {/* Giant elegant background numbers */}
              <div className="font-display text-6xl sm:text-7xl font-black text-[#C8102E]/10 group-hover:text-[#C8102E]/20 transition-colors select-none mb-6">
                {step.step}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-lg font-bold text-[#1A0307] mb-3 group-hover:text-[#C8102E] transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line decor on desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[105%] w-[40%] h-[1px] bg-gradient-to-r from-[#C8102E]/20 to-transparent z-10 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
