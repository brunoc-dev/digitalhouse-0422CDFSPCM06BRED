const adicionarFilme = require('./adicionarFilme');
const catalogoJSON = require('../database/catalogo.json');

const catalogo = catalogoJSON;
//código, titulo, duracao, atores, anoLancamento, emCartaz
const novoFilme1 = adicionarFilme(2, 'Monstros SA', 3, ['John Goodman'], 2001, true)
catalogo.push(novoFilme1);

// ======================================================================================
console.log("=================================")
// Criando a função de buscar filme com find.
function buscarFilme(identificador) {
  // 1° vez ele executa catalogo[0] e compara o catalogo[0].codigo com o identificador.
  // 2° vez ele executa catalogo[1] e compara o catalogo[1].codigo com o identificador.
  // 3° vez ele executa catalogo[2] e compara o catalogo[2].codigo com o identificador.
  return catalogo.find(filme => filme.codigo === identificador);
}

// Busca o filme que tem o código 3
console.log('Filme encontrado', buscarFilme(2));

// ======================================================================================
console.log("\n=================================");
function alterarStatusEmCartaz(identificador) {
  const filme = buscarFilme(identificador);

  // if (filme) {
  //   if (filme.emCartaz) filme.emCartaz = false
  //   else filme.emCartaz = true
  // } else {
  //   return 'Filme não encontrado'
  // }

  // return filme

  // if (filme) {
  //   filme.emCartaz
  //     ? filme.emCartaz = false
  //     : filme.emCartaz = true
  // } else {
  //   return 'Filme não encontrado'
  // }

  // if (filme && filme.emCartaz) {
  //   filme.emCartaz = false
  //   return filme
  // }

  // if (filme && !filme.emCartaz) {
  //   filme.emCartaz = true
  //   return filme
  // }

  if (!filme) return 'Filme não encontrado'

  if (filme.emCartaz) filme.emCartaz = false
  else filme.emCartaz = true

  return filme
}

console.log('Filme em cartaz alterado', alterarStatusEmCartaz(2));

// ==================================================================================
console.log("\n=================================");

function listarFilmesDeLongaDuracao () {
  return catalogo.filter(filme => filme.duracao >= 2);
}

console.log('Filmes de longa duração: ', listarFilmesDeLongaDuracao());

// ==================================================================================
console.log("\n=================================");
function listarTodosOsFilmes () {
  catalogo.forEach(filme => {
    console.log('Filme: ' + filme.titulo);
    console.log('Duração: ' + filme.duracao + 'horas' + '|' + 'Lançamento: ' + filme.anoDeLancamento);
    console.log('Atores: ' + filme.atores)
    console.log('=======================\n');
  })
}

listarTodosOsFilmes()