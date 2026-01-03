import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">GM Montajes</h1>

      {/* Botón hamburguesa */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Menú */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
            <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        </li>
        <li>
            <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
        </li>
        <li>
            <a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a>
        </li>
        <li>
            <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </li>
        </ul>

    </nav>
  );
}

export default Navbar;
