import React from "react";

const Comentarios: React.FC = () => {
  const comments = Array.from({ length: 5 }).map((_, i) => ({
    text: `Comentário #${i + 1} — Usuário ${i + 1} — Em revisão`,
    id: i + 1,
  }));

  return (
    <div>
      {/* Estatísticas rápidas */}
      <div className="card stats" role="region" aria-label="Estatísticas rápidas" style={{display: 'flex', gap: '12px', marginBottom: '16px'}}>
        <div className="stat" style={{padding: '12px'}}>
          <div className="muted">Posts</div>
          <strong>128</strong>
        </div>
        <div className="stat" style={{padding: '12px'}}>
          <div className="muted">Visualizações</div>
          <strong>54k</strong>
        </div>
        <div className="stat" style={{padding: '12px'}}>
          <div className="muted">Inscritos</div>
          <strong>12k</strong>
        </div>
        <div className="stat" style={{padding: '12px'}}>
          <div className="muted">Pendências</div>
          <strong>7</strong>
        </div>
      </div>

      {/* Painel de comentários */}
      <section className="card panel" aria-labelledby="comments-title">
        <h2 id="comments-title" className="h3">Fila de comentários</h2>

        <div style={{margin: '8px 0'}}>
          <label htmlFor="buscar-comentarios" className="muted">Buscar comentários</label>
          <input id="buscar-comentarios" type="search" placeholder="Buscar comentários..." aria-label="Buscar comentários" style={{marginLeft: '8px'}} />
        </div>

        <div role="list" aria-label="Lista de comentários">
          {comments.map((c) => (
            <article className="post-item" role="listitem" key={c.id} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid #eee'}}>
              <div>{c.text}</div>
              <div style={{display: 'flex', gap: '8px'}}>
                <button className="action-btn" type="button">Aprovar</button>
                <button className="action-btn" type="button">Reprovar</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Comentarios;
