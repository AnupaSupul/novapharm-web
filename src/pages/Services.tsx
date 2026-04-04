import { NavLink } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hero-services.png" alt="Our Services" />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__inner">
          <span className="section-label text-gradient">OUR SERVICES</span>
          <h1 className="page-hero__title">Here for your health,<br/><span className="text-gradient">every day.</span></h1>
          <p className="page-hero__desc">
            We provide a wide range of healthcare services to support you and your family's well-being.
          </p>
          {/* Trust badges in hero */}
          <div className="hero-trust-badges">
            <div className="hero-trust-badge">
              <div className="hero-trust-icon green-light">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <strong>Trusted Care</strong>
                <span>Always reliable</span>
              </div>
            </div>
            <div className="hero-trust-badge">
              <div className="hero-trust-icon green-light">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div>
                <strong>Expert Team</strong>
                <span>Always here to help</span>
              </div>
            </div>
            <div className="hero-trust-badge">
              <div className="hero-trust-icon blue-light">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <strong>Better Health</strong>
                <span>Our top priority</span>
              </div>
            </div>
          </div>
        </div>
        <div className="page-hero__wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C360,100 720,10 1080,60 C1260,85 1380,75 1440,60 L1440,100 L0,100 Z" fill="#1E88E5" opacity="0.12"/>
            <path d="M0,75 C360,100 720,30 1080,75 C1260,90 1380,85 1440,75 L1440,100 L0,100 Z" fill="var(--bg)"/>
          </svg>
        </div>
      </section>

      {/* Services Cards - 4 column vertical layout */}
      <section className="services-list">
        <div className="container">
          <div className="services-grid-4">
            <div className="service-vcard glass-card">
              <div className="service-vcard__icon blue-light">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>
              </div>
              <h3>Prescription<br/>Medicines</h3>
              <p>Genuine medicines with your doctor's prescription.</p>
              <button className="learn-more-btn">Learn More →</button>
            </div>

            <div className="service-vcard glass-card">
              <div className="service-vcard__icon green-light">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3>Vitamins &<br/>Supplements</h3>
              <p>Boost your health with premium supplements.</p>
              <button className="learn-more-btn">Learn More →</button>
            </div>

            <div className="service-vcard glass-card">
              <div className="service-vcard__icon blue-light">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3>Health<br/>Advice</h3>
              <p>Expert guidance for your every health concern.</p>
              <button className="learn-more-btn">Learn More →</button>
            </div>

            <div className="service-vcard glass-card">
              <div className="service-vcard__icon green-light">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5"><path d="M5 12h14"/><path d="M12 5v14"/><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h5a2 2 0 012 2v8a2 2 0 01-2 2H7"/></svg>
              </div>
              <h3>Home<br/>Delivery</h3>
              <p>Fast and reliable delivery to your doorstep.</p>
              <button className="learn-more-btn">Learn More →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust features bar */}
      <section className="services-trust section">
        <div className="container">
          <div className="services-trust__grid">
            <div className="services-trust__item">
              <div className="services-trust__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <strong>24/7 Support</strong>
                <span>We're always here for you, day or night.</span>
              </div>
            </div>
            <div className="services-trust__item">
              <div className="services-trust__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <strong>Safe & Secure</strong>
                <span>Your health and safety are our priority.</span>
              </div>
            </div>
            <div className="services-trust__item">
              <div className="services-trust__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              </div>
              <div>
                <strong>Personalized Care</strong>
                <span>Solutions tailored to your unique needs.</span>
              </div>
            </div>
            <div className="services-trust__item">
              <div className="services-trust__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <strong>Quality Guaranteed</strong>
                <span>We only offer trusted and certified medicines.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__card">
            <div className="services-cta__left">
              <div className="services-cta__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <h2>Your health is our priority.</h2>
                <p>Visit NovaPharm today for trusted care and better living.</p>
              </div>
            </div>
            <NavLink to="/contact" className="btn btn-white">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
