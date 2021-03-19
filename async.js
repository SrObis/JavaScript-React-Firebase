/*  fetch('https://jsonplaceholder.typicode.com/todos/1')//fetch llama a la appi y trae la respuesta
    .then( response =>response.json() ) //la respuesta la manupulamos y la guradamos como json
    .then ( json => console.log(json.userId) )
    .catch( e => console.log(e) ) //para capturar el  */

const obtenerUsuarios = async() =>{
    try{
        const respuesta = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
        const datos = await respuesta.json()
        console.log(datos)
    }catch(e){
        console.log(e)
    }
}
obtenerUsuarios()