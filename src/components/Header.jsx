import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <a href="#home" className="logo">
          <img src="./assets/images/logo-green.png" alt="Naturals Shield Cosmetics Logo" />
        </a>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger-icon">☰</span>
          <span className="close-icon">✕</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} onClick={handleNavClick}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-product">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;