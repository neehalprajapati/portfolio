import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mywork.css';
import img1 from '../../assets/image/image1.png';
import img2 from '../../assets/image/image2.png';
import img3 from '../../assets/image/image3.png';
import img4 from '../../assets/image/image4.png';
import pot1 from '../../assets/image/pot1.png';
import pot2 from '../../assets/image/pot2.png';
import pot3 from '../../assets/image/pot3.png';
import pot4 from '../../assets/image/pot4.png';
import pot5 from '../../assets/image/pot5.png';
import pot6 from '../../assets/image/pot6.png';
import pot7 from '../../assets/image/pot7.png';

const largeProjects = [
  {
    id: 1,
    title: 'Event Ease (Event Management Website)',
    shortDesc: 'MERN STACK Project',
    detailedDesc: "This Event Management System is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated with Cloudinary for efficient image processing. The platform enables users to seamlessly book multiple event services such as catering, decoration, hall rentals, and more, through a unified interface. It features separate login portals for users and service providers, ensuring secure, role-based access. Users can register, browse services, and manage bookings, while service providers can log in to add, edit, or delete their offerings, upload service images via Cloudinary, and manage incoming bookings. The system employs JWT-based authentication and delivers a smooth and responsive experience for organizing events end-to-end.",
    images: [img1, img2, img3, img4],
    link: 'https://github.com/neehalprajapati/EventEase',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary']
  },
  {
    id: 2,
    title: 'Pottery Website (E-commerce Website)',
    shortDesc: 'A buying platform of Potteries items which are made from clay',
    detailedDesc: 'Pottery Hub is a fully responsive e-commerce platform designed for users to browse, explore, and purchase a variety of handcrafted clay products such as pots, matkas, diyas, vases, and other traditional pottery items. The website offers a clean and intuitive user interface, making it easy for customers to search, filter, and order products directly from skilled artisans. Developed using React.js, JavaScript, HTML, CSS, and Bootstrap, the site ensures fast performance, smooth navigation, and compatibility across all devices. With a modern frontend and an organized product catalog, Pottery Hub aims to support local craftsmen by providing them an online presence while delivering a seamless shopping experience to users.',
    images: [pot1, pot2, pot3, pot4, pot5, pot6, pot7
    ],
    link: 'https://github.com/neehalprajapati/Pottery-Website',
    technologies: ['React', 'HTML', 'CSS', 'BootStrap', 'JavaScript']
  },
];

const Mywork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const navigate = useNavigate();

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedImageIndex !== null) {
          closeImage();
        } else if (selectedProject) {
          closeProject();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, selectedImageIndex]);

  const openProject = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(null);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedImageIndex(null);
  };

  const openImage = (index, e) => {
    e?.stopPropagation();
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const goToPrevImage = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
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
          <div className="project-card-hover">
            <span>View Details</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mywork-container">
      <h2 className="section-title">My Projects</h2>

      <h3 className="subsection-title">Featured Projects</h3>
      {renderProjects(largeProjects)}

      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              &times;
            </button>

            <h2 className="project-title">{selectedProject.title}</h2>
            <p className="project-description">{selectedProject.detailedDesc}</p>

            <div className="technologies-used">
              <h4>Technologies Used:</h4>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-images">
              {selectedProject.images.map((src, idx) => (
                <div key={idx} className="image-thumbnail" onClick={(e) => openImage(idx, e)}>
                  <img
                    src={src}
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    loading="lazy"
                  />
                  <div className="image-hover-overlay">
                    <span>Click to enlarge</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Source Code on GitHub
            </a>
          </div>
        </div>
      )}

      {selectedImageIndex !== null && selectedProject && (
        <div className="image-lightbox" onClick={closeImage}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeImage}
              aria-label="Close image"
            >
              &times;
            </button>

            <button
              className="lightbox-nav prev"
              onClick={goToPrevImage}
              aria-label="Previous image"
            >
              &#10094;
            </button>

            <div className="lightbox-image-container">
              <img
                src={selectedProject.images[selectedImageIndex]}
                alt={`${selectedProject.title} screenshot ${selectedImageIndex + 1}`}
              />
            </div>

            <button
              className="lightbox-nav next"
              onClick={goToNextImage}
              aria-label="Next image"
            >
              &#10095;
            </button>

            <div className="image-counter">
              {selectedImageIndex + 1} / {selectedProject.images.length}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={goHome}
        className="back-home-btn"
        aria-label="Back to Home"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Mywork;