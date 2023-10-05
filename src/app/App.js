// import React and React components
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from "../navbar/NavBar"
import Home from "../home/Home"
import Game from '../game/Game';

// Use <Route> components to define client-side routes in my app
function App() {
  const [emojis, setEmojis] = useState([])
  const [activeEmojis, setActiveEmojis] = useState([])
  const [isSpinning, setIsSpinning] = useState(false)

  useEffect(() => {
    fetch("http://localhost:4000/emojis")
      .then(resp => resp.json())
      .then(emojiData => {

        setEmojis(emojiData)
        spinReels()
      })
  }, [])

  function spinReels() {
    const activeEmojis = []
    for (let index = 0; index < 3; index++) {
      const randomIndex = Math.floor(Math.random() * emojis.length)
      activeEmojis.push(emojis[randomIndex])
    }
    if (!isSpinning) {
      setIsSpinning(true)
      setActiveEmojis(activeEmojis)
    }
  };

  console.log(emojis)
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path="/Game">
          <Game emojis={emojis} spinReels={spinReels} activeEmojis={activeEmojis} isSpinning={isSpinning} setIsSpinning={setIsSpinning} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
