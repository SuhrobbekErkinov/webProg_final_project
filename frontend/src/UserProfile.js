import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get user data from localStorage after login
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData) {
            setUser(userData);
            fetchBookings(userData.email);
        } else {
            setLoading(false);
        }
    }, []);

    // Function to fetch bookings
    const fetchBookings = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/bookings/${email}`);
            setBookings(response.data);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch bookings. Please try again later.');
            setLoading(false);
        }
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.href = '/signin';  // Redirect to SignIn page after logout
    };

    if (loading) {
        return <div className="user-profile">Loading...</div>;
    }

    if (!user) {
        return <div className="user-profile">User not found. Please log in.</div>;
    }

    return (
        <div className="user-profile">
            <h2>Your Profile</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> Client</p> {/* Added 'Client' as role */}

            <h3>Your Bookings</h3>
            {error && <p className="error-message">{error}</p>}
            {bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id} className="booking-item">
                            <strong>Booking ID:</strong> {booking.id} <br />
                            <strong>Service:</strong> {booking.service} <br />
                            <strong>Master:</strong> {booking.master} <br />
                            <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()} <br />
                            <strong>Time:</strong> {new Date(booking.time).toLocaleTimeString()} <br />
                        </li>
                    ))}
                </ul>
            )}

            <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
        </div>
    );
};

export default UserProfile;
