export default function PlanCard({ nome, preco, beneficios }) {
  return (
    <div className="plan-card">
      <h3>{nome}</h3>
      <h4>{preco}</h4>

      <ul>
        {beneficios.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button>Comprar</button>
    </div>
  );
}