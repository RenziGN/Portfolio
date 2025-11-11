/* 
 Pasar toda variable de texto a uppercase
*/
//  TODO  
//! URGENTE
//? 
// <>
const palabras = ["Bytes","Disco","Boton","Cable","Macro","Clase","Clave","Tabla","Datos","Codec"];
const allLetters = /[a-zA-Z]/g;

let input1 = " ";
let intentos = 0;
let condicionvictoria = false;
let cantAciertos=  0;
let teclaPresionada = "";
let limiteInf = 1;
let limiteSup = 5;
let controlEtapa = 0;
let contadorUbicacion = 1;
let palabraJuego = "";
let palabraJugador = ""

IniciarJuego();


function IniciarJuego(){ //Script de inicio de juego
    
    
    
    console.log(contadorUbicacion + " - " + limiteInf )
    
    palabraJuego = ElegirPalabraAleatoria() // Esta funcion selecciona y asigna una palabra aleatoria del array
    palabraJuego = palabraJuego.toUpperCase(); // CONVERTIMOS EL STRING A MAYUSCULAS
    saberTeclaInput();

    /*
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
    */
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

function CompararPalabra(palabraJugador){ //* Esta funcion esta correcta
    cantAciertos = 0
    for(i = 0 ; i < 5 ; i++){ // *RECORRE Y COMPARA LA PALABRA DEL JUEGO CONTRA LA DEL JUGADOR
        letraJ = palabraJugador[i] //* LETRA JUGADOR
        letraM = palabraJuego[i]   //* LETRA JUEGO
        j = 0
        switch(controlEtapa)
        {
            case 1:
                j = i + 1;
                break;
            case 2:
                j = i + 6;
                break;
            case 3:
                j = i + 11;
                break;
            case 4:
                j = i + 16;
                break;
            case 5:
                j = i + 21;
                break;
        }


        if(letraJ === letraM){
            //* EL JUGADOR ACERTÓ LA LETRA
            console.log(`La letra ${letraJ} es correcta en esta posición`)
            // PINTAR DE VERDE
            cantAciertos = cantAciertos + 1;
            console.log(cantAciertos);

            document.querySelector(`#p${j}`).classList.add("correcta");
            
        }else if(palabraJuego.includes(letraJ)){
            //? LA PALABRA DEL JUGADOR ESTÁ CONTENIDA DENTRO DE LA PALABRA DEL JUEGO
            console.log(`La letra ${letraJ} está contenida en la palabra del juego, pero en otra posición`)
            // PINTAR DE AMARILLO
        }else{
            console.log("error, palabra o letra no contenida");
            //! LA LETRA DEL JUGADOR NO ESTÁ CONTENIDA EN LA PALABRA DEL JUEGO    !!!!PINTAR DE ROJO
        }

        if(cantAciertos === 5){
            condicionvictoria = true
        }
   
    }
}

function saberTeclaInput(){ //* Esta funcion esta correcta
    window.addEventListener('keydown', function (e) {
    teclaPresionada = e.key.toUpperCase();
        if (teclaPresionada.match(allLetters) && teclaPresionada.length==1) // toma el backspace ademas del rango determinado
        {
            
            Agregarletra();
            
            SubirEtapa();

            
            console.log(limiteInf);
        }
        else if(teclaPresionada === "BACKSPACE"){
            BorrarLetra()
        }
        else
        {
            alert("Caracter no valido"); //en caso del caracter no estar dentro del rango, envia una alerta
        }     
    }, false);
    

}


function verificarfinaljuego() //esto verifica el estado del juego final
{ 
    if (contadorUbicacion > limiteSup)
    {
        return true
    }
    else
    {
        return false
    }
}


function ElegirPalabraAleatoria(){//* Esta funcion esta correcta
    let randomPos = Math.floor(Math.random() * palabras.length) // esta funcion elige aleatoriamente una de las palabras del array Palabras
    return palabras[randomPos]
}



function Agregarletra(){ //* Esta funcion esta correcta
    if (contadorUbicacion > limiteSup)
    {
        alert("NO SE PUEDE");
    }
    else
    {
        document.querySelector(`#p${contadorUbicacion}`).innerHTML = `${teclaPresionada}`; //escribe el input segun donde este el contador de ubicacion
        //TODO hacer la verificacion del limite 
        contadorUbicacion++; //Aumenta en 1 el contdor de ubicacion



    }
}

function BorrarLetra() //* Esta funcion esta correcta
{
    console.log(contadorUbicacion + " - " + limiteInf )
    
    if (contadorUbicacion > limiteInf ) 
    {
        contadorUbicacion--; //baja el contador 1 para poder sobreescribir la letra
        document.querySelector(`#p${contadorUbicacion }`   ).innerHTML = " "; //si es backspace borra el ultimo input
        console.log("LUEGO DE BORRAR - CONT UBI" + contadorUbicacion)
    } 
    else
    {
        console.log(contadorUbicacion);
        console.log(limiteInf);
        alert("No se pueden retroceder mas casillas");
    }
}


function SubirEtapa(){
    
    if ((contadorUbicacion-1) % 5 === 0)
    {
        ControlarEtapa();
        limiteInf = contadorUbicacion;
        limiteSup = limiteInf + 4;
        controlEtapa++;
        console.log("etapa = " + controlEtapa) ;
        
    }
}

function ControlarEtapa(){
    palabraJugador = TomarPalabraJugador();
    if (palabraJugador === palabraJuego){
        alert("Fin del juego");
    }
    console.log(palabraJuego);
    CompararPalabra(palabraJugador);
    
}

function TomarPalabraJugador(){
    let palabra = ""
    let letra = ""
    console.log(limiteInf + " - " + limiteSup)
    for(i = limiteInf; i <= limiteSup ; i++){
        letra = document.querySelector(`#p${i}`).innerHTML
        palabra = palabra + letra;
        console.log("Esta es la palabra "+palabra);
    }
    return palabra
}