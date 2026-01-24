export default function SidebarCard({ t }) {
  return (
    <div className="sidebar-card reveal">
      <p className="eyebrow">{t.aboutEyebrow}</p>
      <h3>{t.aboutTitle}</h3>
      <p className="muted">{t.aboutBody}</p>
      <div className="metrics">
        {t.metrics.map((metric) => (
          <div key={metric.label} className="metric">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
      <a className="secondary-cta" href={t.contactLinkedInUrl} target="_blank" rel="noreferrer">
        {t.contactLinkedInLabel}
      </a>
    </div>
  );
}
