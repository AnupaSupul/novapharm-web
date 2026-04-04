import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Filter } from 'lucide-react';
import './Products.css';

const productsData = [
  { id: 1, name: 'Omega-3 Fish Oil', category: 'Supplements', price: 'Rs. 2,490', img: 'product-1.png' },
  { id: 2, name: 'MultiVitamin & Minerals', category: 'Vitamins', price: 'Rs. 1,850', img: 'product-2.png' },
  { id: 3, name: 'Vitamin C 1000 mg', category: 'Vitamins', price: 'Rs. 950', img: 'product-3.png' },
  { id: 4, name: 'Cetirizine 10mg', category: 'Medicines', price: 'Rs. 180', img: 'product-4.png' },
  { id: 5, name: 'Hand Sanitizer', category: 'Personal Care', price: 'Rs. 1,250', img: 'product-5.png' },
  { id: 6, name: 'Digital Thermometer', category: 'Health Devices', price: 'Rs. 1,250', img: 'product-6.png' },
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const categories = ['All Products', 'Medicines', 'Vitamins', 'Supplements', 'Personal Care', 'Health Devices'];

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="page-hero subtle-3d" style={{backgroundImage: "url('/images/hero-products.jpg')"}}>
        <div className="container relative z-10">
          <span className="section-subtitle text-gradient">OUR PRODUCTS</span>
          <h1 className="page-title">Quality products for<br/>a healthier you.</h1>
          <p className="page-description">
            Explore our wide range of trusted medicines, supplements, and daily health essentials.
          </p>
          
          {/* Search Bar Inline */}
          <div className="search-bar-wrapper glass-card mt-4">
            <Search className="search-icon text-muted" size={20} />
            <input type="text" placeholder="Search products..." className="search-input" />
            <button className="btn btn-primary" style={{borderRadius: '8px'}}>Search</button>
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="section" style={{marginTop: '-2rem'}}>
        <div className="container">
          
          {/* Filters */}
          <div className="filters-container flex justify-between items-center" style={{marginBottom: '2rem'}}>
            <div className="category-pill-group flex gap-2" style={{overflowX: 'auto'}}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="btn btn-white" style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
              <Filter size={18} /> Sort & Filter
            </button>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {productsData.map(product => (
              <div key={product.id} className="product-card glass-card hover-lift">
                <button className="favorite-btn"><Heart size={20} /></button>
                <div className="product-image">
                  {/* Using placeholder until image is provided */}
                  <div className="product-placeholder">
                     {/* <img src={`/images/${product.img}`} alt={product.name} /> */}
                     <span style={{color: '#ccc'}}>Image</span>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price text-gradient">{product.price}</p>
                  <button className="btn btn-outline w-full mt-4" style={{marginTop: 'auto'}}>
                    <ShoppingBag size={16} style={{marginRight: '8px'}} /> Add to Inquiry
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

export default Products;
