import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hero-about.png" alt="About NovaPharm" />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__inner">
          <span className="section-label text-gradient">ABOUT US</span>
          <h1 className="page-hero__title">Caring for you,<br/><span className="text-gradient">every step of the way.</span></h1>
          <p className="page-hero__desc">
            At NovaPharm, we believe that good health is the foundation of a happy life. We are committed to providing trusted medicines, expert advice, and wellness solutions that help you and your family live healthier, better lives.
          </p>
          <p className="page-hero__tagline">💚 Better health starts here. 💚💙</p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass-card">
              <div className="icon-circle green" style={{width:56,height:56}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
              <div>
                <h3 style={{color:'var(--secondary)'}}>Our Mission</h3>
                <p>To deliver quality healthcare products with honest care, improving lives every day.</p>
              </div>
            </div>

            <div className="mv-center glass-card">
              <img src="/logo.png" alt="NovaPharm" style={{height:48,marginBottom:'1rem'}} />
              <p>NovaPharm is your trusted neighborhood pharmacy, dedicated to providing reliable medicines, professional guidance, and compassionate care.</p>
            </div>

            <div className="mv-card glass-card">
              <div className="icon-circle blue" style={{width:56,height:56}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div>
                <h3 style={{color:'var(--primary)'}}>Our Vision</h3>
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
              { icon: '🛡️', title: 'Trusted Quality', desc: 'We source medicines only from reliable and certified brands.', color: 'blue' },
              { icon: '👨‍⚕️', title: 'Expert Pharmacists', desc: 'Our professionals provide the right advice for your health.', color: 'green' },
              { icon: '❤️', title: 'Customer Care', desc: 'Your health and satisfaction are our top priorities.', color: 'blue' },
              { icon: '⚡', title: 'Fast & Reliable', desc: 'Quick service and easy access to the medicines you need.', color: 'green' },
            ].map((item, i) => (
              <div key={i} className="feature-card glass-card">
                <div className={`feature-card__icon icon-circle ${item.color}`}>
                  <span style={{fontSize:'1.5rem'}}>{item.icon}</span>
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
            { num: '100+', label: 'Medicines Available', icon: '💊' },
            { num: '10+', label: 'Expert Pharmacists', icon: '👨‍⚕️' },
            { num: '5000+', label: 'Happy Customers', icon: '😊' },
            { num: '24/7', label: 'Care & Support', icon: '🕐' },
          ].map((s, i) => (
            <div key={i} className="about-stat-item">
              <span className="about-stat-icon">{s.icon}</span>
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
