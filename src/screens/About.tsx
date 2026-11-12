import type { Page } from '@/hooks/useScroll';
import { Reveal } from '@/components/Reveal';
import { stats, awards, staircaseImages, values, interiorImages } from '@/data';

type AboutProps = {
  onNavigate: (page: Page) => void;
};

const colorMap: Record<string, { text: string; border: string; bg: string; orb: string }> = {
  rust: { text: 'text-rust-700', border: 'border-rust-500', bg: 'bg-rust-500', orb: 'bg-rust-500/20' },
  sage: { text: 'text-sage-700', border: 'border-sage-500', bg: 'bg-sage-500', orb: 'bg-sage-500/20' },
  gold: { text: 'text-gold-700', border: 'border-gold-500', bg: 'bg-gold-500', orb: 'bg-gold-400/20' },
  teal: { text: 'text-teal-700', border: 'border-teal-500', bg: 'bg-teal-500', orb: 'bg-teal-500/20' },
};

export function About({ onNavigate }: AboutProps) {
  return (
    <div className="page-enter pt-36">
      {/* HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-rust-500/10 -top-20 left-20" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              THE STUDIO
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-ink-900">
              We design<br />
              <span className="italic font-serif font-light text-gradient-rust">slowly</span>, on purpose.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-12 bg-bone-300 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="img-zoom overflow-hidden rounded-sm relative">
              <img
                src={staircaseImages[0]}
                alt="Studio space"
                className="w-full aspect-[21/9] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 glass px-6 py-4 rounded-sm max-w-sm">
                <p className="font-mono text-xs text-ink-400 tracking-wider">AXIOM STUDIO · OSLO</p>
                <p className="font-display text-xl font-bold text-ink-900 mt-1">Where ideas take form</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-dark grain-overlay text-bone-300 relative overflow-hidden">
        <div className="mesh-orb w-[500px] h-[500px] bg-rust-700/15 -right-20 top-20 animate-glow-pulse" />
        <div className="mesh-orb w-[400px] h-[400px] bg-sage-600/10 -left-20 bottom-20 animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <Reveal>
                <p className="font-mono text-xs tracking-ultra-wide text-rust-500 mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-rust-500" />
                  MANIFESTO
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-9 space-y-8">
              <Reveal>
                <p className="font-display text-2xl md:text-4xl font-semibold leading-[1.15] tracking-tight text-bone-100 text-balance">
                  AXIOM was founded in 2009 on a simple conviction: that buildings should be <span className="text-gradient-rust italic font-serif font-light">rooted</span> in their place, <span className="text-gradient-gold italic font-serif font-light">honest</span> in their materials, and <span className="text-gradient-sage italic font-serif font-light">generous</span> in their spaces.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-sans text-base md:text-lg text-ink-100 leading-relaxed max-w-2xl">
                  We work at a deliberate pace. We draw by hand before we model. We visit sites at different hours and in different seasons. We believe that the best architecture is not shouted but whispered — that a building should reveal itself slowly, over time, through use.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="font-sans text-base md:text-lg text-ink-100 leading-relaxed max-w-2xl">
                  Our practice spans residential, cultural, and commercial work across Europe and Asia. Every project, regardless of scale, receives the same attention to detail and the same commitment to material integrity.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-warm grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              WHAT WE BELIEVE
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-ink-900 mb-16">
              Four principles
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const c = colorMap[v.color];
              return (
                <Reveal key={v.num} delay={i * 80}>
                  <div className="group bg-bone-200 p-8 md:p-10 rounded-sm border border-ink-900/8 card-lift relative overflow-hidden">
                    <div className={`mesh-orb w-32 h-32 ${c.orb} -top-8 -right-8 group-hover:scale-150 transition-transform duration-700`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`w-8 h-8 rounded-full ${c.bg} text-bone-100 font-mono text-xs flex items-center justify-center font-bold`}>{v.num}</span>
                        <span className={`h-px flex-1 ${c.border} opacity-30`} />
                      </div>
                      <h3 className={`font-display text-2xl md:text-3xl font-bold ${c.text} mb-3`}>{v.title}</h3>
                      <p className="font-sans text-base text-ink-500 leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-12 py-24 bg-bone-400 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="group border-l-2 border-ink-300 pl-6 hover:border-rust-700 transition-colors duration-500">
                  <p className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-ink-900">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs tracking-widest text-ink-400 mt-3">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS LIST */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-warm grain-overlay">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              RECOGNITION
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter text-ink-900 mb-16">
              Awards & honors
            </h2>
          </Reveal>
          <div className="divide-y divide-ink-900/10 border-t border-ink-900/10">
            {awards.map((award, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="grid grid-cols-12 gap-4 py-6 group hover:bg-bone-200 transition-colors duration-300 -mx-4 px-4 rounded-sm">
                  <span className="col-span-2 font-mono text-sm text-ink-300 tracking-wider group-hover:text-rust-700 transition-colors">{award.year}</span>
                  <span className="col-span-6 font-display text-xl md:text-2xl font-semibold text-ink-900 group-hover:text-rust-700 transition-colors">{award.name}</span>
                  <span className="col-span-4 font-sans text-sm text-ink-400 text-right group-hover:text-ink-600 transition-colors">{award.project}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 bg-bone-400 grain-overlay">
        <div className="max-w-[1200px] mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-ink-900 text-balance">
              Want to know how we work?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <button
              onClick={() => onNavigate('services')}
              className="mt-8 inline-flex items-center gap-3 font-display text-lg font-semibold text-ink-900 hover:text-rust-700 transition-colors group"
            >
              Explore our services
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
