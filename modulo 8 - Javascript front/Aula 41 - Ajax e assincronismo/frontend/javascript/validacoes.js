// Selecionando o form

const form = document.querySelector('.form-auth');

// Selecionando os inputs

const emailInput = document.querySelector('input[name="email"]');
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

let erros = []

form.addEventListener('submit', function(e){
  e.preventDefault();
  erros = [];
  document.querySelectorAll('small.erro').forEach(erro => {
    erro.innerHTML = '';
  }) 

  // Verificar se o value está preenchido

  if(!emailInput.value.includes('@')){
    erros.push({ name: emailInput.name, message: 'Informe um email válido' })
    emailInput.focus()
  }

  // Função de array que verifica se o array/string 'termina com'

  // if(!emailInput.value.endsWith('.com')){
  //   alert("Informe um email válido")
  //   
  // }

  if(nameInput.value.length < 5){
    erros.push({ name: nameInput.name, message: 'O nome deve conter no mínimo 5 caracteres' })
    nameInput.focus()
    
  }


  if(surnameInput.value.length < 4){
    erros.push({ name: surnameInput.name, message: 'Sobrenome deve conter no mínimo 4 caracteres' })
    passwordInput.focus()
    
  }

  if(usernameInput.value.length < 4){
    erros.push({ name: usernameInput.name, message: 'Usuário deve conter no mínimo 4 caracteres' })
    usernameInput.focus()
  }

  if(passwordInput.value === ""){
    erros.push({ name: passwordInput.name, message: 'Preencha a senha' })
    passwordInput.focus()
    
  }

  if(passwordInput.lenght < 8){
    erros.push({ name: passwordInput.name, message: 'Senha deve conter no mínimo 8 caracteres' })
    passwordInput.focus()
  }

  // O forEach percorre todo o array
  // O for normal temos um controle melhor da iteração
  
  // o forEach tem um callback que recebe o item atual da iteração, seria a mesma coisa que erros[i]
  erros.forEach(erro => {
    document.getElementById(erro.name).innerHTML = erro.message
  })

  if(erros.length === 0){
    fetch('https://8000-brunorazera-digitalhous-0p3a6tnqzqg.ws-us65.gitpod.io/users', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        name: nameInput.value, 
        surname: surnameInput.value, 
        username: usernameInput.value, 
        email: emailInput.value, 
        password: passwordInput.value
      })
    })
    .then(response => {
      return response.json()
    }).then(user => {
      localStorage.setItem('username', user.username)
      window.location.href = 'feed.html'
    }).catch(erro => {
      alert(erro);
    })
  }
})





