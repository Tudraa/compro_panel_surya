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
    </div>
  );
}

export default App;
