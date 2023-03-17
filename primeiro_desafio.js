const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKM = 1580;

const litrosConsumidos = distanciaKM / kmPorLitro;
const vlrGasto = litrosConsumidos * precoCombustivel;
console.log(vlrGasto.toFixed(2));