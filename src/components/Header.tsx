import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Handshake, MessageSquare } from 'lucide-react';

interface HeaderProps {
  view: string;
  setView: (v: string) => void;
}

export default function Header({ view, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', action: () => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: 'Tentang', action: () => { setView('home'); setTimeout(() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Layanan', action: () => { setView('home'); setTimeout(() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Portfolio', action: () => { setView('home'); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Harga', action: () => { setView('home'); setTimeout(() => document.getElementById('harga')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { name: 'Karir', action: () => { setView('career'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { name: 'Kontak', action: () => { setView('home'); setTimeout(() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || view !== 'home'
          ? 'bg-white/5 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button id="brand-logo-link" onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group text-left bg-transparent border-0 cursor-pointer focus:outline-none">
            {/* Hexagon Red Icon with handshake */}
            <img
  src="/logo-mizumoto-icon.png"
  alt="Mizumoto Logo"
  className="
    w-11
    h-11
    object-contain
    transition-all
    duration-300
    group-hover:scale-105
  "
/>
            <div id="brand-wordmark-container" className="flex flex-col">
              <span id="brand-wordmark" className="font-display text-lg sm:text-xl font-bold tracking-tight text-brand-offwhite leading-none uppercase">
                MIZUMOTO
              </span>
              <span id="brand-tagline" className="text-[10px] text-brand-muted/80 tracking-[0.2em] font-mono uppercase mt-1">
                Creative Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className={`
relative
transition-all
duration-300
cursor-pointer
bg-transparent
border-0
focus:outline-none
pb-1
${
                  view === 'home' && link.name === 'Home'
  ? 'text-brand-offwhite'
                    : view === link.name.toLowerCase()
                    ? 'text-brand-offwhite'
                    : 'text-brand-muted hover:text-brand-offwhite hover:tracking-[0.18em]'
                }`}
              >
                <>
  {link.name}

  {(
    (view === "home" && link.name === "Home") ||
    view === link.name.toLowerCase()
  ) && (
    <span
      className="
        absolute
        left-0
        -bottom-[2px]
        w-full
        h-[2px]
        rounded-full
        bg-brand-red-bright
      "
    />
  )}
</>
              </button>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div id="cta-header-container" className="hidden md:flex items-center gap-4">
            <button
              id="header-whatsapp-cta"
              onClick={() => { setView('booking'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-6 py-2.5 bg-brand-red hover:bg-brand-red-bright text-brand-offwhite rounded-lg text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-brand-red/20 border border-brand-red-bright/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div id="mobile-menu-trigger" className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-offwhite hover:text-brand-red-bright focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A0307]/95 backdrop-blur-xl border-b border-[#C8102E]/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-bold uppercase tracking-wider text-brand-muted hover:text-brand-offwhite hover:bg-[#5C0F1A]/20 transition-all cursor-pointer bg-transparent border-0"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-[#C8102E]/10 px-3">
                <button
                  onClick={() => {
                    setView('booking');
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full justify-center px-4 py-3 bg-brand-red hover:bg-brand-red-bright text-brand-offwhite rounded-lg text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all cursor-pointer border-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
