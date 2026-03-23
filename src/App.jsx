import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutProduct from './components/AboutProduct';
import AboutInnovator from './components/AboutInnovator';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href'));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutProduct />
      <AboutInnovator />
      <Reviews />
      <Blog />
      <Contact />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;