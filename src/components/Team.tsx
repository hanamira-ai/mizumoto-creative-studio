import { motion } from 'motion/react';
import { Linkedin, Mail, ShieldCheck, Users } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Mizumoto Ryuu',
      role: 'Principal Digital Architect',
      specialty: 'Arsitektur Sistem & Keamanan',
      bio: 'Berpengalaman lebih dari 12 tahun membangun arsitektur IT handal bersertifikasi keamanan internasional.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop', // Stock premium: professional businessman
    },
    {
      name: 'Aditya Herlambang',
      role: 'Head of Engineering (Local Lead)',
      specialty: 'React, TypeScript & Web App Expert',
      bio: 'Insinyur perangkat lunak asli Pekalongan yang berdedikasi mengoptimalkan Core Web Vitals untuk UMKM dan Instansi Pendidikan.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop', // Stock premium: professional portrait
    },
    {
      name: 'Siti Rahmawati',
      role: 'Senior UI/UX & Editorial Designer',
      specialty: 'Estetika Visual & Aksesibilitas',
      bio: 'Ahli dalam menerjemahkan alur sistem rumit menjadi tampilan antarmuka yang elegan, responsif, dan mudah diakses oleh semua kalangan.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop', // Stock premium: professional businesswoman
    },
    {
      name: 'Rian Kurniawan',
      role: 'Technical Liaison & B2G Officer',
      specialty: 'Kepatuhan Regulasi & Administrasi',
      bio: 'Menjamin kepatuhan seluruh pengerjaan proyek instansi pemerintah dengan regulasi Kemendikbud dan Kominfo secara paripurna.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop', // Stock premium: professional male portrait
    }
  ];

  return (
    <section id="tim" className="py-24 bg-white text-[#1A0307] relative overflow-hidden">
      
      {/* Decorative ambient lines */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-[#C8102E]/5 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-px h-full bg-[#C8102E]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C8102E]/10 border border-[#C8102E]/20 text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>KAPABILITAS TALENTA LOKAL</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A0307] leading-tight">
            Tim Teknolog Berdedikasi <span className="text-[#C8102E]">Mizumoto</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 max-w-2xl">
            Kami mengandalkan talenta lokal bersertifikat dan berdedikasi tinggi yang siap siaga memberikan pelayanan offline langsung di Karesidenan Pekalongan.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-[#F8F6F4] border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:border-[#C8102E]/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col group text-left"
            >
              {/* Photo container */}
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-65" />
                
                {/* Visual indicator of expertise */}
                <div className="absolute bottom-3 left-3 bg-[#C8102E] border border-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-green-400" />
                  <span>{member.specialty}</span>
                </div>
              </div>

              {/* Bio details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#1A0307] group-hover:text-[#C8102E] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-[11px] font-mono font-bold text-[#C8102E] uppercase tracking-wider mt-1">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex gap-3 mt-5 pt-4 border-t border-gray-200">
                  <a href="#" className="p-1.5 rounded bg-white border border-gray-200 hover:bg-[#C8102E]/10 text-gray-500 hover:text-[#C8102E] transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href="#" className="p-1.5 rounded bg-white border border-gray-200 hover:bg-[#C8102E]/10 text-gray-500 hover:text-[#C8102E] transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
