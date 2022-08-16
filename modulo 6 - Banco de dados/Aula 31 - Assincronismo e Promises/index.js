// Tarefa assíncrona com callback
// function consoleLogDemorado(texto) {
//   setTimeout(() => {
//     console.log(texto)
//   }, 5000)
// }

// consoleLogDemorado('Texto do consoleLogDemorado')

// console.log('Olá mundo')
// console.log('Olá turma')

// Tarefa assíncrona com Promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.random() * 10

//     if (random < 5) resolve('Menor que 5')
//     if (random >= 5) reject('Maior ou igual a 5')

//   }, 5000)
// })

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// console.log('O resultado é: ')

// Criar uma promessa que retorne 'olá mundo' e encadear no .then() o
// resultado da promessa com 'novo', resultado esperado: 'Olá mundo novo'.

// Tarefas assíncronas com async / await
function geraNumero () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 10
  
      if (random < 5) resolve('Menor que 5')
      if (random >= 5) reject('Maior ou igual a 5')
  
    }, 5000)
  })
}

async function exibeResultado () {
  try {
    const resultado = await geraNumero()
    console.log(resultado)
  } catch (error) {
    console.log(error)
  }
}

exibeResultado()