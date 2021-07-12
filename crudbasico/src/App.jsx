import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="d-flex justify-content-center">Formulario de Usuarios</h2>
          <form className="form-group">
            <input
            className="form-control"
            placeholder="Introduce un nombre"
            type="text"
            />
            <input
            className="form-control mt-3"
            placeholder="Introduce un numero"
            type="tel"
            />
            <input type="submit" value="Registrar" className="btn btn-dark btn-block mt-3"/>
          </form>
        </div>
        <div className="col">
          <h2 className="d-flex justify-content-center">Lista Contactos</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
