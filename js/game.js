/* ==================================================
                    CÓDIGO JUEGO    
   ==================================================*/
/* ==========================
            VARIABLES
   ==========================*/
var markInit = false;

/* ==========================
            FUNCIONES
   ==========================*/
/**
 * Función que devuelve un número random entre 0 y max
 * @param {int} max 
 * @returns 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Función para obtener la información del usuario de la parte derecha del menú
 */
function fillUserForm() {
    document.getElementById("nick").value = nick;
    document.getElementById("avatarImg").src = avatarImg; //variable de userInfo que almacena el avatar
}

/**
 * Función que dibuja el panel de fichas
 */
function drawPanel() {
    document.getElementById("game").style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    document.getElementById("game").style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    //Elementos de forma automática
    let sizeInt = parseInt(size); //Hay que recordar que el valor de size en el sessionStorage se almacena como string
    let items = "";
    let color = ["red", "green"];
    let colorRandom = 0;
    for (let index = 0; index < sizeInt * sizeInt; index++) {
        if (index % 2 > 0) {
            colorRandom = getRandomInt(2);
        }
        items += `<div class="containerItem"><div class="item ${color[colorRandom]}"></div></div>`; //Comillas evaluativas para poder meter variable
    }
    document.getElementById("game").innerHTML = items;
}
/**
 * Función donde se realiza el marcado de fichas
 * @param {Event} event 
 */
function marking(event) {
    let item = event.target; //elemento hijo
    let containerItem = event.target.parentElement; //Elemento padre
    if (item.classList.contains("red")) { //Comprobamos si el elemento hijo es de color rojo
        containerItem.classList.add("red"); //Cambiamos la clase padre a rojo, para que se ponga como color de fondo del contenedor
    } else {
        containerItem.classList.add("green");
    }
    if (!markInit) { markInit = true; }
}

/**
 * Función que comienza el marcado de fichas
 * Cuando se hace click en el item
 * @param {Event} event 
 */
function startMarking(event) {
    marking(event);
}

/**
 * Función que continúa el marcado de fichas, uniéndolas
 * Cuando se pasa por encima mientras se hace click
 * @param {Event} event 
 */
function keepMarking(event) {
    if (markInit) { //SE sigue marcando SOLO si se ha empezado a marcar
        marking(event);
    }
}

/**
 * Función que finaliza el marcado de fichas
 * Cuamdo no se está clickando el item
 * @param {Event} event 
 */
function finishMark(){
    markInit=false;
}

/**
 * Función que establece los eventos de ratón durante la partida
 */
function gameEvents() {
    const items = document.getElementsByClassName("item"); //Obtenemos todos los círculos del juego
    for (let item of items) {
        item.addEventListener('mousedown', startMarking);
        item.addEventListener('mouseover', keepMarking);
    }
    document.addEventListener('mouseup', finishMark);
}

/* =======================================
            LLAMADAS A FUNCIONES
   =======================================*/
//Se cargan todas las variables que se van a necesitar
getUserData();

//Comprobamos si se ha realizado formulario y, en caso contario, redirigimos a la página
// principal (No se permite comenzar el juego sin la información del usuario)
if (!checkUserData()) {
    location = "index.html";
}
//Rellenamos el formulario
fillUserForm();
//Pintamos el panel de juego
drawPanel();
//Establecemos los eventos para el movimiento del ratón
gameEvents();
