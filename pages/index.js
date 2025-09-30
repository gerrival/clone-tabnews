import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Preencha o seu peso e a sua altura!");
      return;
    }

    const alturaMetros = parseFloat(altura) / 100; // altura em cm -> metros
    const resultado = parseFloat(peso) / (alturaMetros * alturaMetros);

    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (resultado >= 18.5 && resultado < 25) {
      setClassificacao("Peso normal");
    } else if (resultado >= 25 && resultado < 30) {
      setClassificacao("Sobrepeso");
    } else if (resultado >= 30 && resultado < 35) {
      setClassificacao("Obesidade grau I");
    } else if (resultado >= 35 && resultado < 40) {
      setClassificacao("Obesidade grau II");
    } else {
      setClassificacao("Obesidade grau III");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Calculadora de IMC</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>Peso (kg): </label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Ex: 70"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Altura (cm): </label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Ex: 170"
        />
      </div>

      <button
        onClick={calcularIMC}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Calcular
      </button>

      {imc && (
        <div style={{ marginTop: "20px" }}>
          <h2>Seu IMC: {imc}</h2>
          <h3>Classificação: {classificacao}</h3>
        </div>
      )}
    </div>
  );
}
