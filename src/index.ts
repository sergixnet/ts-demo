// esto es un comentario

import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';

/**
 * Document comment
 * Multiline
 */

console.log("Hola Typescript!!!");
console.log("Agur Typescript!!!");


// Delaración de variables
var nombre: string = 'Sergio';

console.log("Hola, " + nombre);
console.log("¿Que tal, ", nombre, "?");
console.log(`¿Como han ido las vacaciones, ${nombre}?`);

let email = 'sergio@example.com';
console.log(`Email de ${nombre} es ${email}`);

const PI: number = 3.1416;

var apellidos: any = "Peña Iza";
apellidos = 3;

var error: boolean;
error = false;


console.log(`¿Hay error?: ${error}`);

// Instanciación múltiple de variables

let a: string, b: boolean, c: number; // Instancia 3 variables sin valor inicial

a = "TypeScript";
b = true;
c = 8.9;

// Builtin Types: number, string, boolean, void, null, undefined

// Tipos más complejos
let listaTareas = ["tarea 1", "tarea 2"];

// Combinación de tipos en listas
let valores: (string | number | boolean)[] = [false, 'hola', true, 22]

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}


let estadoTarea: Estados = Estados.Completado;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

// Interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: 'Tarea 1',
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`);


// Asignación multiple de variables

let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completado,
    urgencia: 1
}

let { titulo, estado, urgencia }: { titulo: string, estado: Estados, urgencia: number } = miTarea;


// Types de TypeScript

type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: 'Audi',
    precio: 45000,
    anio: 2010
}

// Condicionales

// Operadores ternarios
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`);

// if - else
if (error) {
    console.log(`Hay un error`);

} else {
    console.log(`No hay un error`);
}

// if - else if - else
if (coche.anio < 2010) {
    console.log(`Coche: ${coche.nombre} es viejo`);
} else if (coche.anio === 2010) {
    console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
}

// Switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log('La tarea esta completada');
        break;
    case Estados.Incompleto:
        console.log('La tarea esta incompleta');
        break;
    case Estados.Pendiente:
        console.log('La tarea esta pendiente de comprobarse');
        break;

    default:
        break;
}

// Bucles

let listaTareasNueva: Tarea[] = [
    {
        nombre: 'Tarea 1',
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: 'Tarea 2',
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: 'Tarea 3',
        estado: Estados.Completado,
        urgencia: 15
    },
];


// For clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
}

// Foreach
listaTareasNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
);


// Bucles while

while (tarea1.estado !== Estados.Completado) {
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.Completado
    } else {
        tarea1.urgencia++;
    }
}

do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);



// Funciones

/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Sergio";
    console.log(`Hola ${nombre}`);
}

// Incocación de la función
saludar();

/**
 * Función que muestra un saludo de una persona por consola
 * @param nombre Nombre de la persona
 */
function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}`);
}

const persona = 'Sergio'
saludarPersona(persona);

/**
 * Función que muestra un adios por consola
 * @param nombre Nombre de la persona a despedir, por defecto será Pepe
 */
function despedirPersona(nombre: string = 'Pepe') {
    console.log(`Adios ${nombre}`);
}

despedirPersona(); // Adios Pepe
despedirPersona('Alba'); // Adios Alba


/**
 * Función que muestra un adios por consola a una persona
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios, ${nombre}`);
    } else {
        console.log(`Adios`);
    }
}

despedidaOpcional(); // Adios
despedidaOpcional('Juanjo'); // Adios Juanjo

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {

    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }

}

variosParams('James'); // James tiene 18 años
variosParams('James', 'Bond Blue'); // James Bond Blue tiene 18 años
variosParams('James', undefined, 30); // James tiene 30 años
variosParams('James', 'Bond Blue', 30); // James Bond Blue tiene 30 años
variosParams(nombre = 'James', apellidos = 'Bond Blue');  // James Bond Blue tiene 18 años

function ejemploVariosTipos(a: string | number) {
    if (typeof (a) === 'string') {
        console.log(`a es un string`);
    } else if (typeof (a) === 'number') {
        console.log(`a es un number`);
    } else {
        console.log(`a es un number`);
        throw Error(`a no es un string ni un number`);
    }
}

ejemploVariosTipos('hola');
ejemploVariosTipos(3);
// ejemploVariosTipos(true); // error

/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn('Jane', 'Doe Dump');
console.log(nombreCompleto);

/**
 * 
 * @param nombres Es una lista de nombre de string
 */
function ejemploMultiParams(...nombres: string[]): void {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}

ejemploMultiParams('Martín', 'Juan', 'Jane');


function ejemploListaParams(nombres: string[]): void {
    nombres.forEach(nombre => {
        console.log(nombre);
    });
}

const lista = ['Alberto', 'Sara', 'Maria'];

ejemploListaParams(lista);


// Arrow functions

type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}

let empleadoJuan: Empleado = {
    nombre: 'Juan',
    apellidos: 'Perez García',
    edad: 30
}

const mostrarEmpleado = (empleado: Empleado): string => `${empleado.nombre} ${empleado.apellidos} tiene ${empleado.edad} años`;
mostrarEmpleado(empleadoJuan);

const datosEmpleado = (empleado: Empleado): string => {
    if (empleado.edad > 70) {
        return `${empleado.nombre} está en edad de jubilar`;
    } else {
        return `${empleado.nombre} está en edad laboral`;
    }
}

datosEmpleado(empleadoJuan); // Empleado Juan esta en edad laboral

const obtenerSalario = (empleado: Empleado, cobrar: () => void) => {
    if (empleado.edad > 70) {
        return;
    } else {
        cobrar();
    }
}

const cobrarSalario = (empleado: Empleado) => {
    console.log(`${empleado.nombre} cobra su salario`);
}

obtenerSalario(empleadoJuan, () => 'Cobrar Juan');



// Async functions

async function ejemploAsync() {
    await console.log('Tarea a completar antes de seguir con la secuencia de instrucciónes');
    console.log('Tarea completada');
    return `Completado`;
}

ejemploAsync().then(res => {
    console.log(res);
})
    .catch(err => {
        console.error('Ha habido un error', err);
    })
    .finally(() => 'Todo a terminado');

// Generators

function* ejemploGenerator() {
    // yield --> para emitir valores

    let index = 0;

    while (index < 5) {
        yield index++;
    }
}

let generadora = ejemploGenerator();

console.log(generadora.next().value) // 0
console.log(generadora.next().value) // 1
console.log(generadora.next().value) // 2
console.log(generadora.next().value) // 3


// Worker and watcher

function* watcher(valor: number) {
    yield valor; // emitimos el valor inicial

    yield* worker(valor); // llamamos a las emisiones del worker para que emita otros valores

    yield valor + 4; // emitimos el valor final + 4
}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (lo ha hecho el watcher)
console.log(generatorSaga.next().value); // 1 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 2 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 3 (lo ha hecho el worker)
console.log(generatorSaga.next().value); // 4 (lo ha hecho el watcher)

// Sobrecarga de funciones

function mostrarError(error: string | number): void {
    if (typeof error === 'string') {
        console.log('Ha habido un error:', error);
    } else if (typeof error === 'number') {
        console.log('Ha habido un error con código:', error);
    }
}


// Persistencia de datos
// 1. LocalStorage -> almacena los datos en el navegador (no se elimina automáticamente)
// 2. SessionStorage -> La diferencia radica en la sesión del navegador. Es decir, los datos se persisten en la sesión del navegador.
// 3. Cookies --> Tienen una fecha de caducidad y también tienen un ámbito de URL

// LocalStorage

// function guardarEnLocalStorage(): void {
//     localStorage.set('nombre', 'Martin');
// }

// function leerEnLocalStorage(): void {
//     let nombre = localStorage.get('nombre');
// }

// Cookies

const cookieOptions = {
    name: "usuario", // string,
    value: "sergio", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/", // optional string,
};

// Crear la cookie
setCookie(cookieOptions);

// Leer una cookie
let cookieLeida = getCookieValue('usuario');

// Eliminar cookie
deleteCookie('usuario');

// eliminar todas las cookies
deleteAllCookies();


// Clase Temporizador

class Temporizador {

    public terminar?: (tiempo:number) => void;

    public empezar(): void {
        setTimeout(() => {
            if (!this.terminar) {
                return;
            }

            this.terminar(Date.now());
        }, 10000);
    }
}

const miTemporizador: Temporizador = new Temporizador();

miTemporizador.terminar = (tiempo: number) => {
    console.log('Hemos terminado la tarea: ', tiempo);
};

miTemporizador.empezar();

setInterval(() => console.log('tic'), 1000);

// Eliminamos la ejecución de la función
delete miTemporizador.terminar;

// Extender de EventTarget

class Temporizador2 extends EventTarget {}

// min 52:36
