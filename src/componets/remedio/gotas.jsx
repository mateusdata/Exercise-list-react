import React, { useState } from "react";
import "./app.css";
let placePeso = null;
export default function Gotas() {
  const [peso, setPeso] = useState("");
  const [exibirGotas, setExibirGotas] = useState("");

  function QuantidadeGotas(e) {
    e.preventDefault();
    let quantidades = (parseInt(peso) * 5) / 2;
    placePeso = parseInt(peso);
    if (!isNaN(peso) && !isNaN(quantidades) && peso > 0) {
      setExibirGotas("A quantidade a ser igerida é " + quantidades + " gotas");
    } else {
      setExibirGotas("Somente números são permitidos");
    }

    document.getElementById("remedio").value = null;
    setPeso(null);
  }
  return (
    <div className="gotas">
      <p>
        Escreva um programa para ajudar a calcular a quantidade de gotas de um
        remédio que uma determinada criança precisa tomar. A bula desse remédio
        pediátrico recomenda a seguinte dosagem: 5 gotas para cada 2 kg do peso
        da criança. Você deve fazer um programa que leia o peso desta criança,
        calcule e imprima na tela a quantidade de gotas a ser tomada.
      </p>
      <form action="" onSubmit={QuantidadeGotas}>
        <label>Quantidade gotas</label>
        <input
          id="remedio"
          onChange={(e) => setPeso(e.target.value)}
          placeholder={placePeso ? "Ex: " + placePeso : "Ex: 55" }
          type=""
        />
        <button type="submit">Verificar</button>
      </form>
      <h1>{exibirGotas}</h1>
    </div>
  );
}
