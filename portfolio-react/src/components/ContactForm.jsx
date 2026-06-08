import { useContactForm } from "../hooks/useContactForm";
import "./ContactForm.css";

export default function ContactForm() {
  const {
    form,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    resetSubmitted,
  } = useContactForm();

  if (submitted) {
    return (
      <div className="contact-form__success">
        <span className="contact-form__success-icon">✓</span>
        <h3>¡Mensaje enviado!</h3>
        <p>Gracias por escribirme. Te responderé lo antes posible.</p>
        <button className="btn btn--outline" onClick={resetSubmitted}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__group">
        <label htmlFor="nombre" className="contact-form__label">
          Nombre <span aria-hidden="true">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          className={`contact-form__input ${errors.nombre ? "contact-form__input--error" : ""}`}
          placeholder="Tu nombre completo"
          aria-describedby={errors.nombre ? "error-nombre" : undefined}
        />
        {errors.nombre && (
          <span id="error-nombre" className="contact-form__error" role="alert">
            {errors.nombre}
          </span>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="correo" className="contact-form__label">
          Correo electrónico <span aria-hidden="true">*</span>
        </label>
        <input
          id="correo"
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          className={`contact-form__input ${errors.correo ? "contact-form__input--error" : ""}`}
          placeholder="slzbmx17@gmail.com"
          aria-describedby={errors.correo ? "error-correo" : undefined}
        />
        {errors.correo && (
          <span id="error-correo" className="contact-form__error" role="alert">
            {errors.correo}
          </span>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="asunto" className="contact-form__label">
          Asunto <span aria-hidden="true">*</span>
        </label>
        <input
          id="asunto"
          type="text"
          name="asunto"
          value={form.asunto}
          onChange={handleChange}
          className={`contact-form__input ${errors.asunto ? "contact-form__input--error" : ""}`}
          placeholder="¿En qué puedo ayudarte?"
          aria-describedby={errors.asunto ? "error-asunto" : undefined}
        />
        {errors.asunto && (
          <span id="error-asunto" className="contact-form__error" role="alert">
            {errors.asunto}
          </span>
        )}
      </div>

      <div className="contact-form__group">
        <label htmlFor="mensaje" className="contact-form__label">
          Mensaje <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          className={`contact-form__textarea ${errors.mensaje ? "contact-form__input--error" : ""}`}
          placeholder="Escribe tu mensaje aquí..."
          rows={5}
          aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
        />
        {errors.mensaje && (
          <span id="error-mensaje" className="contact-form__error" role="alert">
            {errors.mensaje}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn--primary contact-form__submit">
        Enviar mensaje →
      </button>
    </form>
  );
}
