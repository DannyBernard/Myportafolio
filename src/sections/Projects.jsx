export default function Projects({ t }) {
  return (
    <section className="section reveal">
      <h3 className="section-title">{t.projectsTitle}</h3>
      <div className="grid">
        {t.projects.map((project) => (
          <article key={project.title} className="card">
            <h4 className="card-title">{project.title}</h4>
            <p>{project.description}</p>
            <p className="muted">{project.tech}</p>
            <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
              {t.projectLinkLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
