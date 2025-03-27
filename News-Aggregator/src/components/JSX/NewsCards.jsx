import React from 'react';
import { 
  FaClock, 
  FaRegBookmark, 
  FaShareAlt, 
  FaRegNewspaper 
} from 'react-icons/fa';
import '../CSS/NewsHome.css';


const newsData = [
  {
    id: 1,
    title: "Global Climate Summit Addresses Urgent Environmental Challenges",
    excerpt: "World leaders gather to discuss critical strategies for combating climate change and reducing carbon emissions.",
    author: "Emma Rodriguez",
    date: "March 25, 2024",
    category: "Environment",
    imageUrl: "/api/placeholder/400/250",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Breakthrough in Artificial Intelligence Promises Revolutionary Applications",
    excerpt: "Researchers unveil groundbreaking AI technology that could transform multiple industries, from healthcare to transportation.",
    author: "Dr. Alex Chen",
    date: "March 24, 2024",
    category: "Technology",
    imageUrl: "/api/placeholder/400/250",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Economic Indicators Point to Potential Global Recovery",
    excerpt: "Latest economic reports suggest a positive trend in global markets, with emerging economies showing significant growth.",
    author: "Michael Thompson",
    date: "March 23, 2024",
    category: "Business",
    imageUrl: "/api/placeholder/400/250",
    readTime: "6 min read"
  }
];

export const NewsCards = () => {
  return (
    <div className="news-cards-container">
      {newsData.map((news) => (
        <div key={news.id} className="news-card">
          <div className="card-image">
            {/* <img src={news.imageUrl} /> */}
            <div className="card-category">{news.category}</div>
          </div>
          
          <div className="card-content">
            <h3 className="card-title">{news.title}</h3>
            <p className="card-excerpt">{news.excerpt}</p>
            
            <div className="card-meta">
              <div className="meta-info">
                <FaClock />
                <span>{news.readTime}</span>
              </div>
              <div className="meta-author">
                <span>By {news.author}</span>
                <span className="meta-date">{news.date}</span>
              </div>
            </div>
            
            <div className="card-actions">
              <button className="btn-bookmark">
                <FaRegBookmark />
              </button>
              <button className="btn-share">
                <FaShareAlt />
              </button>
              <button className="btn-read-more">
                Read More
                <FaRegNewspaper />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};