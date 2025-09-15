import { isJuegoTerminado } from "./modelo";

// Muestra la puntuación o mensaje en el div correspondiente
export const muestraPuntuacion = (resultado: number | string): void => {
  const puntuacionElemento = document.getElementById("puntuacion") as HTMLDivElement;

  if (puntuacionElemento) {
    puntuacionElemento.innerHTML = resultado.toString();
  }
};

//Mostrar -Ocultar Botones
export const mostrarBtn = (boton: HTMLButtonElement): void => {
  boton.style.display = "block";
};

export const ocultarBtn = (boton: HTMLButtonElement): void => {
  boton.style.display = "none";
};

// Muestra la imagen correspondiente a la carta
export const mostrarCarta = (carta: number): void => {
  let divMostrarCarta = document.getElementById("img-carta-arriba") as HTMLImageElement;
  if (divMostrarCarta !== null && divMostrarCarta !== undefined) {
    switch (carta) {
      case 0:
        divMostrarCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
        break;
      case 1:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
      case 2:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
      case 3:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
      case 4:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
      case 5:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
      case 6:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
      case 7:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
      case 10:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
      case 11:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
      case 12:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
    }
  }
};

//Mostrar mensaje Final
export function mostrarMensajeFinal(resultado: number): void {
  if (isJuegoTerminado()) {
    if (resultado <= 4) {
      muestraPuntuacion(`"Has sido muy conservador", el total es: ${resultado}`);
    } else if (resultado === 5) {
      muestraPuntuacion(`"Te ha entrado el cangelo eh?", el total es: ${resultado}`);
    } else if (resultado >= 6 && resultado < 7.5) {
      muestraPuntuacion(`"Casi casi...", el total es: ${resultado}`);
    } else if (resultado === 7.5) {
      muestraPuntuacion(`"¡Lo has clavado! ¡Enhorabuena!", el total es: ${resultado}`);
    } else if (resultado > 7.5) {
      muestraPuntuacion(`GAME OVER, el total es: ${resultado}`);
    }
  }
}

// --- BOTONES ---

// GetElements DOM
export const getBotones = () => {
  const reiniciar = document.getElementById("reiniciar") as HTMLButtonElement;
  const plantarse = document.getElementById("plantarse") as HTMLButtonElement;
  const btnDarCarta = document.getElementById("dame-carta") as HTMLButtonElement;
  const btnPasado = document.getElementById("btn-pasado") as HTMLButtonElement;

  return {
    reiniciar,
    plantarse,
    btnDarCarta,
    btnPasado,
  };
};
