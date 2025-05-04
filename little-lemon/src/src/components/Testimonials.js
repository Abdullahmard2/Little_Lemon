import '../style/base.css';

import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews">
        <div className="review">"Amazing food!" - Jane</div>
        <div className="review">"Lovely atmosphere." - Mark</div>
        <div className="review">"Great service!" - Lucy</div>
      </div>
    </section>
  );
}

export default Testimonials;