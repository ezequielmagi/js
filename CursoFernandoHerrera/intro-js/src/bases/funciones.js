//funciones

function saludar(nombre){
    return `hola ${nombre}`
}

const saludar2 = (nombre)=>{
    return `hola ${nombre}`
}

//los parentesis indican que devuelve un objeto implicito
const getUser = () => (
    { 
        uid: 'ABD123', 
        userName: 'El-Guampas' 
    }
);

const getUsuarioActivo = ( nombre ) =>
   ({
        uid: 'ABC567',
        username: nombre
    })



console.log(saludar('pipo'))
console.log(saludar2('pipo'))

console.log(getUser())
const usarioActivo = getUsuarioActivo('fernando')
console.log(usarioActivo)