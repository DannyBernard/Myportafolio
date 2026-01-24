export default function Contact({ t }) {
  return (
    <section className="section contact">
      <h3>{t.contactTitle}</h3>
      <p>{t.contactText}</p>
      <div className="contact-actions">
        <a className="primary-cta" href="mailto:contacto@ejemplo.com">
          {t.contactCTA}
        </a>
        <a
          className="secondary-cta"
          href={t.contactLinkedInUrl}
          target="_blank"
          rel="noreferrer"
        >
          {t.contactLinkedInLabel}
        </a>
      </div>
    </section>
  );
}
