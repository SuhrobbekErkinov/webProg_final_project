import React, { useState } from 'react';
import axiosInstance from "./axiousInstance"; // adjust path if needed

const FeedbackSection = ({ masters, services }) => {
    const [masterName, setMasterName] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [userName, setUserName] = useState('');
    const [feedbackText, setFeedbackText] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        if (!masterName || !serviceName || !userName || !feedbackText) {
            setMessage("Please fill in all fields.");
            return;
        }

        const feedback = { masterName, serviceName, userName, feedbackText };
        setLoading(true);
        setMessage('');

        try {
            const response = await axiosInstance.post(
                "/feedback",  // this overrides /api/auth from baseURL
                feedback,
                { baseURL: "http://localhost:8080/api" } // temporarily change baseURL
            );

            if (response.status === 200) {
                setMessage("✅ Feedback submitted successfully!");
                setMasterName('');
                setServiceName('');
                setUserName('');
                setFeedbackText('');
            } else {
                setMessage("❌ Failed to submit feedback. Try again.");
            }
        } catch (err) {
            console.error("Failed to submit feedback", err);
            setMessage("❌ An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="feedback" className="feedback-section">
            <h2>Feedback</h2>
            <div className="feedback-container">
                <div className="feedback-image">
                    <img src="/poster1.jpg" alt="Salon" />
                </div>
                <div className="feedback-form">
                    <label>Choose Master:</label>
                    <select value={masterName} onChange={(e) => setMasterName(e.target.value)}>
                        <option value="">Select Master</option>
                        {masters.map(master => (
                            <option key={master.id} value={master.name}>{master.name}</option>
                        ))}
                    </select>

                    <label>Choose Service:</label>
                    <select value={serviceName} onChange={(e) => setServiceName(e.target.value)}>
                        <option value="">Select Service</option>
                        {services.map(service => (
                            <option key={service.id} value={service.name}>{service.name}</option>
                        ))}
                    </select>

                    <label>Your Name:</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <label>Your Feedback:</label>
                    <textarea
                        placeholder="Your Feedback"
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                    ></textarea>

                    <button className="submit-feedback" onClick={handleSubmit} disabled={loading}>
                        {loading ? "Submitting..." : "Submit Feedback"}
                    </button>

                    {message && <p style={{ marginTop: '10px', color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>}
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;
