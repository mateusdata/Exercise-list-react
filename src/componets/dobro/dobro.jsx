
import { useState } from "react";
import "./app.css";
export default function Dobro() {
  const [number, setNumber] = useState("")
  const [imprimirNumber, setImprimirNumber] = useState("")
  function verificar(e) {
    e.preventDefault();
    let dobro = parseInt(number) + parseInt(number);

    if (!isNaN(dobro) && !isNaN(number) ) {
      setImprimirNumber(`O dobro de ${number} é ${dobro}`);
    } else {
      setImprimirNumber("Somente números sao permitido");
    }
    document.getElementById("dobro").value = null;
  }

  return (
    <div className="dobro">
      <form onSubmit={verificar}>
        <p>Crie um programa que exiba o dobro do number digitado</p>
        <label htmlFor="">Informe um numero</label>
        <input
          id="dobro"
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          placeholder="Informe um número"
        
        />
        <button id="xx">Verificar</button>
      </form>

      <h1>
        {imprimirNumber} <br /> <br />
      </h1>
    </div>
  );
}
