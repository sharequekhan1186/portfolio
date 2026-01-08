import { useState, useEffect } from 'react';
import './App.css';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Express.js',
    'HTML5', 'CSS3', 'Git & GitHub', 'MongoDB',
    'REST APIs', 'Responsive Design', 'Vite', 'VS Code'
  ];

  return (
    <div className="portfolio-app">
      {/* Simple Header */}
      <nav className="simple-nav">
        <div className="nav-content">
          <div className="nav-brand">
            <span className="nav-logo">MS</span>
            <span className="nav-name">Mohammad Shareque</span>
          </div>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/Resume.pdf" target="_blank" className="resume-link">Resume</a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="container">
          {/* Professional Header */}
          <header className="professional-header" id="home">
            <h1>Mohammad Shareque</h1>
            <div className="title">Full Stack Developer</div>
            <p className="header-description">
              BCA Student specializing in modern web technologies. 
              Building efficient, scalable applications with clean code.
            </p>
            <div className="header-actions">
              <a href="#contact" className="contact-btn">Get in Touch</a>
              <a href="/Resume.pdf" target="_blank" className="resume-btn">Download Resume</a>
            </div>
          </header>

          {/* Skills Section */}
          <section className="resume-skills" id="skills">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="projects-section" id="projects">
            <h2>Featured Project</h2>
            <div className="project-highlight">
              <h3>CSAM Portal</h3>
              <p>
                A full-stack MERN application with responsive UI, 
                user authentication, and dashboard functionality. 
                Built with modern web technologies and best practices.
              </p>
              <a 
                href="https://csam-portal-v1.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                🌐 View Live Project
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section" id="contact">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <div className="contact-row">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:sharequekhan932226@gmail.com">
                    sharequekhan932226@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-row">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              
              <div className="contact-row">
                <div className="contact-icon">💼</div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/shareque-shareque-53ba7b377" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/shareque
                  </a>
                </div>
              </div>
              
              <div className="contact-row">
                <div className="contact-icon">🐙</div>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/sharequekhan1186" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/sharequekhan1186
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="site-footer">
            <p>© {new Date().getFullYear()} Mohammad Shareque. All rights reserved.</p>
            <p className="footer-note">Built with React • Hosted on Vercel</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;