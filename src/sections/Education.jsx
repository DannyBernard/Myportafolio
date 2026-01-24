export default function Education({ t }) {
  return (
    <section className="section reveal">
      <h3 className="section-title">{t.educationTitle}</h3>
      <div className="timeline">
        {t.education.map((item) => (
          <div key={item.school} className="timeline-item">
            <div>
              <h4 className="timeline-title">{item.degree}</h4>
              <p className="muted">{item.school}</p>
            </div>
            <p className="period">{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
