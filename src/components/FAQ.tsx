import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Berapa lama estimasi waktu pengerjaan untuk website sekolah / portal PPDB?',
      a: 'Waktu pengerjaan standar berkisar antara 14 s.d. 25 hari kerja, tergantung kompleksitas modul formulir pendaftaran serta migrasi data sekolah Anda. Kami menjamin ketepatan waktu rilis dengan milestone pengerjaan yang transparan.'
    },
    {
      q: 'Bagaimana prosedur pembayaran untuk instansi pemerintah (B2G)?',
      a: 'Khusus instansi pemerintah dan BUMN, kami mendukung mekanisme pembayaran pasca-pengerjaan sesuai dengan kontrak pengadaan resmi (SPK/SOP). Kami menyediakan seluruh kelengkapan administrasi perpajakan (faktur pajak, NPWP) serta berita acara serah terima (BAST) secara lengkap.'
    },
    {
      q: 'Apakah harga website di Mizumoto sudah termasuk sewa hosting dan domain?',
      a: 'Benar, seluruh paket yang kami tawarkan sudah bersifat "all-in", termasuk sewa hosting berkecepatan tinggi (SSD NVMe) serta pendaftaran domain (.com, .sch.id, .go.id, .id, dll) gratis untuk tahun pertama pengerjaan.'
    },
    {
      q: 'Apakah kami mendapatkan garansi apabila terdapat kerusakan (bug) setelah serah terima?',
      a: 'Mizumoto memberikan garansi pasca-rilis penuh selama 3 bulan tanpa biaya tambahan. Garansi mencakup perbaikan bug sistem, penanganan error, serta pendampingan administrator sekolah/perusahaan secara luring di Pekalongan.'
    },
    {
      q: 'Apakah website buatan Mizumoto bisa diakses dengan baik melalui smartphone?',
      a: 'Tentu saja. Kami mengadopsi pendekatan Mobile-First yang ketat. Seluruh modul mulai dari dashboard analitik, formulir pendaftaran PPDB, hingga katalog produk batik UMKM dioptimalkan secara responsif untuk semua layar gawai.'
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8F6F4] relative overflow-hidden border-t border-b border-gray-200">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TANYA JAWAB UMUM</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A0307] leading-tight text-center">
            Informasi Penting <span className="text-[#C8102E]">Seputar Layanan</span> Kami
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Temukan jawaban cepat mengenai prosedur administrasi, durasi proyek, garansi sistem, serta teknis rekayasa perangkat lunak dari tim Mizumoto.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden transition-all duration-300 hover:border-[#C8102E]/30 text-left"
              >
                {/* Trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-display font-bold text-sm sm:text-base text-[#1A0307] hover:text-[#C8102E] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-[#C8102E] p-1 bg-[#C8102E]/10 rounded-md border border-[#C8102E]/20">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Collapsible content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#F8F6F4]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
