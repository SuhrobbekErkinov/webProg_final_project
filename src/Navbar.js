import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Add useLocation
import "./Navbar.css";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (button) => {
    setActiveButton(button);
    navigate(`/${button}`);
  };

  const handleSubButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const hideSubButtons = location.pathname.includes("booking"); // You can fine-tune this

  return (
    <nav className="navbar">
      <h1>SM Barbershop</h1>
      <div className="main-buttons">
        <button
          className={activeButton === "male" ? "active" : ""}
          onClick={() => handleButtonClick("male")}
        >
          Male
        </button>
        <button
          className={activeButton === "female" ? "active" : ""}
          onClick={() => handleButtonClick("female")}
        >
          Female
        </button>
      </div>

      {!hideSubButtons && (
        <div className="sub-navbar">
          <button onClick={() => handleSubButtonClick("services")}>Services</button>
          <button onClick={() => handleSubButtonClick("booking")}>Booking</button>
          <button onClick={() => handleSubButtonClick("team")}>Team</button>
          <button onClick={() => handleSubButtonClick("contacts")}>Contacts</button>
        </div>
      )}
    </nav>
  );
}
