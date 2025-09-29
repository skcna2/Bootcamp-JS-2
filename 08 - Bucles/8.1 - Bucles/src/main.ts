import { pacientes, Pacientes } from "./pacientes";

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)
  const listPacientes: Pacientes[] = [];
  for (let paciente of pacientes) {
    if (paciente.especialidad === "Pediatra") {
      listPacientes.push(paciente);
    }
  }

  return listPacientes;
};

//console.log(obtenPacientesAsignadosAPediatria(pacientes));

//const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (//
//pacientes: Pacientes[]
//): Pacientes[] => {
//  // Tu implementación aquí :)
//}//;

//Elemento Resultado
const resultado = document.getElementById("resultado") as HTMLElement;
const mostrarResultado = () => {
  resultado.textContent = JSON.stringify(obtenPacientesAsignadosAPediatria(pacientes));
};

//Elemento boton
const botonPed = document.getElementById("btn-paciente-pediatria");
botonPed?.addEventListener("click", mostrarResultado);
