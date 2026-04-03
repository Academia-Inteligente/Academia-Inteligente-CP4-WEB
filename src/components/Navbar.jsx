import { Link } from "react-router-dom";
import "../css/estilo.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> Academia Inteligente</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/imc">IMC</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

