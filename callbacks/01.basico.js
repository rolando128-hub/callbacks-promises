//Definir la funion que servira como callbak
function despedirse(){
    console. log("Adiós, hemos terminado la clase");
}

//Declaramos la función principal que recibe
//una función como parametro

function iniciarProceso(miCallback){
    console.log("Iniciando el proceso principal...");
    //Invocamos la función que recibimos como argumento
    miCallback();
} 


//Llamamos a la función principal
//pasando despedirse SIN paréntesis
iniciarProceso(despedirse);