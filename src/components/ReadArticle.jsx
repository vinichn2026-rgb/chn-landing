import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { blogs } from '../data/blogs';
import './ReadArticle.css';

export default function ReadArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the blog article by ID
  const article = blogs.find(b => b.id === parseInt(id));

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article not found</h2>
        <button onClick={() => navigate('/blogs')} className="btn-primary">Back to Blogs</button>
      </div>
    );
  }

  return (
    <div className="article-page">
      {/* Article Header */}
      <header className="article-header" style={{ backgroundImage: `linear-gradient(rgba(2, 26, 58, 0.8), rgba(2, 26, 58, 0.9)), url(${article.image})` }}>
        <div className="container article-header-content">
          <button onClick={() => navigate('/blogs')} className="back-btn">
            <ArrowLeft size={20} /> Back to Blogs
          </button>
          
          <div className="article-meta-top">
            <span className="article-category"><Tag size={14} /> {article.category}</span>
            <span className="article-date"><Calendar size={14} /> {article.date}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
        </div>
      </header>

      {/* Article Body */}
      <div className="container article-body-wrapper">
        <article className="article-content">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="article-footer">
            <button className="share-btn">
              <Share2 size={18} /> Share this article
            </button>
          </div>
        </article>
        
        {/* Sidebar (Optional for future) */}
        <aside className="article-sidebar">
          <div className="sidebar-widget">
            <h3>More from {article.category}</h3>
            <ul className="related-articles">
              {blogs.filter(b => b.category === article.category && b.id !== article.id).slice(0, 3).map(related => (
                <li key={related.id}>
                  <Link to={`/blogs/${related.id}`}>
                    <div className="related-img">
                      <img src={related.image} alt={related.title} />
                    </div>
                    <div className="related-info">
                      <h4>{related.title}</h4>
                      <span>{related.date}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
