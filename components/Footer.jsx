import React from "react";

import '../styles/home.css';


const Footer = ({id}) => {
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>At Dynamic Fitness, we believe that fitness is not just about lifting weights; it's a lifestyle. Our gym is designed to help you achieve your fitness goals.</p>
                </div>

                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#class">Class</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <p>Email: jenish@gmail.com & aman@gmail.com</p>
                    <p>Phone: +91 9327064660</p>
                    <p>Location: Atmiya University, Kalavad Road, Rajkot</p>
                </div>

                <div className="footer-social">
                    <h2>Follow Us</h2>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Dynamic Fitness. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;