import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Optional for styling
import "./BookingPage.css"; // Optional custom styling

export default function BookingPage() {
  const navigate = useNavigate();

  // State for form fields
  const [gender, setGender] = useState("");
  const [service, setService] = useState("");
  const [master, setMaster] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  // Sample masters based on gender and service
  const mastersData = {
    male: ["John", "Alex", "Michael"],
    female: ["Emily", "Sophie", "Charlotte"],
  };

  // List of available services
  const servicesList = ["Haircut", "Beard Trim", "Shave", "Facial"];

  // Handle form submission
  const handleBooking = (e) => {
    e.preventDefault();

    if (!gender || !service || !master || !date || !time) {
      alert("Please fill out all fields before booking.");
      return;
    }

    // Simulate successful booking
    alert(`Booking confirmed with ${master} for ${service} on ${date.toLocaleDateString()} at ${time}.`);
    navigate("/"); // Navigate back to homepage after booking
  };

  return (
    <div className="booking-page">
      <h2>Book Your Appointment</h2>

      <form onSubmit={handleBooking} className="booking-form">
        <label>
          Choose Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Choose Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">-- Select --</option>
            {servicesList.map((serviceOption, index) => (
              <option key={index} value={serviceOption}>
                {serviceOption}
              </option>
            ))}
          </select>
        </label>

        {gender && service && (
          <label>
            Choose Master:
            <select value={master} onChange={(e) => setMaster(e.target.value)}>
              <option value="">-- Select --</option>
              {mastersData[gender].map((masterOption, index) => (
                <option key={index} value={masterOption}>
                  {masterOption}
                </option>
              ))}
            </select>
          </label>
        )}

        <label>
          Pick a Date:
          <Calendar onChange={setDate} value={date} />
        </label>

        <label>
          Pick a Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
