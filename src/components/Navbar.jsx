import { useEffect, useState } from 'react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso',   href: '#proceso' },
  { label: 'Trabajos',  href: '#trabajos' },
  { label: 'Sobre mí',  href: '#sobre-mi' },
  { label: 'Contacto',  href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Principal">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => handleClick(e, '#top')}>
          <span className="nav-logo-mark">MM</span>
          <span className="nav-logo-text">Web Studio</span>
        </a>

        <button
          className={`nav-burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="tel:+34662227498" className="btn btn-primary btn-sm">
              Llamar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
