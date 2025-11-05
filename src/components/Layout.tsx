import { Link } from "react-router-dom";
import '../styles/home.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Habit</h1>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/paginas">Páginas</Link>
          <Link to="/destaques">Destaques</Link>
          <Link to="/assinar">Assinar</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
        <button>Entrar</button>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>Instagram</p>
        <p>Work</p>
        <p>Bags</p>
        <p>Lamp</p>
        <p>Books</p>
      </footer>
    </div>
  );
}

export default Layout;