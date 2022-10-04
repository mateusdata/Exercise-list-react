import "./App.css";
import Dobro from "./componets/dobro/dobro";
import Trapezio from "./componets/trapezio/trapezio";
import Aluguel from "./componets/aluguel/aluguel";
import Horas from "./componets/horas/horas";
import Gotas from "./componets/remedio/gotas";
import Hotel from "./componets/hotel/hotel";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <div className="App">
      <header className="App-header"> <p>Exercise list</p> 
      <div id="redes">
      <a href="https://www.instagram.com/mateus.data/" target="_blank" rel="noreferrer"><InstagramIcon style={{color:"#bb2b73"}}/></a>
      <a href="https://www.linkedin.com/in/mateusdata/" target="_blank" rel="noreferrer"><LinkedInIcon style={{color:"#0961b8"}}/></a>
      <a href="https://github.com/mateusdata" target="_blank" rel="noreferrer"><GitHubIcon style={{color:"#f2f2f2"}} /></a>
      </div>
      </header>
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
