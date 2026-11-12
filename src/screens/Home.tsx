import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Plus, Quote } from 'lucide-react';
import type { Page } from '@/hooks/useScroll';
import { Reveal } from '@/components/Reveal';
import { Marquee, ClientMarquee } from '@/components/Marquee';
import { projects, stats, testimonials, interiorImages, staircaseImages, values } from '@/data';

type HomeProps = {
  onNavigate: (page: Page) => void;
};

export function Home({ onNavigate }: HomeProps) {
  const featured = projects.slice(0, 4);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-gradient-warm grain-overlay pt-40 pb-12 px-6 md:px-12">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Mesh orbs */}
        <div className="mesh-orb w-[500px] h-[500px] bg-rust-500/15 -top-20 right-10 animate-glow-pulse" />
        <div className="mesh-orb w-[400px] h-[400px] bg-sage-500/10 top-1/3 left-20 animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="mesh-orb w-[300px] h-[300px] bg-gold-400/10 bottom-20 right-1/3 animate-glow-pulse" style={{ animationDelay: '4s' }} />

        {/* Floating label */}
        <div className="absolute top-36 right-6 md:right-12 flex items-center gap-3 animate-fade-in z-10" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <span className="w-2 h-2 rounded-full bg-rust-600 animate-pulse-slow" />
          <span className="font-mono text-xs tracking-ultra-wide text-ink-400">CURRENTLY ACCEPTING COMMISSIONS — 2025</span>
        </div>

        <div className="relative max-w-[1600px] mx-auto w-full z-10">
          {/* Overline */}
          <div className="flex items-center gap-4 mb-6 animate-fade-up" style={{ opacity: 0 }}>
            <span className="font-mono text-xs tracking-ultra-wide text-rust-700">AXIOM ARCHITECTURE STUDIO</span>
            <span className="h-px flex-1 max-w-[120px] bg-ink-300" />
            <span className="font-mono text-xs tracking-ultra-wide text-ink-300">EST. 2009</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-extrabold tracking-tighter leading-[0.85] text-ink-900 text-balance">
            <span className="block text-[14vw] md:text-[11vw] animate-fade-up" style={{ opacity: 0, animationDelay: '0.1s' }}>
              Form follows
            </span>
            <span className="block text-[14vw] md:text-[11vw] animate-fade-up" style={{ opacity: 0, animationDelay: '0.25s' }}>
              <span className="italic font-serif font-light text-gradient-rust">light</span><span className="text-rust-700">.</span>
            </span>
          </h1>

          {/* Sub row */}
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 animate-fade-up" style={{ opacity: 0, animationDelay: '0.5s' }}>
            <p className="font-sans text-base md:text-lg text-ink-500 max-w-md leading-relaxed">
              An award-winning architecture studio shaping spaces where material, proportion, and natural light converge into enduring form.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => onNavigate('projects')}
                className="group flex items-center gap-3 font-display text-lg font-semibold text-ink-900 hover:text-rust-700 transition-colors duration-300"
              >
                View our work
                <span className="w-12 h-12 rounded-full bg-ink-900 text-bone-300 flex items-center justify-center group-hover:bg-rust-700 transition-colors duration-300 glow-rust">
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3 animate-fade-in" style={{ opacity: 0, animationDelay: '1s' }}>
            <ArrowDown size={16} className="text-ink-300 animate-bounce" />
            <span className="font-mono text-xs tracking-widest text-ink-300">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* INTRO STATEMENT */}
      <section className="px-6 md:px-12 py-24 md:py-40 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[300px] h-[300px] bg-sage-500/10 -top-10 right-1/4" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <Reveal>
                <div className="sticky top-32">
                  <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-rust-700" />
                    PHILOSOPHY
                  </p>
                  <div className="mt-8 space-y-2">
                    <span className="block w-2 h-2 rounded-full bg-rust-500" />
                    <span className="block w-2 h-2 rounded-full bg-sage-500" />
                    <span className="block w-2 h-2 rounded-full bg-gold-500" />
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-9">
              <Reveal>
                <p className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-ink-900 text-balance">
                  We believe architecture is not the arrangement of walls but the shaping of <span className="italic font-serif font-light text-gradient-rust">experience</span> — the careful orchestration of light, shadow, and silence that makes a building feel <span className="italic font-serif font-light text-gradient-sage">inevitable</span> in its place.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {values.map((v) => (
                    <div key={v.num} className="border-l-2 border-ink-200 pl-4 hover:border-rust-500 transition-colors duration-300 group">
                      <span className="font-mono text-xs text-ink-300 group-hover:text-rust-700 transition-colors">{v.num}</span>
                      <p className="font-display text-sm font-bold text-ink-900 mt-1">{v.title}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-bone-400 grain-overlay relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <Reveal>
              <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-rust-700" />
                SELECTED WORK
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-ink-900">
                Recent projects
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <button
                onClick={() => onNavigate('projects')}
                className="hidden md:flex items-center gap-2 font-sans text-sm text-ink-500 hover:text-ink-900 transition-colors group"
              >
                All projects
                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
              </button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <button
                  onClick={() => onNavigate('projects')}
                  className="group block w-full text-left card-lift"
                >
                  <div className={`img-zoom relative overflow-hidden bg-ink-700 rounded-sm ${i % 2 === 1 ? 'md:mt-24' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full">
                      <span className="font-mono text-xs tracking-wider text-ink-900">{project.category}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-bone-300 text-ink-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <Plus size={20} />
                    </div>
                  </div>
                  <div className="mt-5 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink-900 group-hover:text-rust-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-ink-400 mt-1">{project.location} · {project.year}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-ink-300 tracking-wider">{project.size}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-dark grain-overlay text-bone-300 relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-rust-700/20 -left-20 top-20 animate-glow-pulse" />
        <div className="mesh-orb w-[300px] h-[300px] bg-gold-600/15 right-10 bottom-10 animate-glow-pulse" style={{ animationDelay: '3s' }} />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-500 mb-12 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-500" />
              BY THE NUMBERS
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="group border-l border-ink-600 pl-6 hover:border-rust-500 transition-colors duration-500">
                  <p className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-bone-100 group-hover:text-gradient-rust transition-all duration-500">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs tracking-widest text-ink-200 mt-3">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <ClientMarquee />

      {/* INTERIOR STRIP */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-warm grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <Reveal>
              <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-rust-700" />
                INTERIORS
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-ink-900">
                Within the walls
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="hidden md:block font-sans text-sm text-ink-400 max-w-xs text-right">
                The interior is where architecture becomes intimate — where material meets the body.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {interiorImages.slice(0, 6).map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`img-zoom overflow-hidden rounded-sm group relative ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
                  <img
                    src={img}
                    alt={`Interior ${i + 1}`}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/10 transition-colors duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-sage grain-overlay text-bone-300 relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-sage-400/15 top-20 right-20 animate-glow-pulse" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="font-mono text-xs tracking-ultra-wide text-sage-300 mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-sage-300" />
                OUR APPROACH
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] text-bone-100 mb-8">
                Drawn by hand.<br />
                <span className="italic font-serif font-light text-sage-300">Built</span> to last.
              </h2>
              <p className="font-sans text-base md:text-lg text-sage-100 leading-relaxed mb-8">
                Every project begins with pencil and paper. We sketch, we model, we test. Only when a design feels right in the hand do we commit it to the screen — and then to the site.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-3 font-display text-lg font-semibold text-bone-100 hover:text-sage-300 transition-colors"
              >
                Read our manifesto
                <span className="w-12 h-12 rounded-full border border-sage-300 flex items-center justify-center group-hover:bg-sage-500 group-hover:border-sage-500 transition-all duration-300">
                  <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </button>
            </Reveal>
            <Reveal delay={100}>
              <div className="img-zoom overflow-hidden rounded-sm">
                <img
                  src={staircaseImages[4]}
                  alt="Studio approach"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ROTATING TESTIMONIAL */}
      <section className="px-6 md:px-12 py-24 md:py-40 bg-bone-400 grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[300px] h-[300px] bg-rust-400/10 top-20 left-20" />
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <Reveal>
            <Quote size={48} className="text-rust-300 mx-auto mb-8" />
          </Reveal>
          <div className="relative min-h-[200px] md:min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeTestimonial === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl font-light italic leading-[1.15] text-ink-900 text-balance">
                  "{t.quote}"
                </blockquote>
                <div className="mt-10">
                  <p className="font-display text-lg font-semibold text-ink-900">{t.author}</p>
                  <p className="font-mono text-xs text-ink-400 tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === i ? 'w-12 bg-rust-700' : 'w-6 bg-ink-300 hover:bg-ink-500'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
