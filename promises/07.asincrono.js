//Operación asíncrona simuladda con seetTimeout()

function solicitarClima(ciudad){
    return new Promise(function(resolve, reject){
        console.log("Solicitando pronóstico del clima para " + ciudad + "...");

        setTimeout(function(){
            if(ciudad === ""){
                reject("Debes especificar el nombre de una ciudad válida")
            } else {
                var datosClima = {
                    ciudad: ciudad,
                    temperatura: 21,
                    descripcion: "Soleado"
                }
                resolve(datosClima);
            }
        }, 5000);
    });
}

solicitarClima("Córdoba")
.then(function(reporte){
    console.log("Clima: " + 
        reporte.ciudad + 
        " : " +
         reporte.temperatura + 
         "°C " +
          reporte.descripcion,
        );

    })
    .catch(function(error){
        console.log("Error: " + error);
});

console.log("La aplicación continua ejecutandose mintras llega el reporte...");