import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mywork.css';

const largeProjects = [
  {
    id: 1,
    title: 'Large Project One',
    shortDesc: 'A full-scale React app.',
    detailedDesc: 'This large-scale project is built with React and showcases...',
    images: [
      '/images/project1-1.png',
      '/images/project1-2.png',
    ],
    link: 'https://github.com/yourusername/large-project-one',
  },
  {
    id: 2,
    title: 'Large Project Two',
    shortDesc: 'A portfolio with animations.',
    detailedDesc: 'A custom portfolio using React, animations, and styled-components...',
    images: [
      '/images/project2-1.png',
      '/images/project2-2.png',
    ],
    link: 'https://github.com/yourusername/large-project-two',
  },
];

const miniProjects = [
  {
    id: 3,
    title: 'Mini Project One',
    shortDesc: 'A JavaScript stopwatch.',
    detailedDesc: 'This is a simple stopwatch made with vanilla JavaScript.',
    images: [
      '/images/mini1.png',
    ],
    link: 'https://github.com/yourusername/mini-project-one',
  },
  {
    id: 4,
    title: 'Mini Project Two',
    shortDesc: 'A CSS-only image slider.',
    detailedDesc: 'An image slider made using only HTML and CSS, no JS needed!',
    images: [
      '/images/mini2.png',
    ],
    link: 'https://github.com/yourusername/mini-project-two',
  },
];

const Mywork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const goHome = () => {
    navigate('/');
  };

  const renderProjects = (projects) => (
    <div className="projects-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => openProject(project)}
          tabIndex={0}
          role="button"
          aria-pressed="false"
          onKeyDown={(e) => {
            if (e.key === 'Enter') openProject(project);
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.shortDesc}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mywork-container">
      <h2 className="section-title">My Projects</h2>

      <h3 className="subsection-title">Large Projects</h3>
      {renderProjects(largeProjects)}

      <h3 className="subsection-title">Mini Projects</h3>
      {renderProjects(miniProjects)}

      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProject} aria-label="Close project details">
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.detailedDesc}</p>
            <div className="project-images">
              {selectedProject.images.map((src, idx) => (
                <img key={idx} src={src} alt={`${selectedProject.title} screenshot ${idx + 1}`} />
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Source / Live Demo
            </a>
          </div>
        </div>
      )}

      <button
        onClick={goHome}
        className="back-home-btn"
        aria-label="Back to Home"
        onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00e0ff, #6f00ff)'}
        onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(90deg, #6f00ff, #00e0ff)'}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Mywork;
