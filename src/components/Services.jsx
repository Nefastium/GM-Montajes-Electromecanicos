import { useEffect, useRef } from "react";

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="servicios" ref={sectionRef}>
      <h2 className="electric-title">¿QUÉ HACEMOS?</h2>

      <div className="services-grid">
        <div className="service-card">
          <h3>Instalaciones Domiciliarias</h3>
          <p>
            Cableado completo, iluminación, enchufes, tableros eléctricos
            y ampliaciones en viviendas nuevas o remodelaciones.
          </p>
        </div>

        <div className="service-card">
          <h3>Trabajos Industriales</h3>
          <p>
            Instalaciones eléctricas en galpones y talleres,
            conexión de maquinaria y sistemas trifásicos.
          </p>
        </div>

        <div className="service-card">
          <h3>Mantenimiento y Reparaciones</h3>
          <p>
            Diagnóstico y solución de fallas eléctricas,
            cortocircuitos y actualización de instalaciones antiguas.
          </p>
        </div>

        <div className="service-card">
          <h3>Tableros y Protecciones</h3>
          <p>
            Armado e instalación de tableros eléctricos con
            protecciones seguras según normativa vigente.
          </p>
        </div>
      </div>

      <div className="energy-transition">
  {/* Tablero eléctrico */}
  <svg
    className="bolt-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>

  {/* Línea de energía */}
  <div className="energy-line">
    <div className="energy-flow"></div>
  </div>

  {/* Bombilla */}
  <svg
    className="bulb-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12c.5.5 1 1.5 1 2h6c0-.5.5-1.5 1-2a7 7 0 0 0-4-12z" />
  </svg>
</div>


    </section>
  );
}

export default Services;
