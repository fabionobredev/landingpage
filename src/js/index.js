const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
let imagemAtual = 0

function escondeImagem() {
  imagensPainel.forEach(imagem => {
    imagem.classList.remove('mostrar')
  })
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function() {
  
  if(imagemAtual == imagensPainel.length -1){
    return
  }

  imagemAtual++

  escondeImagem()
  mostrarImagem()
})

setaVoltar.addEventListener('click', function() {
  
  if(imagemAtual == 0){
    return
  }

  imagemAtual--

  escondeImagem()
  mostrarImagem()
})