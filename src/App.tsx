import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicatorStrip from './components/TrustIndicatorStrip';
import About from './components/About';
import Services from './components/Services';
import TrustSection from './components/TrustSection';
import Portfolio from './components/Portfolio';
import InteractiveEstimator from './components/InteractiveEstimator';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Team from './components/Team';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OtherPages from './components/OtherPages';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [view, setView] = useState('home');

  // Listen to hash changes if any
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#home' || hash === '') {
        setView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-brand-offwhite bg-brand-dark-base text-brand-offwhite">
      {/* Meta Tags / SEO-ready layout structure */}
      <div className="hidden" aria-hidden="true">
        <h2>Mizumoto Creative Studio - Jasa Pembuatan Website & Aplikasi Pekalongan</h2>
        <p>Solusi pembuatan website sekolah, e-commerce batik Pekalongan, portal PPDB online, dan aplikasi custom tepercaya.</p>
      </div>

      {/* Premium Sticky Navigation Bar */}
      <Header view={view} setView={setView} />
      
      {/* Scrollable Layout Sections */}
      <main>
        {view === 'home' ? (
          <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Trust Indicator Strip */}
            <TrustIndicatorStrip />

            {/* 3. About Section */}
            <About />

            {/* 4. Services (Layanan) Grid */}
            <Services />

            {/* 5. Contrasting Dark Advantage Section */}
            <TrustSection />

            {/* 6. Portfolio Grid & Filter */}
            <Portfolio />

            {/* 7. Pricing Tiers Matrix */}
            <Pricing />

            {/* 8. Interactive Project Budget Estimator */}
            <InteractiveEstimator />

            {/* 9. Process Kerja (Workflow / SOP) */}
            <Process />

            {/* 10. Team Grid Playholders */}
            <Team />

            {/* 11. FAQ Accordion */}
            <FAQ />

            {/* 12. Contact Form & Maps Embed */}
            <ContactSection />
          </>
        ) : (
          /* Render designated subpage view */
          <OtherPages view={view} setView={setView} />
        )}
      </main>
      
      {/* Brand Footer */}
      <Footer view={view} setView={setView} />

      {/* Floating WhatsApp Action Button */}
      <a
        id="floating-whatsapp-widget"
        href="https://wa.me/6281234567890?text=Halo%20Mizumoto%20Creative%20Studio%2C%20saya%20tertarik%20untuk%20konsultasi%20jasa%20pembuatan%20website"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/20 active:scale-95 group"
        aria-label="Konsultasi cepat via WhatsApp"
        title="Hubungi Mizumoto Fast Response"
      >
        <MessageSquare className="w-6 h-6 animate-pulse group-hover:scale-105" />
      </a>
    </div>
  );
}
