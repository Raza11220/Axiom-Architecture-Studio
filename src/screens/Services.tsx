import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import type { Page } from '@/hooks/useScroll';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data';

type ServicesProps = {
  onNavigate: (page: Page) => void;
};

const serviceColors = [
  'bg-gradient-rust',
  'bg-gradient-sage',
  'bg-gradient-teal',
  'bg-gradient-gold-dark',
  'bg-gradient-dark',
  'bg-gradient-sage',
];

export function Services({ onNavigate }: ServicesProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="page-enter pt-36">
      {/* HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-sage-500/10 -top-20 right-20" />
        <div className="mesh-orb w-[300px] h-[300px] bg-rust-500/10 bottom-0 left-10" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              WHAT WE DO
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-ink-900">
              Six disciplines.<br />
              <span className="italic font-serif font-light text-gradient-sage">One practice</span>.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-lg text-ink-500 max-w-xl mt-8 leading-relaxed">
              From the first sketch to the final detail, we offer integrated services across the full lifecycle of a project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bone-300 grain-overlay">
        <div className="max-w-[1400px] mx-auto">
          <div className="border-t border-ink-900/15">
            {services.map((service, i) => {
              const isOpen = openIdx === i;
              return (
                <Reveal key={service.num} delay={i * 50}>
                  <div className="border-b border-ink-900/15 group">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-center gap-6 py-8 md:py-10 text-left"
                    >
                      <span className="font-mono text-sm text-ink-300 tracking-wider w-12 flex-shrink-0 group-hover:text-rust-700 transition-colors">{service.num}</span>
                      <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink-900 group-hover:text-rust-700 transition-colors duration-300 flex-1">
                        {service.title}
                      </span>
                      <span className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-rust-700 border-rust-700 text-bone-300'
                          : 'border-ink-900/20 text-ink-600 group-hover:border-rust-700 group-hover:bg-rust-700 group-hover:text-bone-300'
                      }`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-500 ease-out"
                      style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="pl-0 md:pl-[4.5rem] pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <p className="font-sans text-base md:text-lg text-ink-500 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 md:justify-end content-start">
                          {service.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="px-4 py-2 text-sm font-medium border border-ink-900/15 rounded-full text-ink-600 bg-bone-200 hover:bg-rust-700 hover:text-bone-300 hover:border-rust-700 transition-all duration-300 cursor-default"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — VISUAL TIMELINE */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-dark grain-overlay text-bone-300 relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-rust-700/20 -left-20 top-20 animate-glow-pulse" />
        <div className="mesh-orb w-[300px] h-[300px] bg-gold-600/15 right-10 bottom-10 animate-glow-pulse" style={{ animationDelay: '3s' }} />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-500 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-500" />
              HOW WE WORK
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-bone-100 mb-16">
              The process
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { step: '01', title: 'Listen', desc: 'We begin by understanding the site, the client, and the ambition.', color: 'text-rust-400', dot: 'bg-rust-500' },
              { step: '02', title: 'Sketch', desc: 'Hand drawings and models explore form before any digital work.', color: 'text-gold-400', dot: 'bg-gold-500' },
              { step: '03', title: 'Develop', desc: 'We refine the design through material study and technical detail.', color: 'text-sage-300', dot: 'bg-sage-500' },
              { step: '04', title: 'Build', desc: 'We oversee construction to ensure every detail is realized as drawn.', color: 'text-teal-300', dot: 'bg-teal-500' },
            ].map((phase, i) => (
              <Reveal key={phase.step} delay={i * 80}>
                <div className="relative border-l-2 border-ink-600 pl-8 py-6 md:py-8 group hover:border-rust-500 transition-colors duration-500">
                  {/* Dot */}
                  <span className={`absolute -left-[7px] top-8 w-3 h-3 rounded-full ${phase.dot} ring-4 ring-ink-900`} />
                  <span className={`font-mono text-sm ${phase.color} tracking-wider`}>{phase.step}</span>
                  <h3 className="font-display text-3xl font-bold text-bone-100 mt-3 mb-3">{phase.title}</h3>
                  <p className="font-sans text-sm text-ink-100 leading-relaxed">{phase.desc}</p>
                  {i < 3 && (
                    <ArrowRight size={20} className="hidden md:block absolute right-[-12px] top-1/2 text-ink-600" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 bg-bone-300 grain-overlay">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-ink-900 text-balance">
              Ready to start?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-8 inline-flex items-center gap-3 font-display text-lg font-semibold text-ink-900 hover:text-rust-700 transition-colors group"
            >
              Get in touch
              <span className="w-12 h-12 rounded-full bg-ink-900 text-bone-300 flex items-center justify-center group-hover:bg-rust-700 transition-colors glow-rust">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-45 transition-transform duration-300">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
