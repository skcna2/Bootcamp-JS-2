import { crearPartida } from "./partida";

export const estadoPartida = crearPartida();

export const barajar = () => {
  for (let i = estadoPartida.cartasInicio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [estadoPartida.cartasInicio[i], estadoPartida.cartasInicio[j]] = [
      estadoPartida.cartasInicio[j],
      estadoPartida.cartasInicio[i],
    ]; //intercambiar
  }
};
estadoPartida.resetCartasInicio();

// Calcula la puntuación total
export const calcularPuntuacion = (puntuacion: number[]): number => {
  return puntuacion.reduce((total, carta) => {
    if (carta >= 1 && carta <= 7) {
      return total + carta;
    } else if (carta === 10 || carta === 11 || carta === 12) {
      return total + 0.5;
    }
    return total;
  }, 0);
};
