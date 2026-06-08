import "./Page.css";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main>
      <section className="page-section">
        <div className="page-section__inner">
          <h2 className="section-title">
            <span className="section-title__prefix">01.</span> Sobre mí
          </h2>

          <div className="about__grid">
            <div className="about__text">
              <p>
                Soy estudiante de <strong>Ingeniería de Sistemas</strong> con
                interés en el desarrollo web frontend. Me apasiona crear
                interfaces que sean claras, accesibles y fáciles de usar.
              </p>
              <p>
                Actualmente estoy profundizando mis conocimientos en{" "}
                <strong>React</strong>, <strong>JavaScript moderno</strong> y
                buenas prácticas de arquitectura de componentes. Disfruto
                aprender resolviendo problemas reales, también ser masoquista
                amante al café el cual está dispuesto a acabar con su cordura
                por un par de líneas de código.
              </p>
              <p>
                Mi objetivo profesional es integrarme a un equipo donde pueda
                contribuir con código limpio, crecer continuamente y aportar
                valor desde el primer día.
              </p>

              <div className="about__details">
                <div className="about__detail">
                  <span className="about__detail-label">Ubicación</span>
                  <span className="about__detail-value">Colombia</span>
                </div>
                <div className="about__detail">
                  <span className="about__detail-label">Formación</span>
                  <span className="about__detail-value">
                    Ingeniería de Sistemas
                  </span>
                </div>
                <div className="about__detail">
                  <span className="about__detail-label">Disponibilidad</span>
                  <span className="about__detail-value about__detail-value--green">
                    Abierto a oportunidades · 24/7
                  </span>
                </div>
              </div>
            </div>

            <div className="about__card">
              <div className="about__avatar" aria-label="Avatar profesional">
                DS
              </div>
              <p className="about__interests-title">Intereses</p>
              <ul className="about__interests">
                {[
                  "Desarrollo Frontend",
                  "Experiencia de usuario",
                  "Código limpio",
                  "Open source",
                  "Aprendizaje continuo",
                  "Café",
                  "Adrenalina",
                  "Buscarle sentido a la vida",
                  "Encontrar la otra mitad del medio ambiente",
                ].map((item) => (
                  <li key={item}>
                    <span className="about__interests-dot" aria-hidden="true">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
