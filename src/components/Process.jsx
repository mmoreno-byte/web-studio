const steps = [
  {
    num: '01',
    title: 'Escucho',
    description:
      'Antes de tocar una línea de código, necesito entender qué quieres, para quién y por qué. Una buena web empieza con buenas preguntas.',
  },
  {
    num: '02',
    title: 'Construyo',
    description:
      'Diseño y desarrollo a medida, cuidando cada detalle: tipografía, color, jerarquía, rendimiento. Nada de "esto se hace siempre así".',
  },
  {
    num: '03',
    title: 'Acompaño',
    description:
      'Una web no se termina al publicarla. Me quedo para lo que venga: mantenimiento, mejoras, esa idea loca que te surge tres meses después.',
  },
];

export default function Process() {
  return (
    <section id="proceso">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Cómo trabajo</span>
          <h2>Tres pasos. Sin atajos, sin paquetes cerrados.</h2>
        </div>

        <div className="process">
          {steps.map((s) => (
            <div key={s.num} className="process-step reveal">
              <div className="num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
