import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Comentários</Link> |{" "}
          <Link to="/editor">Editor</Link> |{" "}
          <Link to="/usuario">Usuário</Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Aqui as páginas vão renderizar */}
      </main>
    </div>
  );
}
