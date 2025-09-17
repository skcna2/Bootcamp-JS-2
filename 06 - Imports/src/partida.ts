interface IPartida {
  cartasInicio: number[];
  puntuacion: number[];
  juegoTerminado: boolean;
}

export class Partida implements IPartida {
  cartasInicio: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  puntuacion: number[] = [];
  juegoTerminado: boolean = false;

  setJuegoTerminado(valor: boolean) {
    this.juegoTerminado = valor;
  }

  isJuegoTerminado(): boolean {
    return this.juegoTerminado;
  }

  resetCartasInicio() {
    this.cartasInicio = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  }

  resetPuntuacion() {
    this.puntuacion = [];
  }
}

export const crearPartida = (): Partida => {
  return new Partida();
};
