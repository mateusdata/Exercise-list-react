import React, { useState } from "react";
import "./app.css";
let placeDiaria = null;
export default function Hotel() {
  const [diaria, setDiaria] = useState("");
  const [diariaPromocional, setExibirPromocao] = useState("");
  const [diaria80Promocional, setExibir80Promocao] = useState("");
  const [diaria50Promocional, setExibir50Promocao] = useState("");
  const [diferencaValores, setDiferencaValores] = useState("");

  function verificarPromocoes(e) {
    e.preventDefault();
    let diariaPm = parseFloat(diaria) - parseFloat(diaria) * 0.25;
    let valorArrecadado80 = 80 * 0.8 * diariaPm;
    let valorArrecadado50 = 50 * 0.8 * diaria;
    placeDiaria = parseInt(diaria);
    let diferencaEntrevalores = valorArrecadado80 - valorArrecadado50;
    if (!isNaN(diaria) && diaria > 0) {
      setExibirPromocao("Valor da diária promocional R$" + diariaPm);
      setExibir80Promocao(
        "Total arrecadado com 80% de ocupação e diária promocional R$" +
          valorArrecadado80.toFixed(2)
      );
      setExibir50Promocao(
        "O valor total arrecadado com 50% de ocupação e diária normal R$" +
          valorArrecadado50.toFixed(2)
      );
      setDiferencaValores(
        "A diferença entre estes dois valores R$" +
          diferencaEntrevalores.toFixed(2)
      );
    } else {
      setExibirPromocao(null);
      setExibir80Promocao(null);
      setExibir50Promocao(null);
      setDiferencaValores("Somente números são permitidos");
    }
    document.getElementById("inputHotel").value = null
  }

  return (
    <div className="hotel">
      <p>
        Um hotel com 80 apartamentos deseja fazer uma promoção especial de final
        de semana, concedendo um desconto de 25% na diária. Com isto, espera
        aumentar sua taxa de ocupação de 50% para 80%. Sendo dado o valor normal
        da diária, escreva um programa que calcule e imprima:
        <ul>
          <li> a) o valor da diária promocional; </li>
          <li>
            {" "}
            b) valor total arrecadado com 80% de ocupação e diária promocional
          </li>
          <li>
            {" "}
            c) o valor total arrecadado com 50% de ocupação e diária normal
          </li>
          <li> d) a diferença entre estes dois valores</li>
        </ul>
      </p>
      <form action="" onSubmit={verificarPromocoes}>
        <label htmlFor="">Diária normal</label>
        <input
        id="inputHotel"
          onChange={(e) => setDiaria(e.target.value)}
          type="text"
          placeholder={placeDiaria ? "Ex: " + placeDiaria : "Ex: 10" }
        />
        <button>Verificar</button>
      </form>
      <h1>{diariaPromocional}</h1>
      <h1>{diaria80Promocional}</h1>
      <h1>{diaria50Promocional}</h1>
      <h1>{diferencaValores}</h1>
    </div>
  );
}
