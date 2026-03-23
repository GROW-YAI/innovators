import React from 'react';

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <h2>Customer Reviews</h2>
      <div className="review-grid">
        <div className="review-card">
          <p>"This product is amazing! It keeps me fresh all day."</p>
          <p className="customer">- Jane Doe</p>
        </div>
        <div className="review-card">
          <p>"It's so natural and effective. Highly recommend!"</p>
          <p className="customer">- John Smith</p>
        </div>
        <div className="review-card">
          <p>"This product is the best I've ever used. Get some!"</p>
          <p className="customer">- Joan Smart</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;