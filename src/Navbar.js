import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isLoggedIn = Boolean(localStorage.getItem("user")); // Check if the user is logged in

  const handleButtonClick = (button) => {
    setActiveButton(button);
    navigate(`/${button}`);
  };

  const handleSubButtonClick = (id) => {
    if (id === "booking") {
      navigate("/booking");
      return;
    }

    if (id === "signin") {
      // Pass the current location as state when navigating to signin
      navigate("/signin", { state: { from: location } });
      return;
    }

    if (id === "profile" && !isLoggedIn) {
      // Redirect to signin if the user is not logged in
      navigate("/signin", { state: { from: location } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight; // Adjust for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const hideSubButtons = location.pathname.includes("booking");

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
          <button onClick={() => handleSubButtonClick("footer")}>Contacts</button> {/* Updated */}
          <button onClick={() => handleSubButtonClick("signin")}>Sign in / Log in</button>
          <button onClick={() => handleSubButtonClick("profile")}>Profile</button>
        </div>
      )}
    </nav>
  );
}


