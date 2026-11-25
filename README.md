TypeScript - javaScrip
Proporcionan interactividad a las paginas web y moviles
TypeScripe ->se transpila a JavaScript
JavaScript posee un potor o modelo de ejecucion donde ejecuta el codigo
Transpilar:conversion d codigo fuente de un lenguaje de alo nivel a otro,a mismo nvel de abstraccion

el modelo de ejecucion de js es de u solo hilo principal(single-threaded):solo se puede ejecutar una instruccion a la vez en su hilo pincipal.

operaciones sincronas:las tareas se jecutanuna tras otra .
operaciones asincronas:una tarea que se inicia ahora,pero cuyo resultado se obtendra en el futuo.

Call Stack,Call Back Queue y MicroTask,Entorno y Event loop(Bucle de eventos)

01. CallBack (Llamada de Retorno): Es una función que se pasa a otra como argumento con la intención de que la función receptora la invoque en algún momento de su propio cuerpo.

1. Declarar una función: Definimos que hace, pero aún no se ejucta.
2. Ivocar una función: Usamos paréntesis para que corra AHORA MISMO.
3. Pasar como ARGUMENTO una función: Usamos el nombre la función pero SIN paréntesis, ya que la entregamos a otra función para que ella decida cuándo usarla.

ECMAScript (ES6) 2015
Promesas (Promise)
Es un objeto de JS, que representan la eventual finalización (con un éxito o con un fracaso) de una operación asíncrona y su valor resultante (Puede ser una promesa)

1. pendiente (pending)
2. cumplida (fulfilled)
3. rechazada (rejected)

1. Crear promesas: new Promise()
2. Consumir promesas: .then(), catch(), finally()

