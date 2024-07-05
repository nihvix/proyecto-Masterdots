/*
    Código JS para almacenar la información del usuario
*/

//Variable global para almacenar  el nick
var nick;

//Nick será un objeto con la información del input nick
function userData(nickInput){

    sessionStorage.setItem("nick", nickInput.value); //"nick" será la clave usada para recuperar la info
}

function getUserData(){
    nick=sessionStorage.getItem("nick");
    console.log(nick);
}

//Función para comprobar que nos meten los datos en el sessionStorage
//así no se lo pueden saltar poniendo "game.html"
function checkUserData(){
    if(nick==null){ //Es decir, no hay SessionStorage
        sessionStorage.setItem("error", "Form not filled correctly!");
        return false;
    }
    return true;
}