export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container about-grid">
        <div className="about- reveal">
          {/* Cambio: la imagen ahora se recorta con object-fit: cover */}
          <img
            src="/about.jpg"
            alt="Loli Moreno"
            style={{
              objectPosition: 'top 20%', // Enfoca la parte superior (cara)
            }}
          />
          <div className="about-photo-frame" aria-hidden="true" />
        </div>

        <div className="about-text reveal">
          <span className="eyebrow">Confianza</span>
          <h2>¿Por qué confiar en mí?</h2>
          <p className="about-lead">
            Ayudo a pequeños negocios a tener una presencia profesional en internet
            <strong> sin complicaciones técnicas</strong>. Mi trabajo es que tu web
            no solo se vea bien, sino que funcione y te dé tranquilidad.
          </p>
          <p>
            Vengo del mundo de la educación, y eso se nota en cómo trabajo:
            me gusta <strong>explicar las cosas claras</strong>, cumplir los
            plazos y que el cliente entienda en todo momento por dónde vamos.
            Nada de tecnicismos vacíos ni de "esto se hace siempre así".
          </p>
          <p>
            Me formé como Técnica Superior en Desarrollo de Aplicaciones Web
            y he trabajado en redacción técnica, automatización de procesos
            y desarrollo full stack. Hoy me dedico a lo que más disfruto:
            <strong> construir webs que la gente entiende y usa</strong>.
          </p>
          <p>
            <strong>He ayudado a más de 10 negocios</strong> a tener una web
            profesional sin sorpresas. Y lo que más valoran mis clientes es
            que <strong>siempre respondo en menos de 24 horas</strong>.
          </p>

          <dl className="about-meta">
            <div>
              <dt>Años de experiencia</dt>
              <dd>+2</dd>
            </div>
            <div>
              <dt>Proyectos entregados</dt>
              <dd>10+</dd>
            </div>
            <div>
              <dt>Respuesta</dt>
              <dd>&lt; 24 h</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}