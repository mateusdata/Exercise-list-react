import React, { useState } from "react";
import "./app.css";
let placeHora = null;
export default function Horas() {
  const [horas, setHoras] = useState("");
  const [resultadoHora, setResultadoHora] = useState("");
  const [cor, setCor] = useState(null);
  const [limparCampo, setLimparCampo] = useState(null);

  function producaoPeca(e) {
    e.preventDefault();
    let hora = (parseFloat(horas) * 37) / 3600;
    let minutos = (hora - parseInt(hora)) * 60;
    let segundos = (minutos - parseInt(minutos)) * 60;
    placeHora = parseInt(horas);
    console.log(
      "HOTAS: " + hora.toFixed(2) + "\n segundo" + minutos + "\n" + segundos
    );
    if (!isNaN(horas) && horas > 0) {
      setResultadoHora(
        parseInt(hora) +
          " horas, " +
          parseInt(minutos) +
          " minutos e " +
          parseInt(segundos) +
          " segundos"
      );
      setCor(true);
    } else {
      setResultadoHora("Somente números são permitidos");
      setCor(false);
    }
    setHoras("");
    setLimparCampo(true);
  }

  function limparTela() {
    setResultadoHora("");
    setLimparCampo(false);
  }

  return (
    <div className="hora">
      <p>
        Um sistema de máquinas demora 37 segundos para produzir uma peça. Sua
        tarefa é fazer um programa que leia a quantidade de peças a ser
        produzida e calcule o tempo em horas, minutos e segundos necessário para
        produzir essa quantidade de peças. Exemplo: Se digitado pelo usuário a
        quantidade 250, deverá aparecer na tela 2 horas, 34 minutos e 10
        segundos.
      </p>

      <form action="" onSubmit={producaoPeca}>
        <label htmlFor="">Quantidade de peças</label>
        <input
          max={10}
          min={1}
          minLength={1}
          maxLength={10}
          value={horas}
          id="hora"
          placeholder={placeHora ? "Ex: " + placeHora : "Ex: 12"}
          onChange={(e) => setHoras(e.target.value)}
          type="number"
        />
        <button>Verificar</button>
        {limparCampo ? (
          <button onClick={limparTela} style={{ backgroundColor: "#76247f" }}>
            Limpar campo
          </button>
        ) : null} 
      </form>
      <h1 style={{ color: cor ? "green" : "#c41111" }}>{resultadoHora}</h1>
    </div>
  );
}
