import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'

const Usuarios = () =>{
    const [usuario, setUsuario] =useState([]) 
    const {id} = useParams ()
    const obtenerUsuario= async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) //guardamos en la cosntante res la informacion
        const users = await res.data
        setUsuario(users)
    }
    useEffect( ()=>{
        obtenerUsuario()
    },[])

    return (
        <div>
            <h1>Usuario</h1>
            <p>Nombre: {usuario.name}</p>
            <p>Nick: {usuario.username}</p>
            <p>Email: {usuario.email}</p>
            <small>Telefono: {usuario.phone}</small>

        </div>
    )
}
export default Usuarios