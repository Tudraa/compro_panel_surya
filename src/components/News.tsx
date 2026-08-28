import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsArticle {
  id: string;
  date: string;
  boldTitle: string;
  lightTitle: string;
  image: string;
}

const ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    date: '19 August 2026',
    boldTitle: 'Projects Impact',
    lightTitle: 'of Innovation',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'news-2',
    date: '19 August 2026',
    boldTitle: 'Portable Solar Panels:',
    lightTitle: 'A Smart Solution for Modern Homes',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'news-3',
    date: '19 August 2026',
    boldTitle: 'Affordable Green',
    lightTitle: 'Energy Solutions Now Within Reach',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'news-4',
    date: '19 August 2026',
    boldTitle: 'How Solar Power',
    lightTitle: 'Shapes a Sustainable Future',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'news-5',
    date: '19 August 2026',
    boldTitle: 'Next Gen Microinverters',
    lightTitle: 'for Residential Solar',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'news-6',
    date: '19 August 2026',
    boldTitle: 'Solar Storage Breakthroughs',
    lightTitle: 'in Off-Grid Communities',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80'
  }
];

export const News: React.FC = () => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Auto slide interval (3.5s)
  useEffect(() => {
    if (isPaused || isMouseDown) return;

    const timer = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, isMouseDown]);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
  };

  return (
    <section id="news" className="w-full bg-white py-24 overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-14 text-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 px-4 md:px-8"
        >
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
            Latest Info
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] tracking-tight leading-[1.2] max-w-2xl text-slate-900">
            <span className="font-extrabold text-slate-950">Catch up on today's top updates</span>{' '}
            <span className="font-light text-slate-600">and the stories that matter most</span>
          </h2>
        </motion.div>

        {/* Full-Width Mouse Drag & Touch Scrollable Track with Auto-Play */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex items-center gap-6 overflow-x-auto scrollbar-none px-6 md:px-12 py-4 cursor-grab active:cursor-grabbing scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ARTICLES.map((article) => (
              <div
                key={article.id}
                className="w-[280px] sm:w-[320px] md:w-[340px] h-[400px] sm:h-[430px] rounded-[2rem] overflow-hidden relative shrink-0 shadow-none border border-slate-100 group flex flex-col justify-between p-6 sm:p-8 cursor-pointer"
              >
                {/* Background Image - Pure Brightness */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={article.image}
                    alt={article.boldTitle}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100"
                  />
                  
                  {/* Gentle gradient overlay for pure white text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                </div>

                {/* Top Row: Date Pill */}
                <div className="relative z-10 self-start">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-[11px] font-semibold text-white tracking-wide shadow-sm">
                    {article.date}
                  </span>
                </div>

                {/* Bottom Row: Typography & Circle Arrow Button */}
                <div className="relative z-10 text-left space-y-4 pt-12">
                  <h3 className="text-xl sm:text-2xl leading-[1.25] text-white tracking-tight">
                    <span className="font-extrabold block text-white drop-shadow-sm">{article.boldTitle}</span>
                    <span className="font-light block text-white/95 mt-0.5">{article.lightTitle}</span>
                  </h3>

                  <div className="flex items-center justify-start pt-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950 transition-all shadow-md">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next Overlay Controls for Desktop */}
          <div className="hidden md:flex items-center justify-between pointer-events-none absolute inset-0 px-4">
            <button
              onClick={scrollPrev}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 border border-slate-200 text-slate-800 flex items-center justify-center shadow-lg hover:bg-[#0a111e] hover:text-white transition-all active:scale-95"
              aria-label="Previous News"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 border border-slate-200 text-slate-800 flex items-center justify-center shadow-lg hover:bg-[#0a111e] hover:text-white transition-all active:scale-95"
              aria-label="Next News"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default News;
