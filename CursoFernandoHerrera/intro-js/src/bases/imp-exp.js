import { heroes } from './data/heroes'

// const getheroeById = (id) => {
//     return heroes.find((heroe) =>{
//         if (heroe.id === id){
//             return true
//         } else {
//             return false
//         }
//     } )
// }

//version reducida

const getheroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id)
}


console.log(getheroeById(2))

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)

console.log(getHeroeByOwner('Marvel'))
console.table(getHeroeByOwner('DC'))