/*
    Código JS para almacenar la información del usuario
*/

//Capturamos los datos de usuario
getUserData();


//Comprobamos los datos
if(!checkUserData()){
    location="index.html";
}
console.log(checkUserData());