//El Juego del 7 y 1/2

//TODO-FALTA poner bonito con CSS

// Array para almacenar las cartas sacadas por el jugador
let puntuacion: number[] = [];

// Variable para controlar si el juego ha terminado
let juegoTerminado: boolean = false;

// Muestra la puntuación o mensaje en el div correspondiente
const muestraPuntuacion = (resultado: number | string): void => {
  const puntuacionElemento = document.getElementById(
    "puntuacion"
  ) as HTMLDivElement;

  if (puntuacionElemento) {
    puntuacionElemento.innerHTML = resultado.toString();
  }
};

// Función que da una carta aleatoria y la añade a la puntuación
const dameCarta = (): void => {
  if (juegoTerminado) {
    return;
  } // No hace nada si el juego ya termino

  let numRandom: number = Math.floor(Math.random() * 10) + 1;

  // Si el número es mayor que 7, lo convertimos en 10, 11 o 12
  if (numRandom && numRandom > 7) {
    numRandom += 2;
  }

  puntuacion.push(numRandom); // Guardamos la carta
  mostrarCarta(numRandom); // Mostramos la imagen de la carta
  comprobarPuntuacion(puntuacion); // Calculamos el nuevo total
};

// Calcula la puntuación total y gestiona el "Game Over"
const comprobarPuntuacion = (puntuacion: number[]): number => {
  const resultado = puntuacion.reduce((total, carta) => {
    if (carta >= 1 && carta <= 7) {
      return total + carta;
    } else if (carta === 10 || carta === 11 || carta === 12) {
      return total + 0.5;
    }
    return total;
  }, 0);

  muestraPuntuacion(`El total es: ${resultado}`);

  // Si se pasa de 7.5, fin del juego
  if (resultado > 7.5) {
    muestraPuntuacion(`GAME OVER, el total es: ${resultado}`);
    //alert(`GAME OVER, el total es: ${resultado}`);
    puntuacion.length = 0; // Vaciar puntuación
    juegoTerminado = true;
    ocultarBtn(btnDarCarta);
    ocultarBtn(plantarse);
    mostrarBtn(reiniciar); // Mostrar botón de reinicio
  }

  return resultado;
};

//Mostrar mensaje Final
const mostrarMensajeFinal = (resultado: number): void => {
  if (juegoTerminado) {
    if (resultado < 4) {
      muestraPuntuacion(
        `"Has sido muy conservador", el total es: ${resultado}`
      );
    } else if (resultado === 5) {
      muestraPuntuacion(
        `"Te ha entrado el cangelo eh?", el total es: ${resultado}`
      );
    } else if (resultado >= 6 && resultado < 7.5) {
      muestraPuntuacion(`"Casi casi...", el total es: ${resultado}`);
    } else if (resultado === 7.5) {
      muestraPuntuacion(
        `"¡Lo has clavado! ¡Enhorabuena!", el total es: ${resultado}`
      );
    }
  }
};

//Mostrar Botones
const mostrarBtn = (boton: HTMLButtonElement): void => {
  boton.style.display = "block";
};

//Ocultar Botones
const ocultarBtn = (boton: HTMLButtonElement): void => {
  boton.style.display = "none";
};

// Muestra la imagen correspondiente a la carta
const mostrarCarta = (carta: number): void => {
  let divMostrarCarta = document.getElementById(
    "img-carta-arriba"
  ) as HTMLImageElement;
  if (divMostrarCarta !== null && divMostrarCarta !== undefined) {
    switch (carta) {
      case 0:
        divMostrarCarta.src =
          "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
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

// --- BOTONES ---

// Botones
const reiniciar = document.getElementById("reiniciar") as HTMLButtonElement;
const plantarse = document.getElementById("plantarse") as HTMLButtonElement;
const btnDarCarta = document.getElementById("dame-carta") as HTMLButtonElement;

// Botón "Dame carta"
btnDarCarta.addEventListener("click", () => {
  mostrarBtn(plantarse);
  dameCarta();
});

// Botón "Plantarse"
plantarse.addEventListener("click", () => {
  if (juegoTerminado) {
    return;
  }

  juegoTerminado = true;
  const resultado: number = comprobarPuntuacion(puntuacion);
  mostrarMensajeFinal(resultado);
  mostrarBtn(reiniciar); //Mostrar boton reinicio
  ocultarBtn(plantarse); // Ocultar botón de Plantarse
  ocultarBtn(btnDarCarta); // Ocultar botón Dar carta
});

// Botón "Nueva Partida"
reiniciar.addEventListener("click", () => {
  juegoTerminado = false;
  mostrarCarta(0); // Mostrar dorso
  puntuacion.length = 0; // Vaciar puntuación
  muestraPuntuacion("Coge una Carta"); // Limpiar texto de resultado
  mostrarBtn(btnDarCarta); // mostrar botón Dar carta
  ocultarBtn(reiniciar); // Ocultar botón de reinicio
  ocultarBtn(plantarse); // Ocultar botón de Plantarse
});
