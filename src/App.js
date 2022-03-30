import Categorias from "./components/Categorias";
import Navbar from "./components/Navbar";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Navbar1 from "./components/Navbar1";

function App() {
    return (
      <Router>
        <Switch> 

        <Route path="/personajes">
            <Navbar/>
            <h1>Personajes</h1>
          </Route>

          <Route path="/episodios">
            <Navbar/>
            <h1>episodios</h1>
          </Route>

          <Route path="/localizaciones">
            <Navbar/>
            <h1>localizaciones</h1>
          </Route>

          <Route path="/">
            <Navbar1/>
            <Categorias text="PERSONAJES" url="/personajes" img="https://i.pinimg.com/originals/25/6c/70/256c70454cf12a439b787b38c3230735.png"/>
            <Categorias text="LOCALIZACIONES" url="/localizaciones" img="https://c.wallhere.com/photos/c1/64/Rick_and_Morty_space-1341343.jpg!d"/>
            <Categorias text="EPISODIOS" url="/episodios" img="https://c.wallhere.com/photos/17/ab/1920x1080_px_Adult_Swim_animation_planet_Rick_And_Morty_space-660250.jpg!d"/>
          </Route>

        </Switch>          
      </Router>
    );
}


export default App;