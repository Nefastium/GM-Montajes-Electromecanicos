import HeadPng from '../../images/HeadPng.png'

function Hero() {
  return (
    <section className="hero" id="inicio"> 
      {/*<img src={HeadPng} alt="HeadPng" className='HeadPng'/> */}
      <h2>Montajes Electromecánicos</h2>
      <p>
        Soluciones profesionales en instalaciones eléctricas, montajes y
        mantenimiento domestico e industrial.
      </p>
      <button>Solicitar presupuesto</button>
    </section>
  );
}

export default Hero;
