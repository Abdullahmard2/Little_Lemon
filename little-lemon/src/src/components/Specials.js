import '../style/base.css';

import React from 'react';
import './Specials.css';

function Specials() {
  return (
    <section className="specials">
      <h2>This Week's Specials!</h2>
      <div className="cards">
        <div className="card">Greek Salad</div>
        <div className="card">Bruschetta</div>
        <div className="card">Lemon Dessert</div>
      </div>
    </section>
  );
}

export default Specials;