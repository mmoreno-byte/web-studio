const services = [
  {
    num: '01',
    icon: '◆',
    title: 'Diseño desde cero',
    description:
      'Partimos de una idea (o un folio en blanco) y la convertimos en una web con identidad propia. Te acompaño en el proceso: estructura, contenido, estética.',
  },
  {
    num: '02',
    icon: '◈',
    title: 'Trabajo sobre código existente',
    description:
      '¿Ya tienes una web pero necesita un repaso? Modernizo, optimizo, corrijo errores o añado funcionalidades sin tirar tu trabajo previo.',
  },
  {
    num: '03',
    icon: '◇',
    title: 'Mantenimiento',
    description:
      'Tu web necesita cuidados: actualizaciones, copias de seguridad, pequeños ajustes. Me encargo de que no se quede obsoleta ni se rompa.',
  },
  {
    num: '04',
    icon: '◉',
    title: 'Hablamos y vemos',
    description:
      'Cada proyecto es único. Cuéntame qué tienes en mente y te preparo una propuesta ajustada a lo que realmente necesitas, sin paquetes cerrados.',
  },
];

export default function Services() {
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Servicios</span>
          <h2>Cuatro formas de trabajar juntos.</h2>
          <p className="section-sub">
            Da igual si empiezas de cero o si ya tienes algo: hay un punto de
            partida que se ajusta a ti.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.num} className="service-card reveal">
              <div className="service-head">
                <span className="service-icon" aria-hidden="true">{s.icon}</span>
                <span className="num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
