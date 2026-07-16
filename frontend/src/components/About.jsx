import React from 'react';

export default function About({ about }) {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        {/* Left Side: Bio Card */}
        <div className="glass-panel about-bio">
          <p>{about.bio}</p>
          <p>I focus on constructing robust APIs, managing database integrity, and designing interactive frontends that result in a polished, fluid digital product.</p>
          
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

          {about.experience && about.experience.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h3 className="timeline-title">
                <span>💼</span> Experience
              </h3>
              <div className="timeline">
                {about.experience.map((exp, idx) => (
                  <div key={idx} className="timeline-item glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-header">
                      <h4>{exp.role}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-sub">{exp.company}</p>
                    <p className="timeline-desc">{exp.details}</p>
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
