// Declaração da função multiplicar
// 1° Parâmetro => 1 número a ser multiplicado
// 2° Parâmetro => 2 número a ser multiplicado
function multiplicar(numero1, numero2){
  // || é o operador que significa "ou" no javascript
  if(numero1 === 0 || numero2 === 0){
    return 0;
  }

  const resultado = numero1 * numero2;
  // retorna a subtração dos dois números
  return resultado;
}

// Exportação da função multiplicar
module.exports = multiplicar;

// == comparara só o valor. Ex: '1' == 1 => retorna true (verdadeiro)
// === compara tipo e valor. Ex: '1' == 1 => retorna falso(falso)