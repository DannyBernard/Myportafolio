export default function Contact({ t }) {
  return (
    <section id="contacto" className="section contact reveal">
      <div className="contact-header">
        <div>
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h3 className="section-title">{t.contactTitle}</h3>
          <p className="contact-text">{t.contactText}</p>
        </div>
        <div className="contact-highlight">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2c-3.3 0-6 2.7-6 6 0 4.4 6 10 6 10s6-5.6 6-10c0-3.3-2.7-6-6-6zm0 8.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4z"
              fill="currentColor"
            />
          </svg>
          <div>
            <p className="muted">{t.contactLocationLabel}</p>
            <p className="contact-location">{t.contactLocationValue}</p>
          </div>
        </div>
      </div>
      <div className="contact-actions">
        <a className="primary-cta" href="mailto:contacto@ejemplo.com">
          <span className="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.4l8 5.3 8-5.3V8H4zm0 8h16v-5.3l-8 5.3-8-5.3V16z"
                fill="currentColor"
              />
            </svg>
          </span>
          {t.contactCTA}
        </a>
        <a
          className="secondary-cta"
          href={t.contactLinkedInUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4.9 3.5a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zM3 9h3.8v12H3V9zm7.2 0h3.6v1.7h.1c.5-.9 1.8-1.9 3.8-1.9 4 0 4.7 2.6 4.7 6.1V21h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H10.2V9z"
                fill="currentColor"
              />
            </svg>
          </span>
          {t.contactLinkedInLabel}
        </a>
      </div>
    </section>
  );
}
