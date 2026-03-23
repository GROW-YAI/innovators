import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h2>Blog & Resource Center</h2>
      <div className="blog-grid">
        <div className="blog-post">
          <h3>Why Natural Deodorants?</h3>
          <p>Learn why natural deodorants are better for your skin and the environment.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="blog-post">
          <h3>How to Stay Fresh All Day</h3>
          <p>Tips and tricks for maintaining freshness with Natural Shield Deodorant.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="blog-post">
          <h3>Impact in Communities</h3>
          <p>Discover how our product is making a difference in Cape Coast, Ghana.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;