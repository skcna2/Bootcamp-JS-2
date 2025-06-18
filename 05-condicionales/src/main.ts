//El Juego del 7 y 1/2

//variable para puntuacion

let puntuacion: number = 0;

function muestraPuntuacion() {
  const puntuacionElemento = document.getElementById("puntuacion");
  if (puntuacionElemento) {
    puntuacionElemento.innerHTML = puntuacion.toString();
  }
}

function dameCarta() {
  let numRandom: number = Math.floor(Math.random() * 10) + 1;
  if (numRandom && numRandom > 7) {
    numRandom = numRandom + 2;
  }
  console.log(numRandom);
}

function mostrarCarta() {}

//BOTONES
//dame carta
document.getElementById("dame-carta")?.addEventListener("click", dameCarta);
// llamar a comprobar al pulsar
document
  .getElementById("comprobar")
  ?.addEventListener("click", muestraPuntuacion);
