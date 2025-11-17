import React, { useState } from "react";
import "./Editor.css";

type Post = { id: number; title: string; scheduled?: boolean };

const initialPosts: Post[] = [
  { id: 1, title: "Post #1", scheduled: false },
  { id: 2, title: "Post #2", scheduled: true },
  { id: 3, title: "Post #3", scheduled: false },
  { id: 4, title: "Post #4", scheduled: true },
  { id: 5, title: "Post #5", scheduled: false },
];

const Editor: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [query, setQuery] = useState("");

  const toggleSchedule = (id: number) => {
    setPosts((prev) => prev.map(p => p.id === id ? { ...p, scheduled: !p.scheduled } : p));
  };

  const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="editor-container">
      <section className="panel" aria-labelledby="editor-heading">
        <h3 id="editor-heading">Escolhas do Editor</h3>

            <div className="search-wrapper">
              <label htmlFor="editor-search" className="visually-hidden">Buscar posts</label>
              <input
                id="editor-search"
                className="search-input"
                type="text"
                placeholder="Buscar posts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Buscar posts"
              />
            </div>

            <table className="table editor-table" role="table" aria-label="Lista de escolhas do editor">
              <thead>
                <tr>
                  <th>Post</th>
                  <th className="align-right">Ação</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id}>
                    <td>{p.title}</td>
                    <td className="align-right">
                      {p.scheduled ? (
                        <button
                          className="btn"
                          onClick={() => toggleSchedule(p.id)}
                          aria-label={`Remover ${p.title} das escolhas do editor`}
                        >
                          Remover
                        </button>
                      ) : (
                        <button
                          className="btn"
                          onClick={() => toggleSchedule(p.id)}
                          aria-label={`Agendar ${p.title}`}
                        >
                          Agendar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={2} style={{ padding: 16, color: "var(--color-text-light)" }}>
                      Nenhum post encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
  );
};

export default Editor;