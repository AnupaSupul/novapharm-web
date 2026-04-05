import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const Contact = () => {
  return (
    <PageWrapper>
      <div className="contact-page desktop-view">
        {/* Hero - compact */}
        <section className="contact-hero">
          <div className="contact-hero__bg">
            <img src="/hero-contact.png" alt="Contact Us" />
          </div>
          <div className="contact-hero__overlay"></div>
          <div className="contact-hero__container contact-hero__inner">
            <div className="contact-hero__text">
              <ScrollReveal delay={0.1}>
                <span className="contact-badge-label">CONTACT US</span>
                <h1 className="contact-hero__title" style={{marginTop:'1.25rem'}}>We're here to<br/><span className="text-gradient">help you.</span></h1>
                <p className="contact-hero__desc">
                  Visit us, call us, or message us anytime.<br/>Your health matters to us.
                </p>
                <div className="contact-hero-badges">
                  <span className="contact-hero-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--secondary)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/><circle cx="12" cy="12" r="10" fill="var(--secondary)"/><path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/></svg>
                    Quick Response
                  </span>
                  <span className="contact-hero-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--secondary)"><circle cx="12" cy="12" r="10" fill="var(--secondary)"/><path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/></svg>
                    Friendly Support
                  </span>
                  <span className="contact-hero-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--secondary)"><circle cx="12" cy="12" r="10" fill="var(--secondary)"/><path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/></svg>
                    Always Here
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="contact-hero__wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 C360,110 720,10 1080,60 C1260,85 1380,75 1440,60 L1440,120 L0,120 Z" fill="#1E88E5" opacity="0.12"/>
              <path d="M0,80 C360,110 720,30 1080,80 C1260,95 1380,90 1440,80 L1440,120 L0,120 Z" fill="var(--bg)"/>
            </svg>
          </div>
        </section>

        {/* Info Cards */}
        <section className="contact-info-section">
          <div className="container">
            <ScrollReveal>
              <div className="contact-info-grid glass-card">
                {[
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>), title: 'Visit Us', lines: ['No. 45, Hospital Road,', 'Matara, Sri Lanka'], color: 'blue' },
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>), title: 'Call Us', lines: ['+94 70 430 9505', 'Chat via WhatsApp'], color: 'green' },
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>), title: 'WhatsApp', lines: ['+94 70 430 9505', 'Chat with us anytime'], color: 'blue' },
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>), title: 'Email Us', lines: ['supulanupa@gmail.com', 'info@novapharm.com'], color: 'green' },
                ].map((c, i) => (
                  <div key={i} className="cinfo-item">
                    <div className={`cinfo-item__icon ${c.color}-fill`}>
                      {c.icon}
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.lines[0]}<br/>{c.lines[1]}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Form + Map */}
        <section className="contact-main section">
          <div className="container contact-main__inner">
            <div className="contact-form-card glass-card">
              <ScrollReveal>
                <div className="contact-form-header">
                  <h2 style={{color:'var(--primary)'}}>Send Us a Message</h2>
                  <span className="leaf-icon">🌿</span>
                </div>
                <p className="contact-form__desc">Fill out the form below and we'll get back to you as soon as possible.</p>
                <form className="contact-form" onSubmit={e => e.preventDefault()}>
                  <div className="form-row">
                    <input type="text" placeholder="Your Name" className="form-input" required />
                    <input type="tel" placeholder="Phone Number" className="form-input" />
                  </div>
                  <div className="form-row">
                    <input type="email" placeholder="Email Address" className="form-input" required />
                    <input type="text" placeholder="Subject" className="form-input" />
                  </div>
                  <textarea placeholder="Your Message" className="form-input form-textarea" rows={4} required></textarea>
                  <button type="submit" className="btn contact-form__submit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </button>
                </form>
              </ScrollReveal>
            </div>

            <div className="contact-map-card glass-card">
              <ScrollReveal delay={0.2}>
                <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.75rem'}}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <h2 style={{margin:0}}>Find Us</h2>
                </div>
                <p style={{color:'var(--text-body)',marginBottom:'1.5rem',fontSize:'0.9rem'}}>We're easy to find. Come visit us!</p>
                <div className="map-visual">
                  <div className="map-pin">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" fill="var(--primary)"/></svg>
                  </div>
                  <div className="map-label glass-card" style={{boxShadow:'var(--shadow-lg)'}}>
                    <div style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
                      <div className="map-logo-circle">
                        <img src="/logo.png" alt="NovaPharm" style={{height:'18px'}} />
                      </div>
                      <div>
                        <strong style={{fontSize:'0.9rem',color:'var(--text-dark)'}}>NovaPharm Pharmacy</strong>
                        <p style={{fontSize:'0.75rem',color:'var(--text-muted)',margin:0}}>No. 45, Hospital Road, Matara,<br/>Sri Lanka</p>
                      </div>
                    </div>
                    <div className="map-label__links">
                      <a href="#">Get Directions</a>
                      <a href="#" className="link-btn">Get Directions →</a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="contact-cta">
          <div className="container">
            <ScrollReveal>
              <div className="contact-cta__inner">
                <div className="contact-cta__left">
                  <div className="cta-shield-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="8 12 11 15 16 9"/></svg>
                  </div>
                  <div>
                    <h2>Your health is our priority.</h2>
                    <p>We're always here to support you on your wellness journey.</p>
                  </div>
                </div>
                <div className="contact-cta__right">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div>
                    <strong>Open 24/7 for Your Care</strong>
                    <p>Day or night, we're here when you need us.</p>
                  </div>
                  <div className="cta-24">24/7<br/><small>CARE</small></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* =========================================
          MOBILE VIEW (Mockup Exact Match) 
      ========================================= */}
      <div className="contact-mobile mobile-view">
        <div className="cm-header-bg">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 L100,0 L100,80 C50,100 0,60 0,80 Z" fill="#eef2f6" />
          </svg>
        </div>
        
        <div className="container cm-content">
          <p className="cm-label">CONTACT US</p>
          <h1 className="cm-title">
            <span className="cm-text-blue">We're here to</span><br/>
            <span className="cm-text-green">help you.</span>
          </h1>
          
          <p className="cm-desc">
            Visit us, call us, or message us<br/>Your health matters<br/>to us.
          </p>
          
          <div className="cm-checks">
            <div className="cm-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Friendly Support</span>
            </div>
            <div className="cm-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Always Here</span>
            </div>
          </div>
          
          <div className="cm-info-list">
            <div className="cm-info-card">
              <div className="cm-info-icon" style={{background:'#3b82f6'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
              <div className="cm-info-text">
                <h3>Phone</h3>
                <p>+94 70 430 9505</p>
              </div>
            </div>
            
            <div className="cm-info-card">
              <div className="cm-info-icon" style={{background:'#10b981'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
              <div className="cm-info-text">
                <h3>Email</h3>
                <p>info@novapharm.com</p>
              </div>
            </div>
            
            <div className="cm-info-card">
              <div className="cm-info-icon" style={{background:'#3b82f6'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div className="cm-info-text">
                <h3>Address</h3>
                <p>No. 45, Hospital Road,<br/>Matara, Sri Lanka</p>
              </div>
            </div>
            
            <div className="cm-info-card">
              <div className="cm-info-icon" style={{background:'#10b981'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <div className="cm-info-text">
                <h3>Hours</h3>
                <p>Mon - Sat: 9:00 AM - 9:00 PM<br/>Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="cm-form">
            <h3>Send Us a Message</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message" rows={4}></textarea>
            <button>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </div>
          
        </div>
      </div>

    </PageWrapper>
  );
};

export default Contact;
