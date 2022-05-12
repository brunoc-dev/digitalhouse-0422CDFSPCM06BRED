function latir (callback) {
  callback();
}

function latirEmGrego () {
  console.log('Au au em grego');
}

function latirEmIngles () {
  console.log('Au au Sir. (em inglês)');
}

latir(latirEmGrego);
latir(latirEmIngles);

// utilizando arrow function
latir(() => console.log('Au au em arrow function'));

console.log('=================')

function imprime (valor) {
  console.log('O resultado é: ' + valor);
}

function imprimeSomenteValores (valor) {
  console.log(valor);
}

function soma (n1, n2, callback) {
  callback(n1 + n2);
}

soma(2, 2, imprime);
soma(2, 2, imprimeSomenteValores);


console.log('=============');

function calcular (a, b, operacao) {
  console.log(operacao(a, b));
}

function multiplicar (n1 , n2) {
  return n1 * n2
}

function dividir (n1 , n2) {
  return n1 / n2
}
// funcao param1, param2, callback  
calcular(2, 4, multiplicar);
calcular(4, 2, dividir);
calcular(2, 4, (a, b) => a + b);
