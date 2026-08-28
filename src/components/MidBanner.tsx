import React from 'react';
import { ArrowRight } from 'lucide-react';
import manInstallationImg from '../assets/man_installation_on_roft.jpeg';

interface MidBannerProps {
  bannerImgUrl?: string;
}

export const MidBanner: React.FC<MidBannerProps> = ({
  bannerImgUrl = manInstallationImg
}) => {
  return (
    <section className="w-full py-12 px-4 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[480px] sm:h-[540px] md:h-[600px] flex flex-col justify-between p-8 sm:p-12 md:p-16">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImgUrl}
            alt="Technician installing solar panel on roof"
            className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
          />
          {/* Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
        </div>

        {/* Top Left Overlay Text */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.18] tracking-tight drop-shadow-md">
            Install solar panels in your home for a cleaner, more sustainable energy source.
          </h2>
        </div>

        {/* Bottom Right CTA Button */}
        <div className="relative z-10 flex justify-end pt-8">
          <a
            href="#get-started"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0a111e] text-white font-semibold text-sm hover:bg-slate-900 transition-all shadow-xl hover:shadow-2xl group border border-white/10"
          >
            <span>Get Started</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default MidBanner;
