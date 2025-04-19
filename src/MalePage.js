import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MalePage.css";
import Footer from "./Footer";

export default function MalePage() {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedTeamMember, setExpandedTeamMember] = useState(null);
  const [master, setMaster] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const isLoggedIn = false; // Replace with real auth
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const handleTeamClick = (member) => {
    setExpandedTeamMember(expandedTeamMember === member ? null : member);
  };

  const handleBookingClick = () => {
    if (isLoggedIn) {
      navigate("/booking");
    } else {
      navigate("/signin", { state: { from: "/booking" } });
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!master || !service || !name || !feedbackText) {
      alert("Please fill in all fields!");
      return;
    }
    const newFeedback = { master, service, name, feedback: feedbackText };
    const existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    existingFeedbacks.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(existingFeedbacks));
    alert("Thank you for your feedback!");
    setMaster("");
    setService("");
    setName("");
    setFeedbackText("");
  };

  const teamMembers = [
    { name: "Will Smith", feedback: "Great attention to detail!" },
    { name: "Theo James", feedback: "Very skilled with beard trims." },
    { name: "Ma Dong-Seok", feedback: "A master with scissor cuts!" },
    { name: "Kerem Bursin", feedback: "Best for modern styles." },
    { name: "Johnny Depp", feedback: "Has a creative touch with colors." },
    { name: "Ji Chang-wook", feedback: "Very professional and quick!" },
  ];

  const servicePrices = {
    "Male Haircuts": "$30",
    "Beard Trim": "$15",
    "Shaving": "$10",
  };

  return (
    <main className="male-page">
      <section id="hero-section" className="male-hero-section">
        <div className="male-hero-text">
          <h1>Discover Your Best Style</h1>
          <p>
            Experience top-notch grooming at SM BARBERSHOP. We're here to provide the perfect look for every man. Your style is our passion.
          </p>
        </div>
      </section>

      <section id="services" className="male-services-section">
        <h2>Our Premium Services</h2>
        <div className="male-services-grid">
          {Object.keys(servicePrices).map((service) => (
            <div
              key={service}
              className={`male-service-card ${expandedService === service ? "expanded" : ""}`}
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={`/${service.toLowerCase().replace(/ /g, "-")}.jpg`}
                alt={service}
                className="male-service-image"
              />
              <h3>{service}</h3>
              <p className="service-price">{servicePrices[service]}</p>
              {expandedService === service && (
                <div className="service-details">
                  <p>Details about {service}. Includes price, duration, and what to expect.</p>
                  <button type="button" className="book-button" onClick={handleBookingClick}>
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="feedback" className="feedback-section">
        <h2>Client Feedback</h2>
        <div className="feedback-grid">
          <div className="feedback-image-container">
            <img src="/male-feedback-image.png" alt="Feedback" className="feedback-image" />
            <button type="button" className="book-button" onClick={handleBookingClick}>
              Book Appointment
            </button>
          </div>
          <div className="feedback-form-container">
            <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
              <div className="form-group">
                <label htmlFor="master">Choose Master:</label>
                <select id="master" value={master} onChange={(e) => setMaster(e.target.value)} required>
                  <option value="">Select Master</option>
                  {teamMembers.map((m) => (
                    <option key={m.name} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="service">Choose Service:</label>
                <select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                  <option value="">Select Service</option>
                  {Object.keys(servicePrices).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Your Feedback:</label>
                <textarea id="feedback" value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} rows="4" required />
              </div>
              <button type="submit" className="feedback-submit-button">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="team" className="male-team-section">
        <h2>Meet Our Team</h2>
        <div className="male-team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={`team-card ${expandedTeamMember === member.name ? "expanded" : ""}`}
              onClick={() => handleTeamClick(member.name)}
            >
              <img src={`/${member.name.split(" ")[0].toLowerCase()}.jpg`} alt={member.name} className="team-image" />
              <p className="team-name">{member.name}</p>
              <p className="team-role">Barber</p>
              {expandedTeamMember === member.name && (
                <div className="team-details">
                  <p>{member.name} is an expert in styles, cuts, and grooming trends. Highly rated by clients.</p>
                  <p><strong>Client Feedback:</strong> {member.feedback}</p>
                  <button type="button" className="book-button" onClick={handleBookingClick}>
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
