/* 
 Pasar toda variable de texto a uppercase
*/
// <>
const palabras = ["Bytes","Disco","Botón","Cable","Macro","Clase","Clave","Tabla","Datos","Codec"];

let palabraJuego = "";
let input1 = " ";
let intentos = 0;
let condicionvictoria = false;
let c_aciertos=  0;

function iniciojuego(){ //Script de inicio de juego
    let palabraJugador = ""
    palabraJuego = ElegirPalabraAleatoria() // Esta funcion selecciona y asigna una palabra aleatoria del array
    palabraJuego.toUpperCase(); // CONVERTIMOS EL STRING A MAYUSCULAS

    while(intentos < 6 && !condicionvictoria ){

    for(i = 0 ; i < 5 ; i++){
        letra = prompt("Ingrese una letra")
        palabraJugador += letra
    }
    palabraJugador.toUpperCase();
    palabraJuego = "BYTES"
    CompararPalabra(palabraJugador,palabraJuego); 
    intentos++;
    }
}


iniciojuego()
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

function CompararPalabra(palabraJ,palabraM,i){ //
    for(i = 0 ; i < 5 ; i++){ // *RECORRE Y COMPARA LA PALABRA DEL JUEGO CONTRA LA DEL JUGADOR
        letraJ = palabraJ[i]
        letraM = palabraM[i]
        c_aciertos = 0

        if(letraJ === letraM){
            //* EL JUGADOR ACERTÓ LA LETRA
            console.log(`La letra ${letraJ} es correcta en esta posición`)
            c_aciertos = c_aciertos + 1;
            
        }else if(palabraJuego.includes(letraJ)){
            //? LA PALABRA DEL JUGADOR ESTÁ CONTENIDA DENTRO DE LA PALABRA DEL JUEGO
            console.log(`La letra ${letraJ} está contenida en la palabra del juego, pero en otra posición`)
        }else{
            console.log("error, palabra o letra no contenida");
            //! LA LETRA DEL JUGADOR NO ESTÁ CONTENIDA EN LA PALABRA DEL JUEGO   
        }

        if (c_aciertos === 5)
        {
            condicionvictoria = true;
        }
    }
}

function ElegirPalabraAleatoria(){
    let randomPos = Math.floor(Math.random() * palabras.length) // esta funcion elige aleatoriamente una de las palabras del array Palabras
    return palabras[randomPos]
}

function subirintento(){
    intento = intento + 1;
}