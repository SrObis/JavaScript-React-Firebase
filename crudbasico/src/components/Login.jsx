import React, {useState}from 'react'
import { auth } from '../firebaseconfig'
import { useHistory } from 'react-router'

const Login = () =>{
    const historial = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msgerror, setMesgerror] = useState(null)
    const RegistrarUsuario = (e)=>{
        e.preventDefault()//para que no se recarge el formulario
        
        auth.createUserWithEmailAndPassword(email,password)
        .then(r => {
            historial.push('/')
        })
        .catch(e=>{
            
            if(e.code=='auth/invalid-email'){
                setMesgerror('Formato del Emeail incorrecto')
            }
            if(e.code=='auth/weak-password'){
                setMesgerror('Contraseña debe de tener 6 caracteres o mas')
            }
            if(e.code=='auth/email-already-in-use'){
                setMesgerror('Email ya registrado')
            }
            
        })
    }
    const LoginUsuario = ()=>{
        auth.signInWithEmailAndPassword(email,password)
        .then( (r) =>{ 
            historial.push('/')
        })
        .catch((err)=>{
            if(err.code=='auth/weak-password'){
                setMesgerror('Contraseña debe de tener 6 caracteres o mas')
            }
            if(err.code=='auth/wrong-password'){
                setMesgerror('Contraseña no es correcta')
            }
        })
    }
    return (
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegistrarUsuario} className='form-group'>
                    <input
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className='form-control'
                    placeholder='Introduce el Email'
                    type='email'
                    />
                     <input
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className='form-control mt-4'
                    placeholder='Introduce la Contraseña'
                    type='password'
                    /> 
                    <input
                    className='btn btn-dark btn-block mt-4'
                    value='Registrar Usuario'
                    type="submit"/>
                </form>
               <button
               onClick={LoginUsuario}
                className='btn btn-success btn-block'
               >
                   Iniciar Sesion
               </button>

                {
                    msgerror !=null ? 
                    (
                        <div>
                        {msgerror}
                        </div>
                    )
                    :
                    (
                        <span></span>
                   )
                }
            </div>
            <div className="col"></div>

        </div>
    )
}

export default Login