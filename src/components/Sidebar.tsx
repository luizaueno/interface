import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar" aria-labelledby="sidebar-title" role="complementary">
      <h3 id="sidebar-title" className="sidebar-title">Menu</h3>

      <nav aria-label="Navegação do menu">
        <ul className="sidebar-list">
          <li className="sidebar-item"><Link className="sidebar-link" to="/">Dashboard</Link></li>
          <li className="sidebar-item"><Link className="sidebar-link" to="#">Categorias</Link></li>
          <li className="sidebar-item"><Link className="sidebar-link" to="#">Criar Post</Link></li>
          <li className="sidebar-item"><Link className="sidebar-link" to="/editor">Escolhas do Editor</Link></li>
          <li className="sidebar-item"><Link className="sidebar-link" to="/usuarios">Usuários</Link></li>
          <li className="sidebar-item"><Link className="sidebar-link" to="#">Fila de revisão</Link></li>
          <li className="sidebar-item"><Link className="sidebar-link" to="/comentarios">Fila de comentários</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;