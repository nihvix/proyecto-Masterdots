/* ==================================================
                    CÓDIGO JUEGO    
   ==================================================*/

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
