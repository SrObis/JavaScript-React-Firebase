import React from "react"

const Bienvenida = (props) =>{
    console.log(props)
    const {nombre}=props
    const {apellido}=props

    return(
        <div>
            <h2> Bienvenido {nombre} {apellido}</h2>
        </div>
    )
}
export default Bienvenida