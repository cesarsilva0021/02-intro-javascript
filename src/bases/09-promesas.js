import { getHeroeById } from './08-imp-exp';


/* const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {

        const heroe = getHeroeById(2);

        resolve(heroe);

        //reject('No se pudo encontrar el heroe');

    }, 2000)
});

promesa.then((heroe) => { console.log('then de la promesa', heroe) })
    .catch(err => console.warn(err)) */


const getHeroeByIdAsync = (id) => {

    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id);

            heroe ? resolve(heroe) : reject('No se encontro el Heroe')

            //reject('No se pudo encontrar el heroe');

        }, 2000)
    });

    return promesa

}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn);