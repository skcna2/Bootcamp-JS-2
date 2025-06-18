// //main.ts

// contador Turnos
//TODO CAMBIAR TURNO para que no baje de 0 a negativo
//Obtengo el elemento del turno

const numeroTurno = document.getElementById("num-turno") as HTMLHeadElement;

//obtemer elemento Inout
const inputNumero = document.getElementById("asignar-num") as HTMLInputElement;

//Numero Siguiente
const siguienteNumero = (): void => {
  if (numeroTurno) {
    let valor: number = Number(numeroTurno.textContent);
    if (valor >= 0) {
      ++valor;
      numeroTurno.innerHTML = valor.toString().padStart(2, "0");
    }
  }
};

//Numero anterior
const anteriorNumero = (): void => {
  if (numeroTurno) {
    let valor: number = Number(numeroTurno.textContent);
    --valor;
    if (valor >= 0) {
      numeroTurno.innerHTML = valor.toString().padStart(2, "0");
    }
  }
};
// reset a 0
const resetNumero = (): void => {
  if (numeroTurno) {
    let valor: string = "0";
    numeroTurno.innerHTML = valor.padStart(2, "0");
  }
};

// Asignar numero introducido
const asignarNumero = (): void => {
  if (
    inputNumero &&
    !isNaN(Number(inputNumero.value)) &&
    Number(inputNumero.value) >= 0
  ) {
    numeroTurno.innerHTML = inputNumero.value.padStart(2, "0");
  }
};

//Clicks botones

document
  .getElementById("btn-siguiente")
  ?.addEventListener("click", siguienteNumero);
document
  .getElementById("btn-anterior")
  ?.addEventListener("click", anteriorNumero);
document.getElementById("btn-reset")?.addEventListener("click", resetNumero);
document
  .getElementById("btn-asignar")
  ?.addEventListener("click", asignarNumero);
