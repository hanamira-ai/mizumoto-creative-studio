import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, GraduationCap, Laptop, Shield, MessageSquare, Briefcase, Calendar, 
  MapPin, Check, Plus, AlertCircle, Sparkles, Database, BarChart3, Clock, 
  Settings, Users, ArrowRight, UserCheck, HelpCircle, FileText, Image as ImageIcon 
} from 'lucide-react';

interface OtherPagesProps {
  view: string;
  setView: (v: string) => void;
}

export default function OtherPages({ view, setView }: OtherPagesProps) {
  // Booking Form State
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Career Form State
  const [careerSuccess, setCareerSuccess] = useState(false);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const renderContent = () => {
    switch (view) {
      case 'about':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                TENTANG KAMI
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Rekayasa Sistem & Desain Kreatif dengan <span className="text-[#E8394F]">Karakter Lokal</span>
              </h1>
              <p className="text-brand-muted text-base sm:text-lg mt-6 leading-relaxed">
                Mizumoto Creative Studio adalah agensi rekayasa perangkat lunak dan desain premium yang melayani transformasi digital nasional, dengan fokus area fisik di Karesidenan Pekalongan. Kami berkomitmen menyajikan sistem yang tidak hanya indah secara visual, namun aman, cepat, dan terstruktur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">
                <h3 className="font-display text-lg font-bold text-brand-offwhite mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#E8394F]" />
                  Misi Keamanan & Keandalan
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Kami mengedepankan keamanan informasi publik sebagai standar tertinggi kami. Setiap aplikasi yang kami luncurkan menjalani audit kerentanan siber untuk mengantisipasi risiko eksploitasi data secara komprehensif.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">
                <h3 className="font-display text-lg font-bold text-brand-offwhite mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#E8394F]" />
                  Garansi Dukungan Offline
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Salah satu keunggulan terbesar kami adalah kehadiran fisik. Tim representasi kami siap mendatangi sekolah, kantor pemerintah, maupun UMKM di Pekalongan, Batang, Pemalang, Pemalang, dan sekitarnya demi penyelarasan teknis secara langsung.
                </p>
              </div>
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                LAYANAN STUDIO
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Layanan Komprehensif untuk <span className="text-[#E8394F]">Pertumbuhan Digital</span>
              </h1>
              <p className="text-brand-muted text-base sm:text-lg mt-4 max-w-2xl">
                Solusi satu atap dari tahap penentuan strategi digital, visual mockup, rekayasa kode backend, hingga strategi pemasaran SEO tingkat lanjut.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: 'Website Portal & Akademik',
                  desc: 'Website representatif sekolah dilengkapi modul Penerimaan Peserta Didik Baru (PPDB) online, berita, serta database guru yang berstandar nasional.',
                  features: ['Form PPDB Kustom', 'Keamanan SQLi & XSS', 'Database Serverless Terenkripsi']
                },
                {
                  title: 'E-Commerce UMKM',
                  desc: 'E-commerce andal dioptimalkan untuk performa loading secepat kilat dengan katalog batik premium, terintegrasi QRIS, dan kalkulator ongkir otomatis.',
                  features: ['Integrasi RajaOngkir', 'Manajemen Transaksi', 'Template Eksklusif High-End']
                },
                {
                  title: 'Sistem Custom & Dashboard',
                  desc: 'Aplikasi internal berbasis web untuk memantau performa, sistem inventori, antrean masyarakat, atau CRM khusus instansi dan korporasi.',
                  features: ['Analisis Grafik D3.js', 'Hak Akses Multi-User', 'Arsitektur Node/Express']
                }
              ].map((s, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-white/20 transition-colors backdrop-blur-md">
                  <h3 className="font-display text-lg font-bold text-brand-offwhite mb-3">{s.title}</h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2.5">
                    {s.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-brand-muted">
                        <Check className="w-3.5 h-3.5 text-[#E8394F]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'products':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                PRODUK SOFTWARE (SaaS)
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Software Siap Pakai <span className="text-[#E8394F]">Berkinerja Tinggi</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Kami menyediakan modul software modular yang siap diinstalasikan langsung ke server instansi Anda dengan penyesuaian fungsional tanpa hambatan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  name: 'Mizumoto School Suite',
                  type: 'LMS & PPDB System',
                  desc: 'Platform komprehensif penanganan siswa baru, pendaftaran berkas administrasi secara online, penentuan gelombang, hingga penerimaan akhir yang transparan.',
                  ctaText: 'Pesan Demo Suite'
                },
                {
                  name: 'BatikCommerce Engine',
                  type: 'Multi-Vendor Retail System',
                  desc: 'Kerangka marketplace khusus tekstil dan busana tradisional dengan sistem manajemen stok multi-gudang dan analisis penjualan berbasis data visual.',
                  ctaText: 'Diskusikan Lisensi'
                }
              ].map((p, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col justify-between backdrop-blur-md">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#E8394F] uppercase tracking-wider">{p.type}</span>
                    <h3 className="font-display text-xl font-bold text-brand-offwhite mt-2 mb-3">{p.name}</h3>
                    <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-6">{p.desc}</p>
                  </div>
                  <button 
                    onClick={() => window.open('https://wa.me/6281234567890?text=Halo%20Mizumoto%2C%20saya%20tertarik%20mencoba%20demo%20produk%20' + encodeURIComponent(p.name), '_blank')}
                    className="w-full py-3 bg-[#5C0F1A]/30 hover:bg-[#C8102E]/30 text-white font-bold rounded-lg transition-all text-xs uppercase tracking-wider border border-[#C8102E]/20"
                  >
                    {p.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                PORTOFOLIO TERBARU
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Karya Pilihan yang <span className="text-[#E8394F]">Menembus Batas</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Jelajahi portofolio terbaik kami yang mencakup digitalisasi institusi sekolah menengah, portal informasi karesidenan, dan aplikasi e-commerce UMKM terintegrasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: 'Portal Akademik & PPDB Terintegrasi SMAN 1 Pekalongan',
                  cat: 'Website Pendidikan',
                  desc: 'Sistem pendaftaran dan pangkalan data siswa berbasis Cloud Serverless, melayani hingga puluhan ribu pengunjung harian di musim PPDB secara stabil.',
                  img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop'
                },
                {
                  title: 'Batik Pekalongan Hub & Marketplace Multi-Vendor',
                  cat: 'E-Commerce Retail',
                  desc: 'Pusat e-commerce batik Pekalongan terpadu yang membantu menaikkan omzet pengrajin lokal melalui optimasi SEO Google Maps yang presisi.',
                  img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop'
                }
              ].map((p, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl backdrop-blur-md">
                  <img src={p.img} alt={p.title} referrerPolicy="no-referrer" className="w-full h-56 object-cover object-center grayscale hover:grayscale-0 transition-all duration-300" />
                  <div className="p-6">
                    <span className="text-[10px] font-mono text-[#E8394F] font-bold uppercase tracking-widest">{p.cat}</span>
                    <h3 className="font-display font-bold text-base text-brand-offwhite mt-2 mb-3">{p.title}</h3>
                    <p className="text-brand-muted text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'pricing':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                DAFTAR INVESTASI
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Struktur Investasi <span className="text-[#E8394F]">Aman & Transparan</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Kami menjamin kejelasan seluruh pengeluaran tanpa adanya biaya siluman tersembunyi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col justify-between backdrop-blur-md">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-offwhite mb-2">UMKM & Retail Starter</h3>
                  <p className="text-[#E8394F] font-mono text-2xl font-black mb-4">Rp 2.900.000 <span className="text-xs text-brand-muted font-normal">/ sekali bayar</span></p>
                  <p className="text-brand-muted text-xs leading-relaxed mb-6">Pilihan efisien dan cepat untuk menjamin bisnis retail Anda tampil mewah dan profesional di hasil pencarian Google.</p>
                </div>
                <button onClick={() => setView('booking')} className="w-full py-3 bg-brand-red text-white font-bold text-xs uppercase tracking-wider rounded-lg">Konsultasikan Sekarang</button>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col justify-between backdrop-blur-md">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-offwhite mb-2">Sekolah PPDB Premium</h3>
                  <p className="text-[#E8394F] font-mono text-2xl font-black mb-4">Rp 7.500.000 <span className="text-xs text-brand-muted font-normal">/ sekali bayar</span></p>
                  <p className="text-brand-muted text-xs leading-relaxed mb-6">Paket terlengkap khusus portal akademik digital, modul PPDB handal dengan SLA keamanan data terjamin.</p>
                </div>
                <button onClick={() => setView('booking')} className="w-full py-3 bg-brand-red text-white font-bold text-xs uppercase tracking-wider rounded-lg">Konsultasikan Sekarang</button>
              </div>
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                TALENTA KAMI
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Ahli Terbaik yang <span className="text-[#E8394F]">Siap Melayani</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Para profesional berpengalaman yang siap mengawal koordinasi luring di wilayah Pekalongan sekitarnya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
              {[
                { name: 'Mizumoto Ryuu', role: 'Principal Digital Architect', spec: 'IT Security' },
                { name: 'Aditya Herlambang', role: 'Head of Engineering (Local Lead)', spec: 'TypeScript & Web Apps' },
                { name: 'Siti Rahmawati', role: 'Senior UI/UX Designer', spec: 'Editorial Aesthetics' }
              ].map((m, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                  <div className="w-16 h-16 bg-[#5C0F1A]/30 border border-[#C8102E]/30 text-[#E8394F] rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {m.name.charAt(0)}
                  </div>
                  <h3 className="font-display font-bold text-base text-brand-offwhite">{m.name}</h3>
                  <div className="text-xs font-mono text-[#E8394F] uppercase tracking-wider mt-1">{m.role}</div>
                  <p className="text-brand-muted text-xs mt-3 bg-[#5C0F1A]/20 border border-[#C8102E]/10 p-2.5 rounded font-mono">
                    Spesialisasi: {m.spec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                DOKUMENTASI KLIEN
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Galeri Aktivitas <span className="text-[#E8394F]">Kolaborasi Mitra</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Intip rekam jejak koordinasi luring, audiensi proposal teknis, serta serah terima aset dengan institusi pemerintah dan sekolah di Pekalongan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: 'Koordinasi Portal Akademik', loc: 'SMAN Pekalongan', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop' },
                { title: 'Workshop Admin PPDB', loc: 'Dinas Pendidikan', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop' },
                { title: 'Sesi Foto Produk Batik', loc: 'UMKM Batik Hub', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop' }
              ].map((g, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                  <img src={g.img} alt={g.title} referrerPolicy="no-referrer" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                  <div className="p-4">
                    <h3 className="font-display font-bold text-sm text-brand-offwhite">{g.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-brand-muted mt-1.5 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#E8394F]" />
                      <span>{g.loc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                FAQ LAYANAN
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Jawaban Cepat <span className="text-[#E8394F]">Solusi Masalah</span> Anda
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Berikut ringkasan jawaban atas berbagai kekhawatiran umum dari calon mitra kami di Karesidenan Pekalongan.
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto text-left">
              {[
                { q: 'Apakah garansi kerusakan/bug gratis?', a: 'Ya, kami menyediakan garansi purnajual penuh selama 3 bulan secara gratis tanpa ada biaya tersembunyi.' },
                { q: 'Bagaimana administrasi pembayaran B2G?', a: 'Mizumoto sepenuhnya mendukung dokumen pengadaan pemerintah terpadu (faktur pajak, SPK, BAST, dll) sesuai standardisasi dinas terkait.' }
              ].map((f, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-offwhite mb-2">{f.q}</h3>
                  <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'career':
        return (
          <div className="space-y-16">
            <div className="text-left max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                KARIR STUDIO
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Mari Bertumbuh Bersama <span className="text-[#E8394F]">Tim Mizumoto</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Kami selalu membuka kesempatan bagi talenta rekayasa kode, desain antarmuka, serta perwakilan administrasi lokal Pekalongan untuk bergabung bersama kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-start">
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                  <span className="text-[10px] font-mono text-[#E8394F] font-bold uppercase tracking-wider">REKAYASA PERANGKAT LUNAK</span>
                  <h3 className="font-display font-bold text-base text-brand-offwhite mt-1">Junior Full-Stack React Engineer</h3>
                  <p className="text-brand-muted text-xs mt-2 leading-relaxed">Berfokus pada implementasi komponen antarmuka modular, optimasi performa loading Core Web Vitals, dan integrasi API Express/Vite.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                  <span className="text-[10px] font-mono text-[#E8394F] font-bold uppercase tracking-wider">ADMINISTRASI & B2G</span>
                  <h3 className="font-display font-bold text-base text-brand-offwhite mt-1">Technical Liaison Officer</h3>
                  <p className="text-brand-muted text-xs mt-2 leading-relaxed">Bertanggung jawab merapikan kelengkapan berkas tender pemerintah, berkas perpajakan, dan melakukan koordinasi luring langsung di wilayah Pekalongan.</p>
                </div>
              </div>

              {/* Recruitment Contact Intake */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md">
                <h3 className="font-display text-lg font-bold text-brand-offwhite mb-2">Ajukan Lamaran Cepat</h3>
                <p className="text-xs text-brand-muted mb-6">Kirim biodata singkat Anda. Tim HR kami akan menghubungi Anda maksimal 3 hari kerja.</p>
                
                {careerSuccess ? (
                  <div className="p-4 bg-brand-red/10 border border-[#C8102E]/20 text-[#E8394F] text-xs font-semibold rounded-lg text-center">
                    Lamaran Berhasil Diajukan! Kami akan segera menghubungi Anda.
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setCareerSuccess(true); }} className="space-y-4 text-xs">
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-brand-muted font-bold uppercase tracking-wider">Nama Lengkap *</label>
                      <input required type="text" placeholder="Contoh: Ridwan Hakim" className="w-full px-3 py-2 bg-[#3B0D14]/80 border border-[#C8102E]/20 rounded text-brand-offwhite" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-brand-muted font-bold uppercase tracking-wider">Email Aktif *</label>
                      <input required type="email" placeholder="Contoh: ridwan@gmail.com" className="w-full px-3 py-2 bg-[#3B0D14]/80 border border-[#C8102E]/20 rounded text-brand-offwhite" />
                    </div>
                    <div className="flex flex-col gap-1 text-left">
                      <label className="text-brand-muted font-bold uppercase tracking-wider">Tautan Portofolio / CV *</label>
                      <input required type="url" placeholder="Contoh: https://linkedin.com/in/username" className="w-full px-3 py-2 bg-[#3B0D14]/80 border border-[#C8102E]/20 rounded text-brand-offwhite" />
                    </div>
                    <button type="submit" className="w-full py-3 bg-brand-red hover:bg-brand-red-bright text-white font-bold uppercase tracking-widest text-[10px] rounded">
                      Kirim Berkas Lamaran
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-16 text-left">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                HUBUNGI KAMI
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Kami Siap Mendengar <span className="text-[#E8394F]">Rencana Besar Anda</span>
              </h1>
              <p className="text-brand-muted text-base mt-4 max-w-2xl">
                Butuh koordinasi luring di daerah Pekalongan, Pemalang, Batang, atau Tegal? Hubungi kami langsung melalui WhatsApp fast-response atau jadwalkan reservasi luring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                  <h4 className="font-bold text-sm text-[#E8394F] uppercase tracking-wider">WhatsApp Fast Response</h4>
                  <p className="text-brand-offwhite font-display text-lg font-bold mt-1">0812-3456-7890</p>
                  <p className="text-xs text-brand-muted mt-2">Jam layanan Fast-Response: Senin s.d. Sabtu pukul 08:00 - 17:00 WIB.</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                  <h4 className="font-bold text-sm text-[#E8394F] uppercase tracking-wider">Kantor Koordinasi Pusat</h4>
                  <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                    Jl. Sultan Agung No. 142, Jetayu, Kec. Pekalongan Utara, Kota Pekalongan, Jawa Tengah 51111 (Dekat Kawasan Budaya Jetayu)
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-72 backdrop-blur-md">
                {/* Google Maps embed code block container */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.916843468571!2d109.67439167448834!3d-6.888565193110461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e702424fa7bcbc5%3A0x6431952ee5cb70d6!2sMuseum%20Batik%20Pekalongan!5e0!3m2!1sid!2sid!4v1711200000000!5m2!1sid!2sid" 
                  className="w-full h-full border-0 grayscale invert contrast-125"
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Kantor Mizumoto Jetayu Pekalongan"
                ></iframe>
              </div>
            </div>
          </div>
        );

      case 'dashboard':
        return (
          <div className="space-y-16 text-left">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                PORTAL ADMIN (DEMO INTERAKTIF)
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Simulasi Dashboard <span className="text-[#E8394F]">Analitik PPDB Sekolah</span>
              </h1>
              <p className="text-brand-muted text-sm sm:text-base mt-4 max-w-2xl">
                Inilah gambaran sistem administrasi modern yang kami kembangkan khusus untuk kepsek & staf panitia. Dashboard ini bersifat responsif dan interaktif sepenuhnya.
              </p>
            </div>

            {/* Simulated Interactive Admin Panel Visualizer */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C8102E]/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5C0F1A]/40 border border-[#C8102E]/30 rounded-lg flex items-center justify-center text-[#E8394F]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-offwhite">Sistem Akademik Terpadu</h3>
                    <p className="text-[10px] text-brand-muted uppercase font-mono tracking-wider">STATUS: AKTIF & TERENKRIPSI (SSL)</p>
                  </div>
                </div>
                
                {/* Simulated Filters */}
                <div className="flex gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 bg-[#5C0F1A]/35 border border-[#C8102E]/30 rounded text-brand-offwhite font-bold">SMAN 1 Pekalongan</span>
                  <span className="px-2.5 py-1 bg-[#5C0F1A]/10 border border-[#C8102E]/10 rounded text-brand-muted">TA 2026/2027</span>
                </div>
              </div>

              {/* Stats Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Total Pendaftar', val: '1,452 Siswa', sub: '+12% dibanding kemarin', icon: Users, color: 'text-blue-400' },
                  { title: 'Berkas Terverifikasi', val: '1,120 Siswa', sub: '92% tingkat penyelesaian', icon: UserCheck, color: 'text-green-400' },
                  { title: 'Kuota Terpenuhi', val: '82%', sub: 'Target kuota 450 siswa', icon: BarChart3, color: 'text-[#E8394F]' },
                  { title: 'Uptime Server', val: '99.98%', sub: 'Bandwidth aman berkapasitas tinggi', icon: Laptop, color: 'text-purple-400' }
                ].map((w, idx) => {
                  const Icon = w.icon;
                  return (
                    <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider">{w.title}</span>
                        <Icon className={`w-4 h-4 ${w.color}`} />
                      </div>
                      <div className="font-display font-bold text-2xl text-brand-offwhite tracking-tight">{w.val}</div>
                      <div className="text-[10px] text-brand-muted/70 mt-1">{w.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* Data Table simulation */}
              <div className="border border-[#C8102E]/15 rounded-xl overflow-hidden text-xs">
                <div className="bg-[#5C0F1A]/15 border-b border-[#C8102E]/15 p-4 text-left font-bold text-brand-offwhite uppercase tracking-wider font-display">
                  Daftar Pendaftar PPDB Terbaru (Real-Time Stream)
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#3B0D14]/30 text-brand-muted border-b border-[#C8102E]/10 font-mono text-[10px] uppercase">
                        <th className="p-4">No. Pendaftaran</th>
                        <th className="p-4">Nama Lengkap</th>
                        <th className="p-4">Asal SMP</th>
                        <th className="p-4">Skor Prestasi</th>
                        <th className="p-4">Status Dokumen</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#C8102E]/5 font-mono text-brand-muted">
                      {[
                        { id: 'PPDB-2026-004', name: 'Rangga Prasetyo', smp: 'SMPN 1 Pekalongan', score: '382.50', status: 'Diverifikasi', statusColor: 'text-green-400 bg-green-500/10 border-green-500/20' },
                        { id: 'PPDB-2026-003', name: 'Dewi Lestari', smp: 'SMPN 3 Pekalongan', score: '390.10', status: 'Diverifikasi', statusColor: 'text-green-400 bg-green-500/10 border-green-500/20' },
                        { id: 'PPDB-2026-002', name: 'Ahmad Fauzi', smp: 'SMPN 1 Batang', score: '365.40', status: 'Menunggu Review', statusColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
                        { id: 'PPDB-2026-001', name: 'Siti Aminah', smp: 'SMP Islam Pekalongan', score: '344.90', status: 'Berkas Kurang', statusColor: 'text-red-400 bg-red-500/10 border-red-500/20' },
                      ].map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#5C0F1A]/5 transition-colors">
                          <td className="p-4 text-brand-offwhite font-bold">{row.id}</td>
                          <td className="p-4">{row.name}</td>
                          <td className="p-4">{row.smp}</td>
                          <td className="p-4">{row.score}</td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase border ${row.statusColor}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-brand-red/5 border border-brand-red/10 p-4 rounded-xl text-xs text-brand-muted leading-relaxed mt-6">
                <AlertCircle className="w-5 h-5 text-[#E8394F] shrink-0" />
                <span>
                  <strong>REKAYASA KEAMANAN (CYBER SECURITY):</strong> Seluruh data siswa yang masuk melalui website PPDB rancangan kami akan dienyam menggunakan hash satu arah berstandar SHA-256 untuk mematuhi regulasi perlindungan data pribadi (UU PDP).
                </span>
              </div>
            </div>
          </div>
        );

      case 'booking':
        return (
          <div className="space-y-16 text-left">
            <div className="max-w-4xl">
              <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F] mb-4">
                RESERVASI PERTEMUAN LURING
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-offwhite leading-tight">
                Jadwalkan Konsultasi <span className="text-[#E8394F]">Tatap Muka Langsung</span>
              </h1>
              <p className="text-brand-muted text-sm sm:text-base mt-4 max-w-2xl">
                Gunakan aplikasi penjadwalan luring di bawah ini untuk mengundang tim perwakilan teknis Mizumoto datang secara luring ke sekolah atau kantor instansi Anda.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl relative backdrop-blur-md">
              <div className="flex gap-4 items-start mb-8 border-b border-[#C8102E]/10 pb-6">
                <div className="p-3 bg-[#5C0F1A]/30 border border-[#C8102E]/30 text-brand-red rounded-xl shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-offwhite">Alur Kunjungan Luring Profesional</h3>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Kami melayani kunjungan luring gratis untuk wilayah Pekalongan, Batang, dan Pemalang. Kami akan membawakan proposal teknis draf blueprint awal.
                  </p>
                </div>
              </div>

              {bookingSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#3B0D14] border border-[#C8102E]/30 text-[#E8394F] flex items-center justify-center rounded-full mx-auto shadow-inner animate-bounce">
                    <Check className="w-8 h-8 stroke-[3px]" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-brand-offwhite">Reservasi Kunjungan Berhasil!</h4>
                    <p className="text-xs text-brand-muted mt-2 max-w-md mx-auto">
                      Jadwal Anda untuk tanggal <strong>{bookingDate}</strong> pukul <strong>{bookingTime} WIB</strong> telah masuk ke agenda kunjungan offline kami. Perwakilan teknis kami akan menghubungi Anda via WhatsApp maksimal 12 jam kerja untuk konfirmasi lokasi spesifik.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      const text = `Halo Mizumoto, saya telah mengirimkan jadwal kunjungan offline via web booking untuk tanggal ${bookingDate} pukul ${bookingTime} WIB. Mohon dikoordinasikan.`;
                      window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="px-6 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-lg"
                  >
                    Hubungi Lanjut di WhatsApp
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setBookingSuccess(true); }} className="space-y-6 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-brand-muted font-bold uppercase tracking-wider">Pilih Tanggal Pertemuan *</label>
                      <input 
                        required 
                        type="date" 
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-4 py-3 bg-[#3B0D14]/80 border border-[#C8102E]/20 rounded-lg text-brand-offwhite font-mono text-sm" 
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-brand-muted font-bold uppercase tracking-wider">Pilih Estimasi Waktu *</label>
                      <select 
                        required 
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full px-4 py-3 bg-[#3B0D14]/80 border border-[#C8102E]/20 rounded-lg text-brand-offwhite font-mono text-sm"
                      >
                        <option value="" className="bg-[#2A0A10]">-- Pilih Jam Kunjungan --</option>
                        <option value="09:00" className="bg-[#2A0A10]">Pukul 09:00 WIB (Sesi Pagi)</option>
                        <option value="11:00" className="bg-[#2A0A10]">Pukul 11:00 WIB (Sesi Pagi)</option>
                        <option value="13:30" className="bg-[#2A0A10]">Pukul 13:30 WIB (Sesi Siang)</option>
                        <option value="15:30" className="bg-[#2A0A10]">Pukul 15:30 WIB (Sesi Sore)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-brand-muted font-bold uppercase tracking-wider">Lokasi / Alamat Lengkap Kantor Instansi Anda *</label>
                    <textarea 
                      required 
                      placeholder="Contoh: Kantor SMAN 1 Pekalongan, Jl. R.A. Kartini No.39, Keputran" 
                      className="w-full px-4 py-3 bg-[#3B0D14]/80 border border-[#C8102E]/20 rounded-lg text-brand-offwhite text-sm" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-brand-red hover:bg-brand-red-bright text-white font-bold rounded-lg uppercase tracking-widest text-xs"
                  >
                    Konfirmasi Reservasi Kunjungan Offline
                  </button>
                </form>
              )}
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-10 text-left max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F]">
              KEBIJAKAN PRIVASI
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-offwhite">
              Kebijakan Privasi Penggunaan Jasa & Portal Mizumoto
            </h1>
            <p className="text-brand-muted text-xs font-mono">Pembaruan Terakhir: 20 Juli 2026</p>
            
            <div className="space-y-6 text-brand-muted text-xs sm:text-sm leading-relaxed">
              <p>Mizumoto Creative Studio menghargai privasi data mitra kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi atau data operasional instansi Anda.</p>
              <h3 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">1. Pengumpulan Informasi</h3>
              <p>Kami mengumpulkan informasi yang Anda berikan secara sukarela melalui formulir konsultasi, formulir pendaftaran PPDB simulasi, request penawaran komersial (Quotation), serta data komunikasi tertulis lainnya.</p>
              <h3 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">2. Penggunaan Data Klien</h3>
              <p>Data pribadi (seperti nama, alamat email, no WhatsApp, nama instansi) hanya akan digunakan untuk memproses request proposal penawaran, mengkoordinasikan janji kunjungan offline, serta memberikan bantuan teknis pasca-serah-terima.</p>
              <h3 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">3. Perlindungan & Keamanan Informasi</h3>
              <p>Kami menerapkan protokol enkripsi modern (SSL/TLS) dan penyimpanan database terlindung. Kami tidak akan pernah memperjualbelikan atau memberikan data instansi Anda kepada pihak ketiga mana pun tanpa persetujuan tertulis resmi.</p>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-10 text-left max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[#5C0F1A] border border-[#C8102E]/30 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#E8394F]">
              SYARAT & KETENTUAN
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-offwhite">
              Syarat & Ketentuan Layanan Pembuatan Website & Aplikasi
            </h1>
            <p className="text-brand-muted text-xs font-mono">Pembaruan Terakhir: 20 Juli 2026</p>
            
            <div className="space-y-6 text-brand-muted text-xs sm:text-sm leading-relaxed">
              <p>Dengan mengakses situs web ini atau menggunakan layanan rekayasa yang ditawarkan oleh Mizumoto Creative Studio, Anda menyatakan setuju untuk terikat oleh Syarat & Ketentuan berikut.</p>
              <h3 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">1. Ruang Lingkup Pengerjaan (SOW)</h3>
              <p>Segenap spesifikasi fitur, modul fungsional, masa pengerjaan, dan lisensi software tertuang secara tertulis dan formal di dalam dokumen "Proposal Teknis & Surat Perjanjian Kerja (SPK)" yang disepakati oleh kedua belah pihak.</p>
              <h3 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">2. Kebijakan Pembayaran</h3>
              <p>Pembayaran paket retail UMKM dilakukan dalam dua termin (DP 50% dan Pelunasan 50% pasca rilis). Khusus instansi pemerintah B2G, mekanisme pembayaran diatur fleksibel sesuai anggaran BOPT/APBD melalui dokumen SPK resmi.</p>
              <h3 className="font-display font-bold text-sm text-brand-offwhite uppercase tracking-wider">3. Masa Garansi & Maintenance</h3>
              <p>Masa garansi bug gratis berlaku selama 3 bulan sejak serah terima sistem. Setelah masa garansi usai, klien dapat memilih opsi perpanjangan kontrak pemeliharaan (SLA Contract) tahunan secara opsional.</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="py-12 text-center text-brand-muted">
            Halaman sedang dalam penyusunan oleh tim teknis.
          </div>
        );
    }
  };

  return (
    <div id="other-pages-wrapper" className="pt-28 pb-20 bg-brand-dark-base min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Navigation Breadcrumb to get back to home */}
        <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-8 text-left border-b border-[#C8102E]/10 pb-4">
          <button 
            onClick={() => setView('home')} 
            className="hover:text-brand-red transition-colors cursor-pointer"
          >
            BERANDA
          </button>
          <span>/</span>
          <span className="text-[#E8394F] uppercase font-bold">{view}</span>
        </div>

        {/* Selected content with simple motion fade */}
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {renderContent()}
        </motion.div>
        
      </div>
    </div>
  );
}
