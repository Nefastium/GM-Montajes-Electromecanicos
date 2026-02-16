import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Shadow al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detectar sección activa
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
      <h1 className="logo">
        <span className="logo-short">GM Montajes</span>
        <span className="logo-full">GM Montajes Electromecánicos</span>
      </h1>


      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      


      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a
            href="#inicio"
            className={activeSection === "inicio" ? "" : ""}
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
    </nav>
    {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

export default Navbar;
