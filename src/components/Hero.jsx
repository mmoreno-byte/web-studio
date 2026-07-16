export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow">MM Web Studio</span>
          <h1>
            Webs para pequeños negocios que necesitan presencia profesional sin complicaciones.
          </h1>
          <p className="hero-lead">
            Diseño y desarrollo a medida. Presupuesto cerrado y soporte continuo. Sin tecnicismos ni sorpresas.
          </p>

          <div className="hero-ctas">
            <a href="#contacto" className="btn btn-primary">
              Calcula tu presupuesto →
            </a>
            <a href="#trabajos" className="btn btn-ghost">
              Ver trabajos
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