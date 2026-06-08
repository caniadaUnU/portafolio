import { useProjects } from "../hooks/useProjects";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";
import "./Page.css";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const {
    projects,
    categories,
    activeFilter,
    setActiveFilter,
    loading,
    error,
  } = useProjects();

  return (
    <main>
      <section className="page-section">
        <div className="page-section__inner">
          <h2 className="section-title">
            <span className="section-title__prefix">03.</span> Proyectos
          </h2>
          <p className="projects-note">
            (Cabe aclarar que son ejemplos debido a que aún no he hecho
            proyectos, profe entienda mi so)
          </p>

          <ProjectFilters
            categories={categories}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Estado: cargando */}
          {loading && (
            <div className="projects-status">
              <div
                className="projects-status__spinner"
                aria-label="Cargando proyectos"
              />
              <p>Cargando proyectos...</p>
            </div>
          )}

          {/* Estado: error */}
          {error && !loading && (
            <div className="projects-status projects-status--error">
              <p>⚠ Error al cargar los proyectos.</p>
              <p className="projects-status__detail">{error}</p>
            </div>
          )}

          {/* Estado: sin resultados */}
          {!loading && !error && projects.length === 0 && (
            <div className="projects-status">
              <p>No hay proyectos en esta categoría.</p>
            </div>
          )}

          {/* Estado: datos cargados */}
          {!loading && !error && projects.length > 0 && (
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  category={project.category}
                  level={project.level}
                  repositoryUrl={project.repositoryUrl}
                  demoUrl={project.demoUrl}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
