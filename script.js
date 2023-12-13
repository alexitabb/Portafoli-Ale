/*

Javascrip es un lenguaje de programacion de tipado debil que corre en el navegador

*/
/* variable */

/* elegir el tipo de cajita 

   let: son para cajita que les podemos cambiar la estructura

   const: cajitas que no les puedes cambiar la estructura

   innamovible: si son datos sencillos, numeros, palabras, booleanos
   pero para las litas y ob

*/


const nombre = "Alejandra Briceño"

/* salidas */

//aleert(nombre);

console.log(nombre);

document.write(nombre);


console.log(document.getElementById('título'));
let elementoHTMLtítulo = document.getElementById('título');

let elementoDeTypewriter = new Typewriter(elementoHTMLtítulo, {
    loop: true
});

elementoDeTypewriter.typeString('¡Hola!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Soy Sofía Cauich')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Web JR.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Y Diseñadora Gráfica JR.')
    .pauseFor(2500)
    .start();












