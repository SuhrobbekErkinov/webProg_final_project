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
      // Navigate to sign in page if not logged in
      navigate("/signin", { state: { from: location } });
      return;
    }

    if (id === "signin" && isLoggedIn) {
      // Log out if the user is logged in
      localStorage.removeItem("user");
      navigate("/signin");  // Redirect to signin page after logout
      return;
    }

    if (id === "profile" && isLoggedIn) {
      // Navigate to the profile page if logged in
      navigate("/userProfile");
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

          {/* Conditionally render the button based on login status */}
          {isLoggedIn ? (
              // If logged in, show "Profile" button
              <button onClick={() => handleSubButtonClick("profile")}>
                Profile
              </button>
          ) : (
              // If not logged in, show "Sign in / Log in" button
              <button onClick={() => handleSubButtonClick("signin")}>
                Sign in / Log in
              </button>
          )}
        </div>
      </nav>
  );
}
