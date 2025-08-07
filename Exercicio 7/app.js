let palpite = document.getElementById("palpite")
let botaoVerificar = document.getElementById("verificaTentativa")
let botaoIniciar = document.getElementById("iniciar")
let nTentativas = document.getElementById("nTentativas")
let resultadoTentativa = document.getElementById("valorTentativa")
let numeroCorreto
let totalTentativas = 0

botaoVerificar.addEventListener("click",verificaNumero)
botaoIniciar.addEventListener("click",numeroAleatorio)

function numeroAleatorio(){
    numeroCorreto = Math.floor(Math.random()* 100) + 1;
    totalTentativas = 0;
    botaoIniciar.style.display = "none"
    botaoVerificar.style.display ="block"
    palpite.style.display = "block"
    
}

function verificaNumero(){
    if(palpite.value >= 1 && palpite.value <= 100){
            if(palpite.value < numeroCorreto){
                resultadoTentativa.innerHTML = palpite.value + ": O numero correto é MAIOR "
            } else if(palpite.value > numeroCorreto){
                resultadoTentativa.innerHTML = palpite.value + ": O numero correto é MENOR"
            } else if(palpite.value == numeroCorreto){
                resultadoTentativa.innerHTML = "Parabéns!! " + palpite.value + " é o numero correto"
                botaoVerificar.style.display = "none"
                palpite.style.display = "none"
                botaoIniciar.style.display = "block"
            }
            totalTentativas++
            nTentativas.innerHTML = "Total de Tentativas: " + totalTentativas
        } else{
                resultadoTentativa.innerHTML = "Numero Inválido! digite um numero de 1 á 100"
            }

    }