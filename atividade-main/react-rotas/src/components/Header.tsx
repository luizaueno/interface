import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="topbar">
          <div className="brand">
            <span>HABIT</span>
          </div>
          <nav aria-label="principal" className="main-nav">
            <NavLink to="/instagram">Instagram</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/bags">Bags</NavLink>
            <NavLink to="/lamp">Lamp</NavLink>
            <NavLink to="/books">Books</NavLink>
          </nav>
          <div className="search-row">
            <label htmlFor="buscar-posts" className="sr-only">Buscar</label>
            <input id="buscar-posts" type="search" placeholder="Buscar..." aria-label="Buscar posts" />
            <button className="btn" type="button">Buscar</button>
            <button className="btn" type="button">Entrar</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
