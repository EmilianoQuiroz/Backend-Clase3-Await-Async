/** Programacion Cincronica y Acincronica */
/**
FUNCIONES:
Declaración de funciones
Las funciones en Javascript tienen varias particularidades con respecto a otros lenguajes. Recordemos las formas para declarar una función:

function mostrar(params) {
  console.log(params)
}

Declaración de funciones
Al ser Javascript un lenguaje que no requiere especificar el tipo de dato de sus variables (tipado dinámico), tampoco es necesario especificar el tipo de dato que devuelven las funciones, ni el tipo de dato de los parámetros que éstas reciben

Las funciones también son objetos
En JavaScript las funciones se comportan como objetos: es posible asignar una declaración de función a una variable

const mostrar = function(params) {
  console.log(params)
}

Nueva declaración de funciones
La nueva sintaxis consiste en declarar únicamente los parámetros, y luego conectarlos con el cuerpo de la función mediante el operador => (flecha gorda, o ‘fat arrow’ en inglés). Veamos un ejemplo:

const mostrar = (params) => {
  console.log(params)
}

Funciones de un solo parámetro
En el caso de que la función reciba un solo parámetro, los paréntesis se vuelven opcionales, pudiendo escribir:

const mostrar = params => {
  console.log(params)
}

Funciones de una sola instrucción
En el caso de que el cuerpo de la función conste de una única instrucción, las llaves se vuelven opcionales, el cuerpo se puede escribir en la misma línea de la declaración y el resultado de computar esa única línea se devuelve como resultado de la función, como si tuviera un “return” adelante. A esto se lo conoce como “return implícito”

const mostrar = params => console.log(params) 

Return implícito
Un ejemplo igualmente trivial pero más ilustrativo de return implícito sería el siguiente:

const promediar = (a, b) => (a + b) / 2
const p = promediar(4, 8)
console.log(p) //6
*/

/** 
Callbacks

Concepto
Como hemos visto, en Javascript es posible asignar una función a una variable. Esto es porque internamente, las funciones también son objetos (y las variables, referencias a esos objetos). Es por esto que Javascript nos permite hacer que una función reciba como parámetro una referencia a otra función.

Definiendo...
- Un callback es una función que se envía como argumento a otra función.

- La intención es que la función que hace de receptora ejecute la función que se le está pasando por parámetro.

- Podemos decir que la función “ejecutar” que usamos en el punto anterior “recibe un callback”.

Ejemplo Callback
function escribirYLoguear(texto, callbackParaLoguear) {
 // simulamos que escribimos en un archivo!
 console.log(texto)
 // al finalizar, ejecutamos el callback
 callbackParaLoguear('archivo escrito con éxito')
}

escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
 const fecha = new Date().toLocaleDateString()
 console.log(`${fecha}: ${mensajeParaLoguear}`)
})

- Callbacks: Algunas convenciones
- El callback siempre es el último parámetro.
- El callback suele ser una función que recibe dos parámetros.
- La función llama al callback al terminar de ejecutar todas sus operaciones.
- Si la operación fue exitosa, la función llamará al callback pasando null como primer parámetro y si generó algún resultado este se pasará como segundo parámetro.
- Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro.

Callbacks anidados

Concepto
- Es un fragmento de código en el que una función llama a un callback, y este a otro callback, y este a otro, y así sucesivamente.
- Son operaciones encadenadas, en serie.
- Si el nivel de anidamiento es grande, se puede producir el llamado callback hell ó infierno de callbacks. También se conoce como pyramid of doom ó pirámide de la perdición.
*/
/** EJEMPLO PRACTICO DE CALLBACK */
// Esto no deberia hacerse en el curso
function saludar(nombre) {
  return console.log(`Hola, ${nombre}`);
}
saludar("Santiago");

// Esto si

function CrearSaludo(nombre) {
  return `Hola, ${nombre}`;
}

function MostrarMensaje(mensaje) {
  console.log(mensaje);
}

const saludo = CrearSaludo("Santiago Quiroz");
MostrarMensaje(saludo);

// Como personalizar los saludos
function CrearSaludoEnfatico(nombre, aplicarEmocion) {
  return aplicarEmocion(CrearSaludo(nombre));
}
/** Cuanto tengo un parametro que es de tipo funcion decimos que es un callback*/
const SaludoConEmocion = CrearSaludoEnfatico(
  "Santiago Emiliano Quiroz",
  (saludo) => `${saludo}!!!`/** Esto es un callback */
)

/**
Promesas
- Una Promesa es un objeto que encapsula una operación, y que permite definir acciones a tomar luego de finalizada dicha operación, según el resultado de la misma. Para ello, permite asociar manejadores que actuarán sobre un eventual valor (resultado) en caso de éxito, o la razón de falla (error) en caso de una falla.
- Al igual que con los callbacks, este mecanismo permite definir desde afuera de una función un bloque de código que se ejecutará dentro de esa función, dependiendo del resultado. A diferencia de los callbacks, en este caso se definirán dos manejadores en lugar de uno solo. Esto permite evitar callback hells como veremos más adelante.

Estados de una promesa
El estado inicial de una promesa es:
- Pendiente (pending)
Una vez que la operación contenida se resuelve, el estado de la promesa pasa a:
- Cumplida (fulfilled): la operación salió bien, y su resultado será manejado por el callback asignado mediante el método .then().
- Rechazada (rejected): la operación falló, y su error será manejado por el callback asignado mediante el método .catch().
*/

/** 
Timers
setTimeout
- Es una función nativa, no hace falta importarla.
- La función setTimeout() recibe un callback, y lo ejecuta después de un número específico de milisegundos.
- Trabaja sobre un modelo asincrónico no bloqueante.

setInterval
- Es una función nativa, no hace falta importarla.
- La función setInterval() también recibe un callback, pero a diferencia de setTimeout() lo ejecuta una y otra vez cada vez que se cumple la cantidad de milisegundos indicada.
- Trabaja sobre un modelo asincrónico no bloqueante.
- El método setInterval() continuará llamando al callback hasta que se llame a clearInterval() o se cierre la ventana.
- El objeto devuelto por setInterval() se usa como argumento para llamar a la función clearInterval().
*/
