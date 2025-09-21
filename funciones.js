// Función Expresada 

let sumar = function(numeroA, numeroB) {
    return numeroA + numeroB
}

console.log(sumar(10, 10));

// Función Declarada

function restar(numeroC, numeroD){
    return numeroC - numeroD
}

console.log(restar(30, 5));

// SCOPE 

let mensaje = 'hola';

function saludar(){
    let mensaje = 'chau';
    return mensaje;
}

console.log(mensaje);
console.log(saludar());

// ARROW FUNCTION

let laMitad = numero => numero / 2

console.log(laMitad(8));

let dividir = (numero1, numero2) => numero1 / numero2;

console.log(dividir(10, 2));