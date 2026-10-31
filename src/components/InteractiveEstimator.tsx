import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calculator, Check, AlertCircle, ArrowRight, MessageSquare } from 'lucide-react';

interface ProjectType {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
  recommendedHosting: string;
}

interface AddOnOption {
  id: string;
  name: string;
  price: number;
  days: number;
  description: string;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'umkm',
    name: 'E-Commerce / Toko Online UMKM',
    basePrice: 3500000,
    baseDays: 10,
    description: 'Toko online interaktif, manajemen stok otomatis, katalog produk, dan kalkulasi ongkir otomatis.',
    recommendedHosting: 'Cloud Hosting / Shared Premium'
  },
  {
    id: 'school',
    name: 'Website Portal & PPDB Sekolah',
    basePrice: 6500000,
    baseDays: 14,
    description: 'Portal pembelajaran, pendaftaran online siswa baru, profil tenaga pengajar, dan galeri kegiatan.',
    recommendedHosting: 'Cloud VPS Kinerja Sedang'
  },
  {
    id: 'corporate',
    name: 'Website Profile Perusahaan Premium',
    basePrice: 8000000,
    baseDays: 18,
    description: 'Estetika editorial kelas tinggi, integrasi karir, hubungan investor, dan animasi transisi yang modern.',
    recommendedHosting: 'SaaS Engine / Dedicated Cloud'
  },
  {
    id: 'government',
    name: 'Portal Publik & Layanan Pemerintah',
    basePrice: 16000000,
    baseDays: 25,
    description: 'Sistem kepatuhan tinggi, perlindungan siber, database pengaduan warga, serta optimasi aksesibilitas.',
    recommendedHosting: 'Server Instansi / Cloud Pemerintah (PDN)'
  },
  {
    id: 'custom',
    name: 'Aplikasi Web Kustom & Dashboard SaaS',
    basePrice: 28000000,
    baseDays: 40,
    description: 'Platform khusus, integrasi API eksternal, dashboard analitik grafis, manajemen hak akses, dan database skalabel.',
    recommendedHosting: 'Dedicated VPS / Serverless Node'
  }
];

const ADD_ONS: AddOnOption[] = [
  {
    id: 'seo',
    name: 'Optimasi SEO Lokal & Google Maps',
    price: 1500000,
    days: 3,
    description: 'Meningkatkan posisi website Anda pada pencarian lokal Karesidenan Pekalongan dan Google Maps.'
  },
  {
    id: 'bilingual',
    name: 'Dukungan Multi-bahasa (Bilingual)',
    price: 2500000,
    days: 4,
    description: 'Menerjemahkan konten secara penuh ke Bahasa Inggris profesional untuk audiens global.'
  },
  {
    id: 'ppdb',
    name: 'Sistem PPDB / Kelulusan Terintegrasi',
    price: 3500000,
    days: 5,
    description: 'Sistem formulir pendaftaran, ujian online dasar, dan pengumuman kelulusan realtime.'
  },
  {
    id: 'payment',
    name: 'Payment Gateway (Midtrans/QRIS)',
    price: 2500000,
    days: 3,
    description: 'Integrasi sistem pembayaran otomatis e-wallet, virtual account, kartu kredit, dan minimarket.'
  },
  {
    id: 'security',
    name: 'Audit Keamanan & SSL Premium (WAF)',
    price: 2000000,
    days: 2,
    description: 'Penambahan Web Application Firewall dan konfigurasi enkripsi data ekstra dari peretasan.'
  },
  {
    id: 'maintenance',
    name: 'Dukungan SLA & Maintenance Bulanan',
    price: 1200000,
    days: 0,
    description: 'Backup mingguan rutin, monitoring keamanan aktif, dan update minor gratis pasca rilis.'
  }
];

export default function InteractiveEstimator() {
  const [selectedType, setSelectedType] = useState<string>(PROJECT_TYPES[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['seo']);

  const currentProject = PROJECT_TYPES.find(p => p.id === selectedType) || PROJECT_TYPES[0];

  const handleToggleAddOn = (addOnId: string) => {
    if (selectedAddOns.includes(addOnId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addOnId));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    }
  };

  // Calculations
  const calculatedPrice = currentProject.basePrice + ADD_ONS
    .filter(a => selectedAddOns.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0);

  const calculatedDays = currentProject.baseDays + ADD_ONS
    .filter(a => selectedAddOns.includes(a.id))
    .reduce((sum, a) => sum + a.days, 0);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  // Generate WhatsApp Message Link
  const handleSendWhatsApp = () => {
    const selectedAddOnNames = ADD_ONS
      .filter(a => selectedAddOns.includes(a.id))
      .map(a => `- ${a.name}`)
      .join('%0A');

    const text = `Halo Mizumoto Creative Studio, saya tertarik untuk mendiskusikan pembuatan website:%0A%0A*Kategori Proyek:* ${currentProject.name}%0A*Add-On Terpilih:*%0A${selectedAddOnNames || '- Tidak ada'}%0A%0A*Estimasi Investasi:* ${formatIDR(calculatedPrice)}%0A*Estimasi Waktu:* ${calculatedDays} Hari Kerja%0A%0AMohon jadwal diskusi konsultasi gratis lebih lanjut. Terima kasih.`;
    
    window.open(`https://wa.me/6285640066619?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-[#2A0A10] relative overflow-hidden border-t border-b border-[#C8102E]/20">
      
      {/* Decorative glows */}
      <div id="estimator-decor-glow" className="absolute bottom-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div id="estimator-decor-glow-left" className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#5C0F1A] border border-[#C8102E]/30 text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERAKTIF & TRANSPARAN</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-offwhite leading-tight">
            Kalkulator Estimasi <span className="text-[#E8394F]">Anggaran & Waktu</span> Proyek
          </h2>
          <p className="text-brand-muted text-sm sm:text-base mt-4">
            Kami menjunjung tinggi keterbukaan anggaran. Sesuaikan kebutuhan sistem Anda secara instan di bawah ini untuk melihat simulasi investasi dan jangka waktu pengerjaannya.
          </p>
        </div>

        {/* Dynamic Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls Panel (Left side) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Step 1: Project Type selection */}
            <div>
              <span className="text-xs font-mono text-[#E8394F] font-bold uppercase tracking-widest block mb-4">
                LANGKAH 01: PILIH KATEGORI UTAMA PROYEK
              </span>
              <div className="space-y-3">
                {PROJECT_TYPES.map((p) => (
                  <label
                    key={p.id}
                    onClick={() => setSelectedType(p.id)}
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      selectedType === p.id
                        ? 'bg-white/10 border-white/30 shadow-xl backdrop-blur-md'
                        : 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-md'
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      checked={selectedType === p.id}
                      onChange={() => setSelectedType(p.id)}
                      className="mt-1.5 accent-[#C8102E] shrink-0"
                    />
                    <div className="flex-grow">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <span className="font-display font-bold text-sm sm:text-base text-brand-offwhite">
                          {p.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-white bg-[#C8102E]/40 border border-[#C8102E]/30 px-2.5 py-0.5 rounded-md">
                          Mulai {formatIDR(p.basePrice)}
                        </span>
                      </div>
                      <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 2: Add-on selections */}
            <div className="pt-4 border-t border-[#C8102E]/10">
              <span className="text-xs font-mono text-[#E8394F] font-bold uppercase tracking-widest block mb-4">
                LANGKAH 02: PILIH FITUR & DUKUNGAN EKSTRA (ADD-ON)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADD_ONS.map((a) => {
                  const isChecked = selectedAddOns.includes(a.id);
                  return (
                    <div
                      key={a.id}
                      onClick={() => handleToggleAddOn(a.id)}
                      className={`flex gap-3 p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                        isChecked
                          ? 'bg-white/10 border-white/30 backdrop-blur-md'
                          : 'bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-md'
                      }`}
                    >
                      <div className="mt-1">
                        <div className={`w-4.5 h-4.5 rounded border flex items-center justify-center transition-all ${
                          isChecked ? 'bg-[#C8102E] border-[#C8102E] text-brand-offwhite' : 'border-[#C8102E]/20'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-offwhite leading-tight">
                          {a.name}
                        </h4>
                        <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                          {a.description}
                        </p>
                        <div className="flex gap-2 items-center mt-2 font-mono text-[10px]">
                          <span className="text-[#E8394F] font-bold">{formatIDR(a.price)}</span>
                          {a.days > 0 && <span className="text-brand-muted">• +{a.days} hari</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Cost Summary Widget Card (Right side) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col justify-between h-full shadow-2xl relative">
              
              {/* Subtle visual branding in background */}
              <div className="absolute top-4 right-4 text-brand-red/5 font-display font-black text-7xl select-none pointer-events-none">
                EST
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-[#C8102E] border border-brand-red/35 text-brand-offwhite px-2.5 py-1 rounded-md font-bold mb-6 inline-block">
                  Simulasi Investasi Digital
                </span>
                <h3 className="font-display text-lg font-bold text-brand-offwhite border-b border-[#C8102E]/10 pb-4 mb-6">
                  Rincian Kebutuhan Proyek
                </h3>

                {/* Breakdown List */}
                <ul className="space-y-4 mb-8 text-sm text-brand-muted">
                  <li className="flex justify-between items-start gap-4">
                    <span className="text-brand-offwhite font-medium">Layanan Utama:</span>
                    <span className="text-right text-brand-offwhite text-xs">{currentProject.name}</span>
                  </li>
                  <li className="flex justify-between items-start gap-4">
                    <span>Infrastruktur Hosting:</span>
                    <span className="text-brand-offwhite text-right text-xs font-mono">{currentProject.recommendedHosting}</span>
                  </li>
                  <li className="flex justify-between items-start gap-4 border-t border-[#C8102E]/10 pt-3">
                    <span>Fitur Tambahan ({selectedAddOns.length}):</span>
                    <span className="text-right text-brand-offwhite text-xs">
                      {selectedAddOns.length > 0
                        ? ADD_ONS.filter(a => selectedAddOns.includes(a.id)).map(a => a.name.split(' ')[0]).join(', ')
                        : 'None'}
                    </span>
                  </li>
                </ul>

                {/* Final Cost Metrics Box */}
                <div className="bg-[#3B0D14] border border-[#C8102E]/20 rounded-xl p-5 mb-8 text-center">
                  <span className="text-xs font-mono text-brand-muted uppercase tracking-wider block mb-1">
                    TOTAL ESTIMASI INVESTASI
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#E8394F] tracking-tight block">
                    {formatIDR(calculatedPrice)}
                  </span>
                  <div className="flex justify-center gap-6 mt-4 border-t border-[#C8102E]/10 pt-4 text-xs font-mono">
                    <div>
                      <span className="text-brand-muted block">WAKTU PENGERJAAN</span>
                      <span className="text-brand-offwhite font-bold text-sm">{calculatedDays} Hari Kerja</span>
                    </div>
                    <div className="border-l border-[#C8102E]/20 h-8"></div>
                    <div>
                      <span className="text-brand-muted block">GARANSI PASCA RILIS</span>
                      <span className="text-brand-offwhite font-bold text-sm">3 Bulan Penuh</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-brand-red/5 border border-brand-red/20 p-3.5 rounded-lg text-xs leading-relaxed text-brand-muted mb-8">
                  <AlertCircle className="w-4 h-4 text-[#E8394F] shrink-0 mt-0.5" />
                  <span>
                    Simulasi harga di atas bersifat estimasi awal. Setiap proyek akan kami sertai dengan dokumen proposal teknis & fungsional formal.
                  </span>
                </div>
              </div>

              {/* Action Trigger */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-4 bg-brand-red hover:bg-brand-red-bright text-brand-offwhite font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-brand-red/20 border border-brand-red-bright/30 uppercase tracking-wider text-xs"
              >
                <MessageSquare className="w-5 h-5" />
                Diskusikan Spesifikasi di WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
