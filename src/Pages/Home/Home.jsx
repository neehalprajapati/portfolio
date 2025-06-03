import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './Home.css'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Home = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="home-container">
        {/* Ribbon at top-left with vertically rotated "Follow Us" text */}
        <div className="ribbon-top-left">
          <span className="ribbon-vertical-text">Follow <span>Me</span></span>
        </div>

        {/* Vertical gradient line below ribbon */}
        <div className="ribbon-vertical-left" />

        {/* Social media icons vertically below the line */}
        <div className="social-icons-vertical">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <div className="intro-vertical-line" />

        {/* Rest of your page content */}
        <div className="intro">
          <h1 className="home-title">
            <Typewriter
              options={{
                strings: ['I am Neehal P Prajapati'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="description">
            I'm a passionate Frontend Developer crafting beautiful web
            experiences.
          </p>
          <div className="expertise">
            <h3>My Expertise</h3>
            <div className="tech-stack">
              <div className="tech-item"><FaReact className="tech-icon react" />ReactJS</div>
              <div className="tech-item"><FaJsSquare className="tech-icon js" />JavaScript</div>
              <div className="tech-item"><FaHtml5 className="tech-icon html" />HTML5</div>
              <div className="tech-item"><FaCss3Alt className="tech-icon css" />CSS3</div>
            </div>
          </div>
        </div>

        <div className="arc-card-container">
          <Link to="/about" className="card arc-card">
            About Me
          </Link>
          <Link to="/mywork" className="card arc-card">
            My Work
          </Link>
          <Link to="/contact" className="card arc-card">
            Contact
          </Link>
          <Link to="/" className="card arc-card">
            Home
          </Link>
        </div>
      </div>
      <div className="mobile-nav-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Me</Link>
          <Link to="/mywork" onClick={() => setIsMobileMenuOpen(false)}>My Work</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
};

export default Home;
