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

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  // Tu implementación aquí :)
  const listPacientes: Pacientes[] = [];
  for (let paciente of pacientes) {
    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      listPacientes.push(paciente);
    }
  }

  return listPacientes;
};

//Elemento Resultado
const resultado = document.getElementById("resultado") as HTMLElement;
const mostrarResultado1 = () => {
  resultado.textContent = JSON.stringify(obtenPacientesAsignadosAPediatria(pacientes));
};
const mostrarResultado2 = () => {
  resultado.textContent = JSON.stringify(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));
};
//Botoones
const botonPed = document.getElementById("btn-paciente-pediatria");
botonPed?.addEventListener("click", mostrarResultado1);

const botonPedMenor = document.getElementById("btn-paciente-pediatria-menor");
botonPedMenor?.addEventListener("click", mostrarResultado2);
