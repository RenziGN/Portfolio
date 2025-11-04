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
            if (letra.match(allLetters))
            {
                saberTeclaInput(contadorUbicacion);
                palabraJugador += letra;
            }
            else
            {
                alert("Caracter no valido");
            }
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
     document.querySelector(`#p${contadorUbicacion}`).innerHTML = `${teclaPresionada}`;
     verficadorEnterInput(teclaPresionada);
     contadorUbicacion++;
    }, false);
    

}

function verficadorEnterInput(a){
    if (a === "BACKSPACE")
    {
        contadorUbicacion -1;
    }
}


function ElegirPalabraAleatoria(){
    let randomPos = Math.floor(Math.random() * palabras.length) // esta funcion elige aleatoriamente una de las palabras del array Palabras
    return palabras[randomPos]
}

IniciarJuego()