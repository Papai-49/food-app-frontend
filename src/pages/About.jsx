//rafc
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About FoodShop</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to <strong>FoodShop</strong>  your one-stop destination for mouth-watering meals, prepared with love and delivered with care. Since our launch, we’ve aimed to bring fresh, affordable, and delicious food to your doorstep.
          </p>

          <h3>Our Mission</h3>
          <p>
            To make quality food accessible and enjoyable for everyone. Whether you're craving spicy biryani, cheesy pizza, or a healthy salad — we’ve got you covered.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>✅ Fresh ingredients daily</li>
            <li>✅ Fast delivery service</li>
            <li>✅ Affordable prices</li>
            <li>✅ Hygienic kitchen practices</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="https://img.freepik.com/premium-photo/colorful-fast-food-combo_198067-330.jpg" alt="About us" />
        </div>
      </div>
    </div>
  );
}

export default About;
