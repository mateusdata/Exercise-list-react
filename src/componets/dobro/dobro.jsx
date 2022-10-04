import { useState } from "react";
import "./app.css";
export default function Dobro() {
  const [number, setNumber] = useState("");
  const [imprimirNumber, setImprimirNumber] = useState("");
  const [cor, setCor] = useState(null);
  const [limparCampo, setLimparCampo] = useState(null);

  function verificar(e) {
    e.preventDefault();
    let dobro = parseFloat(number) + parseFloat(number);
    dobro.toFixed(2);

    if (!isNaN(dobro) && !isNaN(number)) {
      setImprimirNumber(
        `O dobro de ${parseFloat(number).toFixed(0)} é ${dobro.toFixed(0)}`
      );
      setCor(true);
      setLimparCampo(true)
    } else {
      setImprimirNumber("Somente números são permitidos");
      setCor(false);
      setLimparCampo(true)
    }
    setNumber("");
  }


  function limparTela(){
    setImprimirNumber("")
    setLimparCampo(false)

  }

  return (
    <div className="dobro">
      <form onSubmit={verificar}>
        <p>Crie um programa que exiba o dobro do number digitado</p>
        <label htmlFor="">Informe um numero</label>
        <input
        value={number}
          id="dobro"
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder={parseInt(number) ? "Ex: " + parseInt(number) : "Ex: 20"}
        />
        <button id="xx">Verificar</button>
        {limparCampo ?  <button  onClick={limparTela} style={{backgroundColor:"#76247f"}}>Limpar campo</button>: null}
      </form>
      

      <h1 style={{color: cor ? "green" : "#c41111"}}> {imprimirNumber} <br /> <br />
      </h1>
    </div>
  );
}
