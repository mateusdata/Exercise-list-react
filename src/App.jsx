import "./App.css";
import MenuIcon from '@mui/icons-material/Menu';
import Dobro from "./componets/sequencial/dobro/dobro";
import Trapezio from "./componets/sequencial/trapezio/trapezio";
import Aluguel from "./componets/sequencial/aluguel/aluguel";
import Horas from "./componets/sequencial/horas/horas";
import Gotas from "./componets/sequencial/remedio/gotas";
import Hotel from "./componets/sequencial/hotel/hotel"; 
import Angulo from "./componets/condicional/angulo/angulo";
import Footer from "./componets/footer/footer";


import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from "react";

function App() {
  const [menu, setMenu] =useState(null);

  function menuActive() {
    if(menu){
      setMenu(false);
    }
    else{
      setMenu(true);
    }
    
  }
  return (
    <div className="App">
      <header className="App-header"><button onClick={menuActive} id="botaoMenu"><MenuIcon id="menu"/></button><p>Exercise list</p> 
      <div id="redes">
      <a href="https://www.instagram.com/mateus.data/" target="_blank" rel="noreferrer"><InstagramIcon style={{color:"#bb2b73"} } /></a>
      <a href="https://www.linkedin.com/in/mateusdata/" target="_blank" rel="noreferrer"><LinkedInIcon style={{color:"#0961b8"}}/></a>
      <a href="https://github.com/mateusdata" target="_blank" rel="noreferrer"><GitHubIcon style={{color:"#f2f2f2"}} /></a>
      </div>
      </header>
      <div className="matematica">
        { menu ? <div className="divmenu">
         <p>Menu</p>
         <p>Sobre</p>
         <p>Contribuir</p>
      </div>: null}
        <Dobro />
        <Trapezio />
        <Aluguel />
        <Horas/>
        <Gotas/>
        <Hotel/>
        <Angulo/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
