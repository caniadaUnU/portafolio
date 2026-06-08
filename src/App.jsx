import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import WeatherNowPage from "./pages/WeatherNowPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/weathernow" element={<WeatherNowPage />} />
        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <main style={{ textAlign: "center", padding: "8rem 1.5rem" }}>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "3rem",
                  color: "var(--accent)",
                }}
              >
                404
              </h2>
              <p style={{ color: "var(--text-muted)" }}>
                Página no encontrada.
              </p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
