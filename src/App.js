// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage"; // Import BookingPage
import Navbar from "./Navbar"; // Import Navbar
import SignInPage from "./SingInPage";
import HomePage from './MainPage';
import { Navigate } from 'react-router-dom';





function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is placed above Routes */}
      
      <Routes>
        <Route path="/homepage" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/booking" element={<BookingPage />} /> {/* Route for BookingPage */}
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </Router>
  );
}

export default App;

