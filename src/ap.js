import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [imprimirNumber, setImprimirNumber] = useState();

  const [B, setB] = useState("");
  const [b, setBm] = useState("");
  const [h, setH] = useState("");
  const [resultadoTrapezio, setResultadoTrapezio] = useState("");

  const [agenciaX, setAgenciaX] = useState("");
  const [agenciaY, setAgenciaY] = useState("");
  const [resuldadoAgencias, setResuldadoAgencias] = useState("");

  const [horas, setHoras] = useState("");
  const [resultadoHora, setResultadoHora] = useState("");

  function producaoPeca(e){
    e.preventDefault();
    let hora = (parseFloat(horas)  * 37) /3600 
    let minutos  =  (hora - parseInt(hora))  * 60 
    let segundos =  (minutos - parseInt(minutos)) * 60
    console.log("HOTAS: " + hora.toFixed(2) +"\n segundo" +minutos +"\n" +segundos )
    setResultadoHora(parseInt(hora) + " horas, " + parseInt(minutos) + " minutos e " + parseInt(segundos)  + " segundos" )
  }



  function verificarAgencia(e) {
    e.preventDefault();
    let resultadoX = parseFloat(agenciaX) * 1.4 + 62;
    let resultadoY = parseFloat(agenciaY) * 1.2 + 80;
    if (!isNaN(resultadoX) && !isNaN(resultadoY)) {
      setResuldadoAgencias(
        `O preço da diaria primeira agencia é R$${resultadoX.toFixed(
          2
        )}, preço da diaria na agencia Y é R$${resultadoY.toFixed(2)}`
      );
      document.getElementById("agenciaX").value = null;
      document.getElementById("agenciaY").value = null;
    }
  }

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

  function verificar(e) {
    e.preventDefault();
    let dobro = parseInt(number) + parseInt(number);

    if (!isNaN(dobro)) {
      setImprimirNumber(`O dobro de ${number} é ${dobro}`);
    } else {
      setImprimirNumber("Somente números sao permitido");
    }
    document.getElementById("dobro").value = null;
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="matematica">
        <form onSubmit={verificar}>
          <p>Crie um programa que exiba o dobro do number digitado</p>
          <label htmlFor="">Informe um numero</label>
          <input
            id="dobro"
            onChange={(e) => setNumber(e.target.value)}
            type="text"
          />
          <button>Verificar</button>
        </form>

        <h1>
          {imprimirNumber} <br /> <br />
        </h1>
        <p>
          Escreva um programa que leia os valores da base maior (B), base menor
          (b) e altura (h) de um trapézio e calcule e imprima o valor de sua
          área, sabendo que a área de um trapézio (A) é dada por:
        </p>

        <form onSubmit={Manipulartrapezio} action="">
          <label htmlFor="">base maior (B)</label>
          <input
            id="B"
            onChange={(e) => setB(e.target.value)}
            type="text"
            placeholder=" Informe a base maior (B)"
          />

          <label htmlFor="">base menor (b)</label>
          <input
            id="b"
            onChange={(e) => setBm(e.target.value)}
            type="text"
            placeholder=" Informe a base menor (b)"
          />

          <label htmlFor="">altura (h)</label>
          <input
            id="A"
            onChange={(e) => setH(e.target.value)}
            type="text"
            placeholder=" Informe a altura (h)"
          />

          <br />
          <button>Verificar trapezio</button>
        </form>
        <h1>{resultadoTrapezio}</h1>

        <p>
          Um grupo de amigos pretende alugar um carro por um único dia.
          Consultadas duas agências, a primeira cobra R$62,00 pela diária e
          R$1,40 por quilômetro rodado. A segunda cobra diária de R$80,00 e mais
          R$1,20 por quilômetro rodado. Escreva um programa que leia a
          quantidade de quilômetros a serem rodados e calcule e imprima na tela
          o preço a ser pago em cada uma das agências.
        </p>

        <form action="" onSubmit={verificarAgencia}>
          <label htmlFor="">Primeira agencia</label>
          <input
            onChange={(e) => setAgenciaX(e.target.value)}
            id="agenciaX"
            type="text"
            placeholder="Quantidade de Km rodado"
          />
          <label htmlFor="">Segunda agencia</label>
          <input
            onChange={(e) => setAgenciaY(e.target.value)}
            id="agenciaY"
            type="text"
            placeholder="Quantidade de Km rodado"
          />{" "}
          <br />
          <button>Verificar</button>
        </form>

        <h1>{resuldadoAgencias}</h1>
        <p>
          Um sistema de máquinas demora 37 segundos para produzir uma peça. Sua
          tarefa é fazer um programa que leia a quantidade de peças a ser
          produzida e calcule o tempo em horas, minutos e segundos necessário
          para produzir essa quantidade de peças. Exemplo: Se digitado pelo
          usuário a quantidade 250, deverá aparecer na tela 2 horas, 34 minutos
          e 10 segundos.
        </p>

        <form action="" onSubmit={producaoPeca}>
          <label htmlFor="">Quantidade de horas</label>
          <input onChange={(e) => setHoras(e.target.value)} type="text" />
          <button>Verificar</button>
        </form>
        <h1>{resultadoHora}</h1>
      </div>
    </div>
  );
}

export default App;
