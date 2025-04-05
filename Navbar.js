import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Old-School Barbershop</h1>
      <div className="menu">
        {/* Male Link */}
        <div className="dropdown">
          <Link to="/male">
            <button>
              Male
            </button>
          </Link>
        </div>

        {/* Female Link */}
        <div className="dropdown">
          <Link to="/female">
            <button>
              Female
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
