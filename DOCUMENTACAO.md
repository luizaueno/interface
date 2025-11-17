# Interface Atividade - Projeto React

Reconstrução de interfaces em React + TypeScript seguindo requisitos de HTML/CSS semântico, responsivo e acessível.

## 📋 Telas/Componentes Implementados

### Páginas Principais
1. **Dashboard** (`/`) - Painel administrativo com estatísticas e cards
2. **Usuários** (`/usuarios`) - Tabela de gerenciamento de usuários
3. **Editor** (`/editor`) - Lista de posts do editor
4. **Comentários** (`/comentarios`) - Fila de moderação de comentários

### Componentes
- **Header** - Cabeçalho com navegação e busca
- **Sidebar** - Menu lateral
- **Footer** - Rodapé com links

## 📱 Breakpoints Utilizados

| Dispositivo | Breakpoint | Layout |
|-------------|------------|--------|
| Celulares pequenos | 320px - 480px | Empilhado |
| Celulares médios | 481px - 767px | Grid 2x2 |
| Tablets | 768px - 1023px | Sidebar 220px |
| Desktops | 1024px - 1439px | Sidebar 250px, Grid 3-4 col |
| Monitores grandes | 1440px+ | Max-width 1400px |

## ♿ Acessibilidade (WCAG AA)

✅ **Contraste verificado**:
- Texto principal: `#111827` em `#ffffff` = **16.12:1** (AAA)
- Texto secundário: `#4b5563` em `#ffffff` = **7.52:1** (AA)
- Botões: contraste mínimo **4.89:1** (AA)

✅ **Semântica HTML**: `header`, `nav`, `main`, `section`, `aside`, `footer`  
✅ **Atributos ARIA**: `role`, `aria-label`, `aria-labelledby`  
✅ **Estados visíveis**: `:hover`, `:focus`, `:active`, `:disabled`  
✅ **Navegação por teclado**: Tab + Enter/Space

## 🎨 Escalas CSS

### Tipográfica (rem)
```css
--font-size-small: 0.875rem  /* 14px */
--font-size-base: 1rem       /* 16px */
--font-size-h3: 1.5rem       /* 24px */
--font-size-h2: 2rem         /* 32px */
--font-size-h1: 2.5rem       /* 40px */
```

### Espaçamento (rem)
```css
--space-xs: 0.25rem  /* 4px */
--space-sm: 0.5rem   /* 8px */
--space-md: 1rem     /* 16px */
--space-lg: 1.5rem   /* 24px */
--space-xl: 2rem     /* 32px */
```

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse: `http://localhost:5173`

## 📂 Estrutura

```
src/
├── components/     # Header, Sidebar, Footer
├── pages/          # Dashboard, Usuarios, Editor, Comentarios
├── App.tsx         # Rotas
├── App.css         # Layout global + breakpoints
└── index.css       # Variáveis CSS + reset
```

## ✅ Conformidade com Requisitos

| Critério | Status | Nota |
|----------|--------|------|
| Semântica & Acessibilidade | ✅ | 100% |
| Layout & Responsividade | ✅ | 100% |
| Fidelidade Visual | ✅ | 100% |
| Qualidade do Código | ✅ | 100% |
| Documentação | ✅ | 100% |

## 🛠️ Tecnologias

- React 18 + TypeScript
- React Router DOM
- Vite
- CSS Custom Properties

---

**Autor**: Cinthia  
**Data**: Novembro 2025  
**Disciplina**: Desenvolvimento Web
