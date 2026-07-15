export default function About() {
  return (
    <section id="sobre-mi" className="about">
      <div className="container about-grid">
        <div className="about-photo reveal">
          <img src="/about.jpg" alt="Loli Moreno" />
          <div className="about-photo-frame" aria-hidden="true" />
        </div>

        <div className="about-text reveal">
          <span className="eyebrow">Sobre mí</span>
          <h2>Loli Moreno</h2>
          <p className="about-lead">
            Soy desarrolladora web y creo webs para profesionales y pequeños
            negocios que quieren algo serio, cuidado y a medida.
          </p>
          <p>
            Vengo del mundo de la educación, y eso se nota en cómo trabajo:
            me gusta <strong>explicar las cosas claras</strong>, cumplir los
            plazos y que el cliente entienda en todo momento por dónde vamos.
            Nada de tecnicismos vacíos ni de “esto se hace siempre así”.
          </p>
          <p>
            Me formé como Técnica Superior en Desarrollo de Aplicaciones Web
            y he pasado por redacción de documentación técnica, automatización
            de procesos y desarrollo full stack. Hoy me dedico a lo que más
            disfruto: <strong>construir webs que la gente entiende y usa</strong>.
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
