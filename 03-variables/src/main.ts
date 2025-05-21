// grupo musical

interface GrupoMusical {
  nombre: string;
  anoFundacion: number;
  activo: boolean;
  genero: string;
}

let grupo1: GrupoMusical = {
  nombre: "The beatles",
  anoFundacion: 1960,
  activo: true,
  genero: "musical",
};

let grupo2: GrupoMusical = {
  nombre: "Queen",
  anoFundacion: 1970,
  activo: false,
  genero: "Rock",
};

let grupo3: GrupoMusical = {
  nombre: "AC DC",
  anoFundacion: 1973,
  activo: true,
  genero: "Hard Rock",
};

let grupo4: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  anoFundacion: 1770,
  activo: false,
  genero: "Clasica",
};

let grupo5: GrupoMusical = {
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
