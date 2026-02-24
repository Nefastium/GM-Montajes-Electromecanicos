import HeadPng from '../../images/HeadPng.png'

function Hero() {
  return (
    <section className="hero" id="inicio"> 
      <div className="hero-content">
        <h1>Montajes Electromecánicos</h1>
        <p>
          Soluciones profesionales en instalaciones eléctricas, montajes y
          mantenimiento doméstico e industrial.
        </p>
        <a
          href="https://wa.me/5491158314455?text=Hola! Necesito un presupuesto"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <button>Solicitar presupuesto</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
