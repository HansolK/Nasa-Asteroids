import React, {useState, useEffect} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Search from "./Search";
import About from "./About";
import Asteroids from './Asteroids'
import Mars from './Mars'
import axios from "axios";
import NeoFeed from './NeoFeed'
import '@zendeskgarden/react-chrome/dist/styles.css';

function App() {
  const [background, setBackground] = useState("")
  const [detail, setDetail] = useState({})
  useEffect(function() {
    axios
    .get(
      "https://api.nasa.gov/planetary/apod?api_key=pzQUTAbV3KuhdebtS6ZHDLqTFaBG5wo9LAAAmAxh"
    )
    .then(function(response) {
      setBackground(response.data.url);
      setDetail({title: response.data.title, explanation: response.data.explanation})
    });
  }, [])
    
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      <Header />
      <div className="page">
        <Search />
        <Switch>
          <Route exact path="/" render={() => <Home details={detail}/>} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/neofeed" component={NeoFeed}/>
          <Route exact path="/asteroids/:date" component={Asteroids} />
          <Route exact path="/mars" render={() => <Mars />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
