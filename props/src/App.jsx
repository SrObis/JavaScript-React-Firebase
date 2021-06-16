import React from 'react';
import Bienvenida from "./components/Bienvenida"
function App() {
  return (
    <div className="App mt-5">
      <h1>Propiedades de los componentes</h1>
      <Bienvenida nombre="Jordi" apellido="Obis"/>
      <Bienvenida nombre="Victoria" apellido="Garcia"/>
      <Bienvenida nombre="Juan" apellido="Rodriguez"/>
      <Bienvenida nombre="Jose" apellido="Juan"/>

    </div>
  );
}

export default App;
