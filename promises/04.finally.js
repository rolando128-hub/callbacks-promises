//finally () :Registra una función que se ejecutará simpre.
// y cuando la promesa se termine, sin importar el estado.
var promesaConexion = new Promise(function(resolve, reject) {
    console.log("Mostrando animaión de carga...")
    resolve ("Información Cargaa.")
})
promesaConexion
 .then(function(respuesta) {
 console.log("Éxito: " + respuesta)
})
.catch(function(motivoError) {
    console.log("Error: " + motivoError)
})
.finally(function() {
    console.log("Limpieza en finally(): Ocultando animación de carga.")
});



