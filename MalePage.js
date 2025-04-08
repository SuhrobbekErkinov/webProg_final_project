import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MalePage.css";

export default function MalePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle "Book Appointment" button click
  const handleBookAppointment = () => {
    navigate("/booking"); // Navigate to the booking page
  };

  // Function to handle service click
  const handleServiceClick = (service) => {
    navigate(`/service/${service.toLowerCase().replace(/ /g, '-')}`); // Navigate to the specific service page
  };

  return (
    <main className="male-page">
      {/* Hero Section */}
      <section id="hero-section" className="hero-section">
        <div className="hero-text">
          <h1>
            Discover the Style <br /> You Deserve
          </h1>
          <p>
            Step into a world of sharp grooming and timeless styles at MINERVA.
            Our barbershop is not just a place for haircuts; it’s a sanctuary where
            your individuality is celebrated.
          </p>
          <button className="book-button" onClick={handleBookAppointment}>Book appointment</button>
        </div>
        <img
          src="/male-hero-image.png"
          alt="Groomed Man"
          className="hero-image"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {['Haircuts', 'Beard Trim', 'Shaving'].map((service) => (
            <div 
              key={service} 
              className="service-card"
              onClick={() => handleServiceClick(service)} // Add click handler
            >
              <img src={`/${service.toLowerCase().replace(/ /g, '-')}.png`} alt={service} />
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking-section">
        <h2>Booking</h2>
        <div className="booking-grid">
          <img
            src="/male-booking-image.png"
            alt="Booking"
            className="booking-image"
          />
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
          {["Beard Oil", "Shaving Cream", "Hair Gel", "Pomade"].map((product, i) => (
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
          {["James Johnson", "Liam Davis", "Ethan Wilson"].map((name, i) => (
            <div key={i} className="team-card">
              <img src={`/${name.split(' ')[0].toLowerCase()}.png`} alt={name} />
              <p className="team-name">{name}</p>
              <p className="team-role">Barber</p>
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

