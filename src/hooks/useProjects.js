import { useState, useEffect } from "react";
import { getProjects, getCategories } from "../services/projects.service";

/**
 * Hook personalizado para cargar y filtrar proyectos.
 */
export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProjects();
        setProjects(data);
        setCategories(getCategories(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return {
    projects: filteredProjects,
    categories,
    activeFilter,
    setActiveFilter,
    loading,
    error,
  };
}
