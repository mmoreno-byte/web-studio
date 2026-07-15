export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow">MM Web Studio</span>
          <h1>
            Tu web, <span className="accent">hecha con cuidado.</span>
          </h1>
          <p className="hero-lead">
            Diseño y desarrollo páginas web para profesionales y pequeños
            negocios. Sin plantillas, sin prisas, sin sorpresas.
          </p>

          <div className="hero-ctas">
            <a href="#trabajos" className="btn btn-primary">
              Ver trabajos
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Hablemos
            </a>
          </div>

          <ul className="hero-bullets">
            <li><span className="dot" /> Presupuesto cerrado antes de empezar</li>
            <li><span className="dot" /> Te explico cada paso en lenguaje claro</li>
            <li><span className="dot" /> Soporte y mantenimiento después</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
