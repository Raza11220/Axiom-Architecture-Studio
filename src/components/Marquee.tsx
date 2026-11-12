const items = [
  'Architecture',
  'Interior Design',
  'Urban Planning',
  'Landscape',
  'Research',
  'Consulting',
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-gradient-dark grain-overlay py-8 md:py-10">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8">
            <span className="font-display text-3xl md:text-5xl font-bold text-bone-300 whitespace-nowrap">
              {item}
            </span>
            <span className="text-rust-500 text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-950 to-transparent pointer-events-none" />
    </div>
  );
}

const clientItems = [
  'NORDIC LIVING',
  'MOMA LISBON',
  'ROTTERDAM CITY',
  'KYOTO CULTURAL',
  'BERLIN STADT',
  'SINGAPORE GROUP',
];

export function ClientMarquee() {
  return (
    <div className="relative overflow-hidden bg-bone-500 py-6 border-y border-ink-900/10">
      <div className="marquee-track-rev">
        {[...clientItems, ...clientItems, ...clientItems, ...clientItems].map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12">
            <span className="font-display text-lg md:text-2xl font-bold text-ink-300 hover:text-ink-900 transition-colors whitespace-nowrap tracking-tight">
              {item}
            </span>
            <span className="text-rust-300 text-xl">—</span>
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bone-500 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bone-500 to-transparent pointer-events-none" />
    </div>
  );
}
