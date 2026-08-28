import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/Hero.jpeg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between pt-36 pb-16 px-6 md:px-16 text-white overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Solar Panel Roof Installation"
          className="w-full h-full object-cover object-center"
        />

        {/* Multi-layer gradient overlay for optimal text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
      </div>

      {/* Main Headline (Top Left Alignment) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mt-4 md:mt-8"
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.25rem] font-bold tracking-tight text-white leading-[0.96] font-sans drop-shadow-md select-none">
          <span className="block font-medium tracking-tight">Innovative Solar</span>
          <span className="block font-bold tracking-tight mt-1">Home Lightning</span>
          <span className="block font-extrabold tracking-tight mt-1">Solution<span className="text-emerald-400 font-black">.</span></span>
        </h1>
      </motion.div>


      {/* Bottom Content Row: Subtext & CTA (Left) + Stats (Right) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-10 pt-16"
      >
        
        {/* Subtext & Get Started Button */}
        <div className="max-w-md space-y-6">
          <p className="text-slate-200 text-sm md:text-base leading-relaxed font-normal drop-shadow-sm">
            Our Solar Home Lightning Solution helps you harness renewable energy, save long-term, and support a healthier planet.
          </p>
          
          <a
            href="#about"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-all shadow-lg group"
          >
            <span>Get Started</span>
            <div className="w-8 h-8 rounded-full bg-[#0a111e] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Floating Stats Counter (Right Side) */}
        <div className="flex items-center gap-10 md:gap-16 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-10">
          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              50%
            </div>
            <div className="text-xs md:text-sm text-slate-300 font-medium mt-1">
              Save More Energy
            </div>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              12M+
            </div>
            <div className="text-xs md:text-sm text-slate-300 font-medium mt-1">
              Trusted Customer
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
