let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es " + this.horario;
    }
}

console.log("La cantidad de alumnos es de " + curso.cantidadDeAlumnos);
console.log(curso.notificaciones());

