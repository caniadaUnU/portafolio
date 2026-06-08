import { useState } from "react";
import { skills } from "../data/skills";
import SkillCard from "./SkillCard";
import "./SkillList.css";

const FILTERS = ["Todos", "Frontend", "Lenguaje", "Backend", "Herramienta", "Blanda"];

export default function SkillList() {
  const [activeType, setActiveType] = useState("Todos");

  const filtered =
    activeType === "Todos"
      ? skills
      : skills.filter((s) => s.type === activeType);

  return (
    <div className="skill-list">
      <div className="skill-list__filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`skill-list__filter-btn ${activeType === f ? "skill-list__filter-btn--active" : ""}`}
            onClick={() => setActiveType(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="skill-list__empty">No hay habilidades en esta categoría.</p>
      ) : (
        <div className="skill-list__grid">
          {filtered.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              type={skill.type}
              level={skill.level}
            />
          ))}
        </div>
      )}
    </div>
  );
}
