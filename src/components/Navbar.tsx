import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <img src="/logo.png" alt="NovaPharm" className="navbar__logo-img" />
        </NavLink>

        <ul className="navbar__links">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to="/products" className={({isActive}) => isActive ? 'active' : ''}>Products</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
        </ul>

        <div className="navbar__right">
          <a href="tel:+94704309505" className="navbar__phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+94 70 430 9505</span>
          </a>
          <a href="tel:+94704309505" className="btn btn-green navbar__cta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Us
          </a>
        </div>

        <button 
          className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`} 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          <div className="container">
            <div className="navbar__mobile-inner">
              <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
              <NavLink to="/services" onClick={() => setMobileOpen(false)}>Services</NavLink>
              <NavLink to="/products" onClick={() => setMobileOpen(false)}>Products</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
              <a href="tel:+94704309505" className="btn btn-green" style={{marginTop:'0.5rem',width:'100%'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'8px'}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
