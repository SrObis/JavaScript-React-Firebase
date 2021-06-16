import React from 'react';
import Card from "./components/Card"
function App() {
  return (
    <div className="App mt-5">
      <h1>Propiedades de los componentes</h1>
      <hr/>
      <div className="row">
        <div className="col">
          <Card
          imagen="http://lorempixel.com/150/150/nature"
          titulo="Imagen nature"
          texto="Texto card 1 naturaleza"
        />
        </div>

        <div className="col">
          <Card
          imagen="https://lorempixel.com/150/150/city"
          titulo="Imagen city"
          texto="Texto card 2 ciudad"
          />
        </div>

        <div className="col">
          <Card
          imagen="https://lorempixel.com/150/150/food"
          titulo="Imagen food"
          texto="Texto card 3 comida"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
