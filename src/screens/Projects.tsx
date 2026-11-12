import { useState } from 'react';
import { ArrowUpRight, MapPin, Maximize } from 'lucide-react';
import type { Page } from '@/hooks/useScroll';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data';

type ProjectsProps = {
  onNavigate: (page: Page) => void;
};

const categories = ['All', 'Residential', 'Commercial', 'Cultural'];

export function Projects({ onNavigate }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="page-enter pt-36">
      {/* HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-rust-500/10 -top-20 right-20" />
        <div className="mesh-orb w-[300px] h-[300px] bg-gold-400/10 bottom-0 left-10" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              PORTFOLIO / 2012–2025
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-ink-900">
              Selected<br />
              <span className="italic font-serif font-light text-gradient-rust">work</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p className="font-sans text-lg text-ink-500 max-w-xl leading-relaxed">
                A portfolio of built work across residential, commercial, and cultural typologies — each project a study in place, material, and light.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-display text-4xl font-extrabold text-ink-900">{projects.length}</p>
                  <p className="font-mono text-xs text-ink-400 tracking-wider mt-1">TOTAL PROJECTS</p>
                </div>
                <div className="border-l border-ink-300 pl-8">
                  <p className="font-display text-4xl font-extrabold text-ink-900">12</p>
                  <p className="font-mono text-xs text-ink-400 tracking-wider mt-1">YEARS ACTIVE</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-16 z-30 glass border-y border-ink-900/10 px-6 md:px-12 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
          <span className="font-mono text-xs tracking-widest text-ink-300 whitespace-nowrap mr-2">FILTER:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 rounded-full border ${
                filter === cat
                  ? 'bg-ink-900 text-bone-300 border-ink-900 glow-rust'
                  : 'border-ink-300 text-ink-500 hover:border-ink-900 hover:text-ink-900 bg-bone-300/50'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-ink-300 whitespace-nowrap hidden md:block">
            {filtered.length} PROJECTS
          </span>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bone-300 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 100}>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group block w-full text-left card-lift"
                >
                  <div className={`img-zoom relative overflow-hidden bg-ink-700 rounded-sm ${i % 4 === 1 || i % 4 === 2 ? 'md:mt-32' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[5/4] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full">
                      <span className="font-mono text-xs tracking-wider text-ink-900">{project.year}</span>
                    </div>
                    <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-full">
                      <span className="font-mono text-xs tracking-wider text-ink-900">{project.category}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-bone-300 text-ink-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 group-hover:text-rust-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-ink-400 mt-1">{project.description}</p>
                    </div>
                    <div className="text-right space-y-2 pt-1">
                      <p className="font-mono text-xs text-ink-300 tracking-wider flex items-center justify-end gap-1">
                        <MapPin size={10} />{project.location}
                      </p>
                      <p className="font-mono text-xs text-ink-300 tracking-wider flex items-center justify-end gap-1">
                        <Maximize size={10} />{project.size}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
