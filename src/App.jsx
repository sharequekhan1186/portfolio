import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mohammad Shareque</h1>
        <p>Full Stack Developer</p>
      </header>

      <section>
        <h2>About</h2>
        <p>
          I’m Mohammad Shareque, a BCA student and Full Stack Developer.
          I build clean, responsive and scalable web applications using
          React, Node.js and Express.
        </p>

        <div className="btn-group">
          <a
            className="btn"
            href="/Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
          <a
            className="btn"
            href="https://github.com/sharequekhan1186"
            target="_blank"
            rel="noopener noreferrer"
          >
             GitHub
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/shareque-shareque-53ba7b377"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          {['JavaScript', 'React', 'Node.js', 'Express', 'HTML', 'CSS', 'Git', 'GitHub'].map(skill => (
            <div className="skill" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>CSAM Portal</h3>
          <p>Full stack MERN application with responsive UI.</p>
          <a href="#">Live Project →</a>
        </div>
      </section>
    </div>
  )
}

export default App