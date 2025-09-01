//El Juego del 7 y 1/2

//Cartas inicales
let cartasInicio: number[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
// Array para almacenar las cartas sacadas por el jugador
let puntuacion: number[] = [];

// Variable para controlar si el juego ha terminado
let juegoTerminado: boolean = false;

const barajar = () => {
  for (let i = cartasInicio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartasInicio[i], cartasInicio[j]] = [cartasInicio[j], cartasInicio[i]]; //intercambiar
  }
};

// Muestra la puntuación o mensaje en el div correspondiente
const muestraPuntuacion = (resultado: number | string): void => {
  const puntuacionElemento = document.getElementById("puntuacion") as HTMLDivElement;

  if (puntuacionElemento) {
    puntuacionElemento.innerHTML = resultado.toString();
  }
};
//barajamos
barajar();
// Función que da una carta aleatoria y la añade a la puntuación
const dameCarta = (): void => {
  if (juegoTerminado) {
    return;
  } // No hace nada si el juego ya termino

  const cartaSacada = cartasInicio.pop();

  if (cartaSacada === undefined) {
    juegoTerminado = true;
    return;
  }

  let cartaRandom: number = cartaSacada;

  puntuacion.push(cartaRandom); // Guardamos la carta
  mostrarCarta(cartaRandom); // Mostramos la imagen de la carta
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

  muestraPuntuacion(`El total es: ${resultado}`); // se muestra siempre que se coge una carta mientras el juego no haya terminado

  if (resultado === 7.5 || resultado > 7.5) {
    juegoTerminado = true;
    mostrarMensajeFinal(resultado);
    puntuacion.length = 0; // Vaciar puntuación

    ocultarBtn(btnDarCarta);
    ocultarBtn(plantarse);
    mostrarBtn(reiniciar); // Mostrar botón de reinicio
  }

  //alert(`GAME OVER, el total es: ${resultado}`);

  return resultado;
};

const queHubieraPasado = (resultado: number): void => {
  let total = resultado;
  for (let i = 0; i < cartasInicio.length; i++) {
    const carta = cartasInicio[i++];
  }
};

//Mostrar mensaje Final
function mostrarMensajeFinal(resultado: number): void {
  if (juegoTerminado) {
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

// --- BOTONES ---

// GetElements DOM
const reiniciar = document.getElementById("reiniciar") as HTMLButtonElement;
const plantarse = document.getElementById("plantarse") as HTMLButtonElement;
const btnDarCarta = document.getElementById("dame-carta") as HTMLButtonElement;
const labelPasado = document.getElementById("label-pasado") as HTMLLabelElement;

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

  if (resultado < 7.5) {
    queHubieraPasado(resultado);
  }

  mostrarBtn(reiniciar); //Mostrar boton reinicio
  ocultarBtn(plantarse); // Ocultar botón de Plantarse
  ocultarBtn(btnDarCarta); // Ocultar botón Dar carta
});

// Botón "Nueva Partida"
reiniciar.addEventListener("click", () => {
  juegoTerminado = false;
  cartasInicio = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]; // restaurar mazo
  barajar(); // barajar de nuevo
  mostrarCarta(0); // Mostrar dorso
  puntuacion.length = 0; // Vaciar puntuación
  muestraPuntuacion("Coge una Carta"); // Limpiar texto de resultado
  mostrarBtn(btnDarCarta); // mostrar botón Dar carta
  ocultarBtn(reiniciar); // Ocultar botón de reinicio
  ocultarBtn(plantarse); // Ocultar botón de Plantarse
});
