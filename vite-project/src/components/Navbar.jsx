
import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
// import logo from "../assets/Logo.jpg"



function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
            <div className="logo-pro-container">
      {/* Abstract Icon: Mountain + Path (Monoline) */}
      <svg
        className="logo-pro-icon"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mountain (Simplified) */}
        <path
          d="M20 60 L50 20 L80 60 Z"
          fill="none"
          stroke="#111827"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Path (Abstract Curve) */}
        <path
          d="M25 65 Q50 85 75 65"
          fill="none"
          stroke="#111827"
          strokeWidth="2"
          strokeDasharray="0 1 0"
        />
      </svg>

      {/* Text (Elegant Typography) */}
      <div className="logo-pro-text">
        <span className="logo-pro-name">SOUSS</span>
        <span className="logo-pro-tagline">PARK</span>
      </div>
    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/Services'>Services</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
            </Routes>
        </div>
    );
};

export default Navbar;