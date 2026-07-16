import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Actualizado con tu nuevo correo profesional
const EMAIL = 'info@mmoreno.dev';
// Mantenemos el Gmail como respaldo (lo ponemos en el texto del footer)
const EMAIL_BACKUP = 'mdmorenoinfor@gmail.com';
const PHONE = '+34 662 22 74 98';
const PHONE_TEL = '+34662227498';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(formRef.current);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.get('from_name'),
          from_email: formData.get('from_email'),
          project_type: formData.get('project_type'),
          message: formData.get('message'),
          budget: formData.get('budget'), // Nuevo campo
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Presupuesto</span>
          <h2>¿Cuánto cuesta tu web?</h2>
          <p className="section-sub section-sub-light">
            Te doy un presupuesto orientativo en menos de 24 horas. Sin compromiso, sin tecnicismos, sin sorpresas.
            <br />
            <strong>Respuesta garantizada en menos de 24h.</strong>
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-info reveal">
            <div className="contact-block">
              <span className="contact-label">Email</span>
              <a href={`mailto:${EMAIL}`} className="contact-value">{EMAIL}</a>
            </div>
            <div className="contact-block">
              <span className="contact-label">Teléfono</span>
              <a href={`tel:${PHONE_TEL}`} className="contact-value">{PHONE}</a>
            </div>
            <div className="contact-block">
              <span className="contact-label">Horario</span>
              <span className="contact-value contact-muted">Lun – Vie, 9:00 – 19:00</span>
            </div>

            <p className="contact-note">
              Si prefieres, escríbeme directamente por WhatsApp al mismo número.
              Atiendo consultas rápidas y presupuesto orientativo sin coste.
            </p>
            
            {/* Añadimos un pequeño extra de confianza */}
            <div className="contact-trust">
              <span>✅ Presupuesto cerrado desde el inicio</span>
              <span>🔒 Sin sorpresas ni costes ocultos</span>
            </div>
          </aside>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form reveal"
          >
            <div className="form-row">
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" name="from_name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="from_email" required />
              </div>
            </div>

            <div className="form-group">
              <label>Tipo de proyecto</label>
              <input
                type="text"
                name="project_type"
                placeholder="Diseño desde cero, mejora, mantenimiento..."
              />
            </div>

            <div className="form-group">
              <label>Cuéntame tu proyecto</label>
              <textarea
                name="message"
                rows="5"
                placeholder="¿Qué necesitas? ¿Para cuándo? ¿Qué te preocupa de tu web actual?"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Calcula tu presupuesto →'}
            </button>

            {status === 'success' && (
              <p className="contact-feedback success">
                ✓ ¡Mensaje enviado! Te respondo en menos de 24 horas con tu presupuesto.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-feedback error">
                Algo no salió bien. Escríbeme directamente a {EMAIL} o por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}