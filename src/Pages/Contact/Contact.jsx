import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        I'd love to connect! Whether it's a project idea, job opportunity, or just to say hello.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>neehalp.prajapati@example.com</span>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+91 9876543210</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Mumbai, Maharashtra, India</span>
        </div>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/neehalp" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/neehalp" target="_blank" rel="noopener noreferrer">
            <FaGithub />
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
