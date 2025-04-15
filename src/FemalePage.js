import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FemalePage.css";
import Footer from "./Footer";

export default function FemalePage() {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedTeamMember, setExpandedTeamMember] = useState(null);
  
  // Refactored team details with feedbacks and bios
  const teamDetails = {
    "Emma Watson": {
      role: "Hairdresser",
      feedbacks: ["Great stylist!", "Very professional!"],
      bio: "Emma is a talented stylist with over 10 years of experience. Specializes in modern haircuts and color techniques."
    },
    "Hande Ercel": {
      role: "Hairdresser",
      feedbacks: ["Amazing haircut!", "Loved the color!"],
      bio: "Hande is known for her creative cuts and vibrant colors. A true artist in hair design."
    },
    "Kim Ji Won": {
      role: "Hairdresser",
      feedbacks: ["Fantastic service!", "Highly recommended!"],
      bio: "Kim Ji Won has a keen eye for detail and specializes in precision cutting and styling."
    },
    "Selena Gomez": {
      role: "Hairdresser",
      feedbacks: ["Super friendly!", "Perfect cut!"],
      bio: "Selena's attention to detail and customer care are her top priorities."
    },
    "Son Hye Kyo": {
      role: "Hairdresser",
      feedbacks: ["Great advice!", "Amazing styling skills!"],
      bio: "Son Hye Kyo brings a blend of fashion-forward style and timeless elegance."
    },
    "Tyla": {
      role: "Hairdresser",
      feedbacks: ["Loved the service!", "Great personality!"],
      bio: "Tyla’s expertise in styling and coloring will leave you feeling like a star."
    }
  };

  // Service details object
  const serviceDetails = {
    "Haircuts": {
      description: "A stylish and professional haircut to suit your personality.",
      price: "$30 - $50",
      duration: "45 minutes"
    },
    "Hairstyles": {
      description: "Get the latest trendy hairstyles for any occasion.",
      price: "$40 - $70",
      duration: "1 hour"
    },
    "Coloring": {
      description: "Beautiful hair coloring to give you a fresh new look.",
      price: "$60 - $100",
      duration: "2 hours"
    },
    "Hair Treatments": {
      description: "Deep conditioning and rejuvenating treatments for healthy hair.",
      price: "$50 - $80",
      duration: "1.5 hours"
    }
  };

  const [master, setMaster] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const isLoggedIn = false; // Replace this with actual authentication logic
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
      navigate("/signin"); // Redirect to sign-in page first
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Add the feedback submission logic here (e.g., save to the database or send to a server)
    alert("Feedback submitted successfully!");
    // Clear the form after submission
    setMaster("");
    setService("");
    setName("");
    setFeedbackText("");
  };

  return (
    <main className="female-page">
      {/* Hero Section */}
      <section id="hero-section" className="hero-section">
        <div className="hero-text">
          <h1>
            Get Hair Style <br /> You Deserve
          </h1>
          <p>
            Discover a world of sophistication and personalized beauty at SM
            SALON. Our salon is more than just a place for haircuts; it’s a haven where your unique style takes center stage.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {["Haircuts", "Hairstyles", "Coloring", "Hair Treatments"].map((service) => (
            <div
              key={service}
              className="service-card"
              onClick={() => handleServiceClick(service)}  // Handle expansion
            >
              <img
                src={`/${service.toLowerCase().replace(/ /g, "-")}.jpg`}
                alt={service}
                className="card-image"
              />
              <h3>{service}</h3>
              {expandedService === service && ( // Conditional rendering of service details
                <div className="service-details">
                  {/* Render details dynamically from the details object */}
                  <p>{serviceDetails[service].description}</p>
                  <p><strong>Price:</strong> {serviceDetails[service].price}</p>
                  <p><strong>Duration:</strong> {serviceDetails[service].duration}</p>
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
        <h2>Feedback</h2>
        <div className="feedback-grid">
          <div className="feedback-image-container">
            <img
              src="/feedback-image.png"
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
                  <option value="Will Smith">Will Smith</option>
                  <option value="Theo James">Theo James</option>
                  <option value="Ma Dong-Seok">Ma Dong-Seok</option>
                  <option value="Kerem Bursin">Kerem Bursin</option>
                  <option value="Johnny Depp">Johnny Depp</option>
                  <option value="Ji Chang-wook">Ji Chang-wook</option>
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
        <h2>Our Team</h2>
        <div className="team-grid">
          {["Emma Watson", "Hande Ercel", "Kim Ji Won", "Selena Gomez", "Son Hye Kyo", "Tyla"].map((name) => (
            <div
              key={name}
              className="team-card"
              onClick={() => handleTeamClick(name)}  // Handle expansion
            >
              <img
                src={`/${name.split(" ")[0].toLowerCase()}.jpg`}
                alt={name}
                className="card-image"
              />
              <p className="team-name">{name}</p>
              <p className="team-role">{teamDetails[name]?.role}</p>
              {expandedTeamMember === name && ( // Conditional rendering of team details
                <div className="team-details">
                  <p>{teamDetails[name]?.bio}</p>
                  <h4>Feedback:</h4>
                  <ul>
                    {teamDetails[name]?.feedbacks.map((feedback, index) => (
                      <li key={index}>{feedback}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="book-button team-book-button"
                    onClick={handleBookingClick}
                  >
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
