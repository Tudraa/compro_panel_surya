import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll Down -> transparan
      // Scroll Up / At top -> putih solid
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 max-w-6xl mx-auto">
      <nav
        className={`group relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-in-out ${
          isScrollingDown
            ? 'bg-white/25 backdrop-blur-md border border-white/30 shadow-none text-white hover:bg-white hover:border-white hover:shadow-xl'
            : 'bg-white/90 backdrop-blur-lg border border-white/60 shadow-xl shadow-black/10 text-slate-900'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className={`flex items-center gap-1 font-bold text-2xl tracking-tight transition-colors duration-300 ${
            isScrollingDown ? 'text-white group-hover:text-[#0d5c58]' : 'text-[#0d5c58]'
          }`}
        >
          Solara.
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold transition-colors duration-300 ${
                isScrollingDown
                  ? 'text-white/95 group-hover:text-slate-800 hover:!text-[#0d5c58]'
                  : 'text-slate-900 hover:text-[#0d5c58]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow ${
              isScrollingDown
                ? 'bg-white/90 text-slate-900 group-hover:bg-[#0a111e] group-hover:text-white hover:!bg-slate-800'
                : 'bg-[#0a111e] text-white hover:bg-slate-800'
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-1 transition-colors ${
            isScrollingDown ? 'text-white' : 'text-slate-700 hover:text-slate-900'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-white/95 backdrop-blur-lg border border-white/40 shadow-xl flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 font-medium py-2 px-3 rounded-lg hover:bg-slate-100/80 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-full bg-[#0a111e] text-white font-medium text-sm mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
