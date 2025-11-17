import React from "react";
import "./Dashboard.css";

const stats = [
  { title: "Posts", value: 128 },
  { title: "Visualizações", value: "54k" },
  { title: "Inscritos", value: "12k" },
  { title: "Pendências", value: 7 },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="panel panel-full">
        <div className="stats-row" aria-hidden>
          {stats.map(s => (
            <div className="stat-card" key={s.title}>
              <div className="label">{s.title}</div>
              <div className="value">{s.value}</div>
            </div>
          ))}
        </div>

        <section className="panel" aria-labelledby="editor-heading">
          <h3 id="editor-heading">Escolhas do Editor</h3>
          <input className="search-input" placeholder="Buscar posts..." aria-label="Buscar posts" />

            <table className="table" style={{marginTop:12}}>
              <thead>
                <tr><th>Post</th><th className="align-right">Ação</th></tr>
              </thead>
              <tbody>
                {["Post #1","Post #2","Post #3","Post #4","Post #5"].map((p) => (
                  <tr key={p}>
                    <td>{p}</td>
                    <td className="align-right">
                      <button className="btn">Agendar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>

      <div style={{marginTop:18}} className="panel">
        <div className="footer-tags" role="navigation" aria-label="Tags">
          <div className="footer-tag">Instagram</div>
          <div className="footer-tag">Work</div>
          <div className="footer-tag">Bags</div>
          <div className="footer-tag">Lamp</div>
          <div className="footer-tag">Books</div>
        </div>
        <div style={{marginTop:16,color:'var(--color-text-light)'}}>© 2025 Meu Site · Meu site</div>
      </div>
    </div>
  );
};

export default Dashboard;