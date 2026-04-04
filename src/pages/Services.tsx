import React from 'react';
import { Pill, Activity, Stethoscope, Truck, ArrowRight } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero subtle-3d" style={{backgroundImage: "url('/images/hero-services.jpg')"}}>
        <div className="container relative z-10">
          <span className="section-subtitle text-gradient">OUR SERVICES</span>
          <h1 className="page-title">Comprehensive Care<br/>for Your Wellbeing.</h1>
          <p className="page-description">
            Explore our wide range of pharmacy services designed to meet all your healthcare needs under one roof.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list" style={{marginTop: '-4rem', paddingTop: '0', position: 'relative', zIndex: 20}}>
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            <div className="service-card glass-card hover-lift">
              <div className="service-icon-wrapper blue-gradient">
                <Pill size={36} color="white" />
              </div>
              <div className="service-content">
                <h2>Prescription Medicines</h2>
                <p>We provide a complete stock of quality prescription medicines. Handled by expert pharmacists ensuring safe and exact dispensation for your health.</p>
                <button className="btn-link">Learn More <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="service-card glass-card hover-lift">
              <div className="service-icon-wrapper green-gradient">
                <Activity size={36} color="white" />
              </div>
              <div className="service-content">
                <h2>Vitamins & Supplements</h2>
                <p>Boost your immune system and overall wellness with our wide selection of dietary supplements, vitamins, and organic health products.</p>
                <button className="btn-link">Learn More <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="service-card glass-card hover-lift">
              <div className="service-icon-wrapper green-gradient">
                <Stethoscope size={36} color="white" />
              </div>
              <div className="service-content">
                <h2>Health Advice</h2>
                <p>Consult with our qualified professionals about your medication, side effects, and general health inquiries. We are here to guide you.</p>
                <button className="btn-link">Learn More <ArrowRight size={16} /></button>
              </div>
            </div>

            <div className="service-card glass-card hover-lift">
              <div className="service-icon-wrapper blue-gradient">
                <Truck size={36} color="white" />
              </div>
              <div className="service-content">
                <h2>Home Delivery</h2>
                <p>Can't visit? We bring your essential medicines straight to your door quickly and safely, so you never miss a dose.</p>
                <button className="btn-link">Learn More <ArrowRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
