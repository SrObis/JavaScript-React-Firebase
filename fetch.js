fetch('https://jsonplaceholder.typicode.com/todos/1')//fetch llama a la appi y trae la respuesta
    .then( response =>response.json() ) //la respuesta la manupulamos y la guradamos como json
    .then ( json => console.log(json.userId) )
    .catch( e => console.log(e) ) //para capturar el error