import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebaseconfig'
const Menu = () =>{
    const [usuario, setUsuario] = useState(null)
    const historial = useHistory()

    useEffect(() => { 
        auth.onAuthStateChanged((user) => {
            if(user){
                setUsuario(user.email)
                console.log(user.email)
            }
        })

    }, [])
    const CerrarSession = () =>{
        auth.signOut()
        setUsuario(null)
        historial.push('/')

    }

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Inicio</Link>
                    </li>
                    <li>
                        {
                           ! usuario ? 
                            (
                                <Link className='nav-link'  to='/Login'>Login</Link>
                            )
                            : 
                            (
                                <span></span>
                            )
                        }
                    </li>
                    <li className='nav-item'>
                    {
                           ! usuario ? 
                            (
                                <Link className='nav-link'  to='/Admin'>Admin</Link>
                            )
                            : 
                            (
                                <span></span>
                            )
                        }
                    </li>
                </ul>
                {
                    usuario ?
                    (
                        <button
                        onClick={CerrarSession}
                        className='btn btn-danger'>
                        Cerrar Session
                        </button>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>
    )
}

export default Menu