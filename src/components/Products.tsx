import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    id: 'grid-tie-system',
    number: '08',
    name: 'Grid-Tie Solar Kit',
    subtitle: 'seamless net metering setup',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=80'
  }
];

export const Products: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxVisibleCount = 4;
  const maxIndex = PRODUCTS.length - maxVisibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto sliding interval (3.5s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, maxIndex]);

  return (
    <section id="products" className="w-full bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header Row: Left Subtitle & Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
        >
          <div className="md:col-span-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block pt-2">
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
        </motion.div>

        {/* Slider Viewport Window with Auto-Pause on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    ({product.number})
                  </span>
                </div>

                {/* Card Center: Product Image */}
                <div className="my-auto py-4 flex items-center justify-center h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80';
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 rounded-xl shadow-sm"
                  />
                </div>

                {/* Card Bottom: Product Info & Circle Arrow Button */}
                <div className="flex items-end justify-between pt-2">
                  <div className="space-y-1 max-w-[75%]">
                    <h3 className="text-base font-bold text-slate-900 leading-snug tracking-tight group-hover:text-[#0d5c58] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight line-clamp-1">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#0a111e] text-white flex items-center justify-center group-hover:bg-[#0d5c58] group-hover:scale-105 transition-all shadow-md shrink-0">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Carousel Controls: Prev/Next Arrow Buttons */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#0d5c58]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-[#f2f4f7] border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all shadow-sm active:scale-95"
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#f2f4f7] border border-slate-200 text-slate-800 flex items-center justify-center hover:bg-[#0a111e] hover:text-white hover:border-[#0a111e] transition-all shadow-sm active:scale-95"
              aria-label="Next Products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
