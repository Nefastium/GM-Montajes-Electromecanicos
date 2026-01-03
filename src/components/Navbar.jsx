import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1 className="logo">GM Montajes Electromecanicos</h1>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>


      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#inicio" onClick={() => setOpen(false)}>Inicio</a></li>
        <li><a href="#servicios" onClick={() => setOpen(false)}>Servicios</a></li>
        <li><a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a></li>
        <li><a href="#contacto" onClick={() => setOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
