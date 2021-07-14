import React, {useState, useEffect} from 'react';
import {store} from './Firebaseconf'

function App() {
  const [modoedicion, setModoEdicion] = useState (null)
  const [idusuario, setIdusuario] = useState ('')
  const [nombre, setNombre] = useState ('')
  const [phone, setPhone] = useState ('')
  const [usuariosagenda, setUsuariosAgenda] = useState([])
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
        const data = await store.collection('agenda').add(usuario) //añadimos un objeto de JavaScriptpara que lo pase a json
        const { docs } = await store.collection('agenda').get()
        const nuevoArray = docs.map(item => ({ id: item.id, ...item.data()}))
        setUsuariosAgenda(nuevoArray)
        alert('Usuario añadido corectamente')
        console.log('Tarea añadida')
      } catch (e) { 
        console.log(e)
      }
      setNombre('')
      setPhone('')
      }
      
  }
  const BorrarUsuario = async (id)=>{
    try{
      await store.collection('agenda').doc(id).delete()
      const { docs } = await store.collection('agenda').get()
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
    }
    catch(e){
      console.log(e)
    }
  }
  const EditarUsuario = async (id) =>{
    try{
      const data = await store.collection('agenda').doc(id).get()
      const { nombre, telefono} = data.data()
      setIdusuario (id)
      setNombre  (nombre)
      setPhone  (telefono)
      setModoEdicion(true)
      console.log(data.data())
    }catch(e){
      console.log(e)

    }
    
  }
  const setUpdate = async (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      setError('El campo nombre esta vacio')
    } else if(!phone.trim()){
      setError('El campo telefono esta vacio')
    } else{
      setError('')
    const userUpdate = {
    nombre:nombre,
    telefono:phone
    }
    try{
      await store.collection('agenda').doc(idusuario).set(userUpdate)
      const { docs } = await store.collection('agenda').get()
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
    }catch(e){
      console.log(e)
    }
    setNombre('')
    setPhone('')
    setIdusuario('')
    setModoEdicion (null)
    }
  }


  useEffect(() => {
    const getUsuarios = async() => {
      const { docs } = await store.collection('agenda').get()
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data()}))
      setUsuariosAgenda(nuevoArray)
    }
    getUsuarios()
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="d-flex justify-content-center">Formulario de Usuarios</h2>
          <form onSubmit={modoedicion ? setUpdate : setUsuarios } className="form-group">
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
            {
              modoedicion ?
              (            
                <input type="submit" value="EDITAR" className="btn btn-info btn-block mt-3"/>
              )
              :
              (
                <input type="submit" value="REGISTRAR" className="btn btn-dark btn-block mt-3"/>
              )

            }
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
          
            <ul className="list-group"> 
            {
              usuariosagenda.length !== 0 ?
              (
                usuariosagenda.map( item=> (
                <li key={item.id}
                    className="list-group-item">
                    {item.nombre}--{item.telefono}
                    <button 
                      className="btn btn-danger float-right"
                      onClick={(id) => {BorrarUsuario(item.id)}}
                    >
                      ELIMINAR
                    </button>
                    <button 
                      className="btn btn-info mr-4 float-right"
                      onClick={(id) => {EditarUsuario(item.id)}}
                    >
                      EDITAR
                    </button>
                </li>
              ))
              )
              :
              (
                <span>
                  Lo siento no hay usuarios en la agenda
                </span>
              )
            }
            </ul>
            
        </div>
      </div>
    </div>
  );
}

export default App;
