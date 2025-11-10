import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Comentarios from './pages/comentarios';
import Editor from './pages/editor';
import Usuarios from './pages/usuario';

function App() {
  return (
    <Router>
      <nav style={{ padding: '16px', background: '#eee', display: 'flex', gap: '12px' }}>
        <Link to="/comentarios">Comentários</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/usuarios">Usuários</Link>
      </nav>

      <div style={{ padding: '16px' }}>
        <Routes>
          <Route path="/comentarios" element={<Comentarios />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/" element={<h1>Bem-vindo ao Dashboard</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
