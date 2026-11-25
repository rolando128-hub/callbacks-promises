//PARTE 1: DETECCIÓN Y CORRECCIÓN DE ERRORES 
//======================== RETO 1.1 ================================== 
//Código Original
/*const mostrarConfirmacion = () => {
    console.log("Notificación: Datos guardados en el dispositivo.");
};

const guardarEnDispositivo = (callback) => {
    console.log("Guardando información, por favor espera...");
    setTimeout(callback, 1000);
};

// Línea con error:
guardarEnDispositivo(mostrarConfirmacion());
*/

//Código Corregido 

// El error es que se colocaron paréntesis en mostrarConfirmacion(),
// provocando que la función se ejecute inmediatamente.
// la solución es pasar la función sin paréntesis.

const mostrarConfirmacion = () => {
    console.log("Notificación: Datos guardados en el dispositivo.");
};

const guardarEnDispositivo = (callback) => {
    console.log("Guardando información, por favor espera...");
    setTimeout(callback, 1000);
};

// Código corregido:
guardarEnDispositivo(mostrarConfirmacion);



//=========================== Reto 1.2 =============================
//La cadena de promesas que pierde el dato
//Código Original

/*const obtenerPrecioBoleto = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(120), 500);
    });
};

obtenerPrecioBoleto()
    .then((precioBase) => {
        console.log(`Precio base del boleto: $${precioBase}`);
        const totalConCargo = precioBase + 30;
    })
    .then((precioFinal) => {
        console.log(`Total final a pagar: $${precioFinal}`);
    });
*/


//Código Corregido
//El problema está en el primer .then().
//Se calcula el total:const totalConCargo = precioBase + 30;
//Pero nunca se devuelve ese resultado con return.
//Por eso, el siguiente .then() recibe undefined.

/*Se crea una promesa que devuelve el precio del boleto.
Después de 500 milisegundos, resolve(120) entrega el precio.
El primer .then() recibe los $120.
Se suman $30 de cargo por servicio.
return entrega el resultado al siguiente .then().
El segundo .then() muestra el total.*/


const obtenerPrecioBoleto = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(120), 500);
    });
};

obtenerPrecioBoleto()
    .then((precioBase) => {
        console.log(`Precio base del boleto: $${precioBase}`);

        const totalConCargo = precioBase + 30;

        return totalConCargo;
    })
    .then((precioFinal) => {
        console.log(`Total final a pagar: $${precioFinal}`);
    });


    




  //  PARTE 2: Simulación asíncrona con Callbacks

  // === PARTE 2: SOLUCIÓN CON CALLBACKS ===

const validarCuponCallback = (codigoCupon, callback) => {

    console.log(`Validando cupón '${codigoCupon}' en el servidor...`);

    setTimeout(() => {
     //Completar la validdación  e invocar el callback con los datos del cupón o un mensaje de error
        if (codigoCupon === "DESCUENTO20") {

            callback(null, {
                codigo: "DESCUENTO20",
                porcentaje: 20
            });

        } else {

            callback("El cupón ingresado no existe o ha expirado.", null);

        }

    }, 1000);

};


// Función que recibe la respuesta del callback
const manejarRespuestaCupon = (error, datosCupon) => {

    // Si existe un error, lo mostramos y detenemos la función
    if (error) {
        console.log("Error: " + error);
        return;
    }

    // Si no existe error, mostramos los datos del cupón
    console.log(
        `Cupón válido: ${datosCupon.codigo} con ${datosCupon.porcentaje}% de descuento.`
    );

};


// Pruebas obligatorias
validarCuponCallback("DESCUENTO20", manejarRespuestaCupon);

validarCuponCallback("CUPON_FALSO", manejarRespuestaCupon);







//         PARTE 3: Refactorización a Promesas y Encadenamiento

// FUNCIÓN 1: VALIDAR CUPÓN

const validarCuponPromesa = (codigoCupon) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (codigoCupon === "DESCUENTO20") {

                resolve({
                    codigo: "DESCUENTO20",
                    porcentaje: 20
                });

            } else {

                reject("El cupón ingresado no existe o ha expirado.");

            }

        }, 800);

    });

};


// FUNCIÓN 2: APLICAR DESCUENTO

const aplicarDescuentoPromesa = (montoPedido, datosCupon) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
         
            if (montoPedido < 200) {

                reject("El monto mínimo de compra para usar este cupón es de $200.");

            } else {

                const descuento = montoPedido * (datosCupon.porcentaje / 100);

                const totalFinal = montoPedido - descuento;

                resolve({
                    montoOriginal: montoPedido,
                    descuentoAplicado: descuento,
                    totalPagar: totalFinal
                });

            }

        }, 800);

    });

};


// CONSUMO ENCADENADO DE PROMESAS

validarCuponPromesa("DESCUENTO20")

    .then((cupon) => {

        console.log(`Cupón ${cupon.codigo} aceptado.`);
        console.log(`Descuento disponible: ${cupon.porcentaje}%`);

        return aplicarDescuentoPromesa(300, cupon);

    })

    .then((resumenPago) => {

        console.log("----- RESUMEN DE PAGO -----");

        console.log(`Monto original: $${resumenPago.montoOriginal}`);

        console.log(`Descuento aplicado: $${resumenPago.descuentoAplicado}`);

        console.log(`Total a pagar: $${resumenPago.totalPagar}`);

    })

    .catch((error) => {

        console.log("Error: " + error);

    })

    .finally(() => {

        console.log("--- Proceso de validación de compra finalizado ---");

    });