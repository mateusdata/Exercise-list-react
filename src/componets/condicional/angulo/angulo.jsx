import React, { useState } from "react";
import "./angulo.css";

export default function Angulo() {
  const [angulo, setAngulo] = useState("");
  const [exibirAngulo, setExibirAngulo] = useState("");
  const [cor, setCor0] = useState(null);
  const [limparCampo, setLimparCampo] = useState(null);

  function VerificarAngulo(e) {
    e.preventDefault();
    if (!isNaN(angulo) && parseFloat(angulo) > 0) {
      setCor0(true);
      if (parseFloat(angulo) < 90) {
        setExibirAngulo(`O ângulo ${angulo} é agulo`);
      }
      if (parseFloat(angulo) > 90) {
        setExibirAngulo(`O ângulo ${angulo} é obtuso`);
      }
      if (parseFloat(angulo) === 90) {
        setExibirAngulo(`O ângulo ${angulo} é  reto`);
      }
    }
    else{
        setExibirAngulo("Somente números são permitidos");
        setCor0(false);
    }
    setLimparCampo(true);
    setAngulo("");
  }


  function limparTela(){
    setExibirAngulo("");
    setLimparCampo(false);
  }
  return (
    <div className="angulo">
      <form action="" onSubmit={VerificarAngulo}>
        <p>
          Um ângulo é chamado agudo se é menor que 90 graus, obtuso se é maior
          do que 90 graus ou reto caso seja exatamente 90 graus. Implemente um
          programa que receba um ângulo (número real) como entrada e responda
          qual é o tipo de ângulo.
        </p>
        <label htmlFor="">Informe o ângulo</label>
        <input
        value={angulo}
          onChange={(e) => setAngulo(e.target.value)}
          type="text"
          placeholder="Ex: 10"
        />
        <button>Verificar</button>
        {limparCampo ?  <button  onClick={limparTela} style={{backgroundColor:"#76247f"}}>Limpar campo</button>: null}
      </form>
      <h1 style={{color: cor ? "green" : "#c41111" }}>{exibirAngulo}</h1>
    </div>
  );
}
