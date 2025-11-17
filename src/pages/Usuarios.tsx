import "./usuarios.css";

const Users = () => {
  const users = [
    { id: 1, nome: "Usuário #1", email: "email@teste.com", status: "Ativo" },
    { id: 2, nome: "Usuário #2", email: "email@teste.com", status: "Ativo" },
    { id: 3, nome: "Usuário #3", email: "email@teste.com", status: "Bloqueado" },
    { id: 4, nome: "Usuário #4", email: "email@teste.com", status: "Ativo" },
    { id: 5, nome: "Usuário #5", email: "email@teste.com", status: "Ativo" }
  ];

  return (
    <div className="usuarios-container">
      <div className="panel">
        <h3>Usuários</h3>
        <input 
          type="text" 
          placeholder="Buscar usuários..." 
          className="search-input"
          aria-label="Buscar usuários"
        />

        <div style={{ marginTop: 12 }}>
          <table className="table" aria-label="Lista de usuários">
            <thead>
              <tr>
                <th>Usuário</th>
                <th>E-mail</th>
                <th>Status</th>
                <th className="align-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.nome}</td>
                  <td>{u.email}</td>
                  <td>
                    <span className={`status-badge ${u.status === "Ativo" ? "status-ativo" : "status-bloqueado"}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="align-right">
                    <button className="btn">
                      {u.status === "Ativo" ? "Bloquear" : "Desbloquear"}
                    </button>
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

export default Users;
