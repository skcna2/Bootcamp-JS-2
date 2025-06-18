// grupo musical

///Corregir - Para el género musical podrías haber usado un enumerado, añadiendo el icono en cada género.
//Las variables de cada grupo (grupo1, grupo2, etc.) deberían ser const y no let. Si una variable no cambia, como es el caso, siempre es preferible usar const.
//Por consola había que mostrar todos los datos del grupo, no solo el nombre.
//Te animo a volver a subir la entrega con los cambios que te menciono.

interface GrupoMusical {
  nombre: string;
  anoFundacion: number;
  activo: boolean;
  genero: string;
}

const grupo1: GrupoMusical = {
  nombre: "The beatles",
  anoFundacion: 1960,
  activo: true,
  genero: "musical",
};

const grupo2: GrupoMusical = {
  nombre: "Queen",
  anoFundacion: 1970,
  activo: false,
  genero: "Rock",
};

const grupo3: GrupoMusical = {
  nombre: "AC DC",
  anoFundacion: 1973,
  activo: true,
  genero: "Hard Rock",
};

const grupo4: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  anoFundacion: 1770,
  activo: false,
  genero: "Clasica",
};

const grupo5: GrupoMusical = {
  nombre: "The Rolling Stones",
  anoFundacion: 1962,
  activo: false,
  genero: "Rock",
};

const grupos: GrupoMusical[] = [grupo1, grupo2, grupo3, grupo4, grupo5];

grupos.forEach((grupo) => {
  console.log(
    `El nombre del grupo es: %c${grupo.nombre}`,
    "font-weight:bold;font-size:15px; background-color: green;color:white;"
  );
});
