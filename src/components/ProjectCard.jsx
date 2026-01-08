function ProjectCard({ title, desc, live }) {
return (
<div className="card">
<h3>{title}</h3>
<p>{desc}</p>
<a className="btn btn-outline" href={live} target="_blank">
Live Project →
</a>
</div>
);
}


export default ProjectCard;