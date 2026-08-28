import React, { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import manInstallationImg2 from '../assets/man_installation_on_roft_2.jpeg';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  image: string;
  categories: string[];
  description1: string;
  description2: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'solar-panel-installation',
    number: '01',
    title: 'Solar Panel Installation',
    image: manInstallationImg2,
    categories: ['Personal Home', 'Large Housing', 'Apartement', 'Big Office'],
    description1: "As the world's traditional energy sources continue to run out, renewable energy has become more than just a choice—it's a necessity. Solar power is one of the most effective solutions, providing reliable, cost-efficient, and eco-friendly electricity for homes and businesses.",
    description2: "With our professional solar panel installation service, you can reduce your dependence on limited resources, lower your energy costs, and contribute to a cleaner, more sustainable future."
  },
  {
    id: 'water-irrigation',
    number: '02',
    title: 'Water Irrigation',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&auto=format&fit=crop&q=80',
    categories: ['Agricultural Farm', 'Greenhouse', 'Remote Field', 'Garden System'],
    description1: 'Our solar-powered water irrigation systems deliver efficient water supply to agricultural fields and remote areas without relying on grid power.',
    description2: 'Maximize crop yields while minimizing operational costs through intelligent solar pumping and automated distribution technology.'
  },
  {
    id: 'maintenance-support',
    number: '03',
    title: 'Maintanance & Support',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&auto=format&fit=crop&q=80',
    categories: ['24/7 Monitoring', 'Annual Maintenance', 'System Repair', 'Performance Audit'],
    description1: 'We provide end-to-end support and preventative maintenance to ensure your solar installation operates at maximum efficiency year-round.',
    description2: 'Our team of certified technicians offers rapid response repairs, routine cleaning, and real-time performance optimization.'
  },
  {
    id: 'wild-life-product',
    number: '04',
    title: 'Wild Life Product',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&auto=format&fit=crop&q=80',
    categories: ['Off-Grid Stations', 'Eco Perimeter Guard', 'Forest Lighting', 'Solar Fencing'],
    description1: 'Eco-friendly solar products specifically designed for wildlife conservation areas, off-grid reserves, and eco-tourism resorts.',
    description2: 'Deliver reliable, silent power without disturbing natural habitats or wildlife ecosystems.'
  }
];

export const Services: React.FC = () => {
  // Item 0 (01 Solar Panel Installation) open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="w-full bg-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-[1.18] tracking-tight">
              Smart services designed for a sustainable future.
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:inline-block">
              Our Service
            </span>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0a111e] text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-md group"
            >
              <span>Know More</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* Accordion List */}
        <div className="w-full divide-y divide-slate-200/90 border-t border-b border-slate-200/90">
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={service.id} className="w-full py-2 transition-colors">
                
                {/* Accordion Header Bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Left: Number & Title */}
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="text-2xl sm:text-3xl font-normal text-slate-800 font-sans min-w-[2.5rem]">
                      {service.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 group-hover:text-[#0d5c58] transition-colors tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Plus / Minus Toggle Button */}
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-slate-800 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-6 h-6 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-6 h-6 stroke-[1.5] group-hover:rotate-90 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Accordion Body with Smooth CSS Grid Animation */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 py-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-2 flex flex-col gap-10">

                      {/* Service Feature Banner Image */}
                      <div className="w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-md bg-slate-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-700"
                        />
                      </div>

                      {/* Content Grid: Left Categories + Right Description & CTA */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-2">

                        {/* Left Column: Category Links */}
                        <div className="md:col-span-5 flex flex-col divide-y divide-slate-200/70 border-t border-b border-slate-200/70">
                          {service.categories.map((cat, i) => (
                            <a
                              key={i}
                              href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                              className="py-3.5 flex items-center justify-between text-slate-800 text-sm font-semibold hover:text-[#0d5c58] group/cat transition-colors"
                            >
                              <span>{cat}</span>
                              <ArrowRight className="w-4 h-4 text-slate-400 group-hover/cat:text-[#0d5c58] group-hover/cat:translate-x-1 transition-all" />
                            </a>
                          ))}
                        </div>

                        {/* Right Column: Descriptions & Get Started Button */}
                        <div className="md:col-span-7 flex flex-col justify-between h-full gap-6">
                          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                            <p>{service.description1}</p>
                            <p>{service.description2}</p>
                          </div>

                          {/* Get Started Button */}
                          <div className="pt-2 flex justify-start md:justify-end">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#0a111e] text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md group"
                            >
                              <span>Get Started</span>
                              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover:translate-x-0.5 transition-transform">
                                <ArrowRight className="w-3.5 h-3.5" />
                              </div>
                            </a>
                          </div>
                        </div>

                      </div>

                    </div>
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

export default Services;
