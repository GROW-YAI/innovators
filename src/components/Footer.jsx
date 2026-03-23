import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul className="footer-links">
        <li><a href="#home">Home</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://paystack.shop/naturals-shield-cosmetics">Shop</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>
      <div className="footer-content">
        <p><span>&copy; 2025 Naturals Shield Cosmetics. </span><span>All rights reserved.</span></p>
      </div>
    </footer>
  );
};

export default Footer;