// Footer.js
import React from "react";
import "./Footer.css"; // Optional CSS

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div>
          <h3>Contact Us</h3>
          <p>+998 (71) 202-41-11</p>
          <p>info@newuu.uz</p>
          <p>Tashkent city, Mirzo Ulugbek district, Movarounnahr street 1</p>
        </div>
        <div>
          <h3>Subscribe to the newsletter</h3>
          <input type="email" placeholder="Email..." />
        </div>
      </div>
      <p className="footer-note">© SM SALON. All Rights Reserved.</p>
    </footer>
  );
}
