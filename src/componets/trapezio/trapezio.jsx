import React, { useState } from "react";
import "./app.css";
let placeB = null;
let placeBb = null;
let placeH = null;
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
    placeB = parseInt(B);
    placeBb = parseInt(b);
    placeH = parseInt(h);
    let A = ((parseFloat(B) + parseFloat(b)) * parseFloat(h)) / 2;
    if (!isNaN(A)) {
      setResultadoTrapezio("A altura do trapezio é " + A);
    } else {
      setResultadoTrapezio("Somente números sao permitidos");
    }
    document.getElementById("B").value = "";
    document.getElementById("b").value = "";
    document.getElementById("A").value = "";
    setB(null);
    setBm(null);
    setH(null);
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
          placeholder={placeB ? "Ex: " + placeB : "Ex: 30"}
        />

        <label htmlFor="">Base menor (b)</label>
        <input
          id="b"
          onChange={(e) => setBm(e.target.value)}
          type="text"
          placeholder={placeBb ? "Ex: " + placeBb : "Ex: 40"}
        />

        <label htmlFor="">Altura (h)</label>
        <input
          id="A"
          onChange={(e) => setH(e.target.value)}
          type="text"
          placeholder={placeH ? "Ex: " + placeH : "Ex: 50"}
        />

        <br />
        <button>Verificar</button>
      </form>
      <h1>{resultadoTrapezio}</h1>
    </div>
  );
}
