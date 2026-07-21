import React from 'react';

export default function About({ about }) {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        {/* Left Side: Bio Card */}
        <div className="glass-panel about-bio">
          <p>{about.bio}</p>
          <p>[wait]</p>
          
          <div className="social-links">
            {about.socials?.github && (
              <a href={about.socials.github} className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
                <span>GH</span>
              </a>
            )}
            {about.socials?.linkedin && (
              <a href={about.socials.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <span>LN</span>
              </a>
            )}
            {about.socials?.email && (
              <a href={about.socials.email} className="social-icon" title="Email">
                <span>✉</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Timeline of Education & Internships */}
        <div className="timeline-container">
          {about.education && about.education.length > 0 && (
            <div>
              <h3 className="timeline-title">
                <span>🎓</span> Education
              </h3>
              <div className="timeline">
                {about.education.map((edu, idx) => (
                  <div key={idx} className="timeline-item glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-header">
                      <h4>{edu.degree}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                    <p className="timeline-sub">{edu.institution} — GPA: {edu.gpa}</p>
                    <p className="timeline-desc">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {about.certifications && about.certifications.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h3 className="timeline-title">
                <span>�</span> Certifications
              </h3>
              <div className="timeline">
                {about.certifications.map((cert, idx) => (
                  <div key={idx} className="timeline-item glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-header">
                      <h4>{cert.name}</h4>
                      <span className="timeline-period">{cert.period}</span>
                    </div>
                    <p className="timeline-sub">{cert.institution}</p>
                    <p className="timeline-desc">{cert.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
