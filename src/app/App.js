// import React and React components
import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from "../navbar/NavBar"
import Home from "../home/Home"
import Game from '../game/Game';

// Use <Route> components to define client-side routes in my app
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path="/Game">
          <Game />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
