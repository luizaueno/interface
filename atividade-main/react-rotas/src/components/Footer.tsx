import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ gridArea: "footer" }}>
        <h4>Instagram</h4>
        <h4>Work</h4>
        <h4>Bags</h4>
        <h4>Lamp</h4>
        <h4>Books</h4>
      </footer>

      <footer className="muted" style={{ padding: ".5rem 0" }}>© 2025 Meu Site · Meu site</footer>
    </>
  );
};

export default Footer;
