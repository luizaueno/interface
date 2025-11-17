import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="site-header" role="banner" aria-labelledby="site-title">
      <div className="topbar">
        <div className="brand" id="site-title">
          <span>Habit</span>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="/" className="nav-link" aria-current="page">Início</a>
          <a href="#" className="nav-link">Páginas</a>
          <a href="#" className="nav-link">Destaques</a>
          <a href="#" className="nav-link">Assinar</a>
          <a href="#" className="nav-link">Admin</a>
        </nav>

        <div className="search-row" role="search" aria-label="Busca do site">
          <input
            type="search"
            placeholder="Buscar..."
            aria-label="Campo de busca"
            className="search-input"
          />
          <button type="button" className="btn search-btn">Buscar</button>
          <button type="button" className="btn login-btn">Entrar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;