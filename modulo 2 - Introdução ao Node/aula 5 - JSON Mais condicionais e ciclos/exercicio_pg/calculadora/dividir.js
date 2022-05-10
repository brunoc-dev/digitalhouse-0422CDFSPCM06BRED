// Declaração da função dividir
// 1° Parâmetro => 1 número a ser dividido
// 2° Parâmetro => 2 número a ser dividido
function dividir(numero1, numero2){
  if(numero2 === 0){
    return "Não se pode dividir por zero";
  }

  const resultado = numero1 / numero2;
  // retorna a subtração dos dois números
  return resultado;
}

// Exportação da função dividir
module.exports = dividir;

// == comparara só o valor. Ex: '1' == 1 => retorna true (verdadeiro)
// === compara tipo e valor. Ex: '1' == 1 => retorna falso(falso)