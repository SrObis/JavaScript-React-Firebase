import React from 'react';
import Error from './components/Error';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/">Usuarios</Link>

      <Switch>
      <Route exact path="/">
        <Usuarios/>
      </Route>
      <Route path="/usuario/:id">
        <Usuario/>
      </Route>
      <Route path="/">
        <Error/>
      </Route>
    </Switch>
    </Router>

  
  );
}

export default App;
