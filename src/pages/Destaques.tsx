import React from "react";
import '../styles/destaques.css';

const destaques = [
  "Destaque 1",
  "Destaque 2",
  "Destaque 3",
  "Destaque 4",
  "Destaque 5",
  "Destaque 6"
];

export default function Destaques() {
  return (
    <div className="principal">
      <h4>Categoria: Techno</h4>

      <nav className="filtros">
        <a href="#">Popular</a>
        <a href="#">Mais recentes</a>
        <a href="#">IA</a>
        <a href="#">Produtividade</a>
      </nav>

      <div className="cards">
        {destaques.map((titulo, idx) => (
          <div key={idx} className="card">
            <img
              src="https://placehold.jp/150x150.png?text=%20"
              alt={`Imagem ${titulo}`}
            />
            <h4>{titulo}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}