

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-kicker">Electricista profesional</span>

        <h1>Instalaciones eléctricas seguras y a medida</h1>

        <p>
          Servicio eléctrico para hogares, comercios e industria, con +30 años de
          experiencia, trabajo prolijo y cumplimiento de normas.
        </p>

        <div className="hero-actions">
          <a
            href="https://wa.me/5491158314455?text=Hola! Necesito un presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="hero-primary-btn"
          >
            Pedir presupuesto
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
