import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero - compact, NOT full viewport */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <img src="/hero-about.png" alt="About NovaPharm" />
        </div>
        <div className="about-hero__overlay"></div>
        <div className="container about-hero__inner">
          <div className="about-hero__text">
            <span className="section-label text-gradient">ABOUT US</span>
            <h1 className="about-hero__title">Caring for you,<br/><span className="text-gradient">every step of the way.</span></h1>
            <p className="about-hero__desc">
              At NovaPharm, we believe that good health is the foundation of a happy life. We are committed to providing trusted medicines, expert advice, and wellness solutions that help you and your family live healthier, better lives.
            </p>
            <p className="about-hero__tagline">💚 Better health starts here. 💚💙</p>
          </div>
        </div>
        <div className="about-hero__wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,60 C360,110 720,10 1080,60 C1260,85 1380,75 1440,60 L1440,120 L0,120 Z" fill="#1E88E5" opacity="0.12"/>
            <path d="M0,80 C360,110 720,30 1080,80 C1260,95 1380,90 1440,80 L1440,120 L0,120 Z" fill="var(--bg)"/>
          </svg>
        </div>
      </section>

      {/* Mission / Vision - overlapping wave */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass-card">
              <div className="mv-card__icon green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <h3 className="mv-title green">Our Mission</h3>
                <p>To deliver quality healthcare products with honest care, improving lives every day.</p>
              </div>
            </div>

            <div className="mv-center glass-card">
              <img src="/logo.png" alt="NovaPharm" className="mv-center__logo" />
              <p>NovaPharm is your trusted neighborhood pharmacy, dedicated to providing reliable medicines, professional guidance, and compassionate care.</p>
            </div>

            <div className="mv-card glass-card">
              <div className="mv-card__icon blue">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <h3 className="mv-title blue">Our Vision</h3>
                <p>To be your most trusted health partner in the community, known for care, quality, and convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section" style={{background:'linear-gradient(to bottom, #fff, var(--bg))'}}>
        <div className="container">
          <div className="why-us__header">
            <div className="why-us__line"></div>
            <h2 className="why-us__title">WHY CHOOSE <span className="text-gradient">NOVAPHARM?</span></h2>
            <div className="why-us__line"></div>
          </div>
          <div className="why-us__grid">
            {[
              { title: 'Trusted Quality', desc: 'We source medicines only from reliable and certified brands.', color: 'blue',
                icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>) },
              { title: 'Expert Pharmacists', desc: 'Our professionals provide the right advice for your health.', color: 'green',
                icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>) },
              { title: 'Customer Care', desc: 'Your health and satisfaction are our top priorities.', color: 'blue',
                icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
              { title: 'Fast & Reliable', desc: 'Quick service and easy access to the medicines you need.', color: 'green',
                icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 012 2v6a2 2 0 01-2 2h-3"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>) },
            ].map((item, i) => (
              <div key={i} className="wcu-card glass-card">
                <div className={`wcu-card__icon ${item.color}-light`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="about-stats-banner">
        <div className="container about-stats-banner__inner">
          {[
            { num: '100+', label: 'Medicines Available',
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>) },
            { num: '10+', label: 'Expert Pharmacists',
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>) },
            { num: '5000+', label: 'Happy Customers',
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>) },
            { num: '24/7', label: 'Care & Support',
              icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>) },
          ].map((s, i) => (
            <div key={i} className="about-stat-item">
              <div className="about-stat-icon-circle">{s.icon}</div>
              <div>
                <h3>{s.num}</h3>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
