import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MasterProfile.css';

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
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (master) {
            const fetchFeedback = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/feedback/by-master?masterName=${encodeURIComponent(master.name)}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch feedback.");
                    }
                    const data = await response.json();
                    setFeedback(data.map(fb => fb.feedbackText));
                } catch (err) {
                    console.error(err);
                    setError("Error loading feedback.");
                } finally {
                    setLoading(false);
                }
            };

            fetchFeedback();
        }
    }, [master]);

    if (!master) {
        return <div className="master-profile">Master not found</div>;
    }

    return (
        <div className="master-profile">
            <img
                src={`/${master.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
                alt={master.name}
                className="master-photo"
            />
            <h2>{master.name}</h2>
            <h4>Specialization: {master.specialization}</h4>

            <h3>Feedback</h3>
            {loading ? (
                <p>Loading feedback...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul className="feedback-list">
                    {feedback.length > 0
                        ? feedback.map((text, idx) => <li key={idx}>{text}</li>)
                        : <li>No feedback yet.</li>
                    }
                </ul>
            )}

            <div className="rating">Rating: ★★★★★</div>
        </div>
    );
};

export default MasterProfile;
