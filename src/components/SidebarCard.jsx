export default function SidebarCard({ t }) {
  return (
    <div className="sidebar-card reveal">
      <div className="availability">
        <span className="availability-label">{t.availabilityLabel}</span>
        <span className="availability-value">{t.availabilityValue}</span>
      </div>
      <p className="eyebrow">{t.aboutEyebrow}</p>
      <h3 className="section-title">{t.aboutTitle}</h3>
      <p className="muted">{t.aboutBody}</p>
      <div className="metrics">
        {t.metrics.map((metric) => (
          <div key={metric.label} className="metric">
            <span className="metric-value">{metric.value}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="focus">
        <p className="focus-title">{t.focusTitle}</p>
        <div className="focus-tags">
          {t.focusItems.map((item) => (
            <span key={item} className="focus-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
      <a className="secondary-cta" href={t.contactLinkedInUrl} target="_blank" rel="noreferrer">
        {t.contactLinkedInLabel}
      </a>
    </div>
  );
}
