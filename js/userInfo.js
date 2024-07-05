/*
    Código JS para almacenar la información del usuario
*/

//Nick será un objeto con la información del input nick
function userData(nickInput){

    sessionStorage.setItem("nick", nickInput.value); //"nick" será la clave usada para recuperar la info
}

function showUserData(){
    let nick=sessionStorage.getItem("nick");
    console.log(nick);
}