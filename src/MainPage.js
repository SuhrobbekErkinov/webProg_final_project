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
  { id: 1, name: "Hairstyles", description: "Professional haircut for women.", price: "$50", gender: "female" },
  { id: 2, name: "Beard Trim", description: "Precision beard trimming.", price: "$15", gender: "male" },
  { id: 3, name: "Shaving", description: "Classic straight razor shave.", price: "$20", gender: "male" },
  { id: 5, name: "Haircut", description: "Stylish haircut for women.", price: "$40", gender: "female" },
  { id: 6, name: "Coloring", description: "Custom hair coloring and highlights.", price: "$80", gender: "female" },
  { id: 8, name: "Hair Treatments", description: "Blow dry and style.", price: "$25", gender: "female" },
  { id: 9, name: "Haircuts", description: "Professional haircut for men.", price: "$30", gender: "male" },
];

const maleServices = services.filter(service => service.gender === "male");
const femaleServices = services.filter(service => service.gender === "female");

  

const masters = [
  { id: 1, name: "Will Smith", specialization: "Stylist", gender: "male", rating: 4.8 },
  { id: 2, name: "Theo James", specialization: "Beard Specialist", gender: "male", rating: 1.7 },
  { id: 3, name: "Ma Dong Seok", specialization: "Scissor Cut Master", gender: "male", rating: 4.9 },
  { id: 4, name: "Kerem Bursin", specialization: "Modern Styles", gender: "male", rating: 1.6 },
  { id: 5, name: "Johnny Depp", specialization: "Color Artist", gender: "male", rating: 4.7 },
  { id: 6, name: "Ji Chang Wook", specialization: "Quick Styling", gender: "male", rating: 2.5 },
  { id: 7, name: "Emma Watson", specialization: "Model Stylist", gender: "female", rating: 3.9 },
  { id: 8, name: "Hande Ercel", specialization: "Fashion Cuts", gender: "female", rating: 4.8 },
  { id: 9, name: "Kim Ji Won", specialization: "Elegant Styles", gender: "female", rating: 2.7 },
  { id: 10, name: "Selena Gomez", specialization: "Celebrity Looks", gender: "female", rating: 4.9 },
  { id: 11, name: "Son Hye Kyo", specialization: "Premium Stylist", gender: "female", rating: 3.6 },
  { id: 12, name: "Tyla", specialization: "Trend Expert", gender: "female", rating: 4.8 },
];


const sortedMaleMasters = masters
  .filter(master => master.gender === "male")
  .sort((a, b) => b.rating - a.rating);

const sortedFemaleMasters = masters
  .filter(master => master.gender === "female")
  .sort((a, b) => b.rating - a.rating);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= Math.round(rating) ? "#f39c12" : "#ddd" }}>
          ★
        </span>
      );
    }
    return stars;
  };
  

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

<section id="services" className="services-section">
  <h2>Our Services</h2>

  <div className="scroll-container">
    <h3>Male Services</h3>
    <div className="service-cards male-scroll">
      {maleServices.map((service) => (
        <div key={service.id} className="service-card">
          <img
            src={`/${service.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
            alt={service.name}
            className="service-img"
          />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <span>{service.price}</span>
        </div>
      ))}
    </div>
  </div>

  <div className="scroll-container">
    <h3>Female Services</h3>
    <div className="service-cards female-scroll">
      {femaleServices.map((service) => (
        <div key={service.id} className="service-card">
          <img
            src={`/${service.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
            alt={service.name}
            className="service-img"
          />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <span>{service.price}</span>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Masters Section */}
<section id="masters" className="masters-section">
  <h2>Our Team</h2>
  <div className="columns">
    <div className="female-column">
      <h3>Female Masters</h3>
      {sortedFemaleMasters.map((master) => (
        <div key={master.id} className="master-card">
          <img
            src={`/${master.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
            alt={master.name}
            className="master-img"
          />
          <div className="master-name">{master.name}</div>
          <div className="master-rating">{renderStars(master.rating)} ({master.rating})</div>
        </div>
      ))}
    </div>

    <div className="male-column">
      <h3>Male Masters</h3>
      {sortedMaleMasters.map((master) => (
        <div key={master.id} className="master-card">
          <img
            src={`/${master.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
            alt={master.name}
            className="master-img"
          />
          <div className="master-name">{master.name}</div>
          <div className="master-rating">{renderStars(master.rating)} ({master.rating})</div>
        </div>
      ))}
    </div>
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
