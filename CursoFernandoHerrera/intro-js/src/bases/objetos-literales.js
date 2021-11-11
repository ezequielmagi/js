//objetos literales

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4546546546
    }
}

//el operador spread (spreadOperator nos permite crear un clon de persona en persona2 
//que sea independiente del primero)

const persona2 = {...persona}
persona2.nombre = 'pedro'

console.log({persona})
console.log({persona2})

console.table({persona})
console.table({persona2})
