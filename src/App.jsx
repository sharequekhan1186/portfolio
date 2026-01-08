function App() {
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <span className="logo">MS</span>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container">
        <header className="header">
          <h1>Mohammad Shareque</h1>
          <p>Full Stack Developer</p>
        </header>

        <section id="about">
          <h2>About</h2>
          <p>
            I’m Mohammad Shareque, a BCA student and Full Stack Developer.
            I build clean, responsive and scalable web applications using
            React, Node.js and Express.
          </p>

          <div className="btn-group">
            <a className="btn" href="/Resume.pdf" target="_blank">Resume</a>
            <a className="btn" href="https://github.com/sharequekhan1186/portfolio" target="_blank">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/shareque-shareque-53ba7b377" target="_blank">LinkedIn</a>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills">
            {['JavaScript','React','Node.js','Express','HTML','CSS','Git','GitHub'].map(skill => (
              <div className="skill" key={skill}>{skill}</div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects">
            <div className="project">
              <h3>CSAM Portal</h3>
              <p>Full stack MERN application with responsive UI.</p>
              <a href="https://csam-portal-v1.vercel.app/">Live Project →</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact">
            <p>Email: <span>sharequekhan932226@gmail.com</span></p>
            <p>Location: <span>Maharashtra, India</span></p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
