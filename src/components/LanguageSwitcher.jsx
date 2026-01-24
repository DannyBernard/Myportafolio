export default function LanguageSwitcher({ lang, onChange }) {
  return (
    <div className="lang-switch">
      <label htmlFor="lang" className="lang-label">Idioma / Language</label>
      <select
        id="lang"
        value={lang}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
