import { Link } from "react-router-dom";
import "./Page.css";
import "./WeatherNowPage.css";

export default function WeatherNowPage() {
  return (
    <main>
      <section className="page-section weathernow-page">
        <div className="page-section__inner">
          <h2 className="section-title">
            <span className="section-title__prefix">03.</span> WeatherNow
          </h2>

          <div className="weathernow-panel">
            <div className="weathernow-panel__top">
              <div>
                <span className="weathernow-panel__location">Medellín, CO</span>
                <span className="weathernow-panel__time">Hoy • 18:15</span>
              </div>
              <span className="weathernow-panel__tag">Español</span>
            </div>

            <div className="weathernow-panel__main">
              <div className="weathernow-panel__temperature">24°</div>
              <div className="weathernow-panel__condition">
                Parcialmente nublado
              </div>
            </div>

            <div className="weathernow-panel__details">
              <div className="weathernow-panel__detail">
                <span>Humedad</span>
                <strong>72%</strong>
              </div>
              <div className="weathernow-panel__detail">
                <span>Viento</span>
                <strong>14 km/h</strong>
              </div>
              <div className="weathernow-panel__detail">
                <span>Prob. lluvia</span>
                <strong>18%</strong>
              </div>
            </div>

            <div className="weathernow-panel__forecast">
              {[
                { day: "Lun", temp: "26°", icon: "☀" },
                { day: "Mar", temp: "24°", icon: "⛅" },
                { day: "Mié", temp: "22°", icon: "🌧" },
                { day: "Jue", temp: "23°", icon: "⛅" },
                { day: "Vie", temp: "25°", icon: "☀" },
              ].map((item) => (
                <div key={item.day} className="weathernow-panel__forecast-item">
                  <span>{item.day}</span>
                  <span>{item.icon}</span>
                  <strong>{item.temp}</strong>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/proyectos"
            className="btn btn--outline weathernow-page__back"
          >
            Volver a proyectos
          </Link>
        </div>
      </section>
    </main>
  );
}
