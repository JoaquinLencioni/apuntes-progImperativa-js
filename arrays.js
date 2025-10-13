// Arrays
let nombres = ['Joaquin', 'Juana', 'Angeles'];
let edades = [22, 37, 18, 59, 7];
let booleanos = [true, false, false, true]
let combinados = ['auto', 50, nombres] // esta visto como una mala practica

// Acceder a un elemento específicio dentro de un array
console.log(edades[2]);

// Recorrer un array
for(let i = 0 ; i < edades.length ; i++){
    console.log(nombres[i]);
}

// ALGORITMOS CLÁSICOS CON ARRAYS
let numeros = [10, 20, 30, 40, 50];

// Modificar cada uno de sus elementos a un array e imprimirlos
for(let i = 0; i < numeros.length; i++){
    numeros[i] = i+1;
}

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}


// Agregar elementos a un array
let notas = [8, 4, 10, 6]; 
notas[notas.length] = 7;

for(let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}


// Extraer elementos de un array a una variable
let nombres1 = ["Pedro", "Adriana", "Fabian"];
let nombreSeleccionado = nombres1[1];
console.log(nombreSeleccionado);


// Extraer todos los elementos para algo específico 
let numeros1 = [10, 20, 30, 40, 50];
let sumaNumeros = 0;

for(let i = 0; i < numeros.length; i++){
    sumaNumeros += numeros1[i];
}

let promedio = sumaNumeros / numeros.length; 
console.log(promedio);

// Encontrar el mayor o menor
let numeros2 = [10,48,7,52,19]
let menor = numeros[0];

for(let i = 0; i < numeros.length; i++){
    if(numeros2[i] < menor){
        menor = numeros2[i];
    }
}

console.log(menor);