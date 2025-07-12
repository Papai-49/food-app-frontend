import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="5" placeholder="Your message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
        
        <div className="contact-image">
          <img src="https://aristokids.in/wp-content/uploads/2021/10/contact-us-Mod-3.jpg" alt="Contact us" />
        </div>
      </div>
    </div>
  );
}

export default Contact;