// Strings y accesos únicos

let saludo = "Hola!";
console.log(saludo[0]);

// .length --> Es una propiedad no una función, por eso va sin (), te retorna la total cantidad de caracteres (incluye los espacios)

let miSerie = "La Casa de Papel"
console.log(miSerie.length);

let arrayNombre = ["Joaquin", "Juana", "Santiago"];
console.log(arrayNombre[0].length);


// .indexOf() --> Método que busca en el String el String que le pasemor por parámetro

let saludo1 = "Hola, Estamos programando!";
console.log(saludo1.indexOf("o"));

// .slice() --> Corta el String y nos devuelve una parte (3 formas)
let frase = "Hola, ¿cómo estás?"

// Opción 1 --> le decimos donde arrancar y donde terminar
console.log(frase.slice(6,11));

// Opción 2 --> le damos un valor de inicio, pero no le damos un valor de cierre
console.log(frase.slice(6));

// Opción 3 --> mediante valores negativos 
console.log(frase.slice(-10));

// .trim() --> Elimina los espacios al principio y al final del String
let nombreCompleto = "     Joaquin Lencioni     "
console.log(nombreCompleto.trim());

// .split() --> Divide un String en distintas partes (debe recibir por parametro un String que va a funcionar como separador)
let saludo2 = "Hola, como estas?"
console.log(saludo2.split(" "));

let arrayNuevo = saludo2.split(", ");
console.log(arrayNuevo);

// .replace() --> reemplaza una parte del String por otra 
let frase1 = "Me encanta Java";

let fraseNueva = frase1.replace("Java", "JavaScript");
console.log(fraseNueva);








