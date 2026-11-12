import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useNavbarScrolled, type Page } from '@/hooks/useScroll';

type NavbarProps = {
  current: Page;
  onNavigate: (page: Page) => void;
};

const navItems: { label: string; page: Page }[] = [
  { label: 'Index', page: 'home' },
  { label: 'Work', page: 'projects' },
  { label: 'Studio', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Team', page: 'team' },
  { label: 'Journal', page: 'journal' },
  { label: 'Contact', page: 'contact' },
];

export function Navbar({ current, onNavigate }: NavbarProps) {
  const scrolled = useNavbarScrolled(60);
  const [open, setOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <>
      {/* Top info bar */}
      <div className={`fixed top-0 left-0 right-0 z-[55] transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'}`}>
        <div className="bg-ink-950 text-bone-300 h-9 flex items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-ultra-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse-slow" />
              OSLO 4°C
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              ROTTERDAM 7°C
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rust-400" />
              KYOTO 14°C
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-ultra-wide text-ink-200">
            <span className="hidden sm:inline">EST. 2009</span>
            <button
              onClick={() => handleNav('contact')}
              className="flex items-center gap-1 text-bone-300 hover:text-rust-400 transition-colors"
            >
              COMMISSION
              <ArrowUpRight size={10} />
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass top-0 py-4'
            : 'bg-transparent top-9 py-5'
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={() => handleNav('home')}
            className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter text-ink-900 hover:text-rust-700 transition-colors duration-300 flex items-center gap-2"
          >
            <span className="w-8 h-8 bg-ink-900 text-bone-300 flex items-center justify-center rounded-sm text-sm font-extrabold">A</span>
            AXIOM
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group rounded-full ${
                  current === item.page
                    ? 'text-bone-300 bg-ink-900'
                    : 'text-ink-500 hover:text-ink-900 hover:bg-ink-900/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="group flex items-center gap-2 bg-rust-700 hover:bg-rust-800 text-bone-100 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 glow-rust"
            >
              Start a project
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-ink-900 p-2 relative z-50"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-dark grain-overlay transition-transform duration-500 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`text-left font-display text-5xl font-bold py-3 transition-all duration-500 flex items-baseline gap-4 ${
                open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              } ${current === item.page ? 'text-rust-500' : 'text-bone-300'}`}
              style={{ transitionDelay: `${i * 60 + 100}ms` }}
            >
              <span className="font-mono text-sm text-ink-600">0{i + 1}</span>
              {item.label}
            </button>
          ))}
          <div className="mt-12 pt-8 border-t border-ink-700">
            <p className="font-mono text-xs text-ink-600 tracking-widest">OSLO · ROTTERDAM · KYOTO</p>
            <p className="font-mono text-xs text-ink-600 tracking-widest mt-2">HELLO@AXIOM.STUDIO</p>
            <div className="flex gap-3 mt-6">
              <div className="mesh-orb static w-12 h-12 bg-rust-600/30 rounded-full" />
              <div className="mesh-orb static w-12 h-12 bg-sage-500/30 rounded-full" />
              <div className="mesh-orb static w-12 h-12 bg-gold-500/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
