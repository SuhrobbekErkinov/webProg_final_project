import React, { useState } from "react";
import MalePage from "./MalePage";
import FemalePage from "./FemalePage";
import "./index.css";

function App() {
  const [selectedSection, setSelectedSection] = useState(""); // Default to empty (no section selected)
  const [activeButton, setActiveButton] = useState(""); // Track active button (Male/Female)

  const handleSectionSelect = (section) => {
    if (selectedSection === section) {
      setSelectedSection(""); // Deselect if already selected
      setActiveButton(""); // Deactivate the button
    } else {
      setSelectedSection(section);
      setActiveButton(section); // Highlight the active button (Male/Female)
    }
  };

  return (
    <div className="App">
      {/* Main Navbar */}
      <nav className="navbar">
        <h1>Old-School Barbershop</h1>
        <div>
          <button
            onClick={() => handleSectionSelect("male")}
            className={activeButton === "male" ? "active" : ""}
          >
            Male
            {selectedSection === "male" && (
              <div className="sub-navbar">
                <button>Grooming</button>
                <button>Haircuts</button>
                <button>Shaving</button>
                <button>Beard Trim</button>
                <button>Waxing</button>
              </div>
            )}
          </button>

          <button
            onClick={() => handleSectionSelect("female")}
            className={activeButton === "female" ? "active" : ""}
          >
            Female
            {selectedSection === "female" && (
              <div className="sub-navbar">
                <button>Hair Styling</button>
                <button>Nail Care</button>
                <button>Makeup</button>
                <button>Facial Treatments</button>
                <button>Massages</button>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Page Content */}
      {selectedSection === "male" ? <MalePage /> : selectedSection === "female" ? <FemalePage /> : null}
    </div>
  );
}

export default App;


