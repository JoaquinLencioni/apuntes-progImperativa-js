// .push() --> agrega uno o varios elementos al final de nuestro arreglo
let colores = ["Rojo", "Naranja", "Azul"]

colores.push("Marrón", "Gris");
console.log(colores);

// .pop() --> Elimina el último elemento de un arreglo
let colorEliminado = colores.pop();

console.log(colores);
console.log(colorEliminado);

// .shift() --> Elimina el Primer elemento de un arreglo
let primerColorEliminado = colores.shift()

console.log(colores);
console.log(primerColorEliminado);

// .unshift() --> Agrega uno o varios elementos al principio de un arreglo
let marcas = ["Audi"];

let nuevaLongitud = marcas.unshift("Ford", "Ferrari");
console.log(marcas);
console.log(nuevaLongitud);

// .join() --> Une los elementos de un array utilizando el separador que le especifiquemos (si no le especificamos lo hace con comas)
let dias = ["Lunes", "Martes", "Miercoles"]

let separadosPorComa = dias.join();
console.log(separadosPorComa);

let separadosPorGuion = dias.join(" - ");
console.log(separadosPorGuion);

// .indexOf() --> Busca en el arreglo el elemento que le enviamos por Parámetro (si no encuentra me trae un -1)
let frutas = ["Manzana", "Pera", "Frutilla"];

let banana = frutas.indexOf("Banana");
console.log(banana);

// .lastIndexOf() --> lo mismo que el de arriba con la diferencia que empieza buscando por el final del arreglo

// .includes() --> hace una busqueda similar pero en vez de número devuelve un booleano

console.log(frutas.includes("Manzana"));