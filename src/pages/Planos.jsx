import PlanCard from "../components/PlanCard";
import "../css/estilo.css";

export default function Planos() {
  return (
    <div className="page">
      <h1>Nossos Planos</h1>

      <div className="plans-container">
        <PlanCard
          nome="Mensal"
          preco="R$ 99"
          beneficios={["Acesso total", "Suporte básico"]}
        />

        <PlanCard
          nome="Trimestral"
          preco="R$ 249"
          beneficios={["Avaliação física", "Treinos personalizados"]}
        />

        <PlanCard
          nome="Anual"
          preco="R$ 799"
          beneficios={["Personal trainer", "Acompanhamento completo"]}
        />
      </div>
    </div>
  );
}