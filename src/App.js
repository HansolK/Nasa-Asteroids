import React, {useState} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import About from "./About";
import Asteroids from './Asteroids'
import axios from "axios";
import NeoFeed from './NeoFeed'

function App() {
  const [background, setBackground] = useState("")
  axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=pzQUTAbV3KuhdebtS6ZHDLqTFaBG5wo9LAAAmAxh"
    )
    .then(function(response) {
      setBackground(response.data.url);
    });
    
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Header />
      <div className="page">
        <Search/>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/neofeed" component={NeoFeed}/>
          <Route path="/asteroids/:id" component={Asteroids}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
