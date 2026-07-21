import React from 'react';

export default function Footer({ about }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} {about.name || "Janez Vera P. Acosta"}. All rights reserved.</p>
      <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.6 }}>Built with React.js and Python FastAPI</p>
    </footer>
  );
}
