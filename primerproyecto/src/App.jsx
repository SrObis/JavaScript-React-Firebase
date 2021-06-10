import React from 'react';
import './App.css';
import Contador from './components/Contador';
import Listado from './components/Listado'

function App() {
  return (
    <div className="App">
      <h1>Titulo de nuestro primer proyecto</h1>
      {/* Cada componente contador es aparte no estan conectados entre si y el numero son todos distintos */}
      <Listado></Listado>
    </div>
  );
}

export default App;
