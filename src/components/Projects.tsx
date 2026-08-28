import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  location: string;
  image: string;
  spanCol?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'housing-citraland',
    number: '(01)',
    title: 'Housing Citraland Surabaya',
    location: 'Surabaya, Indonesia',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'bendungan-bening-road',
    number: '(02)',
    title: 'Bendungan Bening Road',
    location: 'Madiun, Indonesia',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'galatasaray-stadion',
    number: '(03)',
    title: 'Galatasaray Stadion',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'water-irrigation-kradimojo',
    number: '(04)',
    title: 'Water Irrigation in Kradimojo Village',
    location: 'Jawa Timur, Indonesia',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-[#06131c] text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Section Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Our Project
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-xl leading-[1.18]">
            Explore our projects in the real world
          </h2>

          <div className="pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-semibold hover:bg-white hover:text-slate-900 transition-all shadow-md group"
            >
              <span>Show All</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-slate-900 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Staggered Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`flex flex-col gap-4 group cursor-pointer ${
                index % 2 === 1 ? 'md:mt-12' : ''
              }`}
            >
              {/* Project Image Box */}
              <div className="w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden relative shadow-xl bg-slate-900 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Project Title & Number Row */}
              <div className="flex items-center justify-between px-2 pt-1">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {project.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00e599] transition-colors tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 group-hover:bg-[#00e599] group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
