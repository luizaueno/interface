import React, { useState } from "react";
import "./Comentarios.css";

type CommentItem = { id:number; titulo:string; autor:string; status:string };

const initial: CommentItem[] = [
  { id:1, titulo:"Comentário #1", autor:"Usuário 1", status:"Em revisão" },
  { id:2, titulo:"Comentário #2", autor:"Usuário 2", status:"Em revisão" },
  { id:3, titulo:"Comentário #3", autor:"Usuário 3", status:"Em revisão" },
  { id:4, titulo:"Comentário #4", autor:"Usuário 4", status:"Em revisão" },
  { id:5, titulo:"Comentário #5", autor:"Usuário 5", status:"Em revisão" },
];

const initialStats = [
  { title: "Posts", value: 128 },
  { title: "Visualizações", value: "54k" },
  { title: "Inscritos", value: "12k" },
  { title: "Pendências", value: 7 },
];

const Comentarios: React.FC = () => {
  const [comments] = useState<CommentItem[]>(initial);

  return (
    <div>
      {/* Estatísticas */}
      <div className="stats-row" role="list" aria-label="Estatísticas rápidas">
        {initialStats.map((stat) => (
          <div className="stat-card" key={stat.title} role="listitem">
            <div className="label">{stat.title}</div>
            <div className="value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="panel">
        <h3>Fila de comentários</h3>
        <input className="search-input" placeholder="Buscar comentários..." aria-label="Buscar comentários" />

        <div style={{marginTop:12}}>
          <table className="table" aria-label="Comentários em revisão">
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Status</th>
                <th className="align-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {comments.map(c => (
                <tr key={c.id}>
                  <td>{c.titulo}</td>
                  <td>{c.autor}</td>
                  <td>{c.status}</td>
                  <td className="align-right">
                    <button className="btn">Aprovar</button>
                    <button className="btn">Rejeitar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;