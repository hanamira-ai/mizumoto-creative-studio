import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COVERAGE_AREAS } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationType: 'UMKM',
    projectDesc: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  setErrorMsg('');
  if (!formData.name.trim()) { setErrorMsg('Nama lengkap wajib diisi.'); return; }
  if (!formData.email.trim() || !formData.email.includes('@')) { setErrorMsg('Email tidak valid.'); return; }
  if (!formData.phone.trim()) { setErrorMsg('Nomor WhatsApp wajib diisi.'); return; }
  if (!formData.projectDesc.trim()) { setErrorMsg('Silakan deskripsikan kebutuhan proyek Anda.'); return; }

  setIsSubmitting(true);

  const rawMessage = `Halo Mizumoto, saya ingin konsultasi proyek:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. WhatsApp: ${formData.phone}\nSektor: ${formData.organizationType}\n\nRencana Proyek:\n${formData.projectDesc}`;
  window.open(`https://wa.me/6285640066619?text=${encodeURIComponent(rawMessage)}`, '_blank');

  setTimeout(() => {
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', organizationType: 'UMKM', projectDesc: '' });
  }, 800);
};

  return (
    <section id="kontak" className="py-24 bg-white text-[#1A0307] relative">
      
      {/* Decorative side accent blur */}
      <div id="contact-decor-glow" className="absolute top-1/2 right-0 w-80 h-80 bg-[#C8102E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left panel: Info & Coverage Area tags */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div>
              <span className="inline-block px-3 py-1 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded-md text-[11px] font-bold uppercase tracking-widest text-[#C8102E] mb-4">
                KONSULTASI GRATIS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1A0307] leading-tight">
                Mulai Diskusi <span className="text-[#C8102E]">Proyek Digital</span> Anda Sekarang
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                Punya rencana pembuatan website sekolah, e-commerce UMKM, portal instansi, atau sistem kustom lainnya? Hubungi tim lokal kami untuk koordinasi luring atau konsultasi teknis yang mendalam.
              </p>
            </div>

            {/* Direct Contacts List */}
            <div className="space-y-5">
              <a
                href="https://wa.me/6285640066619"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#F8F6F4]/50 backdrop-blur-md hover:bg-white hover:border-[#C8102E]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 bg-[#C8102E]/10 text-[#C8102E] rounded-lg shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1A0307]">WhatsApp Fast Response</h4>
                  <p className="text-xs text-gray-600 mt-0.5">0856-4006-6619 (Senin - Sabtu, 08:00 - 17:00 WIB)</p>
                </div>
              </a>

              <a
                href="mailto:mizumoto.id@gmail.com"
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#F8F6F4]/50 backdrop-blur-md hover:bg-white hover:border-[#C8102E]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 bg-[#C8102E]/10 text-[#C8102E] rounded-lg shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1A0307]">Email Resmi Studio</h4>
                  <p className="text-xs text-gray-600 mt-0.5">mizumoto.id@gmail.com</p>
                </div>
              </a>

              <a
  href="https://www.google.com/maps/search/?api=1&query=MIZUMOTO+Creative+Studio"
  target="_blank"
  rel="noreferrer"
  className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#F8F6F4]/50 backdrop-blur-md hover:bg-white hover:border-[#C8102E]/30 hover:shadow-md transition-all duration-300 group"
>
  <div className="p-3 bg-[#C8102E]/10 text-[#C8102E] rounded-lg shrink-0 group-hover:scale-105 transition-transform">
    <MapPin className="w-5 h-5" />
  </div>
  <div>
    <h4 className="font-bold text-sm text-[#1A0307]">Alamat Kantor Pusat</h4>
    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
      Pekuncen Utara Gg. Majegan 2 RT. 02 RW. IV No. 428, Wiradesa, Pekalongan, Jawa Tengah
    </p>
  </div>
</a>
            </div>

            {/* Geographical Service Coverage tag-cloud */}
            <div className="border-t border-gray-200 pt-8">
              <span className="text-xs font-mono font-bold tracking-wider text-gray-500 block mb-3 uppercase">
                AREA LAYANAN OFFLINE KARESIDENAN:
              </span>
              <div className="flex flex-wrap gap-2">
                {COVERAGE_AREAS.map((area) => (
                  <span
                    key={area.name}
                    className="text-xs text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg flex items-center gap-1 font-medium hover:border-[#C8102E]/30 transition-colors"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-[#C8102E] rounded-full"></span>
                    {area.type} {area.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Intake Form with success states */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F6F4] border border-gray-200 rounded-xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    id="consultation-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#1A0307] mb-1">
                        Formulir Permintaan Konsultasi
                      </h3>
                      <p className="text-xs text-gray-600">
                        Isi data berikut dan spesifikasi awal sistem Anda. Tim teknis kami akan menghubungi Anda kembali maksimal 1x24 jam kerja.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="bg-[#C8102E]/10 border border-[#C8102E]/20 text-[#C8102E] text-xs px-4 py-3 rounded-lg flex items-center gap-2">
                        <span className="font-bold">Error:</span> {errorMsg}
                      </div>
                    )}

                    {/* Input: Name */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Nama Lengkap / Penghubung *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all"
                      />
                    </div>

                    {/* Double row: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1.5 text-left">
                        <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Email Korespondensi *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="budi@sekolah.sch.id atau budi@corp.com"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 text-left">
                        <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                          Nomor WhatsApp Aktif *
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Contoh: 081234567890"
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all"
                        />
                      </div>
                    </div>

                    {/* Sector selection dropdown */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="organizationType" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Sektor / Jenis Organisasi
                      </label>
                      <select
                        id="organizationType"
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all cursor-pointer"
                      >
                        <option value="UMKM">UMKM & Toko Retail</option>
                        <option value="Sekolah">Sekolah / Institusi Pendidikan</option>
                        <option value="Corporate">Perusahaan Swasta / Corporate</option>
                        <option value="Pemerintah">Instansi Pemerintah / BUMN</option>
                        <option value="Startup">Startup Teknologi / Custom SaaS</option>
                      </select>
                    </div>

                    {/* Textarea: description */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="projectDesc" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Rencana / Kebutuhan Sistem Anda *
                      </label>
                      <textarea
                        id="projectDesc"
                        name="projectDesc"
                        rows={4}
                        value={formData.projectDesc}
                        onChange={handleInputChange}
                        placeholder="Gambarkan secara ringkas rencana website Anda, misalnya: 'Saya ingin membuat sistem PPDB online terintegrasi untuk SMA swasta kami di Pemalang dengan kuota pendaftaran 500 orang...'"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm text-[#1A0307] focus:outline-none focus:ring-2 focus:ring-[#C8102E]/15 focus:border-[#C8102E] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#C8102E] hover:bg-brand-red-bright disabled:bg-gray-400 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-[#C8102E]/20 cursor-pointer uppercase tracking-wider text-xs border border-brand-red-bright/30"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Mengirim Permintaan...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Kirim Permintaan Konsultasi
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    id="contact-form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center rounded-full border border-[#C8102E]/20 shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#1A0307]">Permintaan Terkirim!</h3>
                      <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
                        Terima kasih telah menghubungi Mizumoto Creative Studio. Data proposal Anda telah masuk ke antrean kami. Tim teknis di Pekalongan akan merespons melalui WhatsApp/Email Anda segera.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-600 hover:text-[#1A0307] hover:border-[#C8102E] transition-all bg-white shadow-sm cursor-pointer"
                    >
                      Kirim Formulir Lainnya
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Full-Width Google Maps Embed */}
        <div className="mt-16 rounded-xl overflow-hidden h-80 border border-gray-200 bg-gray-50 shadow-md relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.001848763686!2d109.62413897590626!3d-6.890380567428098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7026f84a6fdc6b%3A0x1914550d0b043b35!2sMIZUMOTO%20Creative%20Studio!5e0!3m2!1sen!2sid!4v1793457335137!5m2!1sen!2sid"
            className="w-full h-full border-0"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Kantor Mizumoto Wiradesa Pekalongan"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
