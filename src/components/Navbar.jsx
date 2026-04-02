import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/planos">Planos</Link>
      <Link to="/imc">IMC</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}