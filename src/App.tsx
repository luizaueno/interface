import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Techno from './pages/Techno';
import Destaques from './pages/Destaques';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;