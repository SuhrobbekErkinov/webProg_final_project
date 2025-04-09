import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MalePage.css";

export default function MalePage() {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedTeamMember, setExpandedTeamMember] = useState(null);

  const handleServiceClick = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const handleTeamClick = (member) => {
    setExpandedTeamMember(expandedTeamMember === member ? null : member);
  };

  return (
    <main className="male-page">
      {/* Hero Section */}
      <section id="hero-section" className="male-hero-section">
        <div className="male-hero-text">
          <h1>
            Discover the Style <br /> You Deserve
          </h1>
          <p>
            Step into a world of sharp grooming and timeless styles at SM BARBERSHOP.
            Our barbershop is not just a place for haircuts; it's a sanctuary where
            your individuality is celebrated.
          </p>
        </div>
        <img
          src="/male-hero-image.png" alt="Groomed Man" className="male-hero-image"/>
      </section>

      {/* Services Section */}
      <section id="services" className="male-services-section">
        <h2>Our Services</h2>
        <div className="male-services-grid">
          {['Male Haircuts', 'Beard Trim', 'Shaving'].map((service) => (
            <div
              key={service}
              className="male-service-card"
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={`/${service.toLowerCase().replace(/ /g, '-')}.jpg`}
                alt={service}
                className="male-service-image"
              />
              <h3>{service}</h3>
              {expandedService === service && (
                <div className="service-details">
                  <p>
                    Here you can put detailed information about the {service}.
                    For example, the price, duration, or any additional info.
                  </p>
                </div>
              )}
              <Link to="/booking">
                <button type="button" className="book-button">
                  Book Appointment
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <h2>Feedback</h2>
        <div className="feedback-grid">
          <div className="feedback-image-container">
            <img
              src="/feedback-image.png"
              alt="Feedback"
              className="feedback-image"
            />
            <Link to="/booking">
              <button type="button" className="book-button">
                Book Appointment
              </button>
            </Link>
          </div>
          <div className="feedback-form-container">
            <p>
              We value your opinion! Please provide us with feedback on your experience.
            </p>
            <form className="feedback-form">
              <input type="text" placeholder="Your Name" />
              <textarea placeholder="Your Feedback" rows="4"></textarea>
              <button type="submit" className="feedback-submit-button">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="male-team-section">
        <h2>Our Team</h2>
        <div className="male-team-grid">
          {["Will Smith", "Theo James", "Ma Dong-Seok", "Kerem Bursin", "Jonny Depp", "Ji Chang-wook"].map((name, i) => (
            <div
              key={i}
              className="team-card"
              onClick={() => handleTeamClick(name)}
            >
              <img
                src={`/${name.split(' ')[0].toLowerCase()}.jpg`}
                alt={name}
                className="male-team-image"
              />
              <p className="male-team-name">{name}</p>
              <p className="male-team-role">Barber</p>

              {expandedTeamMember === name && (
                <div className="team-details">
                  <p>
                    {name} is an experienced stylist specializing in custom
                    cuts, vibrant coloring, and modern updos. Clients love him
                    for his attention to detail and creative flair.
                  </p>
                  <Link to="/booking">
                    <button className="book-button team-book-button">
                      Book appointment
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contacts" className="male-footer">
        <div className="male-footer-content">
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
        <p className="male-footer-note">© MINERVA. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

