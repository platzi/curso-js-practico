# Respuestas al Test de JavaScript

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

```
Es un espacio en memoria que sirve para guardar cualquier tipo de Dato (Number, String, Array, etc...); Podriamos verlo como una caja en la que podriamos guardar lo que quisieramos.
```

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

```
Cuando declaramos una variable, le estamos haciendo saber a nuestro programa que vamos a tener un espacio en memoriareservado para algun dato pero aún no le decimos el valor de este dato a almacenar, a diferencia de la inicialización de una variable que como su nombre lo indica, definimos el valor inicial de la misma.
```

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

```
Sumer numeros es una operación matematica conocida como la adición, concatenar strings es ligeramente diferente puesto que no puede obtener un resultado matematico de sumar "palabraUno" + "palabraDos"; Por el contrario, lo que va a suceder en esta ultima suma es que el contenido de los dos strings se va a unir teniendo en cuenta absolutamente todos los caracteres de cada cadena de texto de principio a fin teniendo como resultado para la suma anterior, el string "palabraUnopalabraDos"
```

- ¿Cuál operador me permite sumar o concatenar?

```
El operador aritmetico que nos permite sumar numeros y concatenar strings es el caracter "+"
```

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre
- Apellido
- Nombre de usuario en Platzi
- Edad
- Correo electrónico
- Mayor de edad
- Dinero ahorrado
- Deudas

```
 name = string
 lastname = string
 platziUsername = string
 edad = number
 email = string
 major = boolean
 saveMoney = number
 debts = boolean
```

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
const name = "Mario Alejandro";
const lastname = "Crespo Reyes"
const platziUsername = "@maoacr";
const edad = 30;
const email = "maoacr@gmail.com"
const major = true;
const saveMoney = 999999999999999
const debts = false
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

```
const completeName = name + " " +  lastnanme
alert("Mi nombre completo es " + completeName)
```

- Dinero real (dinero ahorrado menos deudas)

```
cont realMoney = saveMoney - debts
alert("En este momento cuento con " + realMoney + " dolares en mis cuentas bancarias en las islas canarias")
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

```
Un bloque de codigo con una unica tarea asignada que se define con el objetivo de reutilizar logica dentro de nuestro programa.
```

- ¿Cuándo me sirve usar una función en mi código?

```
Principalmete cuando una tarea es repetitiva o cuando estoy  modularizando mi código buscando orden y escalabilidad.
```

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

```
Los parámetros es el nombre que se le da a los valores que recibe una funcion y que utiliza dentro de su logica para alguna tarea u operacion al momento de su definición.
Nos referimos a los argumentos cuando hablamos de estos mismo valores necesarios dentro de la función pero a la hora de la ejecución o utilización de esta.
```

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

Respuesta:

```
const name = "Mario Alejandro";
const lastname = "Crespo Reyes";
const nickname = "maoacr";

function prinText(name, lastname, nickname) {
    const completeName = name + lastname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

printText(name, lastname, nickname)
```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

```
Es un bloque de lógica que se ejectuta o no, deacuerdo a la validación de una expresión;
```

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

```
Condicional booleano, lógico y aritmético.
Su principal diferecia es la forma de evaluar la condición en cuestion gracias a sus simbolos como !=, =, >, >=, &&, ||, etc...
```

- ¿Puedo combinar funciones y condicionales?

```
Si es posible combinarlas.
```

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```
if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else {
    //Esta opcion seria teniendo en cueta que el usuario no ingresa manualmente el tipo de suscripcion para evitar errores sino que la escoge de una lista o viene de la DB
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```
if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

```
Un bloque de codigo que se ejecuta en repetidas ocasiones. Aveces dependiendo de una condicion o aveces hasta de forma infinita
```

- ¿Qué tipos de ciclos existen en JavaScript?

```
En JavaScript tenemos ciclos como el for, do.... while, while, for in y for of.
```

- ¿Qué es un ciclo infinito y por qué es un problema?

```
Un bloque de codigo que se ejecuta en repetidas ocasiones sin tener algun elemento o validación que detenga su ejecución
```

- ¿Puedo mezclar ciclos y condicionales?

```
por si puesto que si! El condicional en algunos casos esta antes de la primera ejecucion del ciclo y otras veces esta despues de la primera ejecucion.
```

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

Respuesta:

```
let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++
}


let i = 10;
while(i >= 2){
    console.log("El valor de i es: " + i);
    i--
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
let userAnswer = parseInt(prompt("Cuanto es 2 + 2 ?"))

if(userAnswer === 4 ){
    alert("Felicitaciones ! 🥳")
}else {
    alert("Ups! intentemoslo una vez más.")
    userAnswer = parseInt(prompt("Cuanto es 2 + 2 ?"))
}


```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

```
Una coleccion de datos separados por comas, delimitados por los caracteres []; Estos datos pueden ser de diferentes tipos.
```

- ¿Qué es un objeto?

```
Un grupo de datos de tipo key: value, separados por comas, delimitados por los caracteres {}; Creo que podemos decir que un objeto es una instancia de una clase en OOP.
```

- ¿Cuándo es mejor usar objetos o arrays?

```
Creo que depende del contexto y la relacion entre los datos que necesitamos almacenar. Un Array es una lista de datos separados por coma y suelen ser del mismo tipo de datos mientras que un objeto almacena valores de cualquier tipo.
```

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

```
Correcto, Un array puede contener objetos y un Objeto puede contener arrays como values.
```

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```
function printFirstElement( array ) {
    console.log(array[0])
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function printAllElements( array ) {
    array.forEach( (elem)=>{
        console.log(elem)
    } )
}
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
function printAllObjectElements( object ) {
    for (let property in object ) {
        console.log(`${property}: ${object[property]}`);
    }
}
```
