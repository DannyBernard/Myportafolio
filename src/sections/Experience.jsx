export default function Experience({ t }) {
  return (
    <section className="section">
      <h3>{t.experienceTitle}</h3>
      <div className="timeline">
        {t.experience.map((item) => (
          <div key={item.company} className="timeline-item">
            <div>
              <h4>{item.company}</h4>
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
