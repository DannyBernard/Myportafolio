export default function SidebarCard({ t }) {
  return (
    <div className="sidebar-card reveal">
      <div className="profile-block">
        <div className="profile-photo" aria-hidden="true">
          <svg viewBox="0 0 120 120" role="img">
            <defs>
              <linearGradient id="photoGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#7be0a3" />
                <stop offset="100%" stop-color="#4fca86" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" fill="url(#photoGlow)" opacity="0.25" />
            <circle cx="60" cy="52" r="22" fill="rgba(255,255,255,0.6)" />
            <path d="M24 104c8-18 28-28 36-28s28 10 36 28" fill="rgba(255,255,255,0.6)" />
          </svg>
        </div>
        <div>
          <p className="eyebrow">{t.signatureLabel}</p>
          <p className="signature">{t.signatureValue}</p>
        </div>
      </div>

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

      <div className="impact">
        <p className="focus-title">{t.impactTitle}</p>
        <div className="impact-grid">
          {t.impactMetrics.map((metric) => (
            <div key={metric.label} className="impact-card">
              <div className="impact-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 12h4l2 4 4-8 2 4h4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="impact-value">{metric.value}</p>
                <p className="impact-label">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
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
