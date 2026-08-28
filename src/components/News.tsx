import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Auto-play sliding interval every 3.5 seconds
  useEffect(() => {
    if (isPaused || isMouseDown) return;

    const timer = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      
      // If reached near end, scroll back smoothly to start
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, isMouseDown]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsPaused(false);
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
        <div className="flex flex-col items-center gap-3 px-4 md:px-8">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
            Latest Info
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] tracking-tight leading-[1.2] max-w-2xl text-slate-900">
            <span className="font-extrabold text-slate-950">Catch up on today's top updates</span>{' '}
            <span className="font-light text-slate-600">and the stories that matter most</span>
          </h2>
        </div>

        {/* Full-Width Mouse Drag & Touch Scrollable Track with Auto-Play */}
        <div
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
            className="flex overflow-x-auto gap-5 md:gap-6 py-4 px-4 md:px-8 cursor-grab active:cursor-grabbing scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ARTICLES.map((article) => (
              <div
                key={article.id}
                className="w-[260px] sm:w-[280px] lg:w-[calc(25%-0.95rem)] lg:min-w-[270px] rounded-[2rem] relative overflow-hidden h-[420px] p-6 flex flex-col justify-between text-white group shadow-none transition-all duration-500 shrink-0 bg-slate-100"
              >
                {/* Background Image - Clean & Unshaded */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <img
                    src={article.image}
                    alt={`${article.boldTitle} ${article.lightTitle}`}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-100"
                  />
                  {/* Subtle Text Contrast Layer */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>

                {/* Top Row: Arrow Button Icon */}
                <div className="relative z-10 flex justify-end pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#00e599] group-hover:text-black group-hover:border-[#00e599] transition-all duration-300 shadow-md">
                    <ArrowRight className="w-4 h-4 -rotate-45 text-white group-hover:text-black" />
                  </div>
                </div>

                {/* Bottom Content: Date & Headline - Pure White Text */}
                <div className="relative z-10 space-y-2 text-left pointer-events-none">
                  <span className="text-[11px] font-medium text-white tracking-wide block font-sans drop-shadow-sm">
                    {article.date}
                  </span>
                  <h3 className="text-lg md:text-xl leading-snug tracking-tight line-clamp-3 text-white drop-shadow-sm">
                    <span className="font-bold text-white">{article.boldTitle}</span>{' '}
                    <span className="font-light text-white">{article.lightTitle}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls & Show All Button Row */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
          {/* Slide Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all cursor-pointer shadow-sm"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all cursor-pointer shadow-sm"
              aria-label="Next article"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Show All CTA Button */}
          <a
            href="#news"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0a111e] text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md group border border-slate-800"
          >
            <span>Show All</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default News;
