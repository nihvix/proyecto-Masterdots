/* ============================================================
    JS para la comprobación de datos del formulario de entrada
   ============================================================*/

/* ==================================================
            INICIALIZACIÓN VARIABLES, OBJETOS, DOM
   ==================================================*/
const nickInput = document.getElementById("nick");
const sizeInput = document.getElementById("size");
const formInput = document.getElementById("inputForm");

/* ==============================
            EVENTOS
   ==============================*/
formInput.addEventListener('submit', checkForm);

/* ==============================
            FUNCIONES
   ==============================*/
function checkForm(){
    if(nickInput.value.length==0){
        console.log("There's no nick");
        nickInput.focus(); //El cursor se coloca sobre el input
        return false;
    }else if(sizeInput.value="0"){
        console.log("No size selected yet!");
        sizeInput.focus();
        return false;
    }
    return true;
}
