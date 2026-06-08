# 💻 Portafolio Profesional — React + Vite

Portafolio web personal construido con React y Vite como taller integrador del curso de Programación Web.

---

## 🚀 Instalación y ejecución

### Requisitos previos
- Node.js 18+ instalado
- npm (incluido con Node.js)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-react.git
cd portfolio-react

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
```

La app estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
npm run preview   # previsualizar el build
```

---

## 📁 Estructura del proyecto

```
portfolio-react/
├── public/
│   └── data/
│       └── projects.json        # Datos de proyectos (fuente remota simulada)
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── Header.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── SkillList.jsx / .css
│   │   ├── SkillCard.jsx / .css
│   │   ├── ProjectCard.jsx / .css
│   │   ├── ProjectFilters.jsx / .css
│   │   ├── ContactForm.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── pages/                   # Vistas por ruta
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── hooks/                   # Hooks personalizados
│   │   ├── useProjects.js
│   │   └── useContactForm.js
│   ├── services/
│   │   └── projects.service.js  # Función fetch separada
│   ├── data/
│   │   └── skills.js            # Datos de habilidades
│   ├── App.jsx                  # Rutas con React Router
│   ├── index.css                # Estilos globales y variables
│   └── main.jsx                 # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 Funcionalidades

| Requisito | Estado |
|-----------|--------|
| Hero con nombre, rol y CTA | ✅ |
| Sección Sobre mí | ✅ |
| Habilidades renderizadas desde datos | ✅ |
| Proyectos con componente reutilizable | ✅ |
| Filtro de proyectos por categoría | ✅ |
| Formulario de contacto controlado | ✅ |
| Validaciones y mensajes de error | ✅ |
| Mensaje de éxito y limpieza del form | ✅ |
| Datos cargados con fetch + useEffect | ✅ |
| Estados loading / error / success | ✅ |
| Rutas con React Router | ✅ |
| Hooks personalizados | ✅ |
| Diseño responsive (móvil + escritorio) | ✅ |

---

## ⚙️ Decisiones técnicas

- **React Router v6**: navegación por páginas separadas (`/`, `/sobre-mi`, `/proyectos`, `/contacto`).
- **useProjects**: hook que encapsula fetch, estado de carga/error y lógica de filtrado.
- **useContactForm**: hook que centraliza el estado del formulario, validaciones y reset.
- **projects.service.js**: la función `fetch` está separada en `services/` para cumplir el principio de separación de responsabilidades.
- **projects.json en `/public/data/`**: sirve como fuente de datos externa simulada, accesible directamente por Vite sin configuración adicional.
- **CSS modular por componente**: cada componente tiene su propio archivo `.css` para evitar conflictos de estilos.

---

## 📸 Capturas

> Agrega aquí imágenes de la vista móvil y escritorio antes de entregar.

---

## 🔮 Mejoras futuras

- Modo claro/oscuro con context
- Despliegue en Vercel o Netlify
- Animaciones de entrada con Intersection Observer
- Integración con JSON Server para operaciones CRUD
