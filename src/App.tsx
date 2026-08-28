import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ValueProposition } from './components/ValueProposition';
import { MidBanner } from './components/MidBanner';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Projects } from './components/Projects';
import { News } from './components/News';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col antialiased relative">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Tahap 4: About / Introduction Section */}
      <About />

      {/* Tahap 5: Value Proposition (Feature) Section */}
      <ValueProposition />

      {/* Tahap 6: Full-Width Image Banner (Mid-section) */}
      <MidBanner />

      {/* Tahap 7: Services (Accordion) Section */}
      <Services />

      {/* Tahap 8: Products Catalog Section */}
      <Products />

      {/* Tahap 9: Projects / Portfolio Section */}
      <Projects />

      {/* Tahap 10: News / Blog Updates Section */}
      <News />

      {/* Tahap 11: Testimonials Section */}
      <Testimonials />

      {/* Tahap 12: FAQ Section */}
      <FAQ />

      {/* Tahap 13: Footer & CTA Section */}
      <Footer />

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#0a111e] text-white border border-white/20 shadow-2xl flex items-center justify-center hover:bg-[#00e599] hover:text-black transition-all active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
