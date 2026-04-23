import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "inicio";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#inicio" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">GM</span>
          <span className="logo-text">
            <span className="logo-short">GM Montajes - Electricista</span>
            <span className="logo-full">GM Montajes Electromecánicos - Electricista</span>
            <span className="logo-sub">Instalaciones y montajes eléctricos</span>
          </span>
        </a>

        <button
          type="button"
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-right ${open ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <a
                href="#inicio"
                className={activeSection === "inicio" ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                INICIO
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                className={activeSection === "servicios" ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                SERVICIOS
              </a>
            </li>

            <li>
              <a
                href="#nosotros"
                className={activeSection === "nosotros" ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                NOSOTROS
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                className={activeSection === "contacto" ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                CONTACTO
              </a>
            </li>
          </ul>

          <a href="#contacto" className="nav-cta" onClick={() => setOpen(false)}>
            Pedir presupuesto
          </a>
        </div>
      </nav>

      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Navbar;
