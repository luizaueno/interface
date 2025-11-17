import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      {/* título escondido para leitores de tela */}
      <h4 id="footer-heading" style={{ position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        Rodapé
      </h4>

      <nav aria-label="Links do rodapé">
        <ul className="footer-links">
          <li><a href="#" aria-label="Instagram">Instagram</a></li>
          <li><a href="#" aria-label="Work">Work</a></li>
          <li><a href="#" aria-label="Bags">Bags</a></li>
          <li><a href="#" aria-label="Lamp">Lamp</a></li>
          <li><a href="#" aria-label="Books">Books</a></li>
        </ul>
      </nav>

      <div className="footer-muted" style={{ marginTop: 14 }}>
        <small>© {new Date().getFullYear()} Meu Site · Meu site</small>
      </div>
    </footer>
  );
};

export default Footer;