import React from 'react';
import './MainPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const salons = [
  {
    name: "Downtown Salon",
    address: "123 Main St, City Center",
    phone: "+1 123 456 7890",
    mapQuery: "123 Main St, City Center"
  },
  {
    name: "Eastside Salon",
    address: "45 East Rd, Neighborhood",
    phone: "+1 987 654 3210",
    mapQuery: "45 East Rd, Neighborhood"
  },
  {
    name: "Westend Salon",
    address: "789 West Ave, Near Mall",
    phone: "+1 456 789 1234",
    mapQuery: "789 West Ave, Near Mall"
  }
];

  const services = [
    { id: 1, name: 'Haircut', description: 'Professional haircut for all styles.', price: '$30' },
    { id: 2, name: 'Beard Trim', description: 'Precision beard trimming.', price: '$15' },
    { id: 3, name: 'Hair Coloring', description: 'Custom hair color.', price: '$60' },
  ];

  const masters = [
    { id: 1, name: "Will Smith", specialization: "Stylist" },
    { id: 2, name: "Theo James", specialization: "Beard Specialist" },
    { id: 3, name: "Ma Dong Seok", specialization: "Scissor Cut Master" },
    { id: 4, name: "Kerem Bursin", specialization: "Modern Styles" },
    { id: 5, name: "Johnny Depp", specialization: "Color Artist" },
    { id: 6, name: "Ji Chang Wook", specialization: "Quick Styling" },
    { id: 7, name: "Emma Watson", specialization: "Model Stylist" },
    { id: 8, name: "Hande Ercel", specialization: "Fashion Cuts" },
    { id: 9, name: "Kim Ji Won", specialization: "Elegant Styles" },
    { id: 10, name: "Selena Gomez", specialization: "Celebrity Looks" },
    { id: 11, name: "Son Hye Kyo", specialization: "Premium Stylist" },
    { id: 12, name: "Tyla", specialization: "Trend Expert" }
  ];
  
  

  const MainPage = () => {
    const [selectedSalon, setSelectedSalon] = useState(salons[0]); // Default to first salon
  
  return (
    <div className="main-container">
      {/* Poster Section */}
      <section id="poster" className="poster-section">
  <img src="/poster1.jpg" alt="Salon Poster" className="poster-img" />
  <button className="poster-booking-button" onClick={() => window.location.href = "/booking"}>Book Now</button>
</section>

<section id="map" className="map-section">
  <h2>Our Locations</h2>
  <div className="map-container">
    
    {/* Salon Cards */}
    <div className="salon-left-panel">
  <div className="salon-cards">
    {salons.map((salon, index) => (
      <div
        key={index}
        className={`salon-card ${selectedSalon.name === salon.name ? 'active' : ''}`}
        onClick={() => setSelectedSalon(salon)}
      >
        <h3>{salon.name}</h3>
        <p>{salon.address}</p>
        <p><strong>Phone:</strong> {salon.phone}</p>
      </div>
    ))}
  </div>

  {/* Booking Button */}
  <button className="book-button">Book Appointment</button>
</div>


    {/* Dynamic Map */}
    <div className="map-box">
      <iframe
        title="Salon Map"
        className="map-iframe"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedSalon.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

     {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span>{service.price}</span>
            </div>
          ))}
        </div>
      </section>

{/* Masters Section */}
<section id="masters" className="masters-section">
  <h2>Our Team</h2>
  <div className="master-cards">
    {masters.map((master) => (
      <div key={master.id} className="master-card">
        {/* Left: Photo */}
        <img
        src={`/${master.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
        alt={master.name}
        className="master-img"
        />

        {/* Center: Name */}
        <div className="master-name">{master.name}</div>
        
        {/* Right: Rating */}
        <div className="master-rating">Rating: ★★★★★</div>
      </div>
    ))}
  </div>
</section>


{/* Feedback Section */}
<section id="feedback" className="feedback-section">
  <h2>Feedback</h2>
  <div className="feedback-container">
    <div className="feedback-image">
      <img src="/poster1.jpg" alt="Salon" />
      </div>
    <div className="feedback-form">
      <label>Choose Master:</label>
      <select>
        <option>Select Master</option>
        {masters.map(master => (
          <option key={master.id}>{master.name}</option>
        ))}
      </select>

      <label>Choose Service:</label>
      <select>
        <option>Select Service</option>
        {services.map(service => (
          <option key={service.id}>{service.name}</option>
        ))}
      </select>

      <label>Your Name:</label>
      <input type="text" placeholder="Your Name" />

      <label>Your Feedback:</label>
      <textarea placeholder="Your Feedback"></textarea>
      <button className="submit-feedback">Submit Feedback</button>
    </div>
  </div>
</section>

      {/* Footer Section */}
      <footer id="footer" className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: contact@yourbusiness.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, Your City</p>
      </footer>
    </div>
  );
};

export default MainPage;

