import React, { useState } from "react";
import "./app.css";
let placePeso = null;
export default function Gotas() {
  const [peso, setPeso] = useState("");
  const [exibirGotas, setExibirGotas] = useState("");
  const [cor, setCor] = useState(null);
  const [limparCampo, setLimparCampo] = useState(null);

  function QuantidadeGotas(e) {
    e.preventDefault();
    let quantidades = (parseInt(peso) * 5) / 2;
    placePeso = parseInt(peso);
    if (!isNaN(peso) && !isNaN(quantidades) && peso > 0) {
      setExibirGotas("A quantidade a ser igerida é " + quantidades + " gotas")
      setCor(true);
    } else {
      setExibirGotas("Somente números são permitidos")
      setCor(false);
    }
    setPeso("");
    setLimparCampo(true);
   
  }

  function limparTela(){
    setExibirGotas("");
    setLimparCampo(false);
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
        value={peso}
          id="remedio"
          onChange={(e) => setPeso(e.target.value)}
          placeholder={placePeso ? "Ex: " + placePeso : "Ex: 55"}
          type=""
        />
        <button type="submit">Verificar</button>
        {limparCampo ?  <button onClick={limparTela} style={{backgroundColor:"#76247f"}}>Limpar campo</button>: null}
      </form>
      <h1 style={{color: cor ? "green" : "#c41111"}}>{exibirGotas}</h1>
    </div>
  );
}
