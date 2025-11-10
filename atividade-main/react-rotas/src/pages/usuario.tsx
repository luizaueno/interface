import React from "react";

const Usuarios: React.FC = () => {
  const users = [
    { name: 'Usuário #1', email: 'email@teste.com', status: 'Ativo' },
    { name: 'Usuário #2', email: 'email@teste.com', status: 'Ativo' },
    { name: 'Usuário #3', email: 'email@teste.com', status: 'Bloqueado' },
    { name: 'Usuário #4', email: 'email@teste.com', status: 'Ativo' },
    { name: 'Usuário #5', email: 'email@teste.com', status: 'Ativo' }
  ];

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

      {/* Painel de usuários */}
      <section className="card panel" aria-labelledby="users-title">
        <h2 id="users-title" className="h3">Usuários</h2>

        <div style={{margin: '8px 0'}}>
          <label htmlFor="buscar-usuarios" className="muted">Buscar usuários</label>
          <input id="buscar-usuarios" type="search" placeholder="Buscar usuários..." aria-label="Buscar usuários" style={{marginLeft: '8px'}} />
        </div>

        <div style={{overflowX: 'auto'}}>
          <table className="table" aria-label="Tabela de usuários" style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr>
                <th style={{textAlign: 'left', padding: '8px'}}>Usuário</th>
                <th style={{textAlign: 'left', padding: '8px'}}>E-mail</th>
                <th style={{textAlign: 'left', padding: '8px'}}>Status</th>
                <th style={{textAlign: 'left', padding: '8px'}}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, idx) => (
                <tr key={idx} style={{borderTop: '1px solid #eee'}}>
                  <td style={{padding: '8px'}}>{u.name}</td>
                  <td style={{padding: '8px'}}>{u.email}</td>
                  <td style={{padding: '8px'}}>{u.status}</td>
                  <td style={{padding: '8px'}}>
                    <button className="action-btn" type="button" aria-label={`Bloquear ${u.name}`}>{u.status === 'Bloqueado' ? 'Desbloquear' : 'Bloquear'}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Usuarios;
