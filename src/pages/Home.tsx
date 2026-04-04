import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, ShieldCheck, UserCheck, HeartPulse, Truck, ArrowRight } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section subtle-3d">
        <div className="container hero-container relative z-10">
          <div className="hero-content">
            <div className="hero-badge glass">
              <HeartPulse size={16} className="text-secondary" />
              <span>Your Health Partner</span>
            </div>
            <h1 className="hero-title">
              Better health <br />
              <span className="text-gradient">starts here.</span>
            </h1>
            <p className="hero-subtitle">
              Trusted medicines, expert care, and total wellness solutions for you and your family.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary lg-btn">
                <Phone size={18} /> Call Now
              </button>
              <button className="btn btn-whatsapp lg-btn glass">
                <MessageCircle size={18} /> WhatsApp
              </button>
              <button className="btn btn-location lg-btn glass">
                <MapPin size={18} /> Visit Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card glass-card hover-lift">
              <div className="feature-icon-wrapper blue-gradient">
                <ShieldCheck size={32} color="white" />
              </div>
              <h3>Trusted Medicines</h3>
              <p>Quality medicines from reliable brands.</p>
            </div>
            <div className="feature-card glass-card hover-lift">
              <div className="feature-icon-wrapper green-gradient">
                <UserCheck size={32} color="white" />
              </div>
              <h3>Expert Pharmacists</h3>
              <p>Professional advice for your better health.</p>
            </div>
            <div className="feature-card glass-card hover-lift">
              <div className="feature-icon-wrapper blue-gradient">
                <HeartPulse size={32} color="white" />
              </div>
              <h3>Wellness Products</h3>
              <p>Supplements & essentials for a healthy life.</p>
            </div>
            <div className="feature-card glass-card hover-lift">
              <div className="feature-icon-wrapper green-gradient">
                <Truck size={32} color="white" />
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick delivery right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle text-gradient">ABOUT NOVAPHARM</span>
              <h2 className="section-title">Caring for you, every step of the way.</h2>
              <p className="section-description">
                NovaPharm is committed to providing trusted medicines, expert advice, and wellness solutions to help you live a healthier, happier life. We believe in high-quality healthcare that is accessible to everyone in our community.
              </p>
              <NavLink to="/about" className="btn btn-primary hover-lift mt-4">
                Learn More <ArrowRight size={18} style={{marginLeft: '8px'}} />
              </NavLink>
            </div>
            <div className="about-stats">
              <div className="stat-card glass-card hover-lift">
                <h3 className="stat-number text-primary">100+</h3>
                <p className="stat-label">Medicines Available</p>
              </div>
              <div className="stat-card glass-card hover-lift">
                <h3 className="stat-number text-secondary">10+</h3>
                <p className="stat-label">Expert Pharmacists</p>
              </div>
              <div className="stat-card glass-card hover-lift">
                <h3 className="stat-number text-gradient">5000+</h3>
                <p className="stat-label">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card subtle-3d">
            <div className="cta-content">
              <h2>Your health is our priority.</h2>
              <p>Visit NovaPharm today for trusted care and better living.</p>
            </div>
            <NavLink to="/services" className="btn btn-white hover-lift">
              Explore Services <ArrowRight size={18} style={{marginLeft: '8px'}} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
