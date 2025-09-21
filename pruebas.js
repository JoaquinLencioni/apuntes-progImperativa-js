let diaSemana = 4;
let mensaje = "";

switch(diaSemana){
    case 1:
        mensaje = "Hoy es Lunes!";
        break;
    case 2:
        mensaje = "Hoy es Martes!";
        break;
    case 3:
        mensaje = "Hoy es Miercoles!";
        break;
    default: 
        mensaje = "Ingresó un número incorrecto";
}

console.log(mensaje);
