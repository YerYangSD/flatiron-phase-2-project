// import React and React components
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from "../navbar/NavBar"
import Home from "../home/Home"
import Game from '../game/Game';

// Use <Route> components to define client-side routes in my app
function App() {
  const [emojis, setEmojis] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/halloweenEmojis")
      .then(resp => resp.json())
      .then(emojiData => setEmojis(emojiData))
  }, [])

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path="/Game">
          <Game emojis={emojis} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
