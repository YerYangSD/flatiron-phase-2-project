// import React and React components
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from "../navbar/NavBar"
import Home from "../home/Home"
import Game from '../game/Game';
import PostFeature from '../postfeature/PostFeature';

// Use <Route> components to define client-side routes in my app
function App() {
  const [emojis, setEmojis] = useState([])
  const [activeEmojis, setActiveEmojis] = useState([])
  const [isSpinning, setIsSpinning] = useState(false)

  useEffect(() => {
    fetch("https://slotmoji.onrender.com/emojis")
      .then(resp => resp.json())
      .then(emojiData => {

        setEmojis(emojiData)
      })
  }, [])

  function addEmoji(newEmoji) {
    setEmojis([...emojis, newEmoji])
  }

  function getThreeEmojis() {
    const threeEmojis = []
    for (let index = 0; index < 3; index++) {
      const randomIndex = Math.floor(Math.random() * emojis.length)
      threeEmojis.push(emojis[randomIndex])
    }
    return threeEmojis
  }

  function spinReels() {
    if (!isSpinning) {
      setIsSpinning(true)
      setActiveEmojis(getThreeEmojis())
    }
  };

  useEffect(() => {
    function grabThreeEmojis() {
      const threeEmojis = []
      for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * emojis.length)
        threeEmojis.push(emojis[randomIndex])
      }
      return threeEmojis
    }

    const threeEmojis = grabThreeEmojis()
    setActiveEmojis(threeEmojis)
  }, [emojis])

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path="/Game">
          <Game
            emojis={emojis}
            spinReels={spinReels}
            activeEmojis={activeEmojis}
            isSpinning={isSpinning}
            setIsSpinning={setIsSpinning} />
        </Route>
        <Route path="/PostFeature">
          <PostFeature onAddEmoji={addEmoji} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
