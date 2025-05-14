//Cena de cumpleaños entre amigos

const precio_total: number = 120;
const precio_bebidas: number = 18;
const usuarios: number = 6;

const por_persona: number = (precio_total - precio_bebidas) / 6;
console.log(`Deben pagar ${por_persona} por persona`);
