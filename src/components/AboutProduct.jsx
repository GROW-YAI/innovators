import React from 'react';

const AboutProduct = () => {
  return (
    <section id="about-product" className="about-product">
      <h2>About the Product</h2>
      <div className="about-product-content">
        <div className="product-image">
          <img src="./assets/images/hero.jpg" alt="Natural Shield Deodorant" />
        </div>
        <div className="product-text">
          <div className="product-intro">
            <h3>Natural Shield Deodorant</h3>
            <p>Our Natural Shield Deodorant is crafted from natural ingredients like Fante kenkey leaves, Lemon leaves and perfume. It's designed to help you stay fresh and confident all day long.</p>
          </div>
          <div className="product-benefits">
            <h3>Benefits</h3>
            <ul className="benefits-list">
              <li className="benefits-item">
                <div className="benefits-card">
                  <img src="./assets/images/feature-1.jpg" width="204" height="236" loading="lazy" alt="Guaranteed PURE" className="card-icon" />
                  <h3>100% Pure</h3>
                  <p>All products are 100% pure.</p>
                </div>
              </li>

              <li className="benefits-item">
                <div className="benefits-card">
                  <img src="./assets/images/feature-2.jpg" width="204" height="236" loading="lazy" alt="Completely Cruelty-Free" className="card-icon" />
                  <h3>No Cruelty</h3>
                  <p>Strict purity, no toxins.</p>
                </div>
              </li>

              <li className="benefits-item">
                <div className="benefits-card">
                  <img src="./assets/images/feature-3.jpg" width="204" height="236" loading="lazy" alt="Ingredient Sourcing" className="card-icon" />
                  <h3 className="h3 card-title">Ingredients</h3>
                  <p>All product are toxic free</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;