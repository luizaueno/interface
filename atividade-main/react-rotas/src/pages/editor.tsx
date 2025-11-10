import React from "react";

const Editor: React.FC = () => {
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

      {/* Painel de escolhas do editor */}
      <section className="card panel" aria-labelledby="editor-title">
        <h2 id="editor-title" className="h3">Escolhas do Editor</h2>

        <div className="editor-search" style={{margin: '12px 0'}}>
          <label htmlFor="buscar-editor" className="muted">Buscar posts</label>
          <input id="buscar-editor" type="search" placeholder="Buscar posts..." aria-label="Buscar posts" style={{marginLeft: '8px'}} />
        </div>

        <div role="list" aria-label="Lista de posts">
          {Array.from({ length: 5 }).map((_, i) => (
            <article className="post-item" role="listitem" key={i} style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid #eee'}}>
              <div>{`Post #${i + 1}`}</div>
              <div>
                <button className="action-btn" type="button">{i % 2 === 0 ? 'Remover' : 'Agendar'}</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Editor;
