import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  image: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'portable-solar-panel',
    number: '01',
    name: 'Portable Solar Panel',
    subtitle: 'use solar portable anywhere',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'solar-panel-battery',
    number: '02',
    name: 'Solar Panel Battery',
    subtitle: 'renewable use of lightning',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'house-solar-panel',
    number: '03',
    name: 'House Solar Panel',
    subtitle: 'clean energy for your house',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'solar-street-light',
    number: '04',
    name: 'Solar Street Light',
    subtitle: 'unlimited light for your street',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'commercial-inverter',
    number: '05',
    name: 'Commercial Inverter',
    subtitle: 'high efficiency grid converter',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'smart-ev-charger',
    number: '06',
    name: 'Smart EV Charger',
    subtitle: 'fast solar charging station',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'solar-water-pump',
    number: '07',
    name: 'Solar Water Pump',
    subtitle: 'sustainable agriculture power',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'microgrid-controller',
    number: '08',
    name: 'Microgrid Controller',
    subtitle: 'intelligent energy management',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80'
  }
];

export const Products: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Maximum items visible per view (4 cards on desktop, 2 on tablet, 1 on mobile)
  const maxVisibleCount = 4;
  const maxIndex = PRODUCTS.length - maxVisibleCount;

  // Auto-play continuous slider (every 3.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="products" className="w-full bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header Row: Left Subtitle & Main Title */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-4">
            <span className="text-xs font-semibold text-slate-500 tracking-wider block pt-2">
              Our Product
            </span>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-slate-900 leading-[1.2] tracking-tight max-w-lg">
              We offer a range of charge points to choose from.
            </h2>
            
            {/* Product Counter Indicator */}
            <div className="text-xs font-semibold text-slate-400 shrink-0 pb-1">
              <span className="text-slate-900 font-bold">{currentIndex + 1} - {Math.min(currentIndex + maxVisibleCount, PRODUCTS.length)}</span> / {PRODUCTS.length} Products
            </div>
          </div>
        </div>

        {/* Slider Viewport Window with Auto-Pause on Hover */}
        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / maxVisibleCount + 1.5)}%)`
            }}
          >
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(25%-1.125rem)] bg-[#f2f4f7] rounded-3xl p-6 flex flex-col justify-between h-[420px] relative group hover:shadow-xl hover:bg-[#eef1f6] transition-all duration-300 cursor-pointer shrink-0"
              >
                {/* Card Top: Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    {product.number}
                  </span>
                </div>

                {/* Product Visual */}
                <div className="w-full h-48 flex items-center justify-center my-4 p-2 overflow-hidden rounded-2xl bg-white/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="max-h-full max-w-full object-cover rounded-xl group-hover:scale-108 transition-transform duration-500 shadow-sm"
                  />
                </div>

                {/* Card Bottom Info & Action Circle */}
                <div className="flex items-end justify-between pt-4 border-t border-slate-200/60">
                  <div className="space-y-1 pr-2">
                    <h3 className="text-base font-bold text-slate-900 leading-snug tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-tight">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Dark Action Circle Button */}
                  <div className="w-9 h-9 rounded-full bg-[#0a111e] text-white flex items-center justify-center shrink-0 group-hover:bg-[#0d5c58] group-hover:scale-110 transition-all duration-300 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Interactive Navigation Control Buttons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              currentIndex === 0
                ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                : 'border-slate-300 text-slate-800 hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] shadow-sm'
            }`}
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              currentIndex >= maxIndex
                ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                : 'border-slate-300 text-slate-800 hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] shadow-sm'
            }`}
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Products;
