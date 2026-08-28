import React from 'react';
import { Home, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ValuePropositionProps {
  visionImgUrl?: string;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({
  visionImgUrl = "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"
}) => {
  const HASHTAGS = [
    "#timedelivery",
    "#research&development",
    "#trainingpersonel",
    "#qualityservice"
  ];

  return (
    <section id="features" className="w-full bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Top Mission Statement Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
        >
          <div className="md:col-span-4">
            <span className="text-xs font-semibold text-slate-500 tracking-wider block pt-2 uppercase">
              Our Mission
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-slate-900 leading-[1.2] tracking-tight">
              We drive innovation and improvement to create cost-effective, eco-friendly products powered by renewable energy.
            </h2>
          </div>
        </motion.div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* Card 1: Dark Navy Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-[#061d28] p-8 text-white flex flex-col justify-between min-h-[380px] md:min-h-[420px] shadow-lg relative overflow-hidden group"
          >
            {/* Top Row: Label & Circle Icon */}
            <div className="flex items-start justify-between">
              <span className="text-xs font-normal text-slate-300/90 tracking-wide">
                Solar Panel Usage
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/90 group-hover:scale-110 transition-transform">
                <Home className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content: Target Pill & 150+ Stats */}
            <div className="space-y-4 pt-12">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-medium text-slate-200">
                  Year Target
                </span>
              </div>
              <div>
                <div className="text-6xl sm:text-7xl font-bold tracking-tight text-white font-sans">
                  150+
                </div>
                <div className="text-sm md:text-base text-slate-300 font-medium mt-1">
                  Housing in the world
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Image Overlay Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-3xl relative overflow-hidden min-h-[380px] md:min-h-[420px] shadow-lg group"
          >
            <img
              src={visionImgUrl}
              alt="Solar Engineer inspects installation"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Top Right Eye Circle Icon */}
            <div className="absolute top-6 right-6 z-10">
              <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-sm">
                <Eye className="w-5 h-5" />
              </div>
            </div>

            {/* Gradient Overlay & Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                Our Vision
              </h3>
              <p className="text-xs md:text-sm text-slate-200/90 leading-relaxed font-normal max-w-xs">
                Provide product and services of the highest possible standarts to satisfy our costumer
              </p>
            </div>
          </motion.div>

          {/* Card 3: Light Gray Hashtag Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl bg-[#f2f4f7] p-8 text-slate-900 flex flex-col justify-between min-h-[380px] md:min-h-[420px] shadow-sm"
          >
            {/* Headline */}
            <div>
              <h3 className="text-xl md:text-[1.4rem] font-bold text-slate-900 leading-snug tracking-tight max-w-xs">
                Always keep our product and service quality for the better output
              </h3>
            </div>

            {/* Hashtag Pills */}
            <div className="flex flex-wrap gap-2.5 pt-8">
              {HASHTAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 text-xs font-semibold tracking-tight transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ValueProposition;
