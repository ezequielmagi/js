/* eslint-disable react-hooks/rules-of-hooks */
//desestructuracion de objetos

const empleado = {
    nombre: 'Tony',
    edad: 45,
    clave: 1234
}

const useContext = ( { clave, edad, rango = 'capitan' } ) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        direccion: {
            calle: 'siempreviva',
            numero: 15
        }
    }
}



const {nombreClave, anios, direccion:{calle, numero}} = useContext ( empleado );
console.log(nombreClave, anios)
console.log(calle, numero)