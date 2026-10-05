import { useState, useEffect } from 'react';

export default function ScrollBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update top progress bar on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentScroll = window.scrollY;
            const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
            setScrollProgress(progress);
          }
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
    <div className="top-scroll-progress-container" aria-hidden="true">
      <div
        className="top-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
