import React, {Fragment, useState} from 'react';

const Formulario=()=>{
    return(
       <div className="container">
           <form className="form-group">
               <input placeholder="Introduce el nombre" className="form-control mb-3" type="text"/>
               <input placeholder="Introduce la edad" className="form-control mb-3" type="text"/>
               <input className="btn btn-info btn-block mb-3" type="submit"/>
           </form>
       </div>
    )
}
export default Formulario

