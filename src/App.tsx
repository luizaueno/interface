import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Techno from './pages/Techno';
import Destaques from './pages/Destaques';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import Comentarios from './pages/Comentarios';
import Editor from './pages/Editor';
import './styles/root.css';
import './styles/breakpoints.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="techno" element={<Techno />} />
          <Route path="destaques" element={<Destaques />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="comentarios" element={<Comentarios />} />
          <Route path="editor" element={<Editor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;