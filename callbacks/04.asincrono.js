//setTimeOut()

function notificardescarga(nombreArchivo){
    console.log("02.Notificación: El archivo "+ nombreArchivo + " se ha descargado correctamente");
}

function descargarArchivo(archivo, callbackAlTerminar){
    console.log("01.Iniciando descarga de: "+ archivo + "...")
    setTimeout(function(){
        callbackAlTerminar(archivo);
    }, 3000);
}

descargarArchivo("manual_callbacks.pdf", notificardescarga);
console.log("03.El usuario puede seguir navegando por la página mientras");