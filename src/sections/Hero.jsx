export default function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">{t.role}</p>
        <h2>{t.heroTitle}</h2>
        <p className="hero-summary">{t.heroSummary}</p>
        <a className="primary-cta" href="mailto:contacto@ejemplo.com">
          {t.heroCTA}
        </a>
      </div>
      <div className="hero-card">
        <h3>Stack</h3>
        <ul>
          {t.skills.slice(0, 4).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p>+{t.skills.length - 4} mas</p>
      </div>
    </section>
  );
}
