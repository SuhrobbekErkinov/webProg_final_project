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
import HomePage from './MainPage';
import { Navigate } from 'react-router-dom';





function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is placed above Routes */}
      
      <Routes>
        <Route path="/homepage" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/male" element={<MalePage />} /> {/* Route for MalePage */}
        <Route path="/female" element={<FemalePage />} /> {/* Route for FemalePage */}
        <Route path="/booking" element={<BookingPage />} /> {/* Route for BookingPage */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App;

