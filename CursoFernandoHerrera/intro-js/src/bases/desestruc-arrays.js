/* eslint-disable react-hooks/rules-of-hooks */
//desestructuracion de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks']

//muestra el arreglo completo
console.log(personajes)

//si solo quiero el primero
const [p1] = personajes
console.log(p1)

//si quiero solo el segundo:
const [ , p2] = personajes
console.log(p2)

//y asi si queremos el tercer elemento
const [ , , p3 ] = personajes
console.log(p3)

const retornaArreglo = () =>{
    return ['ABC', 123]
}

const arr = retornaArreglo()

const [letras, numeros] = retornaArreglo()

console.log(retornaArreglo())
console.log(arr)
console.log(letras, numeros)

const useState = ( valor ) => {
    return [valor, ()=>{console.log('hola mundo')}]
}

const [nombre, setNombre] = useState('Goku')
console.log(nombre)
setNombre()