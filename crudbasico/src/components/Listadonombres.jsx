import React, {useStat} from 'react'


const Listadonombres = () =>{
    return(
        <div>
            <h2>Aplicacion CRUD BASICA</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form className="form-group">
                        <input className="form-control mb-3" type="text" placeholder="Introduce el nombre"/>
                        <input className="btn btn-info btn-block" type="submit" placeholder="Registrar Nombre"/>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Listadonombres