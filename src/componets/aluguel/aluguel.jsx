import React, { useState } from "react";
import "./app.css";

export default function Aluguel() {
  const [agenciaX, setAgenciaX] = useState("");
  const [agenciaY, setAgenciaY] = useState("");
  const [resuldadoAgencias, setResuldadoAgencias] = useState("");

  function verificarAgencia(e) {
    e.preventDefault();
    let resultadoX = parseFloat(agenciaX) * 1.4 + 62;
    let resultadoY = parseFloat(agenciaY) * 1.2 + 80;
    if (!isNaN(resultadoX) && !isNaN(resultadoY) && !isNaN(agenciaX)) {
      setResuldadoAgencias(
        `O preço da diaria primeira agencia é R$${resultadoX.toFixed(
          2
        )}, preço da diaria na agencia Y é R$${resultadoY.toFixed(2)}`
      );
      document.getElementById("agenciaX").value = null;
      document.getElementById("agenciaY").value = null;
    }
  }

  return (
    <div className="aluguel">
      <p>
        Um grupo de amigos pretende alugar um carro por um único dia.
        Consultadas duas agências, a primeira cobra R$62,00 pela diária e R$1,40
        por quilômetro rodado. A segunda cobra diária de R$80,00 e mais R$1,20
        por quilômetro rodado. Escreva um programa que leia a quantidade de
        quilômetros a serem rodados e calcule e imprima na tela o preço a ser
        pago em cada uma das agências.
      </p>

      <form action="" onSubmit={verificarAgencia}>
        <label htmlFor="">Primeira agência</label>
        <input
          onChange={(e) => setAgenciaX(e.target.value)}
          id="agenciaX"
          type="text"
          placeholder="Quantidade de km rodado"
        />
        <label htmlFor="">Segunda agência</label>
        <input
          onChange={(e) => setAgenciaY(e.target.value)}
          id="agenciaY"
          type="text"
          placeholder="Quantidade de km rodado"
        />{" "}
        <br />
        <button>Verificar</button>
      </form>

      <h1>{resuldadoAgencias}</h1>
    </div>
  );
}
