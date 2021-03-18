const Persona = { 
    nombre: 'jordi',
    edad: 20,
    casado: false,
    hijo:{
        nombrehijo:'no'
    }
}
Persona.id=1 //añadir parametros fuera del objeto
console.log(Persona)
console.log(Persona.nombre)
console.log(Persona.edad)
console.log(Persona.hijo.nombrehijo)
