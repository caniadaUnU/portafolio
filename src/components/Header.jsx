import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          &lt;Mapachanda /&gt;
        </NavLink>

        <button
          className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/sobre-mi" onClick={closeMenu}>Sobre mí</NavLink>
          <NavLink to="/proyectos" onClick={closeMenu}>Proyectos</NavLink>
          <NavLink to="/contacto" onClick={closeMenu}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}
