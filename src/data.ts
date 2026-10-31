import { ServiceItem, PortfolioItem, TestimonialItem, CoverageArea, ProcessStep } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'school-web',
    title: 'Website Portal & PPDB Sekolah',
    description: 'Transformasi digital sekolah terpercaya dengan integrasi portal akademik, sistem pendaftaran siswa baru (PPDB) online, dan galeri interaktif.',
    iconName: 'GraduationCap',
    targetAudience: 'Sekolah & Institusi Pendidikan',
    features: ['Formulir PPDB Online Realtime', 'Manajemen Artikel & Guru', 'Keamanan Data Siswa Terenkripsi', 'Sesuai Standar Kemendikbud']
  },
  {
    id: 'umkm-shop',
    title: 'E-Commerce & Digitalisasi UMKM',
    description: 'Perluas jangkauan pasar dengan toko online berperforma tinggi, katalog produk interaktif, dan integrasi pembayaran lokal.',
    iconName: 'ShoppingBag',
    targetAudience: 'UMKM & Toko Retail',
    features: ['Integrasi QRIS / Transfer Bank', 'Hitung Ongkir Otomatis (RajaOngkir)', 'Desain Responsif Mobile-First', 'Optimal untuk SEO Lokal Google']
  },
  {
    id: 'custom-app',
    title: 'Aplikasi Web Custom & SaaS',
    description: 'Solusi sistem informasi yang disesuaikan dengan alur bisnis Anda. Dari dashboard analitik, CRM, hingga platform berbasis langganan (SaaS).',
    iconName: 'Cpu',
    targetAudience: 'Startup, Developer & Swasta',
    features: ['API Integrasi Pihak Ketiga', 'Dashboard Interaktif & Grafik D3', 'Arsitektur Skalabel Berlatensi Rendah', 'Dukungan Database Relasional']
  },
  {
    id: 'gov-portal',
    title: 'Portal Pelayanan Publik & Instansi',
    description: 'Menghadirkan transparansi dan kemudahan akses informasi publik dengan website instansi pemerintah yang aman, andal, dan ramah aksesibilitas.',
    iconName: 'Building2',
    targetAudience: 'Instansi Pemerintah & BUMN',
    features: ['Sistem Informasi Pengaduan', 'Transparansi Kinerja & Anggaran', 'Sertifikasi Keamanan SSL & Anti-SQLi', 'Aksesibilitas Kontras Tinggi']
  },
  {
    id: 'corporate-profile',
    title: 'Website Corporate Profile Premium',
    description: 'Bangun kredibilitas tingkat tinggi di mata investor dan klien global dengan website profil perusahaan berestetika editorial premium.',
    iconName: 'Briefcase',
    targetAudience: 'Perusahaan Swasta & Korporasi',
    features: ['Desain Editorial Elegan & Imersif', 'Pilihan Bahasa Ganda (Multi-language)', 'Halaman Investor Relations', 'Optimal di Semua Ukuran Layar']
  }
];

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'IBIP — Bintan Industrial Park Platform',
    category: 'Corporate Profile Premium',
    description: 'Website korporat untuk kawasan ekonomi khusus terintegrasi di Pulau Bintan, menampilkan profil investasi energi terbarukan dan infrastruktur digital.',
    clientType: 'Corporate',
    itemType: 'project',
    image: '/assets/portfolio/ibip-mockup.png',
    year: '2025',
    tags: ['React', 'Corporate Profile', 'Multi-language', 'Editorial Design']
  },
  {
    id: 'port-2',
    title: 'Aura Photo Studio',
    category: 'Website Jasa & Booking',
    description: 'Website studio foto profesional dengan sistem booking online, galeri portofolio interaktif, dan integrasi WhatsApp untuk reservasi cepat.',
    clientType: 'UMKM',
    itemType: 'project',
    image: '/assets/portfolio/aura-photo-mockup.png',
    year: '2025',
    tags: ['Booking System', 'Gallery', 'Tailwind CSS', 'WhatsApp Integration']
  },
  {
    id: 'port-3',
    title: 'UNO Batik — Cultural Heritage E-Commerce',
    category: 'E-Commerce Platform',
    description: 'Platform e-commerce koleksi batik modern dengan katalog produk elegan, custom size fitting, dan pengalaman belanja online yang premium.',
    clientType: 'UMKM',
    itemType: 'project',
    image: '/assets/portfolio/uno-batik-mockup.png',
    year: '2025',
    tags: ['E-Commerce', 'Product Catalog', 'Responsive Design', 'React']
  },
  {
    id: 'port-4',
    title: 'Template Website Sekolah — Yayasan Muhammadiyah',
    category: 'Template Portal Pendidikan',
    description: 'Template siap pakai untuk sekolah berbasis Yayasan Muhammadiyah, lengkap dengan modul PPDB online dan portal akademik — siap dikustomisasi sesuai identitas sekolah Anda.',
    clientType: 'Sekolah',
    itemType: 'template',
    image: '/assets/portfolio/template-sekolah-muhammadiyah.png',
    year: '2026',
    tags: ['Sistem PPDB', 'Template Siap Pakai', 'React', 'Portal Akademik']
  },
  {
    id: 'port-5',
    title: 'Template Website Sekolah — Yayasan NU',
    category: 'Template Portal Pendidikan',
    description: 'Template siap pakai untuk sekolah berbasis Yayasan Nahdlatul Ulama, lengkap dengan modul PPDB online dan portal akademik — siap dikustomisasi sesuai identitas sekolah Anda.',
    clientType: 'Sekolah',
    itemType: 'template',
    image: '/assets/portfolio/template-sekolah-nu.png',
    year: '2026',
    tags: ['Sistem PPDB', 'Template Siap Pakai', 'React', 'Portal Akademik']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Drs. H. Ahmad Fauzi, M.Pd',
    role: 'Kepala Sekolah',
    company: 'SMA Negeri Pekalongan',
    content: 'Mizumoto membantu digitalisasi sekolah kami dengan sangat mulus. Sistem PPDB kustom buatan mereka sangat stabil saat menerima ribuan pendaftar serentak tanpa lag sekalipun.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    clientType: 'Sekolah'
  },
  {
    id: 'test-2',
    name: 'Ibu Sri Lestari',
    role: 'Pendiri & Pemilik',
    company: 'Lestari Batik Pekalongan',
    content: 'Semenjak memiliki katalog online terintegrasi garapan Mizumoto, omzet bulanan kami naik signifikan berkat pembeli dari luar pulau. Desainnya sangat mewah, merepresentasikan nilai batik kami.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    clientType: 'UMKM'
  },
  {
    id: 'test-3',
    name: 'Bpk. Setiawan Purwanto',
    role: 'Kabid Humas Dinas Kominfo',
    company: 'Kabupaten Batang',
    content: 'Keamanan, ketepatan waktu, dan pemahaman regulasi data publik dari tim Mizumoto sangat luar biasa. Portal SIPP Batang kini menjadi percontohan layanan ramah disabilitas di Karesidenan.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    clientType: 'Pemerintah'
  },
  {
    id: 'test-4',
    name: 'Ronald Wijaya',
    role: 'Co-Founder & CTO',
    company: 'NexTech Logistics Kendal',
    content: 'Mizumoto tahu betul cara membangun arsitektur kode yang terstruktur. Aplikasi monitoring armada kami sangat cepat dan kodenya rapi, memudahkan tim developer internal kami melanjutkan maintain.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    clientType: 'Startup & Corporate'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Konsultasi & Blueprint Strategis',
    description: 'Kami menganalisis target audiens spesifik Anda (sekolah, UMKM, instansi, atau swasta) dan merumuskan arsitektur peta situs digital yang fungsional.'
  },
  {
    step: '02',
    title: 'Desain UI/UX Editorial Premium',
    description: 'Membuat konsep visual bernilai seni tinggi yang responsif, minimalis, elegan, dan menonjolkan kredibilitas serta profesionalisme brand Anda.'
  },
  {
    step: '03',
    title: 'Pengembangan Kode Terstruktur',
    description: 'Proses coding menggunakan stack modern React, Vite, dan Tailwind CSS. Mengutamakan performa loading cepat, struktur modular, dan ramah SEO.'
  },
  {
    step: '04',
    title: 'Quality Assurance & Audit Keamanan',
    description: 'Pengujian komprehensif mulai dari kecepatan, keamanan terhadap eksploitasi siber, kecocokan lintas peramban, hingga akhirnya rilis lancar.'
  },
  {
    step: '05',
    title: 'Pemeliharaan & Pendampingan 24/7',
    description: 'Kami tidak meninggalkan Anda setelah rilis. Mizumoto memberikan garansi performa, backup berkala, dan tim tanggap insurat lokal Pekalongan.'
  }
];

export const COVERAGE_AREAS: CoverageArea[] = [
  { name: 'Pekalongan', type: 'Kota' },
  { name: 'Batang', type: 'Kabupaten' },
  { name: 'Tegal', type: 'Kota' },
  { name: 'Slawi', type: 'Kabupaten' },
  { name: 'Brebes', type: 'Kabupaten' },
  { name: 'Pemalang', type: 'Kabupaten' },
  { name: 'Kendal', type: 'Kabupaten' },
  { name: 'Weleri', type: 'Kabupaten' }
];
