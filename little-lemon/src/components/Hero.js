import '../style/base.css';
import React from 'react';
import './Hero.css';



function Hero() {
  return (
    <section className="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
      <div className="image-content">
      <img src="little-lemon\src\assets\restauranfood.jpg" alt="Restaurant" />
          </div>
      <button aria-label="On Click" onClick={handleClick}> Reserve a Table</button>
    </section>
  );
}

export default Hero;