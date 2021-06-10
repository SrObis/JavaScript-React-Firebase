import React, {Fragment, useState} from 'react';

function Listado(){

    const [numeros, SetNumeros] = useState([1,2,3,4,5,6,7,8,9,10])
    return(
        <Fragment>
            <ul>
                {numeros.map( (item, index) =>
                <li key={index}>
                    {item}-{index}
                </li>
                )
                }
            </ul>
        </Fragment>
    )
}

export default Listado