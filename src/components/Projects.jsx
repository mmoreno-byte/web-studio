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
    id: 'psicologia',
    type: 'Web profesional · Psicología',
    year: '2026',
    title: 'Web profesional · Psicología',
    description:
      'Sitio web completo para profesional sanitario: presentación, áreas de intervención, FAQ pre-reserva, formulario de contacto y footer legal. Estética "consultorio cálido" (crema, salvia, tierra) y tipografía serif + sans. Datos personales anonimizados: el proyecto está listo para enseñar como demo.',
    main: 'projects/psicologia-1.png',
    secondary: 'projects/psicologia-2.png',
    secondaryPos: 'br',
    url: 'npx wrangler pages deploy dist --project-name=psychology-web',
    reverse: true,
    status: {
      done: [
        'Diseño UI/UX y sistema de diseño',
        'Maquetación completa (7 secciones)',
        'Avatar ilustrado SVG inline',
        'Aviso de crisis 024 en Contacto',
      ],
      pending: [
        'Calendly (esperando cuenta del cliente)',
        'Stripe (pagos)',
        'Datos personales reales',
        'Aviso legal y privacidad',
      ],
    },
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

function StatusPanel({ status }) {
  return (
    <div className="project-status">
      <div className="status-col status-done">
        <h4>
          <span className="status-dot done" aria-hidden="true" />
          Hecho
        </h4>
        <ul>
          {status.done.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="status-col status-pending">
        <h4>
          <span className="status-dot pending" aria-hidden="true" />
          Pendiente
        </h4>
        <ul>
          {status.pending.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="trabajos">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Trabajos</span>
          <h2>Hecho, desplegado, en producción.</h2>
        </div>

        <div className="projects-list">
          {projects.map((p) =>
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
                className={`project-feature reveal ${p.reverse ? 'reverse' : ''} ${p.status ? 'with-status' : ''}`}
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
                  {p.status && <StatusPanel status={p.status} />}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {p.urlLabel || 'Visitar web'} <span className="arrow">→</span>
                  </a>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
