import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-link" style={{marginBottom: '1rem'}}>
              <HeartPulse className="logo-icon" size={32} />
              <span className="logo-text">Nova<span className="text-secondary">Pharm</span></span>
            </div>
            <p className="footer-text">
              Your trusted neighborhood pharmacy, providing reliable medicines, professional guidance, and compassionate care to help you live healthier, better lives.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/products">Shop Products</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">Prescription Refills</a></li>
              <li><a href="#">Health Consultations</a></li>
              <li><a href="#">Vitamins & Supplements</a></li>
              <li><a href="#">Home Delivery</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>128 Health Avenue,<br/>Negombo, Sri Lanka</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+94 123 456 789</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>support@novapharm.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NovaPharm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
