import './Services.css';

const services = [
  { icon: '💊', title: 'Prescription Medicines', desc: 'We provide a complete stock of quality prescription medicines. Handled by expert pharmacists ensuring safe and exact dispensation for your health.', color: 'blue' },
  { icon: '🧬', title: 'Vitamins & Supplements', desc: 'Boost your immune system and overall wellness with our wide selection of dietary supplements, vitamins, and organic health products.', color: 'green' },
  { icon: '🩺', title: 'Health Advice', desc: 'Consult with our qualified professionals about your medication, side effects, and general health inquiries. We are here to guide you.', color: 'green' },
  { icon: '🚚', title: 'Home Delivery', desc: "Can't visit? We bring your essential medicines straight to your door quickly and safely, so you never miss a dose.", color: 'blue' },
];

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
          <h1 className="page-hero__title">Comprehensive Care<br/>for Your <span className="text-gradient">Wellbeing.</span></h1>
          <p className="page-hero__desc">
            Explore our wide range of pharmacy services designed to meet all your healthcare needs under one roof.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services-list" style={{position:'relative', zIndex:20, marginTop:'-4rem'}}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card glass-card">
                <div className={`service-card__icon icon-circle ${s.color}`} style={{width:72,height:72,borderRadius:18}}>
                  <span style={{fontSize:'2rem'}}>{s.icon}</span>
                </div>
                <div className="service-card__body">
                  <h2>{s.title}</h2>
                  <p>{s.desc}</p>
                  <button className="link-btn">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
