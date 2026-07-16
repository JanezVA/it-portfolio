import React, { useEffect, useState } from 'react';

export default function Skills({ skills }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations shortly after loading
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Toolkit</h2>
      
      <div className="skills-grid">
        {/* Languages */}
        {skills.languages && (
          <div className="glass-panel skills-category">
            <h3>Programming Languages</h3>
            <div className="skill-list">
              {skills.languages.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: animated ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frameworks */}
        {skills.frameworks && (
          <div className="glass-panel skills-category">
            <h3>Libraries & Frameworks</h3>
            <div className="skill-list">
              {skills.frameworks.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: animated ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {skills.tools && (
          <div className="glass-panel skills-category">
            <h3>Developer Tools & DevOps</h3>
            <div className="skill-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: animated ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
