/*
    Código JS para almacenar la información del usuario
*/

//Variable global para almacenar  el nick
var nick;

//Nick será un objeto con la información del input nick
function userData(nickInput) {

    sessionStorage.setItem("nick", nickInput.value); //"nick" será la clave usada para recuperar la info
}

function getUserData() {
    nick = sessionStorage.getItem("nick");
    console.log(nick);
}

//Función para comprobar que nos meten los datos en el sessionStorage
//así no se lo pueden saltar poniendo "game.html"
function checkUserData() {
    if (nick == null) { //Es decir, no hay SessionStorage
        sessionStorage.setItem("error", "Form not filled correctly!");
        return false;
    }
    return true;
}

//localStorage -- registro fecha de entrada
function userDateRecord(nick) {
    let recordStorage = localStorage.getItem("record"); //obtenemos el historial de entradas
    let records;
    if (recordStorage == null) { //no existe un historial previo
        records = []; //lo creamos
    }else{
        records=JSON.parse(recordStorage); //Si existe, lo obtenemos del localStorage haciendo
        //la operación inversa al JSON.strongify, ya que en el local se ha almacenado en JSON 
    }
    let userRecord = {
        user: nick.value,
        date: Date.now() //Date: objeto que representa fechas en JS
    }
    records.push(userRecord);
    localStorage.setItem("record", JSON.stringify(userRecord));
}