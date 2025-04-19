import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section id="home" className="hero-section">
        <div className="hero-text">
          <h1>Experience the Best Barbershop in Town</h1>
          <p>Step into our barbershop and enjoy a fresh, stylish haircut tailored just for you.</p>
          <button className="hero-book-btn">BOOK</button>
        </div>
      </section>

      <section id="services" className="section services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Haircut</h3>
            <p>Classic, modern, or trendy – get the perfect cut for your style.</p>
          </div>
          <div className="service-card">
            <h3>Beard Trim</h3>
            <p>Shape, trim, or full beard makeover – we’ve got you covered.</p>
          </div>
          <div className="service-card">
            <h3>Styling</h3>
            <p>Look sharp with expert styling using premium products.</p>
          </div>
        </div>
      </section>

      <section id="team" className="section team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://i.imgur.com/7k12EPD.png" alt="Barber 1" />
            <h4>Alex</h4>
            <p>Fade & Beard Expert</p>
          </div>
          <div className="team-card">
            <img src="https://i.imgur.com/4YVYfFy.png" alt="Barber 2" />
            <h4>Rashid</h4>
            <p>Modern Cuts Specialist</p>
          </div>
          <div className="team-card">
            <img src="https://i.imgur.com/Km3Y6CG.png" alt="Barber 3" />
            <h4>Emily</h4>
            <p>Styling Guru</p>
          </div>
        </div>
      </section>

      <section id="footer" className="section contact-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>📍 123 Barber Street, Cutville</p>
          <p>📞 (123) 456-7890</p>
          <p>📧 info@barbershop.com</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;



