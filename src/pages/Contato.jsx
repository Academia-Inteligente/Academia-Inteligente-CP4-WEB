import "../css/estilo.css";
import "../css/contato.css";

export default function Contato() {
  return (
    <div className="page">
      <div className="box">
      <h1>Contato</h1>
      <div className="formul">
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu email" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button>Enviar</button>
      </div>
      </div>
    </div>
  );
}
