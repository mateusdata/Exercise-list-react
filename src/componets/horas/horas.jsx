import React, { useState } from "react";
import "./app.css";
export default function Horas() {
  const [horas, setHoras] = useState("");
  const [resultadoHora, setResultadoHora] = useState("");

  function producaoPeca(e) {
    e.preventDefault();
    let hora = (parseFloat(horas) * 37) / 3600;
    let minutos = (hora - parseInt(hora)) * 60;
    let segundos = (minutos - parseInt(minutos)) * 60;
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
    }
    document.getElementById("hora").value = null;
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
          id="hora"
          placeholder="Quantidade de peças"
          onChange={(e) => setHoras(e.target.value)}
          type="text"
        />
        <button>Verificar</button>
      </form>
      <h1>{resultadoHora}</h1>
    </div>
  );
}