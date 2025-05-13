
import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";



function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <h2 className="logo">SOUSS PARK</h2>
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