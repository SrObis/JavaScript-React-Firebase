const datos = [
    {nombre: 'Jordi',edad:20},  
    {nombre: 'Marc',edad:26},
    {nombre: 'Juan',edad:23},
    {nombre: 'Manuel',edad:56},
    {nombre: 'Victoria',edad:35}
]

/*datos.forEach(elemento => {//forEach recor y guarda en menoria
    //console.log(elemento)
    //console.log(elemento.nombre)
    console.log(elemento.edad)
})*/

datos.map(elemento => {//map es mas rapido que forEach
    //console.log(elemento)
    //console.log(elemento.nombre)w
    console.log(elemento.edad)
})