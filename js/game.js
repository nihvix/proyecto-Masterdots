/* ==================================================
                    CÓDIGO JUEGO    
   ==================================================*/

/* =======================================
            LLAMADAS A FUNCIONES
   =======================================*/
getUserData();


//Comprobamos si se ha realizado formulario y, en caso contario,
//redirigimos a la página principal (No se permite comenzar el juego
//sin la información del usuario)
if(!checkUserData()){
    location="index.html";
}
console.log(checkUserData());