export default function Experience({ t }) {
  return (
    <section className="section reveal">
      <h3 className="section-title">{t.experienceTitle}</h3>
      <div className="timeline">
        {t.experience.map((item) => (
          <div key={item.company} className="timeline-item">
            <div>
              <h4 className="timeline-title">{item.company}</h4>
              <p className="muted">{item.role}</p>
            </div>
            <p className="period">{item.period}</p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
