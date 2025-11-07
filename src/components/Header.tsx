import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className='header'>
      <div className='logo'><b>Habit</b></div>

      <nav className='nav'>
        <Link to="/">Início</Link>
        <span>Páginas</span>
        <Link to="/destaques">Destaques</Link>
        <span>Assinar</span>
        <span>Admin</span>
      </nav>

      <div className="actions">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
        <button>Entrar</button>
    </div>
    </header>
      
  );
}