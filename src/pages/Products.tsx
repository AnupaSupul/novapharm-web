import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import ScrollReveal from '../components/ScrollReveal';
import './Products.css';

const productsData = [
  { id: 1, name: 'Omega-3 Fish Oil', category: 'Supplements', desc: 'Supports heart, brain & joint health.', price: 'Rs. 2,490', letter: 'Ω' },
  { id: 2, name: 'Multivitamin & Minerals', category: 'Vitamins', desc: 'Daily nutrition for overall wellness.', price: 'Rs. 1,850', letter: 'M' },
  { id: 3, name: 'Vitamin C 1000 mg', category: 'Vitamins', desc: 'Boosts immunity and fights fatigue.', price: 'Rs. 950', letter: 'C' },
  { id: 4, name: 'Cetirizine 10mg', category: 'Medicines', desc: 'For allergy relief & hay fever.', price: 'Rs. 180', letter: 'Ct' },
  { id: 5, name: 'Hand Sanitizer', category: 'Personal Care', desc: '99.9% germ protection with moisturizers.', price: 'Rs. 1,250', letter: 'H' },
  { id: 6, name: 'Digital Thermometer', category: 'Health Devices', desc: 'Fast, accurate, and easy to use.', price: 'Rs. 1,250', letter: 'T' },
];

const categories = ['All Products', 'Medicines', 'Vitamins', 'Supplements', 'Personal Care', 'Health Devices'];

const Products = () => {
  const [active, setActive] = useState('All Products');
  const [search, setSearch] = useState('');

  const filtered = productsData.filter(p => {
    const matchCat = active === 'All Products' || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <PageWrapper>
      <div className="products-page">
        {/* Hero - shorter, compact */}
        <section className="products-hero">
          <div className="products-hero__bg">
            <img src="/hero-products.png" alt="Our Products" />
          </div>
          <div className="products-hero__overlay"></div>
          <div className="products-hero__container products-hero__inner">
            <div className="products-hero__text">
              <ScrollReveal delay={0.1}>
                <span className="section-label text-gradient">OUR PRODUCTS</span>
                <h1 className="products-hero__title">Quality products for<br/>a healthier you. <span>💚</span></h1>
                <p className="products-hero__desc">
                  Explore our wide range of trusted medicines, supplements, and daily health essentials.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="products-search">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} className="products-search__input" />
                  <select className="products-search__select"><option>All Categories</option>{categories.slice(1).map(c => <option key={c}>{c}</option>)}</select>
                  <select className="products-search__select"><option>All Brands</option></select>
                </div>
              </ScrollReveal>
            </div>
          </div>
          <div className="products-hero__wave">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,60 C360,100 720,10 1080,60 C1260,85 1380,75 1440,60 L1440,100 L0,100 Z" fill="#1E88E5" opacity="0.12"/>
              <path d="M0,75 C360,100 720,30 1080,75 C1260,90 1380,85 1440,75 L1440,100 L0,100 Z" fill="var(--bg)"/>
            </svg>
          </div>
        </section>

        {/* Main content below hero */}
        <section className="products-main">
          <div className="container">
            {/* Category Pills */}
            <ScrollReveal>
              <div className="category-pills">
                {categories.map(c => (
                  <button key={c} className={`pill ${active === c ? 'pill--active' : ''}`} onClick={() => setActive(c)}>{c}</button>
                ))}
              </div>
            </ScrollReveal>

            {/* Trust Badges */}
            <ScrollReveal delay={0.2}>
              <div className="trust-badges glass-card">
                {[
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>), title: 'Trusted Quality', desc: 'Carefully selected products' },
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>), title: 'Expert Approved', desc: 'Recommended by professionals' },
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>), title: 'Natural & Safe', desc: 'Goodness you can trust' },
                  { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 012 2v6a2 2 0 01-2 2h-3"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>), title: 'Fast Delivery', desc: 'Quick and reliable service' },
                ].map((b, i) => (
                  <div key={i} className="trust-badge">
                    <div className="trust-badge__icon-circle">{b.icon}</div>
                    <div>
                      <strong>{b.title}</strong>
                      <span>{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Products Header */}
            <div className="products-header">
              <ScrollReveal>
                <div>
                  <span className="section-label text-gradient">BROWSE OUR PRODUCTS</span>
                  <h2 className="section-title" style={{fontSize:'2rem'}}>Top Categories, Top Brands, <span className="text-gradient">Trusted Care.</span></h2>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <button className="btn btn-outline">View All Products →</button>
              </ScrollReveal>
            </div>

            {/* Products Grid - 6 columns */}
            <div className="products-grid-6">
              {filtered.map((p, idx) => (
                <ScrollReveal key={p.id} delay={idx * 0.05}>
                  <div className="product-card glass-card">
                    <button className="product-card__fav" aria-label="Favorite">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                    </button>
                    <div className="product-card__img">
                      <div className="product-card__placeholder">{p.letter}</div>
                    </div>
                    <span className="product-card__cat">{p.category}</span>
                    <h3 className="product-card__name">{p.name}</h3>
                    <p className="product-card__desc">{p.desc}</p>
                    <p className="product-card__price text-gradient">{p.price}</p>
                    <button className="product-card__btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                      Add to Inquire →
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="products-banner">
          <div className="container products-banner__inner">
            <ScrollReveal>
              <div className="products-banner__item products-banner__item--main">
                <div style={{display:'flex', alignItems:'center', gap:'1.5rem'}}>
                  <div className="products-banner__icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <div>
                    <strong>Can't find what you're looking for?</strong>
                    <p>Contact us on WhatsApp and our team will help you.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            {[
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>), title: 'WhatsApp Support', desc: 'Quick product help' },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>), title: 'Genuine Products', desc: '100% authentic' },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>), title: 'Pharmacy Experts', desc: 'Always here for you' },
            ].map((b, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <div className="products-banner__item">
                  <div className="products-banner__icon-sm">
                    {b.icon}
                  </div>
                  <div>
                    <strong>{b.title}</strong>
                    <p>{b.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Products;
