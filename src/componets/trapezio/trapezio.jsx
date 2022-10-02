import React, { useState } from "react";
import "./app.css";
export default function Trapezio() {
  const [B, setB] = useState("");
  const [b, setBm] = useState("");
  const [h, setH] = useState("");
  const [resultadoTrapezio, setResultadoTrapezio] = useState("");

  function Manipulartrapezio(e) {
    e.preventDefault();
    setB(B);
    setBm(b);
    setH(h);
    let A = ((parseFloat(B) + parseFloat(b)) * parseFloat(h)) / 2;
    if (!isNaN(A)) {
      setResultadoTrapezio("A altura do trapezio é " + A);
    } else {
      setResultadoTrapezio("Somente números sao permitido");
    }
    document.getElementById("B").value = "";
    document.getElementById("b").value = "";
    document.getElementById("A").value = "";
  }

  return (
    <div className="trapezio">
      <p>
        Escreva um programa que leia os valores da base maior (B), base menor
        (b) e altura (h) de um trapézio e calcule e imprima o valor de sua área,
        sabendo que a área de um trapézio (A) é dada por:
      </p>

      <form onSubmit={Manipulartrapezio} action="">
        <label htmlFor="">Base maior (B)</label>
        <input
          id="B"
          onChange={(e) => setB(e.target.value)}
          type="text"
          placeholder=" Informe a base maior (B)"
        />

        <label htmlFor="">Base menor (b)</label>
        <input
          id="b"
          onChange={(e) => setBm(e.target.value)}
          type="text"
          placeholder=" Informe a base menor (b)"
        />

        <label htmlFor="">Altura (h)</label>
        <input
          id="A"
          onChange={(e) => setH(e.target.value)}
          type="text"
          placeholder=" Informe a altura (h)"
        />

        <br />
        <button>Verificar</button>
      </form>
      <h1>{resultadoTrapezio}</h1>
    </div>
  );
}
