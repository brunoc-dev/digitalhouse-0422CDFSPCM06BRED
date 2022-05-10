const somar = require("./somar");
const subtrair = require("./subtrair");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

// O que separa os parâmetros é a vírgula.
const resultadoSoma = somar(5,6);
const resultadoSubtrair = subtrair(6,5);

console.log("resultadoSoma: " + resultadoSoma)
console.log("resultadoSubtrair: " + resultadoSubtrair)

const resultadoMultiplicar = multiplicar(6,5);
const resultadoMultiplicarComZero = multiplicar(6,0);

console.log("resultadoMultiplicar: " + resultadoMultiplicar)
console.log("resultadoMultiplicarComZero: " + resultadoMultiplicarComZero)

const resultadoDividir = dividir(10,2)
const resultadoDividirPorZero = dividir(10,0)

// Concatenando o texto de descrição com o resultado 
console.log("resultadoDividir: " + resultadoDividir)
console.log("resultadoDividirPorZero: " + resultadoDividirPorZero)
