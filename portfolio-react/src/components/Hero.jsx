import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-grid" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__greeting">Hola, soy</p>
        <h1 className="hero__name">
          Mapachanda<span className="hero__cursor">_</span>
        </h1>
        <p className="hero__role">
          Desarrollador Web <span className="hero__role-accent">Frontend</span>
        </p>
        <p className="hero__bio">
          Estudiante de Ingeniería de Sistemas apasionado por crear interfaces
          limpias, funcionales y accesibles con React y JavaScript moderno.
        </p>

        <div className="hero__cta">
          <Link to="/proyectos" className="btn btn--primary">
            pillate mis proyectos
          </Link>
          <Link to="/contacto" className="btn btn--outline">
            hablame menor
          </Link>
        </div>

        <div className="hero__stack">
          {["React", "JavaScript", "Vite", "CSS3", "Git"].map((tech) => (
            <span key={tech} className="hero__tag">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
