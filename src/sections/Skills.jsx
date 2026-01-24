export default function Skills({ t }) {
  return (
    <section className="section">
      <h3>{t.skillsTitle}</h3>
      <div className="tags">
        {t.skills.map((skill) => (
          <span key={skill} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
