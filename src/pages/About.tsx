import React from 'react';
import { Target, Eye, Shield, Users, Clock, ThumbsUp } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero subtle-3d" style={{backgroundImage: "url('/images/hero-about.jpg')"}}>
        <div className="container relative z-10">
          <span className="section-subtitle text-gradient">ABOUT US</span>
          <h1 className="page-title">Caring for you,<br/>every step of the way.</h1>
          <p className="page-description">
            At NovaPharm, we believe that good health is the foundation of a happy life. We are committed to providing trusted medicines, expert advice, and wellness solutions that help you and your family live healthier, better lives.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mission-vision section" style={{marginTop: '-6rem', paddingTop: 0}}>
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass-card hover-lift">
              <div className="mv-icon green-gradient"><Target color="white" size={32} /></div>
              <div>
                <h3 className="text-secondary">Our Mission</h3>
                <p>To deliver quality healthcare products with honest care, improving lives every day.</p>
              </div>
            </div>
            <div className="mv-card-center glass-card subtle-3d">
              <h2 className="text-gradient" style={{fontSize: '2rem', marginBottom: '1rem'}}>NovaPharm</h2>
              <p>NovaPharm is your trusted neighborhood pharmacy, dedicated to providing reliable medicines, professional guidance, and compassionate care.</p>
            </div>
            <div className="mv-card glass-card hover-lift">
              <div className="mv-icon blue-gradient"><Eye color="white" size={32} /></div>
              <div>
                <h3 className="text-primary">Our Vision</h3>
                <p>To be your most trusted health partner in the community, known for care, quality, and convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us section" style={{background: 'linear-gradient(to bottom, #ffffff, #f8fafc)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <span className="section-subtitle text-gradient">WHY CHOOSE NOVAPHARM?</span>
            <h2 className="section-title">Trusted Quality & Care</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="feature-card glass-card hover-lift">
              <Shield size={40} className="text-primary" style={{marginBottom: '1rem'}} />
              <h3>Trusted Quality</h3>
              <p>We source medicines only from reliable and certified brands.</p>
            </div>
            <div className="feature-card glass-card hover-lift">
              <Users size={40} className="text-secondary" style={{marginBottom: '1rem'}} />
              <h3>Expert Pharmacists</h3>
              <p>Our professionals provide the right advice for your health.</p>
            </div>
            <div className="feature-card glass-card hover-lift">
              <ThumbsUp size={40} className="text-primary" style={{marginBottom: '1rem'}} />
              <h3>Customer Care</h3>
              <p>Your health and satisfaction are our top priorities.</p>
            </div>
            <div className="feature-card glass-card hover-lift">
              <Clock size={40} className="text-secondary" style={{marginBottom: '1rem'}} />
              <h3>Fast & Reliable</h3>
              <p>Quick service and easy access to the medicines you need.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
