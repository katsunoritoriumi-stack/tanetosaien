import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">種to菜園</h2>
          <p className="en-text">Tane to Saien</p>
          <p className="footer-desc mt-4">
            八ヶ岳山麓の自然派野菜<br />
            シードマイスターの安心野菜達
          </p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4 className="en-text">Menu</h4>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://tanetosaien.stores.jp" target="_blank" rel="noopener noreferrer">Shop</a>
            <a href="https://instagram.com/tanetosaien/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2">
              <Instagram size={18} /> Instagram
            </a>
          </div>
          
          <div className="link-group">
            <h4 className="en-text">Farm</h4>
            <p>〒391-0111</p>
            <p>長野県諏訪郡原村18082-8</p>
            <p>担当: 小林</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="en-text">&copy; {new Date().getFullYear()} Tane to Saien. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
