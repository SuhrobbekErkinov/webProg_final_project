import React from "react";
import "./FemalePage.css";

export default function FemalePage() {
  return (
    <main className="female-page">
      {/* Hero Section */}
      <section id="hero-section" className="hero-section">
        <div className="hero-text">
          <h1>
            Get Hair Style <br /> You Deserve
          </h1>
          <p>
            Discover a world of sophistication and personalized beauty at MINERVA.
            Our salon is more than just a place for haircuts; it’s a haven where your
            unique style takes center stage.
          </p>
          <button className="book-button">Book appointment</button>
        </div>
        <img
          src="/hero-image.png"
          alt="Hair Model"
          className="hero-image"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {['Haircuts', 'Hairstyles', 'Coloring'].map((service) => (
            <div key={service} className="service-card">
              <img src={`/${service.toLowerCase()}.png`} alt={service} />
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking-section">
        <h2>Booking</h2>
        <div className="booking-grid">
          <img src="/booking-image.png" alt="Booking" className="booking-image" />
          <div className="booking-calendar">
            <p><strong>Working Days:</strong> 9AM - 9PM</p>
            <p><strong>Saturday:</strong> 10AM - 8PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
          <form className="booking-form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <button className="book-button">Book appointment</button>
          </form>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {["Volume Guts 10", "Hot Air Comb", "Repair L’oreal", "Volume Conditioner"].map((product, i) => (
            <div key={i} className="product-card">
              <img src={`/${product.toLowerCase().replace(/ /g, '-')}.png`} alt={product} />
              <p>{product}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {["Olivia Smith", "Amelia Brown", "Emily Walker"].map((name, i) => (
            <div key={i} className="team-card">
              <img src={`/${name.split(' ')[0].toLowerCase()}.png`} alt={name} />
              <p className="team-name">{name}</p>
              <p className="team-role">Hairdresser</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contacts" className="footer">
        <div className="footer-content">
          <div>
            <h3>Contact Us</h3>
            <p>(234) 658-7199</p>
            <p>info@minerva.com</p>
            <p>care@minerva.com</p>
            <p>200 W 85th ST NEW YORK NY 10024-3139 USA</p>
          </div>
          <div>
            <h3>Subscribe to the newsletter</h3>
            <input type="email" placeholder="Email..." />
          </div>
        </div>
        <p className="footer-note">© MINERVA. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
