import { Link } from 'react-router-dom';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <section className="about-section">
          <h2>👤 Personal Details</h2>
          <p>I'm Neehal P Prajapati, a passionate Frontend Developer who builds elegant, performant, and user-friendly web applications using modern tools and frameworks.</p>
        </section>

        <section className="about-section">
          <h2>🎓 Qualification</h2>
          <p>Bachelor of Science in Information Technology (BSc.IT) </p>
        </section>

        <section className="about-section">
          <h2>💼 Work Experience</h2>
          <p>Fresher</p>
        </section>

        <section className="about-section">
          <h2>🛠️ Computer Basics</h2>
          <p>Proficient in MS Excel, Advanced Excel, PowerPoint, MS Word, and general computer operations.</p>
        </section>

        <section className="about-section">
          <h2>🌐 Languages Known</h2>
          <p>Hindi, Marathi, English, Bhojpuri</p>
        </section>

        <section className="about-section">
          <h2>💡 Skills</h2>
          <div className="skills-list">
            <div className="skill-item">
              <FaReact className="skill-icon react" />
              <span>React.js</span>
            </div>
            <div className="skill-item">
              <FaJsSquare className="skill-icon js" />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <FaHtml5 className="skill-icon html" />
              <span>HTML5</span>
            </div>
            <div className="skill-item">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS3</span>
            </div>
            {/* <div className="skill-item">
              <FaDatabase className="skill-icon db" />
              <span>Databases</span>
            </div> */}
          </div>
        </section>

        <section className="about-section">
          <h2>🚀 Projects Completed</h2>
          <p>15+ personal and client projects, including dashboards, portfolios, and responsive websites.</p>
        </section>

        <div className="button-group">
          <Link to="/mywork" className="project-button">
            View My Projects
          </Link>
          <Link to="/" className="home-button">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
