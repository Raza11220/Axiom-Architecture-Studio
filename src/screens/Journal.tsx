import { useState } from 'react';
import { ArrowUpRight, Clock, Bookmark } from 'lucide-react';
import type { Page } from '@/hooks/useScroll';
import { Reveal } from '@/components/Reveal';
import { journalPosts, staircaseImages } from '@/data';

type JournalProps = {
  onNavigate: (page: Page) => void;
};

const categories = ['All', 'Materials', 'Theory', 'Typology', 'Sustainability', 'Process'];

const categoryColors: Record<string, string> = {
  Materials: 'bg-rust-700',
  Theory: 'bg-sage-700',
  Typology: 'bg-gold-700',
  Sustainability: 'bg-teal-700',
  Process: 'bg-ink-800',
};

export function Journal({ onNavigate }: JournalProps) {
  const [featured, ...rest] = journalPosts;
  const [activeCat, setActiveCat] = useState('All');

  const filteredRest = activeCat === 'All' ? rest : rest.filter((p) => p.category === activeCat);

  return (
    <div className="page-enter pt-36">
      {/* HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-teal-500/10 -top-20 right-20" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              THE JOURNAL
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-ink-900">
              Notes on<br />
              <span className="italic font-serif font-light text-gradient-sage">making</span>.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-lg text-ink-500 max-w-xl mt-8 leading-relaxed">
              Essays, studies, and reflections from the studio on architecture, material, and the craft of building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY BAR */}
      <section className="border-y border-ink-900/10 px-6 md:px-12 py-4 bg-bone-300 grain-overlay sticky top-16 z-30 glass">
        <div className="max-w-[1600px] mx-auto flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
          <span className="font-mono text-xs tracking-widest text-ink-300 whitespace-nowrap mr-2">TOPICS:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-300 border ${
                activeCat === cat
                  ? 'bg-ink-900 text-bone-300 border-ink-900'
                  : 'border-ink-300 text-ink-500 hover:border-ink-900 hover:text-ink-900 bg-bone-300/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bone-400 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <button
              onClick={() => onNavigate('contact')}
              className="group block w-full text-left card-lift"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="img-zoom overflow-hidden order-2 md:order-1 rounded-sm relative">
                  <img
                    src={staircaseImages[3]}
                    alt={featured.title}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full">
                    <span className="font-mono text-xs tracking-wider text-ink-900">FEATURED</span>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 ${categoryColors[featured.category] || 'bg-ink-800'} text-bone-100 font-mono text-xs tracking-wider rounded-full`}>
                      {featured.category}
                    </span>
                    <span className="font-mono text-xs text-ink-300 tracking-wider">{featured.date}</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-ink-300 tracking-wider">
                      <Clock size={10} /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-ink-900 group-hover:text-rust-700 transition-colors leading-[0.95]">
                    {featured.title}
                  </h2>
                  <p className="font-sans text-lg text-ink-500 mt-6 leading-relaxed max-w-lg">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-3 font-display text-base font-semibold text-ink-900 group-hover:text-rust-700 transition-colors">
                    Read the essay
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* POST GRID */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bone-300 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-ink-900 mb-12">
              More from the journal
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRest.map((post, i) => (
              <Reveal key={post.id} delay={(i % 3) * 80}>
                <button
                  onClick={() => onNavigate('contact')}
                  className="group block w-full text-left bg-bone-200 p-6 rounded-sm border border-ink-900/8 card-lift hover:border-rust-300 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 ${categoryColors[post.category] || 'bg-ink-800'} text-bone-100 font-mono text-xs tracking-wider rounded-full`}>
                      {post.category}
                    </span>
                    <Bookmark size={16} className="text-ink-200 group-hover:text-rust-700 transition-colors" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-ink-900 group-hover:text-rust-700 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-ink-400 mt-3 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-6 pt-4 border-t border-ink-900/8 flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-300 tracking-wider">{post.date}</span>
                    <span className="flex items-center gap-1 font-mono text-xs text-ink-300 tracking-wider">
                      <Clock size={10} /> {post.readTime}
                    </span>
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
