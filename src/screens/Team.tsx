import type { Page } from '@/hooks/useScroll';
import { Reveal } from '@/components/Reveal';
import { team } from '@/data';
import { Linkedin, Mail } from 'lucide-react';

type TeamProps = {
  onNavigate: (page: Page) => void;
};

const cardAccents = [
  'bg-gradient-rust',
  'bg-gradient-sage',
  'bg-gradient-teal',
  'bg-gradient-gold-dark',
  'bg-gradient-sage',
  'bg-gradient-rust',
];

export function Team({ onNavigate }: TeamProps) {
  return (
    <div className="page-enter pt-36">
      {/* HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-gold-400/10 -top-20 right-20" />
        <div className="mesh-orb w-[300px] h-[300px] bg-rust-500/10 bottom-0 left-10" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              THE PEOPLE
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-ink-900">
              The hands<br />
              <span className="italic font-serif font-light text-gradient-gold">behind</span> the work.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-lg text-ink-500 max-w-xl mt-8 leading-relaxed">
              A multidisciplinary team of architects, designers, planners, and researchers — united by a shared standard of craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bone-300 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={(i % 3) * 100}>
                <div className="group card-lift">
                  {/* Accent bar */}
                  <div className={`h-1.5 ${cardAccents[i % cardAccents.length]} rounded-t-sm`} />
                  <div className="img-zoom overflow-hidden bg-ink-700 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-[3/4] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Bio overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="font-sans text-sm text-bone-100 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <a href="#" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-bone-300 hover:bg-rust-600 transition-colors">
                          <Linkedin size={14} />
                        </a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-bone-300 hover:bg-rust-600 transition-colors">
                          <Mail size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 bg-bone-200 p-5 rounded-b-sm border-x border-b border-ink-900/8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-ink-900 group-hover:text-rust-700 transition-colors">
                          {member.name}
                        </h3>
                        <p className="font-mono text-xs tracking-wider text-ink-400 mt-1">{member.role}</p>
                      </div>
                      <span className="font-mono text-xs text-ink-300">0{i + 1}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-gradient-sage grain-overlay text-bone-300 relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-sage-400/15 -right-20 top-10 animate-glow-pulse" />
        <div className="mesh-orb w-[300px] h-[300px] bg-gold-400/10 left-10 bottom-10 animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="font-mono text-xs tracking-ultra-wide text-sage-300 mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-sage-300" />
                WE'RE HIRING
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-bone-100 leading-[0.95]">
                Join the<br /><span className="italic font-serif font-light text-sage-300">studio</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-sans text-base md:text-lg text-sage-100 leading-relaxed mb-8">
                We're always looking for talented architects, designers, and thinkers who share our commitment to craft. If that sounds like you, we'd love to hear from you.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 font-display text-lg font-semibold text-bone-100 hover:text-sage-300 transition-colors"
              >
                Send your portfolio
                <span className="w-12 h-12 rounded-full border border-sage-300 flex items-center justify-center group-hover:bg-sage-500 group-hover:border-sage-500 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-45 transition-transform duration-300">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
