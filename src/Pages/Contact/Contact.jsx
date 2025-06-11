import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Contact.css';

// Note: Naukri icon isn't available in react-icons, so we'll use a briefcase icon as alternative
import { FaBriefcase } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        I'd love to connect! Whether it's a project idea, job opportunity or Internship.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>prajapatineehal604@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+91 8329390633</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Mumbai, Maharashtra, India</span>
        </div>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/neehal-prajapati/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/neehalprajapati" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/neehal_prajapati_11/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer" title="Naukri">
            <FaBriefcase /> {/* Using briefcase as Naukri alternative */}
          </a>
          <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage" target="_blank" rel="noopener noreferrer" title="Indeed">
            <SiIndeed />
          </a>
        </div>
      </div>

      <div className="contact-buttons">
        <Link to="/" className="back-home-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default Contact;