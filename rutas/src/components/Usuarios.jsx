import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Usuarios = () =>{
    const [usuarios, setUsuarios] =useState([]) 

    const obtenerUsuarios= async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)//guardamos en la cosntante res la informacion
        const users = await res.data
        setUsuarios(users)
    }
    useEffect( ()=>{
        obtenerUsuarios()
    },[])

    return (
        <div>
            <h1>Listado de Usuarios</h1>
            {
                usuarios.map((item)=>(
                    <div>
                        <Link to={`/usuario/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Usuarios