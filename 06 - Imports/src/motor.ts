import { calcularPuntuacion, cartasInicio, isJuegoTerminado, puntuacion, setJuegoTerminado } from "./modelo";
import { getBotones, mostrarBtn, mostrarCarta, mostrarMensajeFinal, muestraPuntuacion, ocultarBtn } from "./ui";

export const dameCarta = (): void => {
  if (isJuegoTerminado()) {
    return;
  } // No hace nada si el juego ya termino

  const cartaSacada = cartasInicio.pop();

  if (cartaSacada === undefined) {
    setJuegoTerminado(true);
    return;
  }

  let cartaRandom: number = cartaSacada;

  puntuacion.push(cartaRandom); // Guardamos la carta
  mostrarCarta(cartaRandom); // Mostramos la imagen de la carta
  comprobarPuntuacion(puntuacion); // Calculamos el nuevo total
};

export const comprobarPuntuacion = (puntuacion: number[]): number => {
  const resultado = calcularPuntuacion(puntuacion);

  // UI: mostramos el total
  muestraPuntuacion(`El total es: ${resultado}`);

  // Lógica: ver si terminó
  if (resultado >= 7.5) {
    setJuegoTerminado(true);
    mostrarMensajeFinal(resultado);

    // Ocultar/mostrar botones
    const { btnDarCarta, plantarse, btnPasado, reiniciar } = getBotones();
    ocultarBtn(btnDarCarta);
    ocultarBtn(plantarse);
    mostrarBtn(btnPasado);
    mostrarBtn(reiniciar);
  }

  return resultado;
};
