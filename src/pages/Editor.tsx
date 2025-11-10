import React from 'react';
import './PostEditor.css';

const PostEditor: React.FC = () => {
  return (
    <div className="post-editor-container">
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

      <div className="editor-content">
        {}
        <aside className="sidebar">
          <h2 className="sidebar-title">Menu</h2>
          <ul className="menu-list">
            <li className="menu-item">Categorias</li>
            <li className="menu-item">Criar Post</li>
            <li className="menu-item">Escolhas do Editor</li>
            <li className="menu-item">Usuários</li>
            <li className="menu-item">Fila de revisão</li>
            <li className="menu-item">Fila de comentários</li>
          </ul>

          <div className="divider"></div>

          {}
          <footer className="sidebar-footer">
            <div className="social-links">
              <div className="social-link">Instagram</div>
              <div className="social-link">Work</div>
              <div className="social-link">Bags</div>
              <div className="social-link">Lamp</div>
              <div className="social-link">Books</div>
            </div>
            <div className="copyright">
              © 2007 Mercedes-Mitworks
            </div>
          </footer>
        </aside>

        {}
        <main className="main-editor">
          {}
          <section className="editor-section">
            <h2 className="section-title">Preço</h2>
            <h3 className="subsection-title">Texto</h3>
            <div className="text-preview">
              Esteve aqui... (Editor simulado)
            </div>
          </section>

          <div className="divider"></div>

          {}
          <section className="editor-section">
            <h2 className="section-title">Descrição</h2>
            <div className="description-items">
              <div className="description-item">Categorias e tags</div>
              <div className="description-item">Upload de imagem de capa</div>
            </div>
            
            <div className="action-buttons">
              <button className="btn btn-secondary">Salvar rascunho</button>
              <button className="btn btn-secondary">Enviar para revisão</button>
              <button className="btn btn-primary">Publicar (admin)</button>
            </div>
          </section>

          <div className="divider"></div>

          {}
          <section className="editor-section">
            <h2 className="section-title">Indicador</h2>
            <div className="indicator-links">
              <span className="indicator-link">Instagram</span>
              <span className="indicator-link">Work</span>
              <span className="indicator-link">Bags</span>
              <span className="indicator-link">Lamp</span>
              <span className="indicator-link">Books</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PostEditor;