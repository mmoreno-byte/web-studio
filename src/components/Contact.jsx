import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAIL = 'mdmorenoinfor@gmail.com';
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
          <span className="eyebrow">Contacto</span>
          <h2>Hablemos sin compromiso.</h2>
          <p className="section-sub section-sub-light">
            Te respondo en menos de 24 horas con ideas y un primer
            acercamiento honesto. Sin formulario interminable, sin tecnicismos.
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
                placeholder="Diseño, mantenimiento, mejora..."
              />
            </div>

            <div className="form-group">
              <label>Cuéntame</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Qué tienes en mente, plazos, presupuesto aproximado..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {status === 'success' && (
              <p className="contact-feedback success">
                ✓ Mensaje enviado. Te respondo pronto.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-feedback error">
                Algo no salió bien. Escríbeme directo al email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
