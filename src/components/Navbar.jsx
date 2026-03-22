import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-jp">種to菜園</span>
          <span className="brand-en en-text">Tane to Saien</span>
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <a href="https://tanetosaien.stores.jp" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Shop</a>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
          <a href="https://instagram.com/tanetosaien/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="social-icon">
            <Instagram size={20} />
          </a>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
