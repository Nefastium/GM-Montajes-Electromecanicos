import { useEffect, useRef } from "react";

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".service-card") || [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.18 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="servicios" ref={sectionRef}>
      <div className="services-top">
        <div>
          <span className="section-label">SERVICIOS</span>
          <h2 className="electric-title services-title">
            Electricidad segura y soluciones claras
          </h2>
          <p className="services-copy">
            Instalaciones, mantenciones y tableros eléctricos con trabajo técnico, ordenado y pensado para tu hogar o tu industria.
          </p>
        </div>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <span>01</span>
          <h3>Instalaciones domiciliarias</h3>
          <p>
            Cableado, iluminación, tomas y tableros para viviendas nuevas o remodelaciones con terminado limpio y seguro.
          </p>
        </div>

        <div className="service-card">
          <span>02</span>
          <h3>Trabajos industriales</h3>
          <p>
            Instalación de redes eléctricas, conexión de maquinaria y sistemas trifásicos para plantas, galpones y talleres.
          </p>
        </div>

        <div className="service-card">
          <span>03</span>
          <h3>Mantenimiento rápido</h3>
          <p>
            Diagnóstico y solución de fallas, cortocircuitos y actualizaciones de instalaciones antiguas con respuesta efectiva.
          </p>
        </div>

        <div className="service-card">
          <span>04</span>
          <h3>Tableros y protecciones</h3>
          <p>
            Diseño, armado e instalación de tableros con protecciones y normas vigentes para mayor control y seguridad.
          </p>
        </div>
      </div>

      <div className="services-footer">
        <div className="services-badge">
          <span>✓</span>
          Trabajo ordenado, seguro y sin complicaciones.
        </div>
      </div>
    </section>
  );
}

export default Services;
