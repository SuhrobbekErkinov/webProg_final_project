
// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignInPage from "./SingInPage";
import ProfilePage from './ProfilePage'; // User's own profile
import HomePage from './MainPage';
import MasterProfile from './MasterProfile';
import UserProfile from "./UserProfile"; // Master’s detailed profile

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/homepage" element={<Navigate to="/" />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/signin" element={<SignInPage />} />

                {/* User profile page */}
                <Route path="/profile" element={<ProfilePage />} />

                {/* Master profile page with dynamic ID */}
                <Route path="/masters/:masterId" element={<MasterProfile />} />
                <Route path="userProfile" element={<UserProfile/>} />
            </Routes>
        </Router>
    );
}

export default App;
