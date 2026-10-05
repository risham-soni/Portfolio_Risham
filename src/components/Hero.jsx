export default function Hero({ onNavigate }) {
  const handleScroll = (id, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header id="home" className="container hero-container">
      <p className="hero-subtitle font-mono uppercase">
        MERN Stack Architecture & Applied AI
      </p>
      <h1 className="hero-title-1 uppercase">
        MERN FULL STACK
      </h1>
      <h1 className="hero-title-2 uppercase">& AI DEVELOPER</h1>
      
      <div className="hero-cta-group">
        <a
          href="#work"
          onClick={(e) => handleScroll('work', e)}
          className="hero-cta-btn primary font-mono uppercase"
        >
          View Projects ➔
        </a>
        <a
          href="#about"
          onClick={(e) => handleScroll('about', e)}
          className="hero-cta-btn secondary font-mono uppercase"
        >
          About Me
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll('contact', e)}
          className="hero-cta-btn tertiary font-mono uppercase"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
