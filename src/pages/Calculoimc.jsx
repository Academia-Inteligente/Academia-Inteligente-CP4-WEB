import React, { useState } from 'react';
import '../css/calculadora.css';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (e) => {
    e.preventDefault();
    if (peso > 0 && altura > 0) {
      const altMetros = altura / 100;
      const imc = (peso / (altMetros * altMetros)).toFixed(1);
      setResultado(imc);
    }
  };

  return (
    <section className="secao-imc">
      <div className="container-imc">
        <div className="cabecalho-imc">
          <h2>Monitore seu Progresso</h2>
          <p className="subtitulo-academia">Treinos inteligentes, resultados reais.</p>
        </div>

        <div className="conteudo-imc">
          <form className="form-imc" onSubmit={calcular}>
            <div className="input-grupo-academia">
              <label>Peso (kg)</label>
              <input 
                type="number" 
                value={peso} 
                onChange={(e) => setPeso(e.target.value)} 
                placeholder="Ex: 80" 
                required 
              />
            </div>

            <div className="input-grupo-academia">
              <label>Altura (cm)</label>
              <input 
                type="number" 
                value={altura} 
                onChange={(e) => setAltura(e.target.value)} 
                placeholder="Ex: 175" 
                required 
              />
            </div>

            <button type="submit" className="btn-academia-blue">Calcular Agora</button>
          </form>

          {resultado && (
            <div className="resultado-imc-card academia-card-style">
              <h3>Seu IMC:</h3>
              <span className="numero-imc">{resultado}</span>
              <p className="status-ok">Cálculo realizado com sucesso!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculadoraIMC;