// esto es un comentario

/**
 * Document comment
 * Multiline
 */

console.log("Hola Typescript!!!");
console.log("Agur Typescript!!!");


// Delaración de variables
var nombre: string = 'Sergio';

console.log("Hola, " + nombre);
console.log("¿Que tal, ", nombre, "?" );
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

let {titulo: string, estado, urgencia} = miTarea;


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
        tarea1.urgencia ++;
    }
}

do {
    tarea1.urgencia++;
    tarea1.estado = Estados.Completado;
} while (tarea1.estado !== Estados.Completado);
