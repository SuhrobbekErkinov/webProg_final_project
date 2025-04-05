import React, { useRef } from "react";
import "./FemalePage.css";

export default function MalePage() {
  const servicesRef = useRef(null);
  const productsRef = useRef(null);

  const scroll = (direction, section) => {
    const container = section === "services" ? servicesRef.current : productsRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <main className="male-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Get the Hair Style <br /> You Deserve
          </h1>
          <p>
            Discover a world of refinement and personalized grooming at MINERVA.
            Our salon is more than just a place for haircuts; it’s a haven where your
            unique style and confidence take center stage.
          </p>
          <button className="book-button">Book appointment</button>
        </div>
        <img src="/hero-image.png" alt="Hair Model" className="hero-image" />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Our Grooming Services</h2>
          {/* Scroll buttons near section title */}
          <div>
            <button
              className="scroll-button scroll-left"
              onClick={() => scroll("left", "services")}
            >
              ←
            </button>
            <button
              className="scroll-button scroll-right"
              onClick={() => scroll("right", "services")}
            >
              →
            </button>
          </div>
        </div>
        <div className="services-grid" ref={servicesRef}>
          {['Haircuts', 'Styling', 'Beard Trimming'].map((service) => (
            <div key={service} className="service-card">
              <img src={`/${service.toLowerCase().replace(/ /g, '-')}.png`} alt={service} />
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Our Grooming Products</h2>
          {/* Scroll buttons near section title */}
          <div>
            <button
              className="scroll-button scroll-left"
              onClick={() => scroll("left", "products")}
            >
              ←
            </button>
            <button
              className="scroll-button scroll-right"
              onClick={() => scroll("right", "products")}
            >
              →
            </button>
          </div>
        </div>
        <div className="products-grid" ref={productsRef}>
          {["Styling Gel", "Hair Comb", "Beard Oil", "Conditioner for Men"].map((product, i) => (
            <div key={i} className="product-card">
              <img src={`/${product.toLowerCase().replace(/ /g, '-')}.png`} alt={product} />
              <p>{product}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="why-choose-us-section">
        <div className="why-choose-us-info">
          <h2>Why Choose Us?</h2>
          <p>Here’s why we are the best in the business...</p>
          <ul>
            <li>Top-notch quality grooming service</li>
            <li>Highly experienced barbers and stylists</li>
            <li>Personalized approach to each client</li>
          </ul>
        </div>

        <div className="feedback-box">
          <h3>Leave Your Feedback</h3>
          <textarea placeholder="Your feedback..."></textarea>
          <button className="submit-feedback">Submit</button>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {["John Doe", "Michael Brown", "David Walker"].map((name, i) => (
            <div key={i} className="team-card">
              <img src={`/${name.split(' ')[0].toLowerCase()}.png`} alt={name} />
              <p className="team-name">{name}</p>
              <p className="team-role">Barber</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
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
