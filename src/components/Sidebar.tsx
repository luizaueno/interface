import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar" aria-labelledby="sidebar-title" role="complementary">
      <h3 id="sidebar-title" className="sidebar-title">Menu</h3>

      <nav aria-label="Navegação do menu">
        <ul className="sidebar-list">
          <li className="sidebar-item"><a className="sidebar-link" href="#">Categorias</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="#">Criar Post</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="/editor">Escolhas do Editor</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="/usuarios">Usuários</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="#">Fila de revisão</a></li>
          <li className="sidebar-item"><a className="sidebar-link" href="/comentarios">Fila de comentários</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;