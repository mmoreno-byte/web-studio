const projects = [
  {
    id: 'ana-moreno',
    type: 'Portfolio personal',
    year: '2026',
    title: 'Portfolio · Ana Moreno',
    description:
      'Portfolio personal con diseño cuidado, formulario de contacto funcional y estructura responsive. Construido desde cero con React y Vite, sin depender de plantillas externas.',
    main: '/projects/ana-portfolio-1.png',
    secondary: '/projects/ana-portfolio-2.png',
    secondaryPos: 'tl',
    url: 'https://mmoreno-byte.github.io/ana-moreno-portfolio/',
  },
  {
    id: 'psicologia-alvaro',
    type: 'Web profesional · Psicología',
    year: '2026',
    title: 'Consulta de Psicología',
    description:
      'Web profesional para psicólogo con sistema de reservas, información de servicios y formulario de contacto. Pensada para transmitir confianza y serenidad a quien llega por primera vez.',
    main: '',
    secondary: '',
    secondaryPos: 'br',
    url: 'https://psychology-web-9ga.pages.dev',
    reverse: true,
  },
  {
    id: 'proximamente',
    type: 'En preparación',
    year: '2026',
    title: 'Próximo proyecto',
    description:
      'Estoy terminando un nuevo encargo del que pronto podré enseñar más. Si te interesa que trabajemos juntos, este es un buen momento para hablar.',
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="trabajos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Trabajos</span>
          <h2>Hecho, desplegado, en producción.</h2>
        </div>

        <div className="projects-list">
          {projects.map((p) => (
            p.comingSoon ? (
              <article key={p.id} className="project-feature project-soon reveal">
                <div className="project-info">
                  <div className="meta">
                    <span className="tag">{p.type}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <a href="#contacto" className="project-link">
                    Cuéntame tu proyecto <span className="arrow">→</span>
                  </a>
                </div>
                <div className="project-soon-mark" aria-hidden="true">
                  <span>···</span>
                </div>
              </article>
            ) : (
              <article
                key={p.id}
                className={`project-feature reveal ${p.reverse ? 'reverse' : ''}`}
              >
                <div className="project-images">
                  <img src={p.main} alt={p.title} className="main" />
                  <img
                    src={p.secondary}
                    alt=""
                    className={`secondary ${p.secondaryPos}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="project-info">
                  <div className="meta">
                    <span className="tag">{p.type}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visitar web <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
