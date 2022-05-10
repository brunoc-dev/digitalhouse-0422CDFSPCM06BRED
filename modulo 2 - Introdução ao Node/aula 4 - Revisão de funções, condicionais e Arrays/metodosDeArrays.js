const frutas = [
  'banana',
  'pera',
  'uva',
  'abacate'
]

// Método push adiciona um elemento ao array.
frutas.push('carambola');

console.log(frutas);

// Método pop remove o último elemento da lista.
frutas.pop();

console.log(frutas);

// Método unshift adiciona um item no começo do array.
frutas.unshift('carambola');

console.log(frutas);

// Método indexOf retorna a posição do elemento no array.
const frutaIndice = frutas.indexOf('carambola');

console.log(frutaIndice);

console.log(frutas[frutaIndice]);

// Método find retornar o item encontrado no array ou undefined.
const fruta = frutas.find(function (elemento) {
  return elemento === 'melancia'
});

console.log(fruta);

// Método includes retornar true ou false quando o elemento está condigo no array.
console.log(frutas.includes('banana'));