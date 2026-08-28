import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const handlePrev = () => {
    const nextIdx = currentIndex <= 0 ? TESTIMONIALS.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % TESTIMONIALS.length;
    setCurrentIndex(nextIdx);
    scrollToCard(nextIdx);
  };

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

  return (
    <section id="testimonials" className="w-full bg-white py-24 overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-14">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 px-6 md:px-16">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] tracking-tight leading-[1.18] max-w-xl text-slate-900">
            <span className="font-extrabold text-slate-950">Trusted by many,</span>{' '}
            <span className="font-light text-slate-600 block sm:inline">loved by more</span>
          </h2>
        </div>

        {/* Sliding Viewport Container - Auto-Play + Mouse Drag */}
        <div
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
                </div>

                {/* Right Quote Content Box - Seamlessly Attached */}
                <div className="w-[290px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[340px] md:h-[370px] bg-[#f8fafc] p-7 md:p-9 flex flex-col justify-between shrink-0">
                  
                  {/* Author Info */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {item.role}
                    </span>
                  </div>

                  {/* Quote Paragraph */}
                  <blockquote className="text-slate-800 text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight max-w-lg py-2">
                    "{item.quote}"
                  </blockquote>

                  {/* Empty Footer spacing for alignment */}
                  <div className="h-2" />

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Controls Row: Navigation Arrows (Left) & Stat Pills (Right) */}
        <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 px-6 md:px-16 pt-2">
          
          {/* Left Arrow Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-slate-300 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all cursor-pointer shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#0a111e] text-white flex items-center justify-center hover:bg-slate-800 transition-all cursor-pointer shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Stat Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-xs text-slate-600 font-normal shadow-sm">
              <span className="font-bold text-slate-900">100+</span> country client
            </div>
            <div className="px-6 py-2.5 rounded-full border border-slate-200 bg-white text-xs text-slate-600 font-normal shadow-sm">
              <span className="font-bold text-slate-900">$68B</span> in revenue
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
