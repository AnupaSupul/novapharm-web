import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero subtle-3d" style={{backgroundImage: "url('/images/hero-contact.jpg')"}}>
        <div className="container relative z-10">
          <span className="section-subtitle text-gradient">CONTACT US</span>
          <h1 className="page-title">We're here to<br/>help you.</h1>
          <p className="page-description">
            Visit us, call us, or message us anytime. Your health matters to us.
          </p>
          <div className="contact-badges">
            <span className="contact-badge"><span className="badge-dot green"></span> Quick Response</span>
            <span className="contact-badge"><span className="badge-dot blue"></span> Friendly Support</span>
          </div>
        </div>
      </section>

      <section className="section" style={{marginTop: '-6rem', paddingTop: 0, position: 'relative', zIndex: 20}}>
        <div className="container">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-6" style={{marginBottom: '4rem'}}>
            <div className="contact-info-card glass-card hover-lift">
              <div className="contact-icon-wrapper blue-gradient"><MapPin color="white" size={28} /></div>
              <h3>Visit Us</h3>
              <p>128 Health Avenue,<br/>Negombo, Sri Lanka</p>
            </div>
            <div className="contact-info-card glass-card hover-lift">
              <div className="contact-icon-wrapper green-gradient"><Phone color="white" size={28} /></div>
              <h3>Call Us</h3>
              <p>+94 123 456 789<br/>+94 11 234 5678</p>
            </div>
            <div className="contact-info-card glass-card hover-lift">
              <div className="contact-icon-wrapper blue-gradient"><Mail color="white" size={28} /></div>
              <h3>Email Us</h3>
              <p>info@novapharm.com<br/>support@novapharm.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="contact-form-wrapper glass-card">
              <h2 style={{marginBottom: '0.5rem'}}>Send Us a Message</h2>
              <p className="text-muted" style={{marginBottom: '2rem'}}>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full" style={{marginTop: '1rem'}}>
                  <Send size={18} style={{marginRight: '8px'}} /> Send Message
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="map-wrapper glass-card">
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                <MapPin className="text-primary" size={24} />
                <h2 style={{margin: 0}}>Find Us</h2>
              </div>
              <p className="text-muted" style={{marginBottom: '1.5rem'}}>We're easy to find. Come visit us!</p>
              
              <div className="map-placeholder">
                <div className="map-pin-pulse">
                  <MapPin color="white" size={32} />
                </div>
                <div className="map-info-box glass">
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <div className="map-icon-mini green-gradient"><MapPin size={20} color="white" /></div>
                    <div>
                      <h4 style={{margin: 0}}>NovaPharm Pharmacy</h4>
                      <p style={{margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)'}}>128 Health Avenue, Negombo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
