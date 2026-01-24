import { useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations.js";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import SidebarCard from "../components/SidebarCard.jsx";
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

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in-view"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

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

      <main className="content-grid">
        <div className="content-main">
          <Hero t={t} />
          <Skills t={t} />
          <Projects t={t} />
          <Experience t={t} />
          <Education t={t} />
          <Contact t={t} />
        </div>
        <aside className="content-aside">
          <SidebarCard t={t} />
        </aside>
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
