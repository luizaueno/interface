import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {}
      <header className="header">
        <div className="header-left">
          <span className="header-item">HABIT</span>
          <span className="header-item">Início</span>
          <span className="header-item">Páginas</span>
          <span className="header-item">Destaques</span>
        </div>
        <div className="header-right">
          <span className="header-item">Assinar</span>
          <span className="header-item">Admin</span>
        </div>
      </header>

      <div className="dashboard-content">
        {}
        <aside className="sidebar">
          <h2 className="sidebar-title">Menu</h2>
          <div className="menu-section">
            <div className="menu-category">Categoria:</div>
            <ul className="menu-list">
              <li className="menu-item">Cifar Post</li>
              <li className="menu-item">Escolhas do Editor</li>
              <li className="menu-item">Usuários</li>
              <li className="menu-item">Fila de revisão</li>
              <li className="menu-item">Fila de comentários</li>
            </ul>
          </div>

          <div className="divider"></div>

          {}
          <div className="categories-section">
            <h3 className="section-title">Categorias</h3>
            <div className="search-categories">Buecar categorias.</div>
            
            <h3 className="section-title">Categoria</h3>
            <ul className="categories-list">
              <li className="category-item">Categoria #1</li>
              <li className="category-item">Categoria #2</li>
              <li className="category-item">Categoria #3</li>
              <li className="category-item">Categoria #4</li>
              <li className="category-item">Categoria #5</li>
            </ul>
          </div>

          <div className="divider"></div>

          {}
          <div className="editor-section">
            <h3 className="section-title">Editor</h3>
            <div className="editor-list">
              <div className="editor-item">Excluir</div>
              <div className="editor-item">Editor</div>
              <div className="editor-item">Excluir</div>
              <div className="editor-item">Editor</div>
              <div className="editor-item">Excluir</div>
              <div className="editor-item">Editor</div>
              <div className="editor-item">Excluir</div>
              <div className="editor-item">Editor</div>
              <div className="editor-item">Excluir</div>
            </div>
          </div>
        </aside>

        {}
        <main className="main-content">
          {}
          <div className="stats-section">
            <div className="stat-card">
              <h3 className="stat-title">Poste</h3>
              <div className="stat-value">128</div>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Visualizações</h3>
              <div className="stat-value">54k</div>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Inscritos</h3>
              <div className="stat-value">12k</div>
            </div>
            <div className="stat-card">
              <h3 className="stat-title">Perdências</h3>
              <div className="stat-value">7</div>
            </div>
          </div>

          <div className="divider"></div>

          {}
          <footer className="footer">
            <div className="social-links">
              <div className="social-link">Instagram</div>
              <div className="social-link">Work</div>
              <div className="social-link">Bags</div>
              <div className="social-link">Lamp</div>
              <div className="social-link">Books</div>
            </div>
            <div className="copyright">
              © 2023 Digital News Magazine
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;