import { useMemo, useState } from "react";
import { translations } from "../data/translations.js";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import Hero from "../sections/Hero.jsx";
import Skills from "../sections/Skills.jsx";
import Projects from "../sections/Projects.jsx";
import Experience from "../sections/Experience.jsx";
import Education from "../sections/Education.jsx";
import Contact from "../sections/Contact.jsx";

const DEFAULT_LANG = "es";

export default function App() {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">DB</span>
          <div>
            <h1>{t.name}</h1>
            <p className="role">{t.role}</p>
          </div>
        </div>
        <LanguageSwitcher lang={lang} onChange={setLang} />
      </header>

      <main>
        <Hero t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
