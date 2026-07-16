export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">MM<span>·</span>Web Studio</span>
          <p>Páginas web para profesionales y pequeños negocios.</p>
        </div>

        <div className="footer-links">
          <a href="mailto:info@mmoreno.dev">info@mmoreno.dev</a>
          <a 
            href="/whatsapp"
            className="whatsapp-link"
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              textDecoration: 'underline',
              font: 'inherit',
              padding: 0,
            }}
          >
            WhatsApp
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} MM Web Studio · Hecho por{' '}
          <a
            href="https://mmoreno-byte.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loli
          </a>
        </p>
      </div>
    </footer>
  );
}