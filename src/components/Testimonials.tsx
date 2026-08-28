import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Jayyid Jidan',
    role: 'CEO Alphabet',
    quote: "Their solar panel platform delivered unmatched efficiency and reliability, making sustainable energy accessible and seamless. We've never managed our power needs so easily or felt so confident in our green future.",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'testi-2',
    name: 'Sarah Jenkins',
    role: 'VP Sustainability, GreenTech',
    quote: "Transitioning our corporate headquarters to Solara's smart solar array slashed our energy overhead by 45% in the first quarter alone. The seamless installation process surpassed all expectations.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'testi-3',
    name: 'Marcus Vance',
    role: 'Director of Operations, Horizon',
    quote: "The microgrid management platform gives us real-time telemetry and predictive battery optimization. Solara is setting a new benchmark for clean commercial power infrastructure.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'testi-4',
    name: 'Elena Rostova',
    role: 'Chief Energy Architect, Solaris Europe',
    quote: "The durability and energy yield of these next-gen portable arrays have allowed us to deploy clean power rapidly in off-grid rural development projects worldwide.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play sliding interval every 3.5 seconds
  useEffect(() => {
    if (isPaused || isMouseDown) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, isMouseDown, currentIndex]);

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    const cardElement = sliderRef.current.children[index] as HTMLElement;
    if (cardElement) {
      const containerWidth = sliderRef.current.clientWidth;
      const cardWidth = cardElement.clientWidth;
      const scrollOffset = cardElement.offsetLeft - (containerWidth - cardWidth) / 2;
      sliderRef.current.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TESTIMONIALS.length;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    setCurrentIndex(prevIdx);
    scrollToCard(prevIdx);
  };

  // Mouse Drag Handlers
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
    const walk = (x - startX) * 1.6;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section id="testimonials" className="w-full bg-white py-24 overflow-hidden select-none border-t border-slate-100">
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] tracking-tight leading-[1.18] max-w-xl text-slate-900">
            <span className="font-extrabold text-slate-950">Trusted by many,</span>{' '}
            <span className="font-light text-slate-600 block sm:inline">loved by more</span>
          </h2>
        </motion.div>

        {/* Sliding Viewport Container - Auto-Play + Mouse Drag */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full overflow-hidden relative cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-6 py-4 px-6 md:px-16 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToCard(index);
                }}
                className={`rounded-[2.25rem] bg-[#f8fafc] border border-slate-200/80 overflow-hidden flex flex-col md:flex-row items-stretch shrink-0 cursor-pointer shadow-sm transition-all duration-500 gap-0 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
              >
                {/* Left Photo Box - Directly Joined inside Card */}
                <div className="w-[260px] sm:w-[290px] md:w-[320px] h-[340px] md:h-[370px] relative bg-slate-900 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Stat Badge Overlay Pills */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-slate-950/70 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-medium text-white tracking-wide shadow-md">
                      100+ country client
                    </span>
                    <span className="inline-block px-3 py-1.5 rounded-full bg-slate-950/70 border border-white/20 backdrop-blur-md text-[10px] sm:text-xs font-medium text-white tracking-wide shadow-md">
                      $68B in revenue
                    </span>
                  </div>
                </div>

                {/* Right Quote Text Box - Directly Joined without Space */}
                <div className="w-[320px] sm:w-[420px] md:w-[480px] h-[340px] md:h-[370px] p-8 sm:p-10 md:p-12 flex flex-col justify-between text-left shrink-0 bg-[#f8fafc]">
                  {/* Quote Body */}
                  <div>
                    <p className="text-slate-700 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Name & Title */}
                  <div className="pt-6 border-t border-slate-200/80">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.div>

        {/* Carousel Control Dots & Arrow Buttons */}
        <div className="flex items-center justify-between w-full max-w-6xl px-6 md:px-16 pt-2">
          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToCard(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#0a111e]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-[#f8fafc] border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all shadow-sm active:scale-95"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#f8fafc] border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all shadow-sm active:scale-95"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
