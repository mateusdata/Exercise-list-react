import "./App.css";
import Dobro from "./componets/dobro/dobro";
import Trapezio from "./componets/trapezio/trapezio";
import Aluguel from "./componets/aluguel/aluguel";
import Horas from "./componets/horas/horas";
import Gotas from "./componets/remedio/gotas";
import Hotel from "./componets/hotel/hotel";

function App() {
  return (
    <div className="App">
      <header className="App-header"> <p>Exercise list</p> </header>
      <div className="matematica">
        <Dobro />
        <Trapezio />
        <Aluguel />
        <Horas/>
        <Gotas/>
        <Hotel/>
      </div>
    </div>
  );
}

export default App;
