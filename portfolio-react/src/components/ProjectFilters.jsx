import "./ProjectFilters.css";

export default function ProjectFilters({ categories, activeFilter, onFilterChange }) {
  return (
    <div className="project-filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`project-filters__btn ${activeFilter === cat ? "project-filters__btn--active" : ""}`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
