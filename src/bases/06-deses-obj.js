//desestructuracion


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Sol:'
};

const { nombre } = persona;

console.log(nombre);

const usesContext = ({ clave, nombre, edad, rango = 'Cap:' }) => {

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad

    }
};

const { nombreClave, anios } = usesContext(persona);

console.log(nombreClave, anios);