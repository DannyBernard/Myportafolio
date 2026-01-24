export default function Contact({ t }) {
  return (
    <section className="section contact">
      <h3>{t.contactTitle}</h3>
      <p>{t.contactText}</p>
      <a className="primary-cta" href="mailto:contacto@ejemplo.com">
        {t.contactCTA}
      </a>
    </section>
  );
}
