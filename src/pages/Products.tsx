import { useState } from 'react';
import './Products.css';

const productsData = [
  { id: 1, name: 'Omega-3 Fish Oil', category: 'Supplements', desc: 'Supports heart, brain & joint health.', price: 'Rs. 2,490', img: '/images/product-1.png' },
  { id: 2, name: 'Multivitamin & Minerals', category: 'Vitamins', desc: 'Daily nutrition for overall wellness.', price: 'Rs. 1,850', img: '/images/product-2.png' },
  { id: 3, name: 'Vitamin C 1000 mg', category: 'Vitamins', desc: 'Boosts immunity and fights fatigue.', price: 'Rs. 950', img: '/images/product-3.png' },
  { id: 4, name: 'Cetirizine 10mg', category: 'Medicines', desc: 'For allergy relief & hay fever.', price: 'Rs. 180', img: '/images/product-4.png' },
  { id: 5, name: 'Hand Sanitizer', category: 'Personal Care', desc: '99.9% germ protection with moisturizers.', price: 'Rs. 1,250', img: '/images/product-5.png' },
  { id: 6, name: 'Digital Thermometer', category: 'Health Devices', desc: 'Fast, accurate, and easy to use.', price: 'Rs. 1,250', img: '/images/product-6.png' },
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
    <div className="products">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hero-products.png" alt="Our Products" />
        </div>
        <div className="page-hero__overlay"></div>
        <div className="container page-hero__inner">
          <span className="section-label text-gradient">OUR PRODUCTS</span>
          <h1 className="page-hero__title">Quality products for<br/>a healthier you. <span>💚</span></h1>
          <p className="page-hero__desc">
            Explore our wide range of trusted medicines, supplements, and daily health essentials.
          </p>

          {/* Search */}
          <div className="products-search glass-card" style={{marginTop:'1.5rem'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="products-search__input"
            />
            <select className="products-search__select">
              <option>All Categories</option>
              {categories.slice(1).map(c => <option key={c}>{c}</option>)}
            </select>
            <select className="products-search__select">
              <option>All Brands</option>
            </select>
          </div>
        </div>
      </section>

      <section className="products-main section" style={{paddingTop:'2rem'}}>
        <div className="container">
          {/* Category Pills */}
          <div className="category-pills">
            {categories.map(c => (
              <button key={c} className={`pill ${active === c ? 'pill--active' : ''}`} onClick={() => setActive(c)}>
                {c}
              </button>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="trust-badges glass-card" style={{marginBottom:'3rem'}}>
            {[
              { icon: '🛡️', title: 'Trusted Quality', desc: 'Carefully selected products' },
              { icon: '👨‍⚕️', title: 'Expert Approved', desc: 'Recommended by professionals' },
              { icon: '🌿', title: 'Natural & Safe', desc: 'Goodness you can trust' },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Quick and reliable service' },
            ].map((b, i) => (
              <div key={i} className="trust-badge">
                <span className="trust-badge__icon">{b.icon}</span>
                <div>
                  <strong>{b.title}</strong>
                  <span>{b.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Product Header */}
          <div className="products-header">
            <div>
              <span className="section-label text-gradient">BROWSE OUR PRODUCTS</span>
              <h2 className="section-title">Top Categories, Top Brands, <span className="text-gradient">Trusted Care.</span></h2>
            </div>
            <button className="btn btn-outline">View All Products →</button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card glass-card">
                <button className="product-card__fav" aria-label="Favorite">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </button>
                <div className="product-card__img">
                  <div className="product-card__placeholder">{p.name.charAt(0)}</div>
                </div>
                <span className="product-card__cat">{p.category}</span>
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <p className="product-card__price text-gradient">{p.price}</p>
                <button className="btn btn-outline product-card__btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Add to Inquire →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="products-banner">
        <div className="container products-banner__inner">
          <div className="products-banner__item products-banner__item--main">
            <span style={{fontSize:'2rem'}}>🔍</span>
            <div>
              <strong>Can't find what you're looking for?</strong>
              <p>Contact us on WhatsApp and our team will help you.</p>
            </div>
          </div>
          <div className="products-banner__item">
            <span style={{fontSize:'1.5rem'}}>💬</span>
            <div>
              <strong>WhatsApp Support</strong>
              <p>Quick product help</p>
            </div>
          </div>
          <div className="products-banner__item">
            <span style={{fontSize:'1.5rem'}}>✅</span>
            <div>
              <strong>Genuine Products</strong>
              <p>100% authentic</p>
            </div>
          </div>
          <div className="products-banner__item">
            <span style={{fontSize:'1.5rem'}}>👨‍⚕️</span>
            <div>
              <strong>Pharmacy Experts</strong>
              <p>Always here for you</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
