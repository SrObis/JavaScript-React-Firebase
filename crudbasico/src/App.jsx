import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Login  from './components/Login'
import Admin from './components/Admin'
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <Router>
        <Menu></Menu>
        <Switch>
          <Route path='/admin' component={Admin}></Route>
          <Route path='/login' component={Login}></Route>
          <Route exact to='/' component={Inicio}></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
