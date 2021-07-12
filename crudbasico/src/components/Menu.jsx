import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebaseconfig'
const Menu = () =>{
    const [usuario, setUsuario] = useState(null)

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
    }

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link'  to='/Login'>Login</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link'  to='/Admin'>Admin</Link>
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