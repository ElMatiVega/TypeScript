const msg:string="hola mundo";//asignacion del tipo de dato.
//const msg="hola mundo";
console.log(msg);


// let msg1="Hola Mundo";
// msg1="Matías";
//msg1=40// no se puede asignar porque es un numero


//------------------
//tsc --watch corriendo en terminal
//Asignacion de un tipo incorrecto de dato y que pasa

const hero={
    name:"Iron Man",
    age:45
}
//hero.age='50'//por consola veriamos 501 porque concat un string con un number

hero.age=50
console.log(hero.age + 1);