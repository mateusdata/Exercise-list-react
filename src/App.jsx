import "./App.css";
import Dobro from "./componets/dobro/dobro";
import Trapezio from "./componets/trapezio/trapezio";
import Aluguel from "./componets/aluguel/aluguel";
import Horas from "./componets/horas/horas";

function App() {
  return (
    <div className="App">
      <header className="App-header"> <p>Exercise list</p> </header>
      <div className="matematica">
        <Dobro />
        <Trapezio />
        <Aluguel />
        <Horas/>
      </div>
    </div>
  );
}

export default App;
