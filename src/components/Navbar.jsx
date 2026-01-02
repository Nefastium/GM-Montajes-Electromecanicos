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
        <li onClick={() => setOpen(false)}>Inicio</li>
        <li onClick={() => setOpen(false)}>Servicios</li>
        <li onClick={() => setOpen(false)}>Nosotros</li>
        <li onClick={() => setOpen(false)}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
