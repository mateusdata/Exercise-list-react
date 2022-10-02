import { useState } from "react";
import "./app.css";
export default function Dobro() {
  const [number, setNumber] = useState("");
  const [imprimirNumber, setImprimirNumber] = useState("");

  function verificar(e) {
    e.preventDefault();
    let dobro = parseFloat(number) + parseFloat(number);
    dobro.toFixed(2);

    if (!isNaN(dobro) && !isNaN(number)) {
      if (parseFloat(number) < 1) {
        setImprimirNumber("Não existe o dobro de 0");
        return;
      } else {
        setImprimirNumber(
          `O dobro de ${parseFloat(number).toFixed(2)} é ${dobro.toFixed(2)}`
        );
      }
    } else {
      setImprimirNumber("Somente números são permitidos");
    }
    document.getElementById("dobro").value = null;
   // setNumber(null)
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
          placeholder={parseInt(number) ? "Ex: " + parseInt(number) : "Ex: 20"}
        />
        <button id="xx">Verificar</button>
      </form>

      <h1>
        {imprimirNumber} <br /> <br />
      </h1>
    </div>
  );
}
