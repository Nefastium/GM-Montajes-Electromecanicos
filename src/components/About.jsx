import { useEffect } from "react";

function About() {

  useEffect(() => {
    const cards = document.querySelectorAll(".spec-card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="about-industrial" id="nosotros">

      {/* Encabezado tipo placa técnica */}
      <div className="about-header">
        <span className="about-eyebrow">[ EXPERIENCIA Y COMPROMISO ]</span>
        <h2 className="about-name">Gustavo Marinkovich</h2>
        <div className="about-line"></div>
        <p className="about-role">
          Técnico Electromecánico · Electricista Industrial · +30 Años de Trayectoria
        </p>
      </div>

      {/* Layout principal */}
      <div className="about-layout">

        {/* Columna izquierda - Imagen */}
        <div className="about-photo">
          <div className="photo-wrapper">
            <img 
              src="../images/Gustavo.png" 
              alt="Gustavo Marinkovich - Técnico Electromecánico"
            />
          </div>
        </div>

        {/* Columna derecha - Ficha técnica */}
        <div className="about-specs">

          <div className="spec-card">
            <span className="card-index">01</span>
            <h3>Experiencia Industrial</h3>
            <p>
              Más de tres décadas desarrollando montajes electromecánicos 
              en entornos industriales, con soluciones adaptadas a cada 
              proyecto y necesidad técnica.
            </p>
          </div>

          <div className="spec-card">
            <span className="card-index">02</span>
            <h3>Enfoque en Seguridad</h3>
            <p>
              Cada trabajo se ejecuta bajo estrictos criterios de seguridad,
              priorizando la integridad de las instalaciones, los equipos
              y el personal involucrado.
            </p>
          </div>

          <div className="spec-card">
            <span className="card-index">03</span>
            <h3>Calidad y Cumplimiento</h3>
            <p>
              Compromiso real con los plazos establecidos y estándares
              profesionales que garantizan resultados confiables y duraderos.
            </p>
          </div>

          <div className="spec-card">
            <span className="card-index">04</span>
            <h3>Atención Personalizada</h3>
            <p>
              Acompañamiento directo desde la planificación hasta la 
              finalización de la obra, ofreciendo asesoramiento técnico
              claro y preciso en cada etapa.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default About;