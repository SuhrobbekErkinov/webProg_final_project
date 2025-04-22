// src/MasterProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './MasterProfile.css';

// Optional: move this to a separate file or fetch from API later
const masterDetails = {
  1: { bio: "Experienced stylist with 10 years in modern hairstyles.", feedback: ["Great cut!", "Amazing service!"] },
  2: { bio: "Specializes in beards and grooming.", feedback: ["Perfect trim!", "Very professional."] },
  3: { bio: "Expert in fades and classic cuts.", feedback: ["Clean look!", "Highly skilled."] },
  // Add more master bios and feedback as needed
};

const defaultMasters = [
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

const MasterProfile = ({ masters = defaultMasters }) => {
  const { masterId } = useParams();
  const master = masters.find(m => m.id === parseInt(masterId));
  const details = masterDetails[masterId];

  if (!master) return <div className="master-profile">Master not found</div>;

  return (
    <div className="master-profile">
      <img
        src={`/${master.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
        alt={master.name}
        className="master-photo"
      />
      <h2>{master.name}</h2>
      <h4>Specialization: {master.specialization}</h4>
      <p className="bio">{details?.bio || "No biography available."}</p>

      <h3>Feedback</h3>
      <ul className="feedback-list">
        {details?.feedback?.length
          ? details.feedback.map((f, idx) => <li key={idx}>{f}</li>)
          : <li>No feedback yet.</li>
        }
      </ul>

      <div className="rating">Rating: ★★★★★</div>
    </div>
  );
};

export default MasterProfile;
