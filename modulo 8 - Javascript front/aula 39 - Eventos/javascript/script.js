// Temos duas formas de se selecionar um elemento por id no js
// const button = document.getElementById("more");

// Selecionando elementos
const buttonVerMais = document.querySelector("#more");
const post = document.querySelector('.card');
const containerPosts = document.querySelector('.cards');
const botaoGostei = document.querySelector('.likes > img');
const numeroLikes = document.querySelector('.likes > b');
const boxSearch = document.querySelector('.busca')
const inputSearch = document.querySelector('.search')

botaoGostei.addEventListener('click', function(){
  // botaoGostei.classList.toggle()
  // A função contains retorna true se a classe existir ou false se não existir
  if(botaoGostei.classList.contains('active')){
    botaoGostei.src = '/img/icons/heart.svg'
    botaoGostei.classList.remove('active')
    numeroLikes.innerHTML = '1 like'
  }else{
    botaoGostei.src = '/img/red-heart.png';
    botaoGostei.classList.add('active')
    numeroLikes.innerHTML = '2 likes';
  }
})

boxSearch.addEventListener('mouseenter', function(){
  this.style.boxShadow = '0px 1px 3px black';
})

inputSearch.addEventListener('mouseenter', function(){
  boxSearch.style.boxShadow = '0px 1px 3px black';
})

boxSearch.addEventListener('mouseout', function(){
  this.style.boxShadow = '';
})

inputSearch.addEventListener('mouseout', function(){
  boxSearch.style.boxShadow = '';
})

buttonVerMais.addEventListener('click', function(){
  containerPosts.innerHTML += post.outerHTML;
})

buttonVerMais.style.cursor = 'pointer';


// ========== OBSERVAÇÕES ==============

// o document.getElements retorna uma lista de elementos
// console.log(document.getElementsByClassName('qualquer'))

// o document.querySelector retorna sempre o primeiro elemento encontrado
// document.querySelector()