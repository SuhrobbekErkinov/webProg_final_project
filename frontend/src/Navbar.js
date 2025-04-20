import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = Boolean(localStorage.getItem("user"));

  const handleSubButtonClick = (id) => {
    if (id === "booking") {
      // Navigate to bookingPage.js
      navigate("/booking");
      return;
    }

    if (id === "signin" && !isLoggedIn) {
      navigate("/signin", { state: { from: location } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        SM Barbershop
      </h1>

      <div className="sub-navbar">
        <button onClick={() => handleSubButtonClick("services")}>Services</button>
        <button onClick={() => handleSubButtonClick("booking")}>Booking</button>
        <button onClick={() => handleSubButtonClick("team")}>Team</button>
        <button onClick={() => handleSubButtonClick("footer")}>Contacts</button>
        <button onClick={() => handleSubButtonClick("signin")}>Sign in / Log in</button>
      </div>
    </nav>
  );
}


