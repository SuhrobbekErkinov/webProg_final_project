// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MalePage from "./MalePage"; // Import MalePage
import FemalePage from "./FemalePage"; // Import FemalePage
import BookingPage from "./BookingPage"; // Import BookingPage
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer";
import SignInPage from "./SingInPage";
import ProfilePage from './ProfilePage';


function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is placed above Routes */}
      
      <Routes>
        <Route path="/male" element={<MalePage />} /> {/* Route for MalePage */}
        <Route path="/female" element={<FemalePage />} /> {/* Route for FemalePage */}
        <Route path="/booking" element={<BookingPage />} /> {/* Route for BookingPage */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />


      </Routes>

      <div className="main-page">
        <div className="main-container">
          <h1>SM Salon </h1>
          <p className="main-subtitle">
            Go to page for men or women by pressing the buttons on the top
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;

