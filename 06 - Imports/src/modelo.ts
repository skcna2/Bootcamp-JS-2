//Cartas inicales
export let cartasInicio: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
// Array para almacenar las cartas sacadas por el jugador
export let puntuacion: number[] = [];

export let juegoTerminado = false;

export const setJuegoTerminado = (valor: boolean) => {
  juegoTerminado = valor;
};

export const isJuegoTerminado = (): boolean => {
  return juegoTerminado;
};

export const barajar = () => {
  for (let i = cartasInicio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartasInicio[i], cartasInicio[j]] = [cartasInicio[j], cartasInicio[i]]; //intercambiar
  }
};
export function resetCartasInicio() {
  cartasInicio = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
}
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
