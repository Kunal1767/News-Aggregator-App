import React, { useState } from 'react';
import { FaSearch, FaBars, FaUser, FaSync } from 'react-icons/fa';
import '../CSS/NewsHeader.css';

export const NewsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRefresh = () => {
    // You can add logic here to refresh news content
    // For now, we'll just log a message
    console.log('Refreshing news content...');
  };

  return (
    <header className="news-header">
      <div className="header-container">
        <div className="logo-section">
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FaBars size={24} />
          </button>
          <h1 className="logo">News Hub</h1>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#latest">Latest</a></li>
            <li><a href="#saved">Saved</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="refresh-button" 
            onClick={handleRefresh}
            aria-label="Refresh news"
          >
            <FaSync size={20} />
          </button>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search news..."
              className="search-input"
            />
            <button className="search-button">
              <FaSearch size={20} />
            </button>
          </div>
          <button className="profile-button">
            <FaUser size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};