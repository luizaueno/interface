import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Comentarios from "./pages/Comentarios";
import Editor from "./pages/Editor";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <div className="app-container">
        <Sidebar />

        <div className="content">
          <main className="main" role="main">
            <div className="page-inner">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/comentarios" element={<Comentarios />} />
                <Route path="/editor" element={<Editor />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;