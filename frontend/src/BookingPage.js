import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingPage.css";
import axios from "axios";

export default function BookingPage() {
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [service, setService] = useState("");
  const [master, setMaster] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");

  // Sample masters based on gender and service
  const mastersData = {
    male: ["John", "Alex", "Michael"],
    female: ["Emily", "Sophie", "Charlotte"],
  };

  const servicesList = ["Haircut", "Beard Trim", "Shave", "Facial"];

  useEffect(() => {
    // Assuming email is stored in localStorage after login
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.email) {
      setEmail(userData.email);
    }
  }, []);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!gender || !service || !master || !date || !time || !email) {
      alert("Please fill out all fields before booking.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/bookings", {
        gender,
        service,
        master,
        date: date.toISOString().split("T")[0],
        time,
        email,
      });

      alert(`Booking confirmed with ${master} for ${service} on ${date.toLocaleDateString()} at ${time}.`);
      navigate("/");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Something went wrong. Please try again.");
    }
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

          {/* Optional: Display email (readonly) */}
          <label>
            Your Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
  );
}
