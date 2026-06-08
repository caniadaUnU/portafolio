import "./SkillCard.css";

export default function SkillCard({ name, type, level }) {
  return (
    <div className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__name">{name}</span>
        <span
          className={`skill-card__type skill-card__type--${type.toLowerCase().replace(" ", "-")}`}
        >
          {type}
        </span>
      </div>
      <div className="skill-card__bar-bg" aria-label={`${name}: ${level}%`}>
        <div className="skill-card__bar-fill" style={{ width: `${level}%` }} />
      </div>
      <span className="skill-card__level">{level}%</span>
      {(name === "Resolución de problemas" ||
        name === "Trabajo en equipo" ||
        name === "Comunicación") && (
        <p className="skill-card__note">
          (El porcentaje depende del hambre que tenga)
        </p>
      )}
    </div>
  );
}
