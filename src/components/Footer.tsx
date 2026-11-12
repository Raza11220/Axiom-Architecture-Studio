import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import type { Page } from '@/hooks/useScroll';

type FooterProps = {
  onNavigate: (page: Page) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-dark grain-overlay text-bone-300 pt-24 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Background orbs */}
      <div className="mesh-orb w-96 h-96 bg-rust-700/20 -top-20 -right-20 animate-glow-pulse" />
      <div className="mesh-orb w-80 h-80 bg-sage-600/15 top-40 left-20 animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Big CTA */}
        <div className="border-b border-ink-600 pb-16 mb-16">
          <p className="font-mono text-xs tracking-ultra-wide text-rust-500 mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-rust-500" />
            LET'S BUILD SOMETHING ENDURING
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-bone-100">
              Have a project<br />
              <span className="text-gradient-rust italic font-serif font-light">in mind?</span>
            </h2>
            <button
              onClick={() => onNavigate('contact')}
              className="group flex items-center gap-3 self-start lg:self-auto font-display text-xl text-bone-100 hover:text-rust-500 transition-colors duration-300"
            >
              Start a conversation
              <span className="w-14 h-14 rounded-full border border-bone-300 flex items-center justify-center group-hover:bg-rust-600 group-hover:border-rust-600 transition-all duration-300">
                <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <p className="font-mono text-xs tracking-widest text-rust-500 mb-4">NAVIGATE</p>
            <ul className="space-y-3 text-sm">
              {(['home', 'projects', 'about', 'services', 'team', 'journal', 'contact'] as Page[]).map((p) => (
                <li key={p}>
                  <button
                    onClick={() => onNavigate(p)}
                    className="link-underline text-bone-300 hover:text-bone-100 capitalize transition-colors"
                  >
                    {p === 'home' ? 'Index' : p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-rust-500 mb-4">STUDIOS</p>
            <ul className="space-y-3 text-sm text-bone-300">
              {[
                { city: 'Oslo', addr: 'Storgata 12, 0155' },
                { city: 'Rotterdam', addr: 'Witte de Withstr. 8' },
                { city: 'Kyoto', addr: 'Higashiyama 3-chome' },
              ].map((s) => (
                <li key={s.city} className="group cursor-pointer">
                  <p className="font-semibold text-bone-100 group-hover:text-rust-400 transition-colors">{s.city}</p>
                  <p className="text-ink-200 text-xs">{s.addr}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-rust-500 mb-4">CONTACT</p>
            <ul className="space-y-3 text-sm text-bone-300">
              <li className="flex items-center gap-2 hover:text-bone-100 transition-colors cursor-pointer">
                <Mail size={14} className="text-rust-500" />
                hello@axiom.studio
              </li>
              <li className="flex items-center gap-2 hover:text-bone-100 transition-colors cursor-pointer">
                <Phone size={14} className="text-rust-500" />
                +47 22 00 15 00
              </li>
              <li className="flex items-center gap-2 text-ink-200">
                <MapPin size={14} className="text-rust-500" />
                Mon–Fri, 09:00–18:00 CET
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest text-rust-500 mb-4">SOCIAL</p>
            <div className="flex gap-3 mb-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full border border-ink-600 flex items-center justify-center hover:bg-rust-600 hover:border-rust-600 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="font-mono text-[10px] text-ink-300 tracking-widest leading-relaxed">
              Subscribe to our journal for quarterly notes on architecture and material.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-ink-600">
          <p className="font-display text-3xl font-extrabold tracking-tighter text-bone-100 flex items-center gap-2">
            <span className="w-8 h-8 bg-bone-100 text-ink-900 flex items-center justify-center rounded-sm text-sm font-extrabold">A</span>
            AXIOM
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 font-mono text-xs text-ink-200 tracking-wide">
            <span>© 2024 AXIOM Architecture Studio</span>
            <span>All rights reserved</span>
            <span className="hidden md:inline">Designed in-house</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
