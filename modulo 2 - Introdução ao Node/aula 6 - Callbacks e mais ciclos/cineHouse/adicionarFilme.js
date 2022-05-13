// o comando ctrl + ; comenta as linhas selecionadas
//
// A função deve receber os parâmetros com as informações necessárias para
// criar um objeto do tipo Filme.
// Qual método dentre os que falamos hoje pode nos ajudar a adicionar
// informações em uma array?

function adicionarFilme(codigoDoFilme, tituloDoFilme, duracaoDoFilme, atoresDoFilme, anoDeLancamentoFilme, emCartaz){
  const filme = {
    codigo: codigoDoFilme,
    titulo: tituloDoFilme,
    duracao: duracaoDoFilme,
    atores: atoresDoFilme,
    anoLancamento: anoDeLancamentoFilme,
    emCartaz: emCartaz
  }
  return filme;
}

module.exports = adicionarFilme;