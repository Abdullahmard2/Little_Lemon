
import '../style/base.css';
import { Link } from 'react-router-dom';
import React from 'react';


function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">

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





          <div className="image-content">
          <img src="/assets/restauranfood.jpg" alt="Restaurant" height={320} width={240}/>
          </div>
        </div>
      </section>



      <h1>Specials</h1>
      <h3>This Week's Specials!</h3>

      <section className="specials" section id="Order Online">
        {
        <><div className="special-card">
            <img src="/assets/greek salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3> <span>$12.99</span>
            <p>Fresh and healthy salad with feta cheese, olives, and a lemon dressing.</p>

            <button aria-label="On Click">Add to Cart</button>
          </div><div className="special-card">
              <img src="/assets/bruchetta.svg" alt="Bruschetta" />
              <h3>Bruschetta</h3> <span>$5.99</span>
              <p>Grilled bread topped with fresh tomatoes, basil, and balsamic glaze.</p>

              <button aria-label="On Click">Add to Cart</button>
            </div><div className="special-card">
              <img src="/assets/lemon dessert.jpg" alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3> <span>$7.99</span>
              <p>A refreshing lemon dessert with a hint of mint.</p>

              <button aria-label="On Click">Add to Cart</button>
            </div></>}
      </section>



      <section className="about-us" id="about">
  <div className="about-content">
    <h2>About Us</h2>
    <p>
      Welcome to Little Lemon, a cozy Mediterranean-inspired restaurant located in the heart of Chicago.
      We serve handcrafted meals made with fresh, locally sourced ingredients. Every dish is made with love,
      bringing you a warm and memorable dining experience. Join us and taste the tradition!
    </p>
  </div>
  <div className="about-images">
  <img src="/assets/Mario and Adrian A.jpg" alt="Restaurant background" className="bg-image" />
<img src="/assets/Mario and Adrian B.jpg" alt="Restaurant foreground" className="fg-image" />
  </div>
</section>



      <section className="ratings">
  <h2>Customer Reviews</h2>
  <div className="rating-cards">
    {[
      {
        name: "Alice",
        stars: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Absolutely loved the pasta and ambiance!"
      },
      {
        name: "John",
        stars: 4,
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        review: "Great food and service, just a bit pricey."
      },
      {
        name: "Maria",
        stars: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        review: "The desserts were out of this world!"
      },
      {
        name: "Dave",
        stars: 4,
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        review: "Loved the seafood platter, very fresh!"
      }
    ].map(({ name, stars, image, review }, index) => (
      <div key={index} className="rating-card">
        <img src={image} alt={`${name}'s profile`} />
        <h4>{name}</h4>
        <p>{"⭐".repeat(stars)} </p>
        <p className="review">{review}</p>
      </div>
    ))}
  </div>
</section>


    </main>
  );
}
export default Main;

