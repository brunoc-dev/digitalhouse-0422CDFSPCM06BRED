let texto = 'Olá pessoal, essa é uma string!' // somente texto

console.log(texto);
console.log(typeof texto);

let numero = 10 // somente números

console.log(numero);
console.log(typeof numero);

let booleano = true // somente true ou false;

console.log(booleano);
console.log(typeof booleano);

let objeto = {
  nome: 'Bruno',
  idade: 31
}

console.log(objeto)
console.log(objeto.nome)

objeto.nome = 'Marcio'
console.log(objeto.nome)

delete objeto.nome
console.log(objeto.idade)
console.log(objeto['nome'])
console.log(objeto['idade'])
console.log(typeof objeto)

let array = [
  'Bruno', // 0
  'Marcos', // 1
  'Henrique', // 2
  true, // 3
  10, // 4
  { nome: 'Bruno' },
  [ 1, 3, 4 ]
]

console.log(array)
console.log(array[3])
console.log(typeof array)

let imprimeAlgo = function imprime () {
  console.log('Imprimindo algo no terminal');
}

console.log(imprimeAlgo)
console.log(typeof imprimeAlgo)
imprimeAlgo()
