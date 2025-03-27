import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope, 
  FaNewspaper,
  FaQuestionCircle,
  FaShieldAlt,
  FaInfoCircle
} from 'react-icons/fa';
import '../CSS/NewsFooter.css';

export const NewsFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="news-footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <div className="footer-logo">
            <FaNewspaper className="logo-icon" />
            <h2>News Hub</h2>
          </div>
          <p>Your trusted source for global news and insights.</p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
            <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#latest">Latest News</a></li>
            <li><a href="#saved">Saved Articles</a></li>
          </ul>
        </div>

        <div className="footer-section legal-links">
          <h3>Legal</h3>
          <ul>
            <li>
              <FaShieldAlt />
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <FaInfoCircle />
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <FaQuestionCircle />
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest news</p>
          <div className="newsletter-signup">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input" 
            />
            <button className="signup-button">
              <FaEnvelope />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} News Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};