function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Contacto</h2>
          <p className="contact-sub">
            ¿Necesitás una solución eléctrica profesional?
            Estamos listos para ayudarte.
          </p>

          <div className="contact-item">
            <span>📞</span>
            <div>
              <h4>Teléfono</h4>
              <p>+54 9 11 5831-4455</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <h4>Email</h4>
              <p>gam.marinkovich@gmail.com</p>
            </div>
          </div>

          <a
            href="https://wa.me/5491158314455"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Solicitar Presupuesto
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;