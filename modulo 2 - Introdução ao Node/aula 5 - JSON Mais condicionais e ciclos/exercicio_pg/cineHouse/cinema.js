const adicionarFilme = require('./adicionarFilme');
const catalogoJSON = require('../database/catalogo.json');

const catalogo = catalogoJSON;
//código, titulo, duracao, atores, anoLancamento, emCartaz
const novoFilme1 = adicionarFilme(2, 'Monstros SA', 1.36, ['John Goodman'], 2001, true)
catalogo.push(novoFilme1);

console.log("=================================")

// Criando a função de buscar filme com indexOf
function buscarFilme(identificador) {
  // Indíce é a mesma coisa que posição
  // Para cada posição do array, faça isso:
  // 1° parâmetro => criação do contador
  // 2° parâmetro => condição
  // 3° parâmetro => incremento

  for (var indice = 0; indice < catalogo.length; indice++) {
    if (catalogo[indice].codigo === identificador) {
      console.log(catalogo[indice])
    }
  }

  // 1° vez ele executa catalogo[0]
  // 2° vez ele executa catalogo[1]
  // 3° vez ele executa catalogo[2]

}
// Busca o filme que tem o código 3
buscarFilme(3);

console.log("=================================")

function alterarStatusEmCartaz(id_codigo) {

  for (let indice = 0; indice < catalogo.length; indice++) {

    if (catalogo[indice].codigo === id_codigo) {

      if (catalogo[indice].emCartaz === false) {

        catalogo[indice].emCartaz = true

      } else {

        catalogo[indice].emCartaz = false

      }
      // Poderiamos já dar o console.log aqui dentro da função
      //console.log(catalogo[i])
      // Ou retornar para quem chamar essa função, pegar esse retorno e dar o console.log
      return catalogo[indice]
    }

  }

}

console.log(alterarStatusEmCartaz(3))