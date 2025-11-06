/* 
 Pasar toda variable de texto a uppercase
*/
// <>
const palabras = ["Bytes","Disco","Botón","Cable","Macro","Clase","Clave","Tabla","Datos","Codec"];
const allLetters = /[a-zA-Z]/g;
let palabraJuego = "";
let input1 = " ";
let intentos = 0;
let condicionvictoria = false;
let cantAciertos=  0;
let contadorUbicacion = 1;
let teclaPresionada = "";

saberTeclaInput(contadorUbicacion);

function IniciarJuego(){ //Script de inicio de juego
    let palabraJugador = ""
    palabraJuego = ElegirPalabraAleatoria() // Esta funcion selecciona y asigna una palabra aleatoria del array
    palabraJuego.toUpperCase(); // CONVERTIMOS EL STRING A MAYUSCULAS
    
    while(intentos < 6 && condicionvictoria !== true ){
        palabraJugador = "";
        for(i = 0 ; i < 5 ; i++){
            letra = prompt("Ingrese una letra").toUpperCase();
            
        }
        palabraJugador.toUpperCase();
        palabraJuego = "BYTES";
        console.log(palabraJugador)
        CompararPalabra(palabraJugador,palabraJuego); 
        intentos++;
    }
}

/*
function Checkletra(palabra,letraingre,){ //Esta funcion chequea 
        vuelta = vuelta + 1;
        letra = palabra[vuelta];
        if (letra === letraingre)
        {
            console.log("Letra ok")
        }
        else
        {
            console.log("Letra mal")
        }
    
}
*/

function CompararPalabra(palabraJ,palabraM){ //
    cantAciertos = 0

    for(i = 0 ; i < 5 ; i++){ // *RECORRE Y COMPARA LA PALABRA DEL JUEGO CONTRA LA DEL JUGADOR
        letraJ = palabraJ[i]
        letraM = palabraM[i]
        

        if(letraJ === letraM){
            //* EL JUGADOR ACERTÓ LA LETRA
            console.log(`La letra ${letraJ} es correcta en esta posición`)
            cantAciertos = cantAciertos + 1;
            console.log(cantAciertos);
           
            
        }else if(palabraJuego.includes(letraJ)){
            //? LA PALABRA DEL JUGADOR ESTÁ CONTENIDA DENTRO DE LA PALABRA DEL JUEGO
            console.log(`La letra ${letraJ} está contenida en la palabra del juego, pero en otra posición`)
        }else{
            console.log("error, palabra o letra no contenida");
            //! LA LETRA DEL JUGADOR NO ESTÁ CONTENIDA EN LA PALABRA DEL JUEGO   
        }

        if(cantAciertos === 5){
            condicionvictoria = true
        }
   
    }
}

function saberTeclaInput(){
    window.addEventListener('keydown', function (e) {
    teclaPresionada = e.key.toUpperCase();
        if (teclaPresionada.match(allLetters) && teclaPresionada.length==1 || teclaPresionada === "BACKSPACE" ) // toma el backspace ademas del rango determinado
        {
            if (teclaPresionada === "BACKSPACE") //si backspace es verdadero
            {
            verificadorInput(teclaPresionada); // verifica si es correcta
            document.querySelector(`#p${contadorUbicacion - 1 }`).innerHTML = " "; //si es backspace borra el ultimo input
            contadorUbicacion--; //baja el contador 1 para poder sobreescribir la letra
            }
            else
            {
            document.querySelector(`#p${contadorUbicacion}`).innerHTML = `${teclaPresionada}`; //escribe el input segun donde este el contador de ubicacion
            verificadorInput(teclaPresionada); // verifica la tecla
            contadorUbicacion++; //Aumenta en 1 el contador de ubicacion
            if (verificarfinaljuego(contadorUbicacion) === false)
            {
                alert("Fin del juego");
            }
            }
        }
        else
        {
            alert("Caracter no valido"); //en caso del caracter no estar dentro del rango, envia una alerta
        }     
    }, false);
    

}


function verificarfinaljuego(estado) //esto verifica el estado del juego final
{ 
    if (estado === 26)
    {
        return false
    }
    else
    {
        return true
    }
}


function verificadorInput(a){ //Verifica si el input es backspace
    if (a === "BACKSPACE")
    {
        return true
    }
    else
    {
        return false
    }
}


function ElegirPalabraAleatoria(){
    let randomPos = Math.floor(Math.random() * palabras.length) // esta funcion elige aleatoriamente una de las palabras del array Palabras
    return palabras[randomPos]
}

IniciarJuego()