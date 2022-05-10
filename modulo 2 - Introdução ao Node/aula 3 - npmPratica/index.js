// 1- Criar arquivo txt com o texto 'Primeira aula de módulos'.
// 2- Utilizar uma biblioteca nativa "fs" para ler o arquivo txt.
// 3- Armazenar o conteúdo do arquivo lido na variável conteudo.
// 4- escrever no terminal o conteudo (console.log(conteudo)).

const fs = require('fs');
const path = require('path');

const teste = 'Olá Mundo';

console.log(teste); // imprime no terminal o conteúdo da variável teste

console.log('Olá ' + 'Mundo'); // imprime uma única string resultante da concatenação destas strings.

console.log(path.join(__dirname, 'texto.txt')); // imprime um caminho completo até um arquivo.
// __dirname => palavra reservada do node que contém o caminho para a pasta atual deste arquivo.

const caminho = path.join(__dirname, 'texto.txt');
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);