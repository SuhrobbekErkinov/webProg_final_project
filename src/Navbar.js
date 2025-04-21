import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = Boolean(localStorage.getItem("user"));

  const handleSubButtonClick = (id) => {
    const sectionTargets = ["services", "masters", "footer"];

    if (id === "booking") {
      navigate("/booking");
      return;
    }

    if (id === "signin" && !isLoggedIn) {
      navigate("/signin", { state: { from: location } });
      return;
    }

    if (sectionTargets.includes(id)) {
      if (location.pathname !== "/") {
        // Navigate to home page and pass section ID to scroll after load
        navigate("/", { state: { scrollTo: id } });
      } else {
        scrollToSection(id);
      }
    }
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
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
    }, 100); // delay helps ensure element is in the DOM
  };

  return (
    <nav className="navbar">
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        SM Barbershop
      </h1>

      <div className="sub-navbar">
        <button onClick={() => handleSubButtonClick("services")}>Services</button>
        <button onClick={() => handleSubButtonClick("booking")}>Booking</button>
        <button onClick={() => handleSubButtonClick("masters")}>Team</button>
        <button onClick={() => handleSubButtonClick("footer")}>Contacts</button>
        <button onClick={() => handleSubButtonClick("signin")}>Sign in / Log in</button>
      </div>
    </nav>
  );
}


