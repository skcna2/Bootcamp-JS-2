import { barajar, estadoPartida } from "./modelo";
import { comprobarPuntuacion, dameCarta, queHubieraPasado } from "./motor";
import { muestraPuntuacion, mostrarBtn, ocultarBtn, mostrarCarta, mostrarMensajeFinal, getBotones } from "./ui";
//El Juego del 7 y 1/2

// Traemos los botones
const { reiniciar, plantarse, btnDarCarta, btnPasado } = getBotones();
//barajamos
barajar();

// Botón "Dame carta"
btnDarCarta.addEventListener("click", () => {
  mostrarBtn(plantarse);
  dameCarta();
});

// Botón "Plantarse"
plantarse.addEventListener("click", () => {
  if (estadoPartida.isJuegoTerminado()) {
    return;
  }

  estadoPartida.setJuegoTerminado(true);
  const resultado: number = comprobarPuntuacion(estadoPartida.puntuacion);
  mostrarMensajeFinal(resultado);
  mostrarBtn(btnPasado);
  mostrarBtn(reiniciar); //Mostrar boton reinicio
  ocultarBtn(plantarse); // Ocultar botón de Plantarse
  ocultarBtn(btnDarCarta); // Ocultar botón Dar carta
});

// Botón "Hubiera pasado"Plantarse
btnPasado.addEventListener("click", () => {
  const resultado: number = comprobarPuntuacion(estadoPartida.puntuacion);
  queHubieraPasado(resultado);
  ocultarBtn(btnPasado);
});

// Botón "Nueva Partida"
reiniciar.addEventListener("click", () => {
  estadoPartida.setJuegoTerminado(false);
  estadoPartida.resetCartasInicio(); // restaurar mazo
  barajar(); // barajar de nuevo
  mostrarCarta(0); // Mostrar dorso
  estadoPartida.resetPuntuacion(); // Vaciar puntuación
  muestraPuntuacion("Coge una Carta"); // Limpiar texto de resultado
  mostrarBtn(btnDarCarta); // mostrar botón Dar carta
  ocultarBtn(reiniciar); // Ocultar botón de reinicio
  ocultarBtn(plantarse); // Ocultar botón de Plantarse
  ocultarBtn(btnPasado);
});
