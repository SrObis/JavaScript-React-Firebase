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
       <di>
           <h2>La temperatura es: {temepratura}</h2>
           <p>
               {
                   temepratura > 21 ? 'Hace calor': 'Hace fresco'
               }
           </p>
           <button onClick={Subir}>Aumentar Temperatura</button>
           <button onClick={Bajar}>Reducir Temperatura</button>
       </di>
    )
}

export default Temperatura