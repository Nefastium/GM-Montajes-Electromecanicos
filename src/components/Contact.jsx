function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="contact-kicker">[ CONTACTO DIRECTO ]</span>
            <h2>Hablemos de tu próximo proyecto</h2>
            <p className="contact-sub">
              Si necesitás presupuesto, mantenimiento o una solución eléctrica
              profesional, podés comunicarte de forma rápida y directa.
            </p>

            <div className="contact-list">
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

              <div className="contact-item">
                <span>🛠️</span>
                <div>
                  <h4>Asistencia</h4>
                  <p>Presupuestos, obras y asesoramiento técnico</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <span className="contact-chip">Respuesta rápida</span>
            <h3>Solicitá tu presupuesto sin compromiso</h3>
            <p>
              Contanos qué necesitás y coordinamos la mejor solución para tu obra,
              instalación o mantenimiento.
            </p>

            <a
              href="https://wa.me/5491158314455?text=Hola! Quiero consultar por un presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;