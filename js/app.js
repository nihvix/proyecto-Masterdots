/* ============================================================
    JS para la comprobación de datos del formulario de entrada
   ============================================================*/

/* ==================================================
            INICIALIZACIÓN VARIABLES, OBJETOS, DOM
   ==================================================*/
var nickInput;
var sizeInput;
var emailInput;
var formInput;
var error;

/* ==============================
            FUNCIONES
   ==============================*/
/**
 * Función que realiza las comprobaciones en los datos del formulario al hacer
 * click sobre el botón para jugar
 * @param {Event} event 
 * @returns 
 */
function checkForm(event) {
    if (nickInput.value.length == 0) {
        event.preventDefault();
        error.innerText = "Nick field cannot be empty";
        return false;
    } else if (nickInput.value.match(/\b\d+\w*/)) { /*Para indicar inicio/fin del regex se usa / no comillas*/
        event.preventDefault();
        error.innerText = "Name field cannot start by a number";
        return false;
    } else if (sizeInput.value == "0") {
        sizeInput.focus();//El cursor se coloca sobre el input
        event.preventDefault();
        error.innerText = "A size must be selected";
        return false;
    }
    //En este punto la información ya es correcta, por lo que ya podemos almacenarla en la sesión
    userData(nickInput, sizeInput, emailInput);
    return true;
}

/**
 * Función que realiza la carga de objetos del DOM, comprobaciones y eventos del formulario
 */
function DOMLoaded() {
    //Se cargan las variables
    nickInput = document.getElementById("nick");
    sizeInput = document.getElementById("size");
    emailInput = document.getElementById("email");
    formInput = document.getElementById("inputForm");
    error = document.getElementById("error");

    //Se comprueba si hay algún error, ya que ahora sí estará cargado
    if (sessionStorage.getItem("error") != null) {
        error.innerText = sessionStorage.getItem("error"); //mostrar mensaje de error
        sessionStorage.removeItem("error"); //para que al recargar no vuelva a aparecer el error
    }

    //Se comprueba el formulario
    formInput.addEventListener('submit', checkForm);
}

/* ==============================
            EVENTOS
   ==============================*/
document.addEventListener('DOMContentLoaded', DOMLoaded);

/* ========================================
                GEOLOCALIZACIÓN
   ========================================*/
dataGeolocation();
