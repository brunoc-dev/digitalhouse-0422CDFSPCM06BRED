const string = 'Texto muito grande'
console.log(string.length);

console.log(string.indexOf('e'));

console.log(string.slice(6, 11));

console.log(string.split(' '));

const pedacosDeTexto = string.split(' ');

console.log(pedacosDeTexto.join(' '));

const string2 = '    Texto muito grande   '
console.log(string2.trim())

console.log(string2.replace('e', 'a'));
console.log(string2.replaceAll('e', 'a'));

const frutas = [
  'banana',
  'abacate',
  'tomate'
]

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

let contador = 0
while (true) {
  console.log(frutas[contador]);
  contador = contador + 1;
}