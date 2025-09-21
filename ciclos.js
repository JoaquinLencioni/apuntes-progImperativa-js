const prompt = require("prompt-sync")({ sigint: true });


// WHILE 

let i = 0; 
while (i <= 5) { 
    console.log("El contador es: " + i);
    i++;
} 

console.log(i); 

let control = "si";
let nota;
let sumaNotas = 0;
let cant = 0;
console.log("Bienvenido al Registro de Notas!");

while (control == "si"){
    console.log("Ingrese una nota a sumar:");
    nota = parseInt(prompt("Nota alumno: "))

    sumaNotas = sumaNotas + nota; 
    cant++;

    control = prompt("Ingrese 'si' si desea agregar ,más notas y 'no' si no lo desea: ")
}

let promedio = sumaNotas / cant;
console.log("El promedio es: " + promedio); 



let h = 1; 

while(h <= 10){
    console.log(i);
    h++;
}


let j = 1; 

// DO WHILE

do {
    console.log(j);
    j++;
}while(j <= 10);


let nroAadivinar = 4; 
let intento = 0; 
let numero; 

do{
    numero = parseInt(prompt("Ingrese un número del 1 al 10: "))

    if(numero < nroAadivinar){
        console.log("Muy bajo, intenta nuevamente");
    } else if (numero > nroAadivinar){
        console.log("Muy alto, inetnta nuevamente");
    } else {
        console.log("Número correcto");
    }

    intento++;

}while(numero != nroAadivinar);

console.log("Advininaste el número en " + intento + " de intentos");

// FOR

for(let z = 0; z <= 10; z++){
    console.log(z);
    
}

