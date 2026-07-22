import React, { useEffect, useState } from 'react';

// Friendly labels for known category keys. Any key not listed here
// still renders — it just falls back to a title-cased version of the key,
// so a new category added to the data never disappears silently.
const CATEGORY_LABELS = {
  languages: 'Programming Languages',
  frameworks: 'Libraries & Frameworks',
  frameworks_platforms: 'Frameworks & Platforms',
  tools: 'Developer Tools',
  cloud: 'Cloud Technologies',
  testing_kpi: 'Feature Testing & KPI',
  productivity: 'Productivity Tools',
  ai_productivity: 'AI Productivity & Integration',
};

function toTitleCase(key) {
  return key
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Skills({ skills }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations shortly after loading
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [skills]);

  const categories = skills ? Object.entries(skills).filter(([, list]) => Array.isArray(list) && list.length > 0) : [];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Toolkit</h2>

      <div className="skills-grid">
        {categories.map(([key, list]) => (
          <div key={key} className="glass-panel skills-category">
            <h3>{CATEGORY_LABELS[key] || toTitleCase(key)}</h3>
            <div className="skill-list">
              {list.map((skill, index) => (
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
        ))}
      </div>
    </section>
  );
}
