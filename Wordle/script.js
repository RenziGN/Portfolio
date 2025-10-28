/* 
 Pasar toda variable de texto a uppercase
*/
// <>
const palabras = ["Bytes","Disco","Botón","Cable","Macro","Clase","Clave","Tabla","Datos","Codec"];

let palabraJuego = "";
let condicionVictoria = false;


function iniciarJuego(){ // 
    let intentos = 0;
    let palabraJugador = ""
    palabraJuego = elegirPalabraAleatoria() // Esta funcion selecciona y asigna una palabra aleatoria del array
    palabraJuego.toUpperCase(); // CONVERTIMOS EL STRING A MAYUSCULAS
    
    while(intentos < 6 && condicionVictoria !== true ){
        palabraJugador = ""; //* REINICIAMOS LA PALABRA DEL JUGADOR
        for(i = 0 ; i < 5 ; i++){ //* PARA LUEGO REESCRIBIRLA
            letra = prompt("Ingrese una letra").toUpperCase()
            palabraJugador += letra
        }
        palabraJugador.toUpperCase();
        palabraJuego = "BYTES"
        console.log(palabraJugador)
        compararPalabra(palabraJugador,palabraJuego); 
        intentos++;
    }
}

function compararPalabra(palabraJ,palabraM){ 
    let cantAciertos = 0;
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
            condicionVictoria = true
        }

    }
}

function elegirPalabraAleatoria(){
    //* Esta funcion elige aleatoriamente una de las palabras del array Palabras
    let randomPos = Math.floor(Math.random() * palabras.length); 
    return palabras[randomPos];
}

iniciarJuego()