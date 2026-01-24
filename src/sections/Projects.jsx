export default function Projects({ t }) {
  return (
    <section className="section reveal">
      <h3>{t.projectsTitle}</h3>
      <div className="grid">
        {t.projects.map((project) => (
          <article key={project.title} className="card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p className="muted">{project.tech}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Ver proyecto
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
