import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      navigate("/signin");
    } else {
      setUser(loggedUser);

      const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
      const allFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

      if (loggedUser.role === "master") {
        setBookings(allBookings.filter(b => b.master === loggedUser.name));
        setFeedbacks(allFeedbacks.filter(f => f.master === loggedUser.name));
      } else {
        setBookings(allBookings.filter(b => b.userEmail === loggedUser.email));
        setFeedbacks(allFeedbacks.filter(f => f.userEmail === loggedUser.email));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  if (!user) return null;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome, {user.firstName} {user.lastName}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role || "Client"}</p>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="profile-section">
        <h3>{user.role === "master" ? "Your Appointments" : "Your Booking History"}</h3>
        {bookings.length > 0 ? (
          <ul className="profile-list">
            {bookings.map((booking, index) => (
              <li key={index} className="profile-list-item">
                {booking.date} – {booking.service} with {booking.master}
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No bookings yet.</p>
        )}
      </div>

      <div className="profile-section">
        <h3>{user.role === "master" ? "Client Feedback" : "Your Feedbacks"}</h3>
        {feedbacks.length > 0 ? (
          <ul className="profile-list">
            {feedbacks.map((fb, index) => (
              <li key={index} className="profile-list-item">
                <strong>{fb.name}:</strong> "{fb.message}" for {fb.service}
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">No feedbacks yet.</p>
        )}
      </div>
    </div>
  );
}
