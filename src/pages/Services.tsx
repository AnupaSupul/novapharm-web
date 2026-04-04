import { NavLink } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Prescription Filling', desc: 'Fast, accurate prescription services with expert guidance from our pharmacists.', icon: '💊' },
    { title: 'Health Consultations', desc: 'One-on-one professional advice for managing your medications and health conditions.', icon: '👨‍⚕️' },
    { title: 'Immunizations', desc: 'Stay protected with our walk-in vaccination services for flu, COVID-19, and travel.', icon: '💉' },
    { title: 'Over-the-Counter', desc: 'A wide range of OTC medicines, vitamins, and supplements.', icon: '🩹' },
    { title: 'Home Delivery', desc: 'Convenient doorstep delivery of your essential health products.', icon: '🚚' },
    { title: 'Wellness Checks', desc: 'Blood pressure and vital checks available at our pharmacy.', icon: '❤️' },
  ];

  return (
    <PageWrapper>
      <div className="services-page">
        {/* Hero - compact, NOT full viewport */}
        <section className="services-hero">
          <div className="services-hero__bg">
            <img src="/hero-services.png" alt="Our Services" />
          </div>
          <div className="services-hero__overlay"></div>
          <div className="services-hero__container services-hero__inner">
            <div className="services-hero__text">
              <span className="section-label text-gradient">OUR SERVICES</span>
              <h1 className="services-hero__title">Here for your health,<br/><span className="text-gradient">every day.</span></h1>
              <p className="services-hero__desc">
                We provide a wide range of healthcare services to support you and your family's well-being.
              </p>
              {/* Trust badges in hero */}
              <div className="hero-trust-badges">
                <div className="hero-trust-badge">
                  <div className="hero-trust-icon blue-light">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
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
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                  </div>
                  <div>
                    <strong>Better Health</strong>
                    <span>Our top priority</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-hero__wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 C360,110 720,10 1080,60 C1260,85 1380,75 1440,60 L1440,120 L0,120 Z" fill="#1E88E5" opacity="0.12"/>
              <path d="M0,80 C360,110 720,30 1080,80 C1260,95 1380,90 1440,80 L1440,120 L0,120 Z" fill="var(--bg)"/>
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
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <strong>24/7 Support</strong>
                  <span>We're always here for you,<br/>day or night.</span>
                </div>
              </div>
              <div className="services-trust__item">
                <div className="services-trust__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <div>
                  <strong>Safe & Secure</strong>
                  <span>Your health and safety<br/>are our priority.</span>
                </div>
              </div>
              <div className="services-trust__item">
                <div className="services-trust__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </div>
                <div>
                  <strong>Personalized Care</strong>
                  <span>Solutions tailored to your<br/>unique needs.</span>
                </div>
              </div>
              <div className="services-trust__item">
                <div className="services-trust__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
                <div>
                  <strong>Quality Guaranteed</strong>
                  <span>We only offer trusted and<br/>certified medicines.</span>
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
              <NavLink to="/contact" className="btn btn-white" style={{color: 'var(--primary)', fontWeight: 'bold'}}>
                Explore Services →
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Services;
