


let botaosom = document.querySelector(".botao-som")
let botaosomdeslig = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let tumdum = document.querySelector(".link-assistir")
let audio = document.querySelector(".audio")


botaosom.addEventListener("click", ligasom)

function ligasom(){
    video.muted = !video.muted 
}

botao.addEventListener("click", mostramodal)

function mostramodal() {
    modal.style.display = "block"
}

modal.addEventListener("click", escondemodal)

function escondemodal() {
    modal.style.display = "none"
}

tumdum.addEventListener("click", tocatumdum)

function tocatumdum() {
    audio.play()
}