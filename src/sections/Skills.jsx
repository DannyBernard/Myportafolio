export default function Skills({ t }) {
  return (
    <section className="section reveal">
      <h3 className="section-title">{t.skillsTitle}</h3>
      <div className="stack-grid">
        {t.skillsGroups.map((group) => (
          <div key={group.title} className="stack-card">
            <div className="stack-card-header">
              <span className="stack-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 12h16M4 6h10M4 18h7"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <h4>{group.title}</h4>
            </div>
            <div className="stack-tags">
              {group.items.map((item) => (
                <span key={item} className="stack-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
