import { NavLink } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const Home = () => {
  return (
    <PageWrapper>
      <div className="home desktop-view">
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero__bg">
            <img src="/hero-home.png" alt="NovaPharm Pharmacy" />
          </div>
          <div className="hero__overlay"></div>
          <div className="home-hero__container hero__inner">
            <div className="hero__content">
              <ScrollReveal delay={0.1}>
                <div className="hero__badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  <span>YOUR HEALTH PARTNER</span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="hero__title">
                  Better health<br/>
                  <span className="text-gradient">starts here.</span>
                  <span className="hero__emoji">💚💙</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="hero__desc">
                  Trusted medicines, expert care, and total wellness solutions for you and your family.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="hero__buttons">
                  <a href="tel:+94704309505" className="btn btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Call Now
                  </a>
                  <a href="#" className="btn btn-glass" style={{color:'#27ae60'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#2ECC71"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a href="#" className="btn btn-glass" style={{color:'#1565C0'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    Visit Us
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="hero__info-bar">
            <div className="container hero__info-inner">
              <ScrollReveal delay={0.5}>
                <div className="hero__info-item">
                  <div className="info-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p>Give us a call</p>
                    <strong>+94 70 430 9505</strong>
                    <span>Call us anytime</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.6}>
                <div className="hero__info-item">
                  <div className="info-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p>Visit us at</p>
                    <strong>Hospital Road, Matara</strong>
                    <span>Find us easily</span>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.7}>
                <div className="hero__info-item">
                  <div className="info-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <strong>Open 24/7</strong>
                    <span>We're always here</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="hero__wave">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
              <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z" fill="#1E88E5" opacity="0.15"/>
              <path d="M0,80 C360,120 720,20 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" fill="#1E88E5" opacity="0.3"/>
              <path d="M0,100 C360,120 720,60 1080,100 C1260,110 1380,105 1440,100 L1440,120 L0,120 Z" fill="var(--bg)"/>
            </svg>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="features">
          <div className="container">
            <div className="features__grid">
              {[
                { icon: '🛡️', title: 'Trusted Medicines', desc: 'Quality medicines from reliable brands.', color: 'blue' },
                { icon: '👨‍⚕️', title: 'Expert Pharmacists', desc: 'Professional advice for your better health.', color: 'green' },
                { icon: '💊', title: 'Wellness Products', desc: 'Supplements & essentials for a healthy life.', color: 'blue' },
                { icon: '🚚', title: 'Fast & Reliable', desc: 'Quick delivery to your doorstep.', color: 'green' },
              ].map((f, i) => (
                <ScrollReveal delay={i * 0.1} key={i}>
                  <div className="feature-card glass-card">
                    <div className={`feature-card__icon icon-circle ${f.color}`}>
                      <span style={{fontSize:'1.5rem'}}>{f.icon}</span>
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT PREVIEW ===== */}
        <section className="about-preview section">
          <div className="container about-preview__inner">
            <ScrollReveal>
              <div className="about-preview__text">
                <span className="section-label text-gradient">ABOUT NOVAPHARM</span>
                <h2 className="section-title">Caring for you,<br/><span className="text-gradient">every step of the way.</span></h2>
                <p className="section-desc">
                  NovaPharm is committed to providing trusted medicines, expert advice, and wellness solutions to help you live a healthier, happier life.
                </p>
                <NavLink to="/about" className="btn btn-primary" style={{marginTop: '1.5rem'}}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </NavLink>
              </div>
            </ScrollReveal>
            <div className="about-preview__right">
              <div className="about-preview__stats">
                <ScrollReveal delay={0.1}>
                  <div className="stat-card glass-card">
                    <h3 className="stat-card__number" style={{color:'var(--primary)'}}>100+</h3>
                    <p>Medicines<br/>Available</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="stat-card glass-card">
                    <h3 className="stat-card__number" style={{color:'var(--secondary)'}}>10+</h3>
                    <p>Expert<br/>Pharmacists</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <div className="stat-card glass-card stat-card--wide">
                    <h3 className="stat-card__number text-gradient">5000+</h3>
                    <p>Happy<br/>Customers</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="home-cta">
          <div className="container">
            <ScrollReveal>
              <div className="home-cta__card">
                <div className="home-cta__left">
                  <div className="home-cta__icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div className="home-cta__text">
                    <h2>Your health is our priority.</h2>
                    <p>Visit NovaPharm today for trusted care and better living.</p>
                  </div>
                </div>
                <NavLink to="/services" className="btn btn-white">
                  Explore Services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </NavLink>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* =========================================
          MOBILE VIEW (Mockup Exact Match) 
      ========================================= */}
      <div className="home-mobile mobile-view">
        <div className="hm-hero">
          <div className="hm-hero__bg"></div>
          
          <div className="container hm-hero__content">
            <div className="hm-hero__badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span>YOUR HEALTH PARTNER</span>
            </div>
            
            <h1 className="hm-hero__title">
              Better health<br/>
              <span className="hm-text-blue">starts here.</span>
            </h1>
            
            <div className="hm-hero__emojis">
              <span>💚</span><span>💙</span>
            </div>
            
            <p className="hm-hero__desc">
              Trusted medicines, expert care, and total<br/>wellness solutions for you and your family.
            </p>
            
            <div className="hm-hero__buttons">
              <a href="tel:+94704309505" className="hm-btn hm-btn--solid-green">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Now
              </a>
              <a href="#" className="hm-btn hm-btn--outline-green">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#2ECC71"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a href="#" className="hm-btn hm-btn--outline-blue">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Visit Us
              </a>
            </div>
            
            <div className="hm-features">
              <div className="hm-feature">
                <div className="hm-feature__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <p>Trusted<br/>Medicines</p>
              </div>
              <div className="hm-feature">
                <div className="hm-feature__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <p>Expert<br/>Pharmacists</p>
              </div>
              <div className="hm-feature">
                <div className="hm-feature__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 12h-4"/><path d="M12 8v8"/></svg></div>
                <p>Wellness<br/>Products</p>
              </div>
              <div className="hm-feature">
                <div className="hm-feature__icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E88E5" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div>
                <p>Fast<br/>Delivery</p>
              </div>
            </div>
            
            <div className="hm-about">
              <h3>About NovaPharm</h3>
              <p>We are committed to your well-being with quality products and caring service.</p>
              
              <div className="hm-stats">
                <div className="hm-stat">
                  <h4>100+</h4>
                  <p>Medicines</p>
                </div>
                <div className="hm-stat">
                  <h4>10+</h4>
                  <p>Experts</p>
                </div>
                <div className="hm-stat">
                  <h4>5000+</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            
            <div className="hm-cta">
              <div className="hm-cta__content">
                <h3>Your health is<br/>our priority</h3>
                <p>We're here to care for you and<br/>your family.</p>
              </div>
              <div className="hm-cta__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path><path stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h2l1.5-3 2.5 6 1.5-3h2"/></svg>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
