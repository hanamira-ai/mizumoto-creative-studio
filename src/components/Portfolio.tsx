import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIOS } from '../data';
import { Sparkles, Calendar, Tag, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('Semua');

  const categories = ['Semua', 'Sekolah', 'UMKM', 'Corporate', 'Pemerintah', 'Startup'];

  const filteredPortfolios = filter === 'Semua'
    ? PORTFOLIOS
    : PORTFOLIOS.filter(p => p.clientType.toLowerCase() === filter.toLowerCase() || (filter === 'Startup' && p.clientType === 'Startup'));

  return (
    <section id="portfolio" className="py-24 bg-[#F8F6F4] relative">
      
      {/* Subtle background red mesh gradient for editorial feel */}
      <div id="portfolio-decor-mesh" className="absolute top-1/3 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div id="portfolio-decor-mesh-left" className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GALERI KARYA DIGITAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A0307] leading-tight">
              Karya Terbaik dari Pekalongan untuk <span className="text-[#C8102E]">Skala Nasional</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-4">
              Kurasi mahakarya digital premium yang kami kembangkan bersama mitra-mitra kami. Setiap proyek memadukan rancangan visual yang elegan dengan kode berkecepatan tinggi.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/80 p-1.5 rounded-xl border border-gray-200 shadow-sm backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#C8102E] text-white shadow-lg border border-[#C8102E]/25'
                    : 'text-gray-600 hover:text-[#1A0307]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredPortfolios.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-white border border-gray-200/80 hover:border-[#C8102E]/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md backdrop-blur-md"
              >
                {/* Image Showcase Frame */}
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  {/* Image showcase */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Floating badging */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-[#C8102E] text-white px-2.5 py-1 rounded-md font-semibold">
                      {project.clientType}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-black/80 text-white px-2.5 py-1 rounded-md font-semibold backdrop-blur-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#E8394F]" />
                      {project.year}
                    </span>
                  </div>

                  {/* Hover visual arrow button */}
                  <div className="absolute bottom-4 right-4 p-2 bg-[#C8102E] text-white rounded-full translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-wider block mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A0307] group-hover:text-[#C8102E] transition-colors mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-gray-600 bg-[#F8F6F4] border border-gray-200/60 px-2.5 py-1 rounded-md flex items-center gap-1"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#C8102E]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State if no portfolios found */}
        {filteredPortfolios.length === 0 && (
          <div id="portfolio-empty-state" className="text-center py-20 border border-dashed border-gray-200 rounded-xl mt-8">
            <p className="text-gray-500 font-mono text-sm">Tidak ada portofolio yang cocok dengan filter saat ini.</p>
          </div>
        )}

      </div>
    </section>
  );
}
