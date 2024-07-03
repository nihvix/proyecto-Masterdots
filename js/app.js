/* ============================================================
    JS para la comprobación de datos del formulario de entrada
   ============================================================*/

/* ==================================================
            INICIALIZACIÓN VARIABLES, OBJETOS, DOM
   ==================================================*/
const nickInput = document.getElementById("nick");
const sizeInput = document.getElementById("size");
const formInput = document.getElementById("inputForm");
const error=document.getElementById("error");

/* ==============================
            EVENTOS
   ==============================*/
formInput.addEventListener('submit', checkForm);

/* ==============================
            FUNCIONES
   ==============================*/
function checkForm(event){
    if(nickInput.value.length==0){
        console.log("There's no nick");
        event.preventDefault(); //El cursor se coloca sobre el input
        error.innerText="Nick field cannot be empty!";
        return false;
    }else if(sizeInput.value="0"){
        console.log("No size selected yet!");
        sizeInput.focus();
        event.preventDefault();
        error.innerText="A size must be selected!";
        return false;
    }
    return true;
}
