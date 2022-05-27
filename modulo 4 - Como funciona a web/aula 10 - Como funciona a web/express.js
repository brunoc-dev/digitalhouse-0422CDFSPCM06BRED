/* Aula 10 - Como funciona a web.
  ** O comando para comentarios multilinha é shift + alt + A
  OBS: O '$' significa início de um comando no terminal.

  A. Preparar ambiente de desenvolvimento
    1. Abrir o terminal na pasta do novo projeto.
      Ctrl + j

    2. iniciar o projeto com o npm:
      $ npm init -y

    3. instalar a biblioteca nodemon:
      $ npm install nodemon -D
    
    4. instalar o framework express:
      $ npm install express
    
    5. configurar script start no package.json
      a. abrir arquivo package.json
      b. incluir dentro da propriedade "scripts" uma nova linha
      c. nesta nova linha adicionar "start": "nodemon express.js"
      OBS: Ao criarmos scripts com nomes diferentes dos padronizados pelo npm,
      é necessário utilizar o formato "npm run <nome-do-script>".
      OBS2: Ao iniciar o comando npm start, um processo ficará ativo no terminal,
      impossibilitando a digitação de novos comandos. Para utilizar o terminal novamente,
      utilize o atalho Ctrl+C para finalizar o processo do nodemon.

  B. Implementar o sistema a ser executado.
    1. Importar o express com require('express');
    2. Criar a variável app para armazer um conjuto de funciolidades do express, voltados para a execução do servidor.
    3. Utilizar a função listen do express para disponibilizar um servidor web na porta 3000.
    OBS: Sempre deixar o método listen por ultimo, pois é ele que lança o servidor para o ar.
    4. Criar uma rota para responder uma mensagem. Utilizar o método get do express.
    5. Implementar os métodos GET, POST, PUT e DELETE para contemplar o CRUD.
*/

const express = require('express');

let usuarios = [
  {
    id: 1,
    email: "brazera@dh.com",
    nome: "Bruno"
  }
]

// Criando uma aplicação express
const app = express();

// Configurando o express para aceitar requests no formato de JSON
app.use(express.json());

// Configurando rotas
// Rota GET (READ): Leitura de dados de usuários
app.get('/usuarios', (req, res) => {
  // lendo usuarios
  return res.send(usuarios);
});

// Rota POST (CREATE): Criação de usuários 
app.post('/usuarios', (req, res) => {
  // obtendo dados enviados pelo client(postman)
  const novoUsuario = req.body;

  // gerando um novo id para o novo usuário
  novoUsuario.id = usuarios.length + 1;

  // adicionando usuário ao array usuarios
  usuarios.push(novoUsuario);
  return res.send('Usuário adicionado!');
});

// Rota PUT (UPDATE): Atualizando usuários
app.put('/usuarios/:id', (req, res) => {
  // obter id passado pela url
  const { id } = req.params;

  // buscar o usuário no array, utilizando o id da url
  const usuario = usuarios.find(usuario => usuario.id == id);
  
  // Alteração do objeto usuario
  usuario.nome = req.body.nome;
  usuario.email = req.body.email;
  return res.send('Usuário alterado com sucesso!');
});

// Rota DELETE (DELETE): Remove usuário
app.delete('/usuarios/:id', (req, res) => {
  // obter id passado pela url
  const { id } = req.params;

  // filtramos o array de usuarios, excluíndo o id recebido
  const novoArrayUsuarios = usuarios.filter(usuario => usuario.id != id);

  // reatribuímos o novo array filtrado para a variável usuarios
  usuarios = novoArrayUsuarios;
  return res.send('Usuário removido com sucesso!');
});

// Rodando o servidor
app.listen(3000, () => {
  console.log('Servidor rodando no endereço http://localhost:3000');
});