import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";


function Home() {
return (
<main className="container">
<section>
<h2>About</h2>
<p>
I’m Mohammad Shareque, a BCA student and Full Stack Developer.
I build clean, responsive and scalable web applications using
React, Node.js and Express.
</p>


<div className="btn-group">
<a className="btn btn-primary" href="/resume.pdf" target="_blank">
Resume
</a>
<a className="btn btn-outline" href="https://github.com" target="_blank">
GitHub
</a>
<a
className="btn btn-outline"
href="https://linkedin.com/in/shareque-shareque-53ba7b377"
target="_blank"
>
LinkedIn
</a>
</div>
</section>


<section>
<h2>Skills</h2>
<p>JavaScript · React · Node.js · Express · HTML · CSS · Git · GitHub</p>
</section>


<section>
<h2>Projects</h2>
{projects.map((project, index) => (
<ProjectCard key={index} {...project} />
))}
</section>


<section>
<h2>Contact</h2>
<p>Email: sharequekhan932226@gmail.com</p>
<p>Location: Maharashtra, India</p>
</section>
</main>
);
}


export default Home;