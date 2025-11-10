import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: 12 }}>
        <div className="app-grid" style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 20 }}>
          <aside>
            <Sidebar />
          </aside>

          <section className="main-content">
            <Outlet />
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
