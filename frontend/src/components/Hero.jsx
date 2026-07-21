import React from 'react';

export default function Hero({ about }) {
  return (
    <section id="home" className="hero">
      <div className="hero-tag">Welcome to my space</div>
      <h1 className="hero-title">
        Hi, I'm <span>{about.name || "Janez Vera P. Acosta"}</span>
      </h1>
      <h2 className="hero-subtitle">
        {about.title || "Information Technology Graduate"}
      </h2>
      <p className="hero-subtitle" style={{ fontSize: '1.1rem', marginTop: '-1rem' }}>
        {about.tagline || "[wait"}
      </p>
      
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">
          View Projects
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
      </div>
    </section>
  );
}
