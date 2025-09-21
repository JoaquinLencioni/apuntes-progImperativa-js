let clima = 'Lluvia';
let dia = 'Lunes';

if( clima == 'Soleado' && dia == 'Domingo'){
    console.log('Lindo dia para pasear');
}else if( clima == 'Soleado' && dia == 'Lunes' ){
    console.log('Podria Salir igual');
}else{
    console.log('Mejor me quedo en casa');
}

// IF TERNARIO 

let color = "Rojo";

let resultado = color == "Azul"?"Ese color me gusta":"No me gusta";
console.log(resultado);

// SWITCH

let semaforo = 'Rojo';

switch (semaforo) {
    case 'Rojo': 
        console.log('No cruzar');
        break;
    case 'Amarillo':
        console.log('Guarda');
        break;
    case 'Verde':
        console.log('Podes avanzar');
        break;
    default:
        console.log('No funciona el semaforo');        
}