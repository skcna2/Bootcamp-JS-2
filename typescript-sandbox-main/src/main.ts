// //main.ts

// // Adivina el número

// // Generamos un númro aleatorio

// const generarNumeroAleatorio = (): number => {
//   return Math.floor(Math.random() * 101);
// };

// const numeroAleatorio: number = generarNumeroAleatorio();
// console.log(numeroAleatorio);

// // Comprobar número y devolver string
// const adivinarNumeros = (): string => {
//   //Obtenemos el valor introducido
//   const numeroIntroducido = (
//     document.getElementById("numero") as HTMLInputElement
//   ).value;
//   // comprobamos que introduce un número, no otro valor
//   let numeroUsuario: number = 0;
//   if (numeroIntroducido && !isNaN(parseInt(numeroIntroducido))) {
//     numeroUsuario = parseInt(numeroIntroducido);
//   } else {
//     console.log("Introduce un Número");
//   }

//   if (numeroAleatorio === numeroUsuario) {
//     return "Has acertado";
//   }

//   return "No has acertado";
// };

// // Obtener id boton
// const botonAdivinar = document.getElementById("comprobar");
// // obetener id resultado
// const resultado = document.getElementById("resultado");

// // compruebo que existen los elementos y le paso el valor de la funcion
// if (botonAdivinar && resultado) {
//   botonAdivinar.addEventListener("click", () => {
//     resultado.innerHTML = adivinarNumeros();
//   });
// }
