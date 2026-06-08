import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} <span>Mapachanda</span> — Construido con React + Vite +
          cafeina
        </p>
        <div className="footer__links">
          <a
            href="https://github.com/caniadaUnU"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/un-mapache-negro-728089415/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:slzbmx17@gmail.com">Correo</a>
        </div>
      </div>
    </footer>
  );
}
