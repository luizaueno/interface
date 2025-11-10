import React from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter-container">
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

      {}
      <main className="main-content">
        <h1 className="newsletter-title">Assine a newsletter</h1>
        
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" id="comunicacoes" className="checkbox-input" />
            <label htmlFor="comunicacoes" className="checkbox-label">
              Estabando em receber comunicações e si a política de privacidade.
            </label>
          </div>
          
          <div className="checkbox-item">
            <input type="checkbox" id="politica" className="checkbox-input" />
            <label htmlFor="politica" className="checkbox-label">
              {}
            </label>
          </div>
        </div>

        <div className="divider"></div>

        {}
        <footer className="footer-links">
          <span className="footer-link">Instagram</span>
          <span className="footer-link">Work</span>
          <span className="footer-link">Bags</span>
          <span className="footer-link">Lamp</span>
          <span className="footer-link">Books</span>
        </footer>
      </main>
    </div>
  );
};

export default Newsletter;