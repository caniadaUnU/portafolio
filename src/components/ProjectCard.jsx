import "./ProjectCard.css";

export default function ProjectCard({ title, description, technologies, category, level, repositoryUrl, demoUrl }) {
  const isWeatherNow = title === "WeatherNow";
  const demoLink = isWeatherNow && demoUrl
    ? `${demoUrl}${demoUrl.includes("?") ? "&" : "?"}lang=es`
    : demoUrl;

  return (
    <article className={`project-card ${isWeatherNow ? "project-card--weather" : ""}`}>
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
          <span className="project-card__level">{level}</span>
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        {isWeatherNow && (
          <p className="project-card__special-note">
            Enlace de demo con idioma español por defecto y fondo con lluvia de estrellas.
          </p>
        )}
      </div>

      <div className="project-card__footer">
        <div className="project-card__techs">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech">{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          {repositoryUrl && (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`Repositorio de ${title}`}
            >
              GitHub
            </a>
          )}
          {demoUrl && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link project-card__link--demo"
              aria-label={`Demo de ${title}`}
            >
              Demo {isWeatherNow ? "(ES)" : ""} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
