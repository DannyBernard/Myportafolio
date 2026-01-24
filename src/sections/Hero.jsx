export default function Hero({ t }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content reveal">
        <div className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-label">
            {t.availabilityLabel}: {t.availabilityValue}
          </span>
        </div>
        <p className="eyebrow">{t.role}</p>
        <h2>{t.heroTitle}</h2>
        <p className="hero-summary">{t.heroSummary}</p>
        <div className="hero-actions">
          <a className="primary-cta" href="mailto:contacto@ejemplo.com">
            {t.heroCTA}
          </a>
          <a className="secondary-cta" href={t.contactLinkedInUrl} target="_blank" rel="noreferrer">
            {t.contactLinkedInLabel}
          </a>
        </div>
      </div>
      <div className="hero-card reveal">
        <div className="hero-card-top">
          <h3 className="card-title">Stack</h3>
          <span className="chip">.NET</span>
        </div>
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
