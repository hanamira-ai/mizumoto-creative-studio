import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Sparkles, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="testimoni" className="py-24 bg-white relative border-t border-gray-200">
      
      {/* Decorative Glow */}
      <div id="testi-decor-glow" className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KATA MEREKA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A0307] leading-tight">
            Cerita Sukses Kolaborasi Mitra <span className="text-[#C8102E]">Mizumoto</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4">
            Kepercayaan diraih melalui dedikasi dan kualitas nyata. Simak bagaimana kami membantu berbagai sektor memaksimalkan potensi digital mereka di Pekalongan dan sekitarnya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          id="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {TESTIMONIALS.map((testi) => (
            <motion.div
              key={testi.id}
              variants={cardVariants}
              className="bg-[#F8F6F4] border border-gray-200 p-8 rounded-xl flex flex-col justify-between relative shadow-sm hover:border-[#C8102E]/30 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              {/* Quote icon background ornament */}
              <div className="absolute top-6 right-6 text-[#C8102E]/10">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div>
                {/* Stars visual */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8102E] text-[#C8102E]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#1A0307] text-sm sm:text-base leading-relaxed italic mb-6">
                  "{testi.content}"
                </p>
              </div>

              {/* Client Profile and Sector */}
              <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border border-gray-300 shrink-0">
                    {/* avatar asli klien */}
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-[#1A0307]">{testi.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{testi.role}, <span className="text-[#1A0307]/80">{testi.company}</span></p>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase bg-[#C8102E]/10 border border-[#C8102E]/20 text-[#C8102E] px-2.5 py-1 rounded-md">
                  {testi.clientType}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
