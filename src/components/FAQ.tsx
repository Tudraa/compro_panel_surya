import React, { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do portable panels work',
    answer: 'Portable solar panels capture sunlight through photovoltaic cells and convert it into electricity, which can be used directly or stored in a battery for later use.'
  },
  {
    id: 'faq-2',
    question: 'Are solar panels waterproof',
    answer: 'Yes, modern solar panels are built with IP67 or IP68 rated weather-resistant tempered glass and aluminum framing, making them fully waterproof and protected against rain, snow, and dust.'
  },
  {
    id: 'faq-3',
    question: 'Do solar panels cut bills?',
    answer: 'Absolutely! Solar panels significantly decrease your reliance on traditional electrical grids, reducing monthly utility bills by up to 70% to 90% depending on system capacity.'
  },
  {
    id: 'faq-4',
    question: 'Installation time?',
    answer: 'Portable solar panel kits are ready in under 5 minutes with zero wiring needed. Full residential rooftop systems are typically installed and tested within 1 to 2 working days.'
  }
];

export const FAQ: React.FC = () => {
  // Open first item ('faq-1') by default as shown in reference design
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full bg-white py-24 px-6 md:px-16 border-t border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left Column: Title & CTA Button */}
        <div className="lg:col-span-5 flex flex-col items-start gap-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              <span className="block">Your Questions,</span>
              <span className="block">Our Answers.</span>
            </h2>
          </div>

          {/* Capsule Action Button */}
          <a
            href="#faq"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#0a111e] text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md group border border-slate-800"
          >
            <span>Ask More</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Right Column: Accordion Items */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200/80">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="py-6 first:pt-0 last:pb-0 transition-colors">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">
                    {item.question}
                  </h3>
                  
                  <div className="w-8 h-8 flex items-center justify-center text-slate-700 shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                </button>

                {/* CSS Grid Smooth Height Transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-xl pr-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
