import React from 'react';

const AboutInnovator = () => {
  return (
    <section id="about-innovator" className="about-innovator">
      <h2>About the Innovator</h2>
      <div className="about-innovator-content">
        <div className="row-1">
          <div className="text-card">
            <h3>Ama Benyah</h3>
            <p>Ama Benyah is a young entrepreneur from Cape Coast, Ghana, who is passionate about solving the problem of body odour in her community. Her natural deodorant is made from locally sourced ingredients and empowers adolescents to live confidently.</p>
          </div>
          <div className="innovator-image">
            <img src="./assets/images/Ama-Benyah.jpg" alt="Ama Benyah" />
          </div>
        </div>

        <div className="row-2">
          <div className="text-card">
            <h3>Our Mission</h3>
            <p>At Naturals Shield Cosmetics, our mission is to empower individuals and communities by providing access to high-quality, natural products that solve everyday challenges. We are committed to promoting sustainability, supporting local economies, and fostering confidence through innovative solutions like Ama Benyah's natural deodorant.</p>
          </div>
          <div className="text-card">
            <h3>Our Vision</h3>
            <p>We envision a world where everyone has access to affordable, eco-friendly products that enhance their quality of life. By championing local innovators like Ama Benyah, we aim to create a global marketplace that celebrates diversity, sustainability, and community-driven entrepreneurship.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;