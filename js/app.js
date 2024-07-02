/* ============================================================
    JS para la comprobación de datos del formulario de entrada
   ============================================================*/

/* ==================================================
            INICIALIZACIÓN VARIABLES, OBJETOS, DOM
   ==================================================*/
const playButton = document.getElementById("play");

/* ==============================
            EVENTOS
   ==============================*/
playButton.addEventListener('click', checkForm);
playButton.addEventListener('click', executeAction);

/* ==============================
            FUNCIONES
   ==============================*/
function checkForm(){
    console.log("We check the form");
}
function executeAction(){
    console.log("We exe");
    playButton.removeEventListener('click', checkForm);
}
