/* ==================================================
                    CÓDIGO JUEGO    
   ==================================================*/

/* ==========================
            FUNCIONES
   ==========================*/
function fillUserForm() {
    document.getElementById("nick").value = nick;
    document.getElementById("avatarImg").src = avatarImg; //variable de userInfo que almacena el avatar
}

function drawPanel() {
    document.getElementById("game").style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    document.getElementById("game").style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    //Elementos de forma automática
    let sizeInt=parseInt(size); //Hay que recordar que el valor de size en el sessionStorage se almacena como string
    let items="";
    for (let index = 0; index < sizeInt * sizeInt; index++) {
        items+=`<div class="containerItem"><div class="item"></div></div>`; //Comillas evaluativas
    }
}   document.getElementById("game").innerHTML=items;

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
