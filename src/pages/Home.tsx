import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="principal">
      <section className="intro">
        <h2>Navegue por tópicos de interesse</h2>
        <p>Descubra conteúdos por categorias, posts em destaque e as escolhas do editor</p>
        <div className="intro-actions">
          <button>Explorar categorias</button>
          <button>Assine a newsletter</button>
        </div>
        <img
          src="https://placehold.jp/350x250.png?text=%20"
          alt="imagem placeholder nav"
          className="image"
        />
      </section>
      <section className="categorias">
        <h4>Categorias populares</h4>
        <div className="cards">
          <h4>Work</h4>
          <h4>Books</h4>
          <Link to="/techno"><h4>Techno</h4></Link>
        </div>

        <div className="lista-categorias">
        <h4>Todas as categorias</h4>
          <p>Negócios</p>
          <Link to="/techno"><p>Techno</p></Link>
          <p>Produtividade</p>
          <p>Filmes</p>
          <p>Lifestyle</p>
          <p>Educação</p>
          <p>Mailing</p>
          <p>Ecommerce</p>
          <p>Alimentação</p>
          <p>Social</p>
        </div>
      </section>

      <section className="destaques">
        <h4 className="title-destaque">Postagens em Destaque</h4>

        <div className="destaque">
          <p>31 Jul 2025 &bull; Destaque</p>
          <img
            src="https://placehold.jp/150x150.png?text=%20"
            alt="imagem destaque 1"
            className="image"
          />
          <h4>Erros de Design que Todos Devem Evitar</h4>
          <p>3 min de leitura</p>
        </div>

        <div className="destaque">
          <p>31 Jul 2025 &bull; Destaque</p>
          <img
            src="https://placehold.jp/150x150.png?text=%20"
            alt="imagem destaque 2"
            className="image"
          />
          <h4>As Maiores Empresas por Receita</h4>
        </div>
      </section>

      <aside className="editor">
        <h4>Escolhas do editor</h4>
        <ul>
          <li>O uso negativo da internet</li>
          <li>O segredo do brainstorm</li>
          <li>Escalar para pequenos negócios</li>
          <li>O futuro do trabalho remoto</li>
        </ul>
      </aside>
    </div>
  );
}
