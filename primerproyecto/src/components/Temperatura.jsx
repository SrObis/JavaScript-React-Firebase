import React, {Fragment, useState} from 'react';

function Temperatura(){

    const [temepratura,setTempertura] = useState(19)
    const Subir =  () =>{
        setTempertura(temepratura+1)
    }
    const Bajar =  () =>{
        setTempertura(temepratura-1)
    }
  





    return(
       <div className="container">
           <h2>La temperatura es: {temepratura}</h2>
           <p>
               {
                   temepratura > 21 ? 'Hace calor': 'Hace fresco'
               }
           </p>
           <button className="btn btn-success btn-block" onClick={Subir}>Aumentar Temperatura</button>
           <button className="btn btn-danger btn-block"onClick={Bajar}>Reducir Temperatura</button>
       </div>
    )
}

export default Temperatura