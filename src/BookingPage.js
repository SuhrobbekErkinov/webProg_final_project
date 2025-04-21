
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";

export default function BookingPage() {
  const navigate = useNavigate();
  
  // State variables for form fields
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
  const [serviceTime, setServiceTime] = useState(30); // Default 30 minutes

  // Masters based on gender selection
  const masters = {
    male: ["Will Smith",  "Theo James",  "Ma Dong Seok",  "Kerem Bursin", "Johnny Depp", "Ji Chang Wook"  ],
    female: [ "Emma Watson",  "Hande Ercel","Kim Ji Won","Selena Gomez",  "Son Hye Kyo", "Tyla"]
  };

  // Services based on gender selection with duration in minutes
  const services = {
    male: [
      { id: 2, name: "Beard Trim",duration: 15 },
      { id: 3, name: "Shaving",duration: 20 },
      { id: 9, name: "Haircuts", duration: 30 }
    ],
    female: [
      { id: 1, name: "Hairstyles", duration: 60 },
      { id: 5, name: "Haircut", duration: 45 },
      { id: 6, name: "Coloring", duration: 120 },
      { id: 8, name: "Hair Treatments", duration: 90 }
    ]
  };

  // Update service time when service changes
  useEffect(() => {
    if (gender && service) {
      const selectedService = services[gender].find(s => s.name === service);
      if (selectedService) {
        setServiceTime(selectedService.duration);
        // Reset time selection when service changes
        setTime("");
      }
    }
  }, [gender, service]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
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

    // If validation passes, process the booking
    // In a real app, you would send this data to your backend
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

    console.log("Booking data:", bookingData);
    
    // Show success message and redirect
    alert("Booking successful! We'll see you soon.");
    navigate("/");
  };

  // Generate time slots based on service duration
  const generateTimeSlots = () => {
    const slots = [];
    const intervalMinutes = serviceTime; // Use service duration for intervals
    
    // Start from 9 AM (9 * 60 minutes from midnight)
    // End at 9 PM minus service duration (21 * 60 - serviceTime)
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

  // Calendar functions
  const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Create a date for the first day of the month
    const firstDay = new Date(year, month, 1);
    // Get the day of week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Create an array of day objects for the calendar
    const days = [];
    
    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ day: null, date: null });
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day);
      // Skip Sundays (salon is closed)
      const isSunday = dayDate.getDay() === 0;
      // Also skip days in the past
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
    
    // Don't allow going to past months
    const currentDate = new Date();
    if (newMonth.getFullYear() < currentDate.getFullYear() || 
        (newMonth.getFullYear() === currentDate.getFullYear() && 
         newMonth.getMonth() < currentDate.getMonth())) {
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
      setSelectedDate(date.date.toISOString().split('T')[0]);
    }
  };

  // Get month name and year
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const year = currentMonth.getFullYear();

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1>Book Your Appointment</h1>
        <p className="booking-subtitle">
          Fill out the form below to book your appointment at MINERVA
        </p>

        <form onSubmit={handleSubmit} className="booking-form">
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
                {gender && masters[gender].map((masterName, index) => (
                  <option key={index} value={masterName}>{masterName}</option>
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
                {gender && services[gender].map((service, index) => (
                  <option key={index} value={service.name}>
                    {service.name} ({service.duration} min)
                  </option>
                ))}
              </select>
              {errors.service && <span className="error-message">{errors.service}</span>}
            </div>
          </div>

          <div className="form-section">
            <h2>Step 2: Choose Date & Time</h2>
            
            <div className="calendar-container">
              <div className="calendar-header">
                <button type="button" onClick={previousMonth} className="month-nav">
                  &lt;
                </button>
                <h3>{monthName} {year}</h3>
                <button type="button" onClick={nextMonth} className="month-nav">
                  &gt;
                </button>
              </div>
              
              <div className="calendar-weekdays">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={index} className="weekday">{day}</div>
                ))}
              </div>
              
              <div className="calendar-days">
                {monthDays.map((day, index) => (
                  <div 
                    key={index} 
                    className={`calendar-day ${!day.day ? 'empty' : ''} ${day.disabled ? 'disabled' : ''} ${selectedDate === (day.date?.toISOString().split('T')[0]) ? 'selected' : ''}`}
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
                {selectedDate && service && timeSlots.map((timeSlot, index) => (
                  <option key={index} value={timeSlot}>{timeSlot}</option>
                ))}
              </select>
              {service && <span className="service-duration">Service duration: {serviceTime} minutes</span>}
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>
          </div>

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
    </div>
  );
}

