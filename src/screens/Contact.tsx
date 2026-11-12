import { useState } from 'react';
import { ArrowRight, Check, MapPin, Mail, Phone, Clock, Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { faqs } from '@/data';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter pt-36">
      {/* HEADER */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-gradient-warm grain-overlay relative overflow-hidden">
        <div className="mesh-orb w-[400px] h-[400px] bg-rust-500/10 -top-20 right-20" />
        <div className="mesh-orb w-[300px] h-[300px] bg-sage-500/10 bottom-0 left-10" />
        <div className="max-w-[1600px] mx-auto relative z-10">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              GET IN TOUCH
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] text-ink-900">
              Let's build<br />
              <span className="italic font-serif font-light text-gradient-rust">something</span>.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-sans text-lg text-ink-500 max-w-xl mt-8 leading-relaxed">
              Tell us about your project, your site, and your ambition. We respond to every inquiry within five working days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bone-300 grain-overlay">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            {/* FORM */}
            <div className="lg:col-span-7">
              {submitted ? (
                <Reveal>
                  <div className="bg-gradient-dark grain-overlay text-bone-300 p-12 md:p-16 flex flex-col items-center text-center min-h-[400px] justify-center rounded-sm relative overflow-hidden">
                    <div className="mesh-orb w-64 h-64 bg-rust-600/30 top-0 right-0 animate-glow-pulse" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-rust-600 flex items-center justify-center mb-6 glow-rust">
                        <Check size={28} />
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-bone-100 mb-4">Thank you.</h2>
                      <p className="font-sans text-base text-ink-100 max-w-md">
                        Your message has reached the studio. We'll be in touch within five working days.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
                        }}
                        className="mt-8 font-mono text-xs tracking-widest text-rust-400 hover:text-bone-100 transition-colors link-underline"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal>
                  <div className="bg-bone-200 p-8 md:p-12 rounded-sm border border-ink-900/8">
                    <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-8 flex items-center gap-2">
                      <span className="w-8 h-px bg-rust-700" />
                      PROJECT INQUIRY
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block font-mono text-xs tracking-widest text-ink-400 mb-3">YOUR NAME</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-bone-100 border border-ink-200 rounded-sm py-3 px-4 font-display text-lg text-ink-900 focus:border-ink-900 focus:outline-none transition-colors placeholder:text-ink-200 input-focus"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-xs tracking-widest text-ink-400 mb-3">EMAIL ADDRESS</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-bone-100 border border-ink-200 rounded-sm py-3 px-4 font-display text-lg text-ink-900 focus:border-ink-900 focus:outline-none transition-colors placeholder:text-ink-200 input-focus"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block font-mono text-xs tracking-widest text-ink-400 mb-3">PROJECT TYPE</label>
                          <select
                            name="projectType"
                            value={form.projectType}
                            onChange={handleChange}
                            className="w-full bg-bone-100 border border-ink-200 rounded-sm py-3 px-4 font-display text-lg text-ink-900 focus:border-ink-900 focus:outline-none transition-colors cursor-pointer input-focus"
                          >
                            <option value="">Select a type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="cultural">Cultural</option>
                            <option value="interior">Interior Design</option>
                            <option value="urban">Urban Planning</option>
                            <option value="landscape">Landscape</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-mono text-xs tracking-widest text-ink-400 mb-3">BUDGET RANGE</label>
                          <select
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            className="w-full bg-bone-100 border border-ink-200 rounded-sm py-3 px-4 font-display text-lg text-ink-900 focus:border-ink-900 focus:outline-none transition-colors cursor-pointer input-focus"
                          >
                            <option value="">Select a range</option>
                            <option value="under-500k">Under €500K</option>
                            <option value="500k-2m">€500K – €2M</option>
                            <option value="2m-10m">€2M – €10M</option>
                            <option value="over-10m">Over €10M</option>
                            <option value="undisclosed">Prefer not to say</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-xs tracking-widest text-ink-400 mb-3">TELL US ABOUT YOUR PROJECT</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full bg-bone-100 border border-ink-200 rounded-sm py-3 px-4 font-sans text-base text-ink-900 focus:border-ink-900 focus:outline-none transition-colors placeholder:text-ink-200 resize-none input-focus"
                          placeholder="Site location, timeline, what you hope to achieve..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex items-center gap-4 bg-ink-900 hover:bg-rust-700 text-bone-300 px-8 py-4 rounded-full font-display text-lg font-semibold transition-all duration-300 glow-rust"
                      >
                        Send message
                        <span className="w-10 h-10 rounded-full bg-rust-600 group-hover:bg-bone-300 group-hover:text-ink-900 flex items-center justify-center transition-all duration-300">
                          <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                        </span>
                      </button>
                    </form>
                  </div>
                </Reveal>
              )}
            </div>

            {/* INFO SIDEBAR */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal delay={100}>
                <div className="bg-bone-200 p-8 rounded-sm border border-ink-900/8">
                  <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-rust-700" />
                    STUDIOS
                  </p>
                  <div className="space-y-6">
                    {[
                      { city: 'Oslo', addr: 'Storgata 12, 0155', country: 'Norway', temp: '4°C', color: 'bg-sage-500' },
                      { city: 'Rotterdam', addr: 'Witte de Withstraat 8', country: 'Netherlands', temp: '7°C', color: 'bg-gold-500' },
                      { city: 'Kyoto', addr: 'Higashiyama 3-chome', country: 'Japan', temp: '14°C', color: 'bg-rust-500' },
                    ].map((studio) => (
                      <div key={studio.city} className="flex items-start justify-between group cursor-pointer">
                        <div className="flex items-start gap-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${studio.color} mt-2`} />
                          <div>
                            <h3 className="font-display text-xl font-bold text-ink-900 group-hover:text-rust-700 transition-colors">{studio.city}</h3>
                            <p className="font-sans text-sm text-ink-400">{studio.addr}</p>
                            <p className="font-sans text-sm text-ink-400">{studio.country}</p>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-ink-300 tracking-wider mt-2">{studio.temp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-bone-200 p-8 rounded-sm border border-ink-900/8">
                  <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-rust-700" />
                    DIRECT
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:hello@axiom.studio" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 text-ink-900 hover:text-rust-700 transition-colors group">
                      <span className="w-10 h-10 rounded-full bg-bone-300 flex items-center justify-center group-hover:bg-rust-700 group-hover:text-bone-300 transition-colors">
                        <Mail size={16} />
                      </span>
                      <span className="font-display text-base">hello@axiom.studio</span>
                    </a>
                    <a href="tel:+4722001500" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 text-ink-900 hover:text-rust-700 transition-colors group">
                      <span className="w-10 h-10 rounded-full bg-bone-300 flex items-center justify-center group-hover:bg-rust-700 group-hover:text-bone-300 transition-colors">
                        <Phone size={16} />
                      </span>
                      <span className="font-display text-base">+47 22 00 15 00</span>
                    </a>
                    <div className="flex items-center gap-3 text-ink-400">
                      <span className="w-10 h-10 rounded-full bg-bone-300 flex items-center justify-center">
                        <Clock size={16} />
                      </span>
                      <span className="font-sans text-sm">Mon–Fri, 09:00–18:00 CET</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="bg-gradient-rust grain-overlay text-bone-100 p-8 rounded-sm relative overflow-hidden">
                  <div className="mesh-orb w-32 h-32 bg-gold-400/20 -top-4 -right-4" />
                  <p className="font-mono text-xs tracking-ultra-wide text-bone-100/70 mb-4 relative z-10">— NEW BUSINESS</p>
                  <p className="font-display text-2xl font-bold mb-2 relative z-10">Commissioning a project?</p>
                  <p className="font-sans text-sm text-bone-100/80 leading-relaxed relative z-10">
                    We typically book new projects 6–12 months in advance. Reach out early so we can align with your timeline.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-bone-400 grain-overlay">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <p className="font-mono text-xs tracking-ultra-wide text-rust-700 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-rust-700" />
              QUESTIONS
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-ink-900 mb-12">
              Frequently asked
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={i} delay={i * 50}>
                  <div className="bg-bone-200 rounded-sm border border-ink-900/8 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                    >
                      <span className="font-display text-lg md:text-xl font-semibold text-ink-900 group-hover:text-rust-700 transition-colors">
                        {faq.question}
                      </span>
                      <span className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-rust-700 border-rust-700 text-bone-300' : 'border-ink-900/20 text-ink-600'
                      }`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-all duration-400 ease-out"
                      style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                    >
                      <p className="px-6 pb-6 font-sans text-base text-ink-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
