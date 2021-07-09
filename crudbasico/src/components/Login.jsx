import React from 'react'

const Login = () =>{
    return (
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <form className='form-group'>
                    <input
                    className='form-control'
                    placeholder='Introduce el Email'
                    type='text'
                    />
                     <input
                    className='form-control mt-4'
                    placeholder='Introduce la Contraseña'
                    type='password'
                    /> 
                    <input
                    className='btn btn-dark btn-block mt-4'
                    value='Registrar Usuario'
                    type="submit"/>
                </form>
            </div>
            <div className="col"></div>

        </div>
    )
}

export default Login