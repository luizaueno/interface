import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/mainlayout";
import Comentarios from "./pages/comentarios";
import Editor from "./pages/editor";
import {Usuario} from "./pages/usuario";
import "./styles/root.css";
import "./styles/breakpoints.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Comentarios />} />
          <Route path="editor" element={<Editor />} />
          <Route path="usuario" element={<Usuario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
