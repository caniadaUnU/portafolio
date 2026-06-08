import { Link } from "react-router-dom";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  technologies,
  category,
  level,
  repositoryUrl,
  demoUrl,
}) {
  const isInternalDemo = demoUrl?.startsWith("/");

  const handleCardClick = () => {
    if (!repositoryUrl) return;
    window.open(repositoryUrl, "_blank", "noopener,noreferrer");
  };

  const handleCardKeyDown = (event) => {
    if (!repositoryUrl) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.open(repositoryUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className="project-card"
      role={repositoryUrl ? "link" : undefined}
      tabIndex={repositoryUrl ? 0 : undefined}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      aria-label={`Abrir GitHub de ${title}`}
    >
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
          <span className="project-card__level">{level}</span>
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>

      <div className="project-card__footer">
        <div className="project-card__techs">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech">
              {tech}
            </span>
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
              onClick={(event) => event.stopPropagation()}
            >
              GitHub
            </a>
          )}
          {demoUrl &&
            (isInternalDemo ? (
              <Link
                to={demoUrl}
                className="project-card__link project-card__link--demo"
                aria-label={`Demo de ${title}`}
                onClick={(event) => event.stopPropagation()}
              >
                Demo ↗
              </Link>
            ) : (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link project-card__link--demo"
                aria-label={`Demo de ${title}`}
                onClick={(event) => event.stopPropagation()}
              >
                Demo ↗
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
