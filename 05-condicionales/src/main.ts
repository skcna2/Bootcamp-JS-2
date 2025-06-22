//El Juego del 7 y 1/2

//variable para puntuacion

let puntuacion: number[] = [];
let juegoTerminado: boolean = false;

// Mostrar puntuacion
const muestraPuntuacion = (resultado: number | string): void => {
  const puntuacionElemento = document.getElementById("puntuacion");

  if (puntuacionElemento) {
    puntuacionElemento.innerHTML = resultado.toString();
  }
};
//Dar-Tomar carta
const dameCarta = (): void => {
  if (juegoTerminado) {
    return;
  } // No hace nada si el juego ya termino

  let numRandom: number = Math.floor(Math.random() * 10) + 1;
  if (numRandom && numRandom > 7) {
    numRandom += 2;
  }

  puntuacion.push(numRandom);
  mostrarCarta(numRandom);
  comprobarPuntuacion(puntuacion);
};
// Comprobar puntuacion
const comprobarPuntuacion = (puntuacion: number[]): void => {
  const resultado = puntuacion.reduce((total, carta) => {
    if (carta >= 1 && carta <= 7) {
      return total + carta;
    } else if (carta === 10 || carta === 11 || carta === 12) {
      return total + 0.5;
    }
    return total;
  }, 0);

  if (resultado > 7.5) {
    muestraPuntuacion(`GAME OVER, el total es: ${resultado}`);
    alert(`GAME OVER, el total es: ${resultado}`);
    puntuacion.length = 0;
    juegoTerminado = true; //juego terminado
  } else if (resultado < 4) {
    muestraPuntuacion(`"Has sido muy conservador", el total es: ${resultado}`);
  } else if (resultado === 5) {
    muestraPuntuacion(
      `"Te ha entrado el cangelo eh?", el total es: ${resultado}`
    );
  } else if (resultado === 6 || resultado === 7) {
    muestraPuntuacion(`"Casi casi...", el total es: ${resultado}`);
  } else if (resultado === 7.5) {
    muestraPuntuacion(
      `"¡Lo has clavado! ¡Enhorabuena!", el total es: ${resultado}`
    );
    puntuacion.length = 0;
  }
};

// Mostrar carta
const mostrarCarta = (carta: number): void => {
  let divMostrarCarta = document.getElementById(
    "img-carta-arriba"
  ) as HTMLImageElement;
  if (divMostrarCarta !== null && divMostrarCarta !== undefined) {
    switch (carta) {
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

//BOTONES
//dame carta
document.getElementById("dame-carta")?.addEventListener("click", dameCarta);
// llamar a comprobar al pulsar
//document
// .getElementById("comprobar")
// ?.addEventListener("click", muestraPuntuacion);
