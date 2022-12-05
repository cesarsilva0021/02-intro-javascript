const personajes = ['Goku', 'Vegeta', 'Trunks'];


const [, , p2] = personajes;

console.log(p2);

const retornaArreglo = () => {

    return ['ABC', 123];

};


const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// tarea

const usesState = (valor) => {

    return [valor, () => { console.log('Hola Mundo') }];

}

const [nombre, setNombre] = usesState('Goku');

console.log(nombre);
setNombre();