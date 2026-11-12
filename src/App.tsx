import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/screens/Home';
import { Projects } from '@/screens/Projects';
import { About } from '@/screens/About';
import { Services } from '@/screens/Services';
import { Team } from '@/screens/Team';
import { Journal } from '@/screens/Journal';
import { Contact } from '@/screens/Contact';
import type { Page } from '@/hooks/useScroll';
import { useScrollProgress } from '@/hooks/useScroll';

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const progress = useScrollProgress();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const handleNavigate = (p: Page) => setPage(p);

  return (
    <div className="min-h-screen bg-bone-300">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full bg-rust-700 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar current={page} onNavigate={handleNavigate} />

      <main>
        {page === 'home' && <Home onNavigate={handleNavigate} />}
        {page === 'projects' && <Projects onNavigate={handleNavigate} />}
        {page === 'about' && <About onNavigate={handleNavigate} />}
        {page === 'services' && <Services onNavigate={handleNavigate} />}
        {page === 'team' && <Team onNavigate={handleNavigate} />}
        {page === 'journal' && <Journal onNavigate={handleNavigate} />}
        {page === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
