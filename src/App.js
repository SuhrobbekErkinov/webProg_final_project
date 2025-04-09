// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MalePage from "./MalePage"; // Import MalePage
import FemalePage from "./FemalePage"; // Import FemalePage
import BookingPage from "./BookingPage"; // Import BookingPage
import Navbar from "./Navbar"; // Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is placed above Routes */}
      
      <Routes>
        <Route path="/male" element={<MalePage />} /> {/* Route for MalePage */}
        <Route path="/female" element={<FemalePage />} /> {/* Route for FemalePage */}
        <Route path="/booking" element={<BookingPage />} /> {/* Route for BookingPage */}
      </Routes>

      <div className="main-page">
        <div className="main-container">
          <h1>SM Salon </h1>
          <p className="main-subtitle">
            Go to page for men of women by pressing the button above
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;

