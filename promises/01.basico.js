var miPromesa = new Promise(
    function(resolve, reject) {
        var operacionExitosa = true;

        if(operacionExitosa){
            resolve("Los datos se procesaron correctamente");
        } else {
            reject("Ocurrió un error al procesar los datos");
        }
    }
)

miPromesa.then(
    function(mensajeRecibido) {
        console.log("Resultado capturado en then(): " + mensajeRecibido);
    }).catch(
    function(motivoError) {
        console.log("Resultado capturado en catch(): " + motivoError);
    }
);
