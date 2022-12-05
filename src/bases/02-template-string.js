console.log('Hola Mundo !!!');

const nombre = 'cesar';
const apellido = 'silva';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = ` 
${nombre}  
${apellido}
${1+1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola Mundo ' + nombre;

}

console.log(` Este es un texto: ${getSaludo(nombre)}`);