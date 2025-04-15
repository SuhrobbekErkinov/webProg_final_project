import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";
import Footer from "./Footer";

export default function BookingPage() {
  const navigate = useNavigate();

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  const [gender, setGender] = useState("");
  const [master, setMaster] = useState("");
  const [service, setService] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [serviceTime, setServiceTime] = useState(30);

  const masters = {
    male: ["James Johnson", "Liam Davis", "Ethan Wilson"],
    female: ["Olivia Smith", "Amelia Brown", "Emily Walker"]
  };

  // Memoize services object to avoid re-calculating on every render
  const services = useMemo(() => ({
    male: [
      { name: "Haircut", duration: 30 },
      { name: "Beard Trim", duration: 15 },
      { name: "Shaving", duration: 20 },
      { name: "Hair Styling", duration: 45 }
    ],
    female: [
      { name: "Haircut", duration: 45 },
      { name: "Hairstyle", duration: 60 },
      { name: "Coloring", duration: 120 },
      { name: "Hair Treatment", duration: 90 }
    ]
  }), []);

  useEffect(() => {
    if (gender && service) {
      const selectedService = services[gender].find(s => s.name === service);
      if (selectedService) {
        setServiceTime(selectedService.duration);
        setTime("");
      }
    }
  }, [gender, service, services]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
    if (!gender) newErrors.gender = "Please select gender";
    if (!master) newErrors.master = "Please select a master";
    if (!service) newErrors.service = "Please select a service";
    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!selectedDate) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    const bookingData = {
      gender,
      master,
      service,
      serviceDuration: serviceTime,
      firstName,
      lastName,
      email,
      phone,
      date: selectedDate,
      time
    };
  
    // Save to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));
  
    console.log("Booking data:", bookingData);
  
    alert("Booking successful! We'll see you soon.");
    navigate("/");
  };
  
  const generateTimeSlots = () => {
    const slots = [];
    const intervalMinutes = serviceTime;

    for (let minutes = 9 * 60; minutes <= 21 * 60 - serviceTime; minutes += intervalMinutes) {
      const hour = Math.floor(minutes / 60);
      const minute = minutes % 60;

      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
      const period = hour >= 12 ? "PM" : "AM";
      const minuteFormatted = minute.toString().padStart(2, "0");

      slots.push(`${hourFormatted}:${minuteFormatted} ${period}`);
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ day: null, date: null });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day);
      const isSunday = dayDate.getDay() === 0;
      const isPastDay = dayDate < new Date().setHours(0, 0, 0, 0);

      days.push({
        day,
        date: dayDate,
        disabled: isSunday || isPastDay
      });
    }

    return days;
  };

  const monthDays = getMonthData(currentMonth);

  const previousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);

    const currentDate = new Date();
    if (
      newMonth.getFullYear() < currentDate.getFullYear() ||
      (newMonth.getFullYear() === currentDate.getFullYear() &&
        newMonth.getMonth() < currentDate.getMonth())
    ) {
      return;
    }

    setCurrentMonth(newMonth);
  };

  const nextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  const handleDateClick = (date) => {
    if (date && !date.disabled) {
      setSelectedDate(date.date.toISOString().split("T")[0]);
    }
  };

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Appointment</h1>
        <p className="booking-subtitle">
          Fill out the form below to book your appointment at MINERVA
        </p>

        <form onSubmit={handleSubmit} className="booking-form">
          {/* STEP 1 */}
          <div className="form-section">
            <h2>Step 1: Choose Service Details</h2>

            <div className="form-group">
              <label htmlFor="gender">Select Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                  setMaster("");
                  setService("");
                }}
                className={errors.gender ? "error" : ""}
              >
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="master">Select Master:</label>
              <select
                id="master"
                value={master}
                onChange={(e) => setMaster(e.target.value)}
                disabled={!gender}
                className={errors.master ? "error" : ""}
              >
                <option value="">-- Select Master --</option>
                {gender &&
                  masters[gender].map((masterName, index) => (
                    <option key={index} value={masterName}>
                      {masterName}
                    </option>
                  ))}
              </select>
              {errors.master && <span className="error-message">{errors.master}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="service">Select Service:</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                disabled={!gender}
                className={errors.service ? "error" : ""}
              >
                <option value="">-- Select Service --</option>
                {gender &&
                  services[gender].map((s, index) => (
                    <option key={index} value={s.name}>
                      {s.name} ({s.duration} min)
                    </option>
                  ))}
              </select>
              {errors.service && <span className="error-message">{errors.service}</span>}
            </div>
          </div>

          {/* STEP 2 */}
          <div className="form-section">
            <h2>Step 2: Choose Date & Time</h2>

            <div className="calendar-container">
              <div className="calendar-header">
                <button type="button" onClick={previousMonth} className="month-nav">
                  &lt;
                </button>
                <h3>
                  {monthName} {year}
                </h3>
                <button type="button" onClick={nextMonth} className="month-nav">
                  &gt;
                </button>
              </div>

              <div className="calendar-weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                  <div key={index} className="weekday">
                    {day}
                  </div>
                ))}
              </div>

              <div className="calendar-days">
                {monthDays.map((day, index) => (
                  <div
                    key={index}
                    className={`calendar-day ${!day.day ? "empty" : ""} ${
                      day.disabled ? "disabled" : ""
                    } ${
                      selectedDate === day.date?.toISOString().split("T")[0] ? "selected" : ""
                    }`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day.day}
                  </div>
                ))}
              </div>
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group time-selection">
              <label htmlFor="time">Select Time:</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                disabled={!selectedDate || !service}
                className={errors.time ? "error" : ""}
              >
                <option value="">-- Select Time --</option>
                {selectedDate &&
                  service &&
                  timeSlots.map((timeSlot, index) => (
                    <option key={index} value={timeSlot}>
                      {timeSlot}
                    </option>
                  ))}
              </select>
              {service && (
                <span className="service-duration">
                  Service duration: {serviceTime} minutes
                </span>
              )}
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>
          </div>

          {/* STEP 3 */}
          <div className="form-section">
            <h2>Step 3: Your Information</h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={errors.firstName ? "error" : ""}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={errors.lastName ? "error" : ""}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={() => navigate("/")}>
              Cancel
            </button>
            <button type="submit" className="confirm-button">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
            <Footer /> {/* 👈 Added Footer here */}
    </div>
  );
}

