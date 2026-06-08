import { useState } from "react";

const INITIAL_FORM = {
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
};

const INITIAL_ERRORS = {
  nombre: "",
  correo: "",
  asunto: "",
  mensaje: "",
};

/**
 * Hook personalizado para manejar el formulario de contacto.
 */
export function useContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { ...INITIAL_ERRORS };
    let valid = true;

    if (!form.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
      valid = false;
    }

    if (!form.correo.trim()) {
      newErrors.correo = "El correo es obligatorio.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      newErrors.correo = "Ingresa un correo válido.";
      valid = false;
    }

    if (!form.asunto.trim()) {
      newErrors.asunto = "El asunto es obligatorio.";
      valid = false;
    }

    if (!form.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio.";
      valid = false;
    } else if (form.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const openGmailCompose = () => {
    const subject = encodeURIComponent(form.asunto);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nCorreo: ${form.correo}\n\n${form.mensaje}`,
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=slzbmx17@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      openGmailCompose();
      setSubmitted(true);
      setForm(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
    }
  };

  const resetSubmitted = () => setSubmitted(false);

  return {
    form,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    resetSubmitted,
  };
}
