import React, { useState } from "react";
import "./BookingPage.css"; // Optional CSS file for styling
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [selectedMaster, setSelectedMaster] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleBooking = (e) => {
    e.preventDefault();

    if (!selectedMaster || !date || !time) {
      alert("Please fill out all fields before booking.");
      return;
    }

    // Simulate successful booking
    alert(`Booking confirmed with ${selectedMaster} on ${date} at ${time}.`);
    navigate("/"); // Navigate back home after booking
  };

  return (
    <div className="booking-page">
      <h2>Book Your Master</h2>

      <form onSubmit={handleBooking} className="booking-form">
        <label>
          Choose a Master:
          <select value={selectedMaster} onChange={(e) => setSelectedMaster(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="John">John</option>
            <option value="Emily">Emily</option>
            <option value="Alex">Alex</option>
            <option value="Sophie">Sophie</option>
          </select>
        </label>

        <label>
          Select Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label>
          Select Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
