import { useEffect } from "react";

const strengths = [
  {
    id: "01",
    tag: "Experiencia",
    title: "+30 años en montajes eléctricos",
    text: "Trabajo prolijo y soluciones seguras para viviendas, comercios e industria.",
  },
  {
    id: "02",
    tag: "Normativa",
    title: "Instalaciones a norma",
    text: "Cada proyecto se ejecuta con criterio técnico y protecciones reales.",
  },
  {
    id: "03",
    tag: "Asesoramiento",
    title: "Comunicación clara",
    text: "Atención directa desde la evaluación hasta la puesta en marcha.",
  },
];

function About() {
  useEffect(() => {
    const cards = document.querySelectorAll(".spec-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.12}s`;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-industrial" id="nosotros">
      <div className="about-shell">
        <div className="about-header">
          <span className="about-eyebrow">Compromiso técnico</span>
          <h2 className="about-name">Gustavo Marinkovich</h2>
          <div className="about-line"></div>
          <p className="about-role">
            Técnico Electromecánico · Electricista · +30 años
          </p>
          <p className="about-description">
            Soluciones eléctricas confiables, ordenadas y seguras para obra,
            industria y hogar.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-photo">
            <div className="photo-wrapper">
              <img
                src="/images/Gustavo.jpeg"
                alt="Gustavo Marinkovich - Técnico Electromecánico"
              />
              <div className="photo-badge">
                <strong>+30 Años</strong>
                <span>Proyectos eléctricos con criterio profesional</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="about-intro-card">
              <span className="intro-chip">Perfil</span>
              <h3>Electricista con foco en ejecución segura</h3>
              <p>
                Trabajo ordenado y asesoramiento técnico para que cada instalación
                quede lista para funcionar.
              </p>
            </div>

            <div className="about-specs">
              {strengths.map((item) => (
                <article key={item.id} className="spec-card">
                  <span className="card-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="about-cta-row">
              <a href="#contacto" className="about-primary-btn">
                Pedir asesoramiento
              </a>
              <a
                href="https://wa.me/5491158314455"
                target="_blank"
                rel="noopener noreferrer"
                className="about-secondary-link"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;