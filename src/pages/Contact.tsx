import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hero-contact.png" alt="Contact Us" />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__inner">
          <span className="section-label" style={{background:'white',display:'inline-block',padding:'0.25rem 0.75rem',borderRadius:'var(--radius-full)',color:'var(--primary)',fontSize:'0.75rem'}}>CONTACT US</span>
          <h1 className="page-hero__title" style={{marginTop:'0.75rem'}}>We're here to<br/><span className="text-gradient">help you.</span></h1>
          <p className="page-hero__desc">
            Visit us, call us, or message us anytime.<br/>Your health matters to us.
          </p>
          <div className="contact-hero-badges">
            <span className="contact-hero-badge"><span className="cbadge-dot" style={{background:'var(--secondary)'}}></span> Quick Response</span>
            <span className="contact-hero-badge"><span className="cbadge-dot" style={{background:'var(--secondary)'}}></span> Friendly Support</span>
            <span className="contact-hero-badge"><span className="cbadge-dot" style={{background:'var(--secondary)'}}></span> Always Here</span>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="contact-info-section" style={{position:'relative',zIndex:20,marginTop:'-4rem'}}>
        <div className="container">
          <div className="contact-info-grid">
            {[
              { icon: '📍', title: 'Visit Us', lines: ['128 Health Avenue,', 'Negombo, Sri Lanka'], color: 'blue' },
              { icon: '📞', title: 'Call Us', lines: ['+94 123 456 789', '+94 11 234 5678'], color: 'green' },
              { icon: '💬', title: 'WhatsApp', lines: ['+94 123 456 789', 'Chat with us anytime'], color: 'blue' },
              { icon: '✉️', title: 'Email Us', lines: ['info@novapharm.com', 'support@novapharm.com'], color: 'green' },
            ].map((c, i) => (
              <div key={i} className="contact-info-card glass-card">
                <div className={`icon-circle ${c.color}`} style={{width:56,height:56,marginBottom:'1rem'}}>
                  <span style={{fontSize:'1.5rem'}}>{c.icon}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.lines[0]}<br/>{c.lines[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="contact-main section">
        <div className="container contact-main__inner">
          {/* Form */}
          <div className="contact-form-card glass-card">
            <h2>Send Us a Message</h2>
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
              <textarea placeholder="Your Message" className="form-input form-textarea" rows={5} required></textarea>
              <button type="submit" className="btn btn-primary contact-form__submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="contact-map-card glass-card">
            <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.75rem'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <h2 style={{margin:0}}>Find Us</h2>
            </div>
            <p style={{color:'var(--text-body)',marginBottom:'1rem',fontSize:'0.9rem'}}>We're easy to find. Come visit us!</p>
            
            <div className="map-visual">
              <div className="map-pin">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3" fill="var(--primary)"/></svg>
              </div>
              <div className="map-label glass-card" style={{boxShadow:'var(--shadow-lg)'}}>
                <div style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
                  <div className="icon-circle green" style={{width:40,height:40,borderRadius:10}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <strong style={{fontSize:'0.9rem'}}>NovaPharm Pharmacy</strong>
                    <p style={{fontSize:'0.75rem',color:'var(--text-muted)',margin:0}}>128 Health Avenue, Negombo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta">
        <div className="container contact-cta__inner">
          <div className="contact-cta__left">
            <div className="icon-circle blue" style={{width:56,height:56}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <h3>Your health is our priority.</h3>
              <p>We're always here to support you on your wellness journey.</p>
            </div>
          </div>
          <div className="contact-cta__right">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <strong>Open 24/7 for Your Care</strong>
              <p>Day or night, we're here when you need us.</p>
            </div>
            <div className="cta-24">24/7<br/><small>CARE</small></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
