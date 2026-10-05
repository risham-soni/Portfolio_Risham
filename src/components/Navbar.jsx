import { useState, useEffect } from 'react';

export default function Navbar({ activeSection = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const onResumeClick = (e) => {
    e.preventDefault();
    const href = '/Risham_Soni.pdf';
    try {
      const a = document.createElement('a');
      a.href = href;
      a.download = 'Risham_Soni.pdf';
      a.target = '_self';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const navRoutes = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'about', label: 'About', number: '02' },
    { id: 'work', label: 'Work', number: '03' },
    { id: 'skills', label: 'Skills', number: '04' },
    { id: 'contact', label: 'Contact', number: '05' },
  ];

  return (
    <>
      {/* 1. Unified Fixed Header Navigation Bar */}
      <header className="site-header">
        <div className="container nav-inner">
          {/* Brand Logo on Left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', e)}
            className="logo"
            aria-label="Risham Soni Home"
          >
            <span>RISHAM SONI</span>
          </a>

          {/* Centered Desktop Navigation Links */}
          <nav className="nav-links font-mono uppercase" aria-label="Main Navigation">
            {navRoutes.map((route) => {
              const isActive = activeSection === route.id;
              return (
                <a
                  key={route.id}
                  href={`#${route.id}`}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(route.id, e)}
                >
                  {route.label}
                </a>
              );
            })}
          </nav>

          {/* Actions on Right: Resume & Mobile Hamburger */}
          <div className="nav-actions">
            <a
              href="/Risham_Soni.pdf"
              onClick={onResumeClick}
              className="desktop-resume-btn font-mono uppercase"
              aria-label="Download Resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v10" />
                <path d="M8 11l4 4 4-4" />
                <path d="M4 20h16" />
              </svg>
              Resume
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open top' : ''}`} />
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open bot' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="mobile-drawer-header font-mono">
          <span className="mobile-drawer-tag text-gray">NAVIGATION</span>
          <button
            type="button"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-nav-links font-mono">
          {navRoutes.map((route) => {
            const isActive = activeSection === route.id;
            return (
              <a
                key={route.id}
                href={`#${route.id}`}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(route.id, e)}
              >
                <span className="mobile-nav-num text-gray">{route.number}</span>
                <span className="mobile-nav-label uppercase">{route.label}</span>
                {isActive && <span className="mobile-nav-indicator">●</span>}
              </a>
            );
          })}
        </div>

        <div className="mobile-drawer-footer font-mono">
          <a
            href="/Risham_Soni.pdf"
            onClick={(e) => {
              onResumeClick(e);
              setMobileMenuOpen(false);
            }}
            className="mobile-resume-btn uppercase"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v10" />
              <path d="M8 11l4 4 4-4" />
              <path d="M4 20h16" />
            </svg>
            Download Resume (PDF)
          </a>

          <div className="mobile-footer-meta text-gray">
            <span>MERN FULL STACK & AI DEVELOPER</span>
            <span>PORTFOLIO</span>
          </div>
        </div>
      </div>
    </>
  );
}
