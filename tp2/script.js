const opciones = ["piedra", "papel", "tijeras"];
const RondasMaximo = 5;
let seleccionJugador = "";
let seleccionPC = "";
let puntuacionJugador = 0;
let puntuacionPC = 0;
let contadorRondas = 0;
let nombreJugador = "";

const nombreJugadorInput = document.getElementById("nombreJugador");
const botonInicio = document.getElementById("botonInicio");
const nombreInputDiv = document.getElementById("nombreInput");
const juegoDiv = document.getElementById("juego");
const opcionesJugador = document.querySelectorAll(".opciones img");
const mostrarNombreJugador = document.getElementById("mostrarNombreJugador");
const mostrarPuntuacionJugador = document.getElementById("puntuacionJugador");
const mostrarPuntuacionPC = document.getElementById("puntuacionPC");
const mostrarResultado = document.getElementById("resultado");
const botonReiniciar = document.getElementById("botonReiniciar");
const imagenSeleccionJugador = document.getElementById("imagenSeleccionJugador");
const imagenSeleccionPC = document.getElementById("imagenSeleccionPC");

botonInicio.addEventListener("click", () => {
    nombreJugador = nombreJugadorInput.value;
    if (nombreJugador.trim() !== "") {  /* aqui verifico que la casilla de ingresar nombre no se encuentre vacia para poder iniciar */
        mostrarNombreJugador.textContent = nombreJugador; /* envio el nombre ingresado para poder mostrarlo por pantalla */
        nombreInputDiv.style.display = "none";  /* aqui desactivo la primera pantalla donde se me pide ingresar el nombre */
        juegoDiv.style.display = "block";   /* para poder activar la segunda pantalla con el bloque "juego" */
    }
});

opcionesJugador.forEach(opcion => {
    opcion.addEventListener("click", () => {
        if (contadorRondas < RondasMaximo) { 
            seleccionJugador = opcion.id; /* aqui asigno la seleccion del jugador por medio del id */
            seleccionPC = opciones[Math.floor(Math.random() * opciones.length)]; /* encontre esta forma de generar un numero aleatorio para elija una de las opciones del array */
            imagenSeleccionJugador.src = `./images/${seleccionJugador}.png`; //Asigana la imagen al valor seleccionado asumiendo que las imágenes tienen nombres "piedra.png", "papel.png", "tijeras.png"
            imagenSeleccionPC.src = `./images/${seleccionPC}.png`;
            elegirGanador(seleccionJugador, seleccionPC); /* le envio la selecciones a la funcion para elegir el ganador */
        }
    });
});



function elegirGanador(player, pc) {
    contadorRondas++; /* le sumo 1 al contador de rondas */
    
    let resultadoRonda = "";
    
    if (player === pc) { 
        resultadoRonda = "Empate - Vuelve a jugar esta ronda";
        contadorRondas--;  /* Restamos 1 para repetir la ronda */
    } else if (
        (player === "piedra" && pc === "tijeras") || /*  determino el ganador ultilizando or */
        (player === "papel" && pc === "piedra") ||
        (player === "tijeras" && pc === "papel")
    ) {
        puntuacionJugador++;  /* sumo 1 la puntuacion del jugador */
        resultadoRonda = "Ganaste esta ronda";
    } else {
        puntuacionPC++;  /* sumo 1 la puntuacion del PC */
        resultadoRonda = "El PC ganó esta ronda";
    }
    
    mostrarPuntuacionJugador.textContent = puntuacionJugador; /* aqui les envio la puntuacion "actualizada" para mostrarlo en pantalla */
    mostrarPuntuacionPC.textContent = puntuacionPC;
    mostrarResultado.textContent = `Ronda ${contadorRondas}: ${resultadoRonda}`;
    

    if (contadorRondas === RondasMaximo) { /* aqui determino quien es el ganador dependiendo de cuantas rondas gano de las 5 */
        if (puntuacionJugador > puntuacionPC) {
            mostrarResultado.textContent = `¡${nombreJugador}, ganaste el juego!`;
        } else if (puntuacionPC > puntuacionJugador) {
            mostrarResultado.textContent = "El PC ganó el juego";
        } else {
            mostrarResultado.textContent = "El juego terminó en empate";
        }
    }
}

botonReiniciar.addEventListener("click", () => {  /* este boton ejecuta la funcion reiniciarJuego */
    reiniciarJuego(); 
});

function reiniciarJuego() {  /* este funcion restablece los valores de las variables a su valor inicial */
    seleccionJugador = ""; /* reincia el valor de la seleccion del valor del array de "opciones" */
    seleccionPC = ""; /* reincia el valor de la seleccion del valor del array de "opciones" de forma aleatoria por el PC*/
    puntuacionJugador = 0; /* vuelve a 0 las puntuacion del jugador */
    puntuacionPC = 0; /* vuelve a 0 las puntuacion del PC */
    contadorRondas = 0; /* vuelve a 0 el contador de rondas*/
    
    mostrarPuntuacionJugador.textContent = "0"; /* asigno 0 la puntuaciones que es lo que va a mostrar al presionar reiniciar */
    mostrarPuntuacionPC.textContent = "0";
    mostrarResultado.textContent = "";
    
    juegoDiv.style.display = "block"; 
    nombreInputDiv.style.display = "none"; /* aqui deje el valor en "none" para que no me pida ingresar de nuevo el nombre del jugador */
    imagenSeleccionJugador.src = "./images/shine.png";  /* Limpia las imágenes de selección */
    imagenSeleccionPC.src = "./images/shine.png";  /* Limpia las imágenes de selección */
}
