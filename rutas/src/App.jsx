import React from 'react';
import Inicio from './components/Inicio';
import Base from './components/Base';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/inicio">Inicio</Link>
      <Link to="/">Base</Link>

    <Switch>
      <Route exact path="/inicio">
        <Inicio/>
      </Route>
      <Route exact path="/">
        <Base/>
      </Route>
      <Route path="/">
        <Error/>
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
