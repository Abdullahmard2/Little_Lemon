
import '../style/base.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          {/* Text Content */}
          <div className="text-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Little Lemon restaurant is a small restaurant with online delivery function.
              Everything is made with fresh ingredients, and we are focused on traditional recipes served with a modern twist.
            </p>
            <Link to="/booking">
            <button>Reserve a Table</button></Link>
          </div>




          {/* Image Content */}
          <div className="image-content">
          <img src="/assets/restauranfood.jpg" alt="Restaurant" height={320} width={240}/>
          </div>
        </div>
      </section>



      <h1>Specials</h1>
      <h3>This Week's Specials!</h3>

      <section className="specials">
        {/* Use 3 divs or cards here for specials */
        <><div className="special-card">
            <img src="/assets/greek salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3> <span>$12.99</span>
            <p>Fresh and healthy salad with feta cheese, olives, and a lemon dressing.</p>

            <button>Add to Cart</button>
          </div><div className="special-card">
              <img src="/assets/bruchetta.svg" alt="Bruschetta" />
              <h3>Bruschetta</h3> <span>$5.99</span>
              <p>Grilled bread topped with fresh tomatoes, basil, and balsamic glaze.</p>

              <button>Add to Cart</button>
            </div><div className="special-card">
              <img src="/assets/lemon dessert.jpg" alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3> <span>$7.99</span>
              <p>A refreshing lemon dessert with a hint of mint.</p>

              <button>Add to Cart</button>
            </div></>}
      </section>

      <section className="testimonials">
        {/* Use 3-4 testimonial blocks here */}
      </section>
    </main>
  );
}
export default Main;

