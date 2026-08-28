import React from 'react';
import { Zap, RotateCw, Percent } from 'lucide-react';
import RawMarquee from 'react-fast-marquee';

// Interop fix for react-fast-marquee in Vite / React 19 ESM bundler
const Marquee = (RawMarquee as any)?.default?.default || (RawMarquee as any)?.default || RawMarquee;

interface AboutProps {
  img1Url?: string;
  img2Url?: string;
}

export const About: React.FC<AboutProps> = ({
  img1Url = "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
  img2Url = "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop"
}) => {
  const PARTNER_LOGOS = [
    { name: "WSKT", style: "font-extrabold text-2xl md:text-3xl text-slate-700 tracking-wider" },
    { name: "FLUOR.", style: "font-bold text-2xl md:text-3xl text-slate-700 tracking-widest uppercase" },
    { name: "VINCI", style: "font-semibold text-2xl md:text-3xl text-slate-700 tracking-tight" },
    { name: "sinarmas land", style: "font-medium text-xl md:text-2xl text-slate-700 tracking-tight" },
    { name: "PAKUWON GROUP", style: "font-bold text-lg md:text-xl text-slate-700 tracking-wider uppercase" },
    { name: "Metland", style: "font-bold text-xl md:text-2xl text-slate-700 tracking-tight" },
    { name: "SIEMENS", style: "font-black text-2xl md:text-3xl text-slate-700 tracking-widest" },
    { name: "WIKA", style: "font-extrabold text-2xl md:text-3xl text-slate-700 tracking-wider" },
    { name: "SCHNEIDER", style: "font-bold text-xl md:text-2xl text-slate-700 tracking-wider" },
    { name: "ADHI KARYA", style: "font-bold text-xl md:text-2xl text-slate-700 tracking-widest" },
    { name: "SUMMARECON", style: "font-bold text-lg md:text-xl text-slate-700 tracking-widest uppercase" },
  ];

  return (
    <section id="about" className="w-full bg-white py-24 text-center overflow-hidden">
      {/* Centered Content Container - Expanded Full Width */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 flex flex-col items-center">

        {/* Section Subtitle */}
        <span className="text-xs font-semibold text-slate-400 tracking-wider mb-6 block">
          About Us
        </span>

        {/* Main Statement - Widened */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-900 leading-[1.25] md:leading-[1.2] max-w-5xl lg:max-w-6xl mb-14">
          Solara system delivers simple solar solutions to help you{' '}
          <span className="text-slate-400 font-medium">
            save energy, cut costs, and build a sustainable future.
          </span>
        </h2>

        {/* 3 Feature Circles (Energy, Effective, Affordable) */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mb-16">
          {/* Energy */}
          <div className="flex flex-col items-center gap-2.5 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-sm group-hover:bg-[#0a111e] group-hover:text-white group-hover:border-[#0a111e] group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Energy</span>
          </div>

          {/* Effective */}
          <div className="flex flex-col items-center gap-2.5 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-sm group-hover:bg-[#0a111e] group-hover:text-white group-hover:border-[#0a111e] group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              <RotateCw className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Effective</span>
          </div>

          {/* Affordable */}
          <div className="flex flex-col items-center gap-2.5 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-sm group-hover:bg-[#0a111e] group-hover:text-white group-hover:border-[#0a111e] group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              <Percent className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Affordable</span>
          </div>
        </div>

        {/* 2 Side-by-Side Rounded Images */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-lg w-full mb-16">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-100 group">
            <img
              src={img1Url}
              alt="Solar Panel Mount"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-100 group">
            <img
              src={img2Url}
              alt="Solar Street Light Installation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Full-Width Infinite Scrolling Marquee for Partner / Client Logos */}
      <div className="w-full border-t border-slate-100 pt-12">
        <Marquee
          gradient={true}
          gradientColor="255, 255, 255"
          gradientWidth={120}
          speed={40}
          pauseOnHover={true}
          className="py-2 overflow-hidden w-full"
        >
          <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {PARTNER_LOGOS.map((logo, index) => (
              <span key={index} className={`${logo.style} whitespace-nowrap cursor-pointer hover:opacity-100`}>
                {logo.name}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default About;
