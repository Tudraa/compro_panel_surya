import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import ctaBgImage from '../assets/man_installation_on_roft_2.jpeg';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#06131c] text-white pt-0 pb-0 relative overflow-hidden select-none">
      
      {/* 100% Full-Width Edge-to-Edge CTA Banner */}
      <div id="contact" className="w-full relative min-h-[360px] md:h-[420px] px-6 sm:px-12 md:px-16 py-16 flex flex-col justify-center items-start gap-6 border-b border-white/10 group overflow-hidden">
        
        {/* Background Image - 100% Full Width Edge-to-Edge */}
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBgImage}
            alt="Become Our Member - Solar Technician"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&auto=format&fit=crop&q=80';
            }}
            className="w-full h-full object-cover object-right md:object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
          />
          {/* Dark Gradient Overlay for Left Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06131c]/95 via-[#06131c]/75 to-transparent" />
        </div>

        {/* Left Content Overlay inside Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-6xl mx-auto w-full space-y-4 text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-lg">
            Became Our Member
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-md">
            Became our member and save the earth with use renewable energy from the sun using solar panel
          </p>

          {/* Get Started Capsule Button */}
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#06131c]/90 border border-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold hover:bg-slate-950 transition-all shadow-md group/btn"
            >
              <span>Get Started</span>
              <div className="w-7 h-7 rounded-full bg-[#00e599] flex items-center justify-center text-slate-950 group-hover/btn:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </motion.div>

      </div>

      {/* Footer Navigation Grid (4 Columns) & Copyright */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-6 md:px-16 pt-16">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pt-4 text-left"
        >
          
          {/* Col 1: Description & Social Icons (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xs">
              Powering a greener tomorrow through innovative solar solutions, delivering clean energy that's reliable, efficient, and sustainable for all.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-5 pt-2 text-[#00e599]">
              {/* Instagram */}
              <a href="#instagram" aria-label="Instagram" className="hover:scale-110 transition-transform">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#facebook" aria-label="Facebook" className="hover:scale-110 transition-transform">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="#twitter" aria-label="X Twitter" className="hover:scale-110 transition-transform font-bold font-mono text-sm">
                X
              </a>

              {/* LinkedIn */}
              <a href="#linkedin" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Company
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Service</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonial</a></li>
            </ul>
          </div>

          {/* Col 3: Support (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Support
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#client" className="hover:text-white transition-colors">Our Client</a></li>
            </ul>
          </div>

          {/* Col 4: Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Contact
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00e599] shrink-0" />
                <span>(62) 765 897 908</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00e599] shrink-0" />
                <span>OurCompany@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00e599] shrink-0 mt-0.5" />
                <span className="leading-normal max-w-xs">
                  Jalan Bendungan Sutami, Sumbersari Malang Kota 65145
                </span>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© Company 2025.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-white transition-colors">Term Of Service</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>

      {/* Massive Giant Typography "SOLARA" at the very bottom */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full overflow-hidden pt-6 leading-none"
      >
        <h1 className="text-[17vw] sm:text-[18vw] lg:text-[19vw] font-black tracking-tighter text-[#00e599] text-center uppercase leading-none select-none -mb-3 sm:-mb-6 md:-mb-10">
          SOLARA
        </h1>
      </motion.div>
    </footer>
  );
};

export default Footer;
