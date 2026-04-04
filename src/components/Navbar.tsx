import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Menu, X, HeartPulse } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-container">
        <NavLink to="/" className="logo-link">
          <HeartPulse className="logo-icon" size={32} />
          <span className="logo-text">Nova<span className="text-secondary">Pharm</span></span>
        </NavLink>

        <div className="nav-links desktop-only">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>

        <div className="nav-actions desktop-only">
          <div className="phone-wrapper">
            <Phone size={18} className="phone-icon text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <button className="btn btn-primary hover-lift">Call Us</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-link">About</NavLink>
          <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Services</NavLink>
          <NavLink to="/products" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Products</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Contact</NavLink>
          <div className="mobile-actions">
            <button className="btn btn-primary w-full">Call Us</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
