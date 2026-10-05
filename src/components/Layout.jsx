import { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import ScrollBar from './ScrollBar';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';

const SECTIONS = ['home', 'about', 'work', 'skills', 'contact'];

export default function Layout({ defaultSection }) {
  const [activeSection, setActiveSection] = useState(defaultSection || 'home');

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#${id}`);
      }
    }
  }, []);

  // Handle initial scroll on mount (e.g. from route or hash)
  useEffect(() => {
    const targetId = defaultSection || (window.location.hash ? window.location.hash.replace('#', '') : null);
    if (targetId) {
      // Allow DOM to settle before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [defaultSection]);

  // Track scroll position to update active section (ScrollSpy)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight * 0.35;
          let current = SECTIONS[0];

          for (const id of SECTIONS) {
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                current = id;
              }
            }
          }

          // If at the very bottom of the page, activate contact
          const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
          if (atBottom) {
            current = 'contact';
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* 1. Top Scroll Progress Bar */}
      <ScrollBar />

      {/* 2. Floating Dock Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* 3. Continuous Scrollable Sections: Home -> About -> Work -> Skills -> Contact */}
      <main className="main-content-layout">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
