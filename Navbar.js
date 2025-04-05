import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ onSectionSelect, activeButton }) {
  const [isMaleDropdownVisible, setIsMaleDropdownVisible] = useState(false);
  const [isFemaleDropdownVisible, setIsFemaleDropdownVisible] = useState(false);

  return (
    <nav className="navbar">
      <h1>Old-School Barbershop</h1>
      <div className="menu">
        {/* Male Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setIsMaleDropdownVisible(true)}
          onMouseLeave={() => setIsMaleDropdownVisible(false)}
        >
          <button className={activeButton === "male" ? "active" : ""}>
            Male
          </button>
          {isMaleDropdownVisible && (
            <div className="sub-navbar">
              <button>Grooming</button>
              <button>Haircuts</button>
              <button>Shaving</button>
              <button>Beard Trim</button>
              <button>Waxing</button>
            </div>
          )}
        </div>

        {/* Female Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setIsFemaleDropdownVisible(true)}
          onMouseLeave={() => setIsFemaleDropdownVisible(false)}
        >
          <button className={activeButton === "female" ? "active" : ""}>
            Female
          </button>
          {isFemaleDropdownVisible && (
            <div className="sub-navbar">
              <button>Hair Styling</button>
              <button>Nail Care</button>
              <button>Makeup</button>
              <button>Facial Treatments</button>
              <button>Massages</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

