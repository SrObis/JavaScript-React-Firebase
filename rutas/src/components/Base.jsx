import React,{useState,useEffect} from 'react'

const Base = () =>{
    const[nombre, setNombre] = useState('Pedro')

    useEffect (()=>{
        /*El setTimeout se necesita un triger para ser lanzado 
        con el useEffect cuando se haya rendereizado la pagina ejecutara el codigo*/
        setTimeout(()=>{
                setNombre('Jordi')
        },2000)
    })

    return (
        <div>
            <h1>Pagina de Base Ruta</h1>
            {nombre}
        </div>
    )
}
export default Base