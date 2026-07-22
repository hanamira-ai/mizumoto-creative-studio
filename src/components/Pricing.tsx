import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Info, FileText, Send, Sparkles, MessageSquare } from 'lucide-react';

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    instansi: '',
    pj: '',
    wa: '',
    kebutuhan: 'Sekolah / PPDB Online',
  });
  const [submitted, setSubmitted] = useState(false);

  const tiers = [
    {
      id: 'retail',
      name: 'UMKM & Retail Starter',
      subtitle: 'Ideal untuk toko batik, bisnis lokal, & rintisan',
      price: 'Rp 2.900.000',
      period: 'Sekali Bayar',
      features: [
        'Halaman Tunggal Berkinerja Tinggi',
        'Optimasi SEO Lokal Pekalongan',
        'Integrasi QRIS & Pembayaran Digital',
        'Katalog Produk Interaktif',
        'Garansi Bug & Pemeliharaan 1 Bulan',
        'Hosting & SSL Gratis Tahun Pertama'
      ],
      cta: 'Pesan Paket UMKM',
      badge: 'POPULER UMKM',
      highlight: false
    },
    {
      id: 'sekolah',
      name: 'Sekolah PPDB Premium',
      subtitle: 'Portal pendidikan, artikel, & formulir akademik',
      price: 'Rp 7.500.000',
      period: 'Sekali Bayar',
      features: [
        'Form PPDB Online & Dashboard Admin',
        'Halaman Profil Guru & Ekstrakurikuler',
        'Halaman Berita & Agenda Sekolah',
        'Sesuai Standar Akreditasi Kemendikbud',
        'Garansi Keamanan Data & SLA 99.9%',
        'Pemeliharaan & Update Konten 3 Bulan',
        'Hosting Kapasitas Besar (SSD NVMe)'
      ],
      cta: 'Pesan Paket Sekolah',
      badge: 'TERLARIS',
      highlight: true
    },
    {
      id: 'b2g',
      name: 'Korporat / B2G Custom',
      subtitle: 'Instansi Pemerintah, BUMN, & Sistem Kustom',
      price: 'Hubungi Kami',
      period: 'Sesuai Proposal',
      features: [
        'Sistem Portal Informasi Publik Aman',
        'Arsitektur Dashboard Analitik Grafik',
        'Sertifikat Keamanan & Anti-SQL Injection',
        'Kepatuhan Aksesibilitas Kontras Tinggi',
        'Koordinasi Tatap Muka & Workshop Onsite',
        'Kontrak Pemeliharaan SLA Bergaransi',
        'Penandatanganan NDA & Berita Acara (BAST)'
      ],
      cta: 'Request Penawaran Resmi',
      badge: 'KHUSUS B2G & B2B',
      highlight: false
    }
  ];

  const handleCtaClick = (tierId: string, tierName: string) => {
    if (tierId === 'b2g') {
      setSelectedTier(tierId);
      const element = document.getElementById('b2g-quotation-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const text = `Halo Mizumoto Creative Studio, saya ingin menanyakan lebih lanjut mengenai paket website "${tierName}" yang tercantum di pricing table.`;
      window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.instansi || !formData.pj || !formData.wa) {
      alert('Harap isi semua kolom wajib.');
      return;
    }
    
    // Simulate API request and open specialized WhatsApp text
    setSubmitted(true);
    const text = `Yth. Tim Proposal Mizumoto Creative Studio\n\nSaya ingin mengajukan REQUEST PENAWARAN (QUOTATION) resmi dengan rincian berikut:\n\n- Nama Instansi: ${formData.instansi}\n- Penanggung Jawab: ${formData.pj}\n- No. WhatsApp: ${formData.wa}\n- Sektor Kebutuhan: ${formData.kebutuhan}\n\nMohon siapkan dokumen penawaran teknis & komersial formal untuk dikirimkan kepada kami. Terima kasih.`;
    
    setTimeout(() => {
      window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
    }, 1200);
  };

  return (
    <section id="harga" className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
      
      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PILIHAN INVESTASI DIGITAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A0307] leading-tight">
            Tarif Investasi <span className="text-[#C8102E]">Transparan & Adil</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl">
            Dari retail instan UMKM hingga platform kustom pendidikan dan pemerintahan daerah. Untuk instansi pemerintah (B2G), kami sediakan jalur pengajuan dokumen penawaran (Quotation) resmi secara khusus.
          </p>
        </div>

        {/* Pricing Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#2A0A10] to-[#1A0307] border-2 border-[#C8102E] shadow-2xl p-8 scale-100 lg:scale-105 z-10 text-white'
                  : 'bg-[#F8F6F4] border border-gray-200/80 p-8 shadow-sm hover:shadow-md text-[#1A0307] hover:border-[#C8102E]/30'
              }`}
            >
              {/* Highlight ribbon / tag */}
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md font-bold ${
                  tier.highlight ? 'bg-[#C8102E] text-white animate-pulse' : 'bg-white border border-gray-200 text-gray-600 shadow-sm'
                }`}>
                  {tier.badge}
                </span>
              </div>

              <div>
                <h3 className={`font-display text-xl font-bold mb-1.5 ${tier.highlight ? 'text-white' : 'text-[#1A0307]'}`}>{tier.name}</h3>
                <p className={`text-xs mb-6 max-w-[85%] ${tier.highlight ? 'text-brand-muted' : 'text-gray-600'}`}>{tier.subtitle}</p>
                
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className={`font-display font-black text-3xl tracking-tight ${tier.highlight ? 'text-[#E8394F]' : 'text-[#C8102E]'}`}>
                    {tier.price}
                  </span>
                  {tier.id !== 'b2g' && <span className={`text-xs font-mono ${tier.highlight ? 'text-brand-muted' : 'text-gray-500'}`}>/ {tier.period}</span>}
                </div>

                <div className={`border-t my-6 ${tier.highlight ? 'border-[#C8102E]/20' : 'border-gray-200'}`}></div>

                <ul className="space-y-3.5 mb-8 text-left text-sm">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? 'text-[#E8394F]' : 'text-[#C8102E]'}`} />
                      <span className={tier.highlight ? 'text-brand-muted' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleCtaClick(tier.id, tier.name)}
                className={`w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  tier.highlight
                    ? 'bg-[#C8102E] hover:bg-brand-red-bright text-white shadow-lg shadow-[#C8102E]/25'
                    : 'bg-white hover:bg-gray-50 text-[#C8102E] border border-[#C8102E]/30 shadow-sm'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Specialized B2G Quotation Form Container */}
        <div id="b2g-quotation-form" className="max-w-3xl mx-auto bg-[#F8F6F4] border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-200/50 font-display font-black text-7xl select-none pointer-events-none">
            B2G
          </div>
          
          <div className="flex gap-4 items-start mb-6 border-b border-gray-200 pb-6 text-left">
            <div className="p-3 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded-xl text-[#C8102E] shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#1A0307]">
                Pengajuan Request Penawaran Resmi (Quotation)
              </h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Khusus instansi pemerintah, BUMN, sekolah negeri, dan korporat swasta besar. Tim kami siap membuatkan dokumen proposal fungsional, estimasi BQ, dan administrasi BAST yang resmi sesuai SOP pengadaan Anda.
              </p>
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-[#C8102E]/10 border border-[#C8102E]/20 text-[#C8102E] flex items-center justify-center rounded-full mx-auto shadow-inner">
                <Send className="w-8 h-8 animate-bounce" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-[#1A0307]">Mempersiapkan WhatsApp Chat Resmi...</h4>
                <p className="text-xs text-gray-600 mt-2 max-w-md mx-auto">
                  Terima kasih atas kepercayaan Anda. Sistem sedang menyusun draf draf proposal fungsional dan akan membuka aplikasi WhatsApp Anda untuk koordinasi luring.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="instansi" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Nama Instansi / Perusahaan *
                  </label>
                  <input
                    type="text"
                    id="instansi"
                    name="instansi"
                    value={formData.instansi}
                    onChange={handleInputChange}
                    placeholder="Contoh: Dinas Kesehatan Kab. Batang"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pj" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Penanggung Jawab / Jabatan *
                  </label>
                  <input
                    type="text"
                    id="pj"
                    name="pj"
                    value={formData.pj}
                    onChange={handleInputChange}
                    placeholder="Contoh: Budi Prasetyo (Kabid PPDB)"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="wa" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Nomor WhatsApp Penghubung *
                  </label>
                  <input
                    type="text"
                    id="wa"
                    name="wa"
                    value={formData.wa}
                    onChange={handleInputChange}
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="kebutuhan" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Sektor Layanan Yang Diperlukan
                  </label>
                  <select
                    id="kebutuhan"
                    name="kebutuhan"
                    value={formData.kebutuhan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all cursor-pointer"
                  >
                    <option value="Sekolah / PPDB Online">Portal Sekolah & PPDB Online</option>
                    <option value="Portal Informasi Publik Dinas">Portal Informasi Publik & Pengaduan</option>
                    <option value="Sistem Antrean / Kependudukan">Sistem Layanan Mandiri / Kependudukan</option>
                    <option value="Corporate Profile & Investor Relations">Corporate Profile & Hubungan Investor</option>
                    <option value="Aplikasi Custom SaaS / Mobile">Aplikasi Custom SaaS / Mobile</option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[11px] leading-relaxed text-gray-600 mt-2 bg-[#C8102E]/5 p-3 rounded-lg border border-[#C8102E]/10">
                <Info className="w-4 h-4 text-[#C8102E] shrink-0 mt-0.5" />
                <span>
                  <strong>INFORMASI KERAHASIAN:</strong> Mizumoto berkomitmen melindungi kerahasiaan data pengadaan Anda. Setelah formulir diajukan, tim representasi lokal Pekalongan kami siap hadir secara fisik ke kantor instansi Anda untuk berdiskusi langsung.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C8102E] hover:bg-brand-red-bright text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-[#C8102E]/20 border border-brand-red-bright/30 uppercase tracking-widest text-xs cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                Kirim Request Penawaran Resmi
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
