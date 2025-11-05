
import React from "react";

import "../styles/Techno.css";

const posts = [
  "Título da postagem 1",
  "Título da postagem 2",
  "Título da postagem 3",
  "Título da postagem 4",
  "Título da postagem 5",
  "Título da postagem 6",
  "Título da postagem 7",
  "Título da postagem 8",
  "Título da postagem 9"
];

function Techno() {
  return (
    
      <main>
        <h4>Categoria: Techno</h4>
      <nav className="filtros">
        <a href="#">Popular</a>
        <a href="#">Mais recentes</a>
        <a href="#">IA</a>
        <a href="#">Produtividade</a>
      </nav>

        <div className="cards">
          {posts.map((titulo, idx) => 
            <div key={idx} className="card">
              <img src="https://placehold.jp/150x150.png?text=%20" alt={`Imagem ${titulo}`} />
              <h4>{titulo}</h4>
              <p>31 Jul 2025</p>
            </div>
          )}
        </div>
        <button type="button" className="
        botao">Carregar mais</button>
      </main>

  );
}

export default Techno;