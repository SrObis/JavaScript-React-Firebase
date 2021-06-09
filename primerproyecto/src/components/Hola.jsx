import React, {Fragment} from 'react';

function Hola(){
    let saludo = 'Variable saludo'
    return(
        <Fragment>
            <h2>Primer componente "Hola"</h2>
            <p>{saludo}</p>
        </Fragment>
    )
}

export default Hola