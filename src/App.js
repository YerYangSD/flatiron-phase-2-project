import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from "./NavBar"
import Home from "./Home"
import User from "./User"
import SignUp from "./SignUp"

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/User">
          <User />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
