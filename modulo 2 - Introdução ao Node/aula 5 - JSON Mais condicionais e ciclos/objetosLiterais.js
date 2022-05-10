// Definindo um objeto;
const pessoa = {
  documento: '12.456.789-9',
  altura: 180,
  cumprimentar: function () {
    return 'Olá, tudo bem?'
  }
};

// Definido uma propriedade do objeto;
pessoa.nome = 'Bruno';
pessoa.idade = 31;
pessoa.profissao = 'Professor';

// Ler a propriedade do objeto
console.log(pessoa.nome);

// Imprimir o objeto
console.log(pessoa);

// Chamando uma função do objeto
console.log(pessoa.cumprimentar());