// DESAFIO 1

let contrasena = "abcd1234";

function contra (entrada) {
    if (entrada === contrasena) {
        console.log("Contraseña Correcta!");
    } else {
        console.log("Contraseña Incorrecta!");
    }
}

contra("abcd1234");

// DESAFIO 2

function calcularIMC(peso, altura){
    
    let imc = peso / (altura * altura);

    if(imc < 18.5){
        console.log("Bajo Peso");

    } else if (imc < 24.9) {
        console.log("Peso Normal");
        
    } else if (imc < 29.9){
        console.log("Sobrepeso");
        
    } else{
        console.log("Obesidad");
        
    } 
}

calcularIMC(83, 1.82);