const BASE_URL = "/data/projects.json";

/**
 * Obtiene todos los proyectos desde el archivo JSON público.
 * @returns {Promise<Array>} Lista de proyectos
 */
export async function getProjects() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Error al cargar proyectos: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

/**
 * Obtiene las categorías únicas de los proyectos.
 * @param {Array} projects
 * @returns {Array<string>}
 */
export function getCategories(projects) {
  const cats = projects.map((p) => p.category);
  return ["Todos", ...new Set(cats)];
}
