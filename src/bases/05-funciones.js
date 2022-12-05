console.log('Hola Mundo !!!');

const saludar = function(nombre) {

    return `hola, ${nombre}`;

}

const saludar2 = (nombre) => `hola, ${nombre}`;

//saludar = 30;

console.log(saludar('Goku'));
console.log(saludar2('vegeta'));

const getUser = () => ({
    uid: '123',
    username: 'El_usuario'
});

console.log(getUser());

const getUserActivo = (nombre) => ({ uid: '123', username: nombre });
console.log(getUserActivo('cesar'));