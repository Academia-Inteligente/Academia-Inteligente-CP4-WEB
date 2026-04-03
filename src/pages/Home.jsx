import PlanCard from "../components/PlanCard";
import "../css/estilo.css";
import bannerImg from "../assets/bannerhome.jpg";

export default function Home() {
  return (
    <>
      <section
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-content">
          <h1>Transforme seu corpo com tecnologia</h1>
          <p>Treinos inteligentes, resultados reais</p>
          <button>Começar agora</button>
        </div>
      </section>

      <section className="plans-section">
        <h2>Nossos Planos</h2>

        <div className="plans-container">
          <PlanCard nome="Mensal" preco="R$ 99" beneficios={["Acesso total"]} />
          <PlanCard nome="Trimestral" preco="R$ 249" beneficios={["Avaliação física"]} />
          <PlanCard nome="Anual" preco="R$ 799" beneficios={["Personal trainer"]} />
        </div>
      </section>
    </>
  );
}