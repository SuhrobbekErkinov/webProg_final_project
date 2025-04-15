// Footer.js
import React from "react";
import "./Footer.css"; // Optional CSS

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div>
          <h3>Contact Us</h3>
          <p>(234) 658-7199</p>
          <p>info@minerva.com</p>
          <p>care@minerva.com</p>
          <p>200 W 85th ST NEW YORK NY 10024-3139 USA</p>
        </div>
        <div>
          <h3>Subscribe to the newsletter</h3>
          <input type="email" placeholder="Email..." />
        </div>
      </div>
      <p className="footer-note">© MINERVA. All Rights Reserved.</p>
    </footer>
  );
}
