/* ============================================================
    JS para la comprobación de datos del formulario de entrada
   ============================================================*/

/* ==================================================
            INICIALIZACIÓN VARIABLES, OBJETOS, DOM
   ==================================================*/
const nickInput = document.getElementById("nick");
const sizeInput = document.getElementById("size");
const formInput = document.getElementById("inputForm");
const error = document.getElementById("error");

/* ==============================
            EVENTOS
   ==============================*/
formInput.addEventListener('submit', checkForm);

/* ==============================
            FUNCIONES
   ==============================*/
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
    return true;
}
