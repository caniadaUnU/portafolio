import ContactForm from "../components/ContactForm";
import "./Page.css";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <main>
      <section className="page-section">
        <div className="page-section__inner">
          <h2 className="section-title">
            <span className="section-title__prefix">04.</span> Contacto
          </h2>

          <div className="contact__grid">
            <div className="contact__info">
              <p className="contact__intro">
                ¿Tienes un proyecto en mente, una pregunta o simplemente quieres
                saludar? Escríbeme y le respondo de una papi, no se me asuste.
              </p>

              <div className="contact__channels">
                <a
                  href="mailto:slzbmx17@gmail.com"
                  className="contact__channel"
                >
                  <span className="contact__channel-icon">✉</span>
                  <span>slzbmx17@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/573011019583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__channel"
                >
                  <span className="contact__channel-icon">📱</span>
                  <span>WhatsApp 3011019583</span>
                </a>
                <a
                  href="https://github.com/caniadaUnU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__channel"
                >
                  <span className="contact__channel-icon">⌥</span>
                  <span>github.com/caniadaUnU</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/un-mapache-negro-728089415/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__channel"
                >
                  <span className="contact__channel-icon">in</span>
                  <span>linkedin.com/in/un-mapache-negro-728089415</span>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
