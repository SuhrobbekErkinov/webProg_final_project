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
  const isLoggedIn = false; // Replace with actual authentication logic
  const navigate = useNavigate();

  const handleServiceClick = (service) => {
    setExpandedService(expandedService === service ? null : service);
  };

  const handleTeamClick = (member) => {
    setExpandedTeamMember(expandedTeamMember === member ? null : member);
  };

  const handleBookingClick = () => {
    if (isLoggedIn) {
      navigate("/booking"); // Redirect to booking page if logged in
    } else {
      navigate("/signin", { state: { from: "/booking" } }); // Redirect to sign-in page first
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    // Validate form (simple example)
    if (!master || !service || !name || !feedbackText) {
      alert("Please fill in all fields!");
      return;
    }

    const newFeedback = {
      master,
      service,
      name,
      feedback: feedbackText,
    };

    const existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    existingFeedbacks.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(existingFeedbacks));

    alert("Thank you for your feedback!");

    // Clear form
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
      {/* Hero Section */}
      <section id="hero-section" className="hero-section">
        <div className="hero-text">
          <h1>Discover Your Best Style</h1>
          <p>
            Experience top-notch grooming at SM BARBERSHOP. We're here to provide the perfect look for every man.
            Your style is our passion.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Premium Services</h2>
        <div className="services-grid">
          {["Male Haircuts", "Beard Trim", "Shaving"].map((service) => (
            <div
              key={service}
              className="service-card"
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={`/${service.toLowerCase().replace(/ /g, "-")}.jpg`}
                alt={service}
                className="card-image"
              />
              <h3>{service}</h3>
              <p className="service-price">{servicePrices[service]}</p>
              {expandedService === service && (
                <div className="service-details">
                  <p>
                    Here you can put detailed information about the {service}.
                    For example, the price, duration, or any additional info.
                  </p>
                  <button type="button" className="book-button" onClick={handleBookingClick}>
                    Book Appointment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="feedback-section">
        <h2>Client Feedback</h2>
        <div className="feedback-grid">
          <div className="feedback-image-container">
            <img
              src="/male-feedback-image.png"
              alt="Feedback"
              className="feedback-image"
            />
            <button type="button" className="book-button" onClick={handleBookingClick}>
              Book Appointment
            </button>
          </div>
          <div className="feedback-form-container">
            <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
              {/* Dropdown for Master Selection */}
              <div className="form-group">
                <label htmlFor="master">Choose Master:</label>
                <select
                  id="master"
                  name="master"
                  value={master}
                  onChange={(e) => setMaster(e.target.value)}
                  required
                >
                  <option value="">Select Master</option>
                  {teamMembers.map((teamMember) => (
                    <option key={teamMember.name} value={teamMember.name}>
                      {teamMember.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dropdown for Service Selection */}
              <div className="form-group">
                <label htmlFor="service">Choose Service:</label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Male Haircuts">Male Haircuts</option>
                  <option value="Beard Trim">Beard Trim</option>
                  <option value="Shaving">Shaving</option>
                </select>
              </div>

              {/* Input for Name */}
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Textarea for Feedback */}
              <div className="form-group">
                <label htmlFor="feedback">Your Feedback:</label>
                <textarea
                  id="feedback"
                  placeholder="Your Feedback"
                  rows="4"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="feedback-submit-button">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="team-card"
              onClick={() => handleTeamClick(member.name)}
            >
              <img
                src={`/${member.name.split(" ")[0].toLowerCase()}.jpg`}
                alt={member.name}
                className="team-image"
              />
              <p className="team-name">{member.name}</p>
              <p className="team-role">Barber</p>

              {expandedTeamMember === member.name && (
                <div className="team-details">
                  <p>
                    {member.name} is an experienced stylist specializing in custom
                    cuts, vibrant coloring, and modern updos. Clients love him
                    for his attention to detail and creative flair.
                  </p>
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
