import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2 id="menu-title" className="h3">Menu</h2>

      <nav aria-label="Menu principal">
        <ul>
          <li><NavLink to="/categorias">Categorias</NavLink></li>
          <li><NavLink to="/criar-post">Criar Post</NavLink></li>
          <li><NavLink to="/editor">Escolhas do Editor</NavLink></li>
          <li><NavLink to="/usuarios">Usuários</NavLink></li>
          <li><NavLink to="/fila-revisao">Fila de revisão</NavLink></li>
          <li><NavLink to="/comentarios">Fila de comentários</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
