import React, {useState, useEffect} from 'react';
import {store} from './Firebaseconf'

function App() {
  const [nombre, setNombre] = useState ('')
  const [phone, setPhone] = useState ('')
  const [usuarios, setUsuario] = useState ('')
  const [error, setError] = useState ('')

  const setUsuarios = async (e) => {
      e.preventDefault()
      const usuario = {
        nombre:nombre,
        telefono:phone
      }
      
      if(!nombre.trim()){
        setError('El campo nombre esta vacio')
      } else if(!phone.trim()){
        setError('El campo telefono esta vacio')
      } else{
        setError('')
      try {
        const data = await 
        store.collection('agenda').add(usuario)
      //añadimos un objeto de JavaScriptpara que lo pase a json
        console.log('Tarea añadida')
      } catch (e) { 
        console.log(e)
      }
      setNombre('')
      setPhone('')
      }
      
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="d-flex justify-content-center">Formulario de Usuarios</h2>
          <form onSubmit={setUsuarios} className="form-group">
            <input
            value={nombre}
            onChange={(e) => {setNombre(e.target.value) }}
            className="form-control"
            placeholder="Introduce un nombre"
            type="text"
            />
            <input
            value={phone}
            onChange={(e) => {setPhone(e.target.value) }}
            className="form-control mt-3"
            placeholder="Introduce un telefono"
            type="tel"
            />
            <input type="submit" value="Registrar" className="btn btn-dark btn-block mt-3"/>
          </form>
          {
            error ?
            (
              <div>
                <p>{error}</p>
              </div>
            )
            :
            (
              <span></span>
            )         
          }
        </div>
        <div className="col">
          <h2 className="d-flex justify-content-center">Lista Contactos</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
