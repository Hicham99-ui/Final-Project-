import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About Us</Link></li>
                        <li><Link to="/Services">Our Services</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul className="contact-info">
                        <li><FaEnvelope /> contact@soussfoot.com</li>
                        <li>+212 6 34 51 33 66</li>
                        <li>Hay Tilila, Agadir, Morocco</li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                    <div className="newsletter">
                        <p>Subscribe to our newsletter</p>
                        <form>
                            <input type="email" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SOUSS FOOT. All rights reserved.</p>
                <div className="legal-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;