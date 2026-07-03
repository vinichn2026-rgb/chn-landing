import React from 'react';
import { Link } from 'react-router-dom';

import { blogs } from '../data/blogs';

export default function Blog() {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 100%)', 
        color: '#fff', 
        padding: '100px 24px', 
        textAlign: 'center' 
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>Blogs & Resources</h1>
          <p style={{ fontSize: '18px', opacity: '0.9', lineHeight: '1.7' }}>
            Discover the latest insights, industry trends, and expert advice on staffing, HR management, and workforce solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-50)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px' 
          }}>
            {blogs.map((blog) => (
              <div key={blog.id} style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }} className="blog-card">
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease' }} className="blog-img" />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--blue-mid)', color: '#fff', padding: '6px 14px', borderRadius: '30px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {blog.category}
                  </div>
                </div>
                <div style={{ padding: '30px' }}>
                  <p style={{ fontSize: '13px', color: 'var(--gray-500)', marginBottom: '12px', fontWeight: '600' }}>{blog.date}</p>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '16px', lineHeight: '1.4' }}>
                    {blog.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--gray-700)', lineHeight: '1.6', marginBottom: '24px' }}>
                    {blog.excerpt}
                  </p>
                  <Link to={`/blogs/${blog.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--blue-dark)', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }} className="read-more">
                    Read Article <span style={{ transition: 'transform 0.3s' }} className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(11,79,168,0.1) !important;
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
        .blog-card:hover .arrow {
          transform: translateX(6px);
        }
      `}</style>
    </div>
  );
}
