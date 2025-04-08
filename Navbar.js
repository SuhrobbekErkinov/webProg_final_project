import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router navigation
import "./Navbar.css";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(null); // Track which button is active
  const navigate = useNavigate(); // React Router navigation

  // Handle main button click (Male or Female)
  const handleButtonClick = (button) => {
    setActiveButton(button); // Highlight the active button
    navigate(`/${button}`); // Navigate to MalePage or FemalePage
  };

  // Handle sub-button click (scroll to specific IDs on the current page)
  const handleSubButtonClick = (id) => {
    const element = document.getElementById(id); // Find the section by ID
    if (element) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Element's position
      const offsetPosition = elementPosition - navbarHeight; // Adjust for navbar height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <nav className="navbar">
      <h1>SM Barbershop</h1>
      <div className="main-buttons">
        {/* Male Button */}
        <button
          className={activeButton === "male" ? "active" : ""}
          onClick={() => handleButtonClick("male")}
        >
          Male
        </button>

        {/* Female Button */}
        <button
          className={activeButton === "female" ? "active" : ""}
          onClick={() => handleButtonClick("female")}
        >
          Female
        </button>
      </div>

      {/* Sub-buttons (navigate to specific parts of the page) */}
      <div className="sub-navbar">
        <button onClick={() => handleSubButtonClick("services")}>Services</button>
        <button onClick={() => handleSubButtonClick("products")}>Products</button>
        <button onClick={() => handleSubButtonClick("booking")}>Booking</button>
        <button onClick={() => handleSubButtonClick("team")}>Team</button>
        <button onClick={() => handleSubButtonClick("contacts")}>Contacts</button>
      </div>
    </nav>
  );
}

