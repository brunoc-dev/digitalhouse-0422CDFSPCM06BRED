const frutas = [
  'abacate',
  'banana',
  'melão',
  'tomate'
]

// Encontrando um item dentro do array
const fruta = frutas.find(item => item === 'banana');
console.log(fruta);

// Filtrando itens do array
const frutasTropicais = frutas.filter(item => item !== 'tomate');
console.log(frutasTropicais);

// Imprimindo itens do array
frutas.forEach(item => console.log('fruta: ' + item))

// Acumulando valores de um array
const numeros = [1, 2, 3, 4, 5];
const somatorio = numeros.reduce((acumulado, valorCorrente) => acumulado += valorCorrente);
console.log('somatório: ' + somatorio);

// Acumulando valores de um array de strings
const strings = ['B', 'r', 'u', 'n', 'o']
const somatorioStrings = strings.reduce((acumulado, valorCorrente) => acumulado += valorCorrente);
console.log('somatório strings: ' + somatorioStrings);