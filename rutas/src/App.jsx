import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom'

function App() {
  return (
    <Router>

    <Switch>
      <Route path="/inicio">
        Estas en el Inicio
      </Route>
      <Route path="/">
        Esta es la URL base
      </Route>
    </Switch>

    </Router>
  );
}

export default App;
