import React, { useState } from 'react';

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('All');

  // Extract unique technologies to filter by
  const filters = ['All', 'Python', 'React.js', 'FastAPI'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      
      {/* Filters */}
      <div className="projects-filter">
        {filters.map((category, idx) => (
          <button
            key={idx}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="glass-panel project-card">
            <div className="project-header">
              <span className="project-icon">
                {project.tech.includes('React.js') ? '💻' : project.tech.includes('Python') ? '🐍' : '⚙️'}
              </span>
              <div className="project-links">
                {project.github_url && (
                  <a href={project.github_url} className="project-link" target="_blank" rel="noopener noreferrer" title="View Source">
                    <span>GitHub</span>
                  </a>
                )}
                {project.live_url && (
                  <a href={project.live_url} className="project-link" target="_blank" rel="noopener noreferrer" title="Live Demo">
                    <span>Demo ↗</span>
                  </a>
                )}
              </div>
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '0.88rem' }}>Key Features:</h5>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {project.features && project.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
