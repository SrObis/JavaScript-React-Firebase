const Persona = { 
    nombre: 'jordi',
    edad: 20,
    casado: false,
    hijo:{
        nombrehijo:'no'
    }
}

const {nombre,edad} = Persona
/*
con esto no tenemos que estar constantemente acediendo a la clase persona para ver nombre y edad 
*/
console.log(nombre)
console.log(edad)
/*
tambien se puede hacer con el hijo
*/
const {nombrehijo} = Persona.hijo
console.log(nombrehijo)

