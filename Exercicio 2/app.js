let botaoGerarFrase = document.getElementById("gerarFrase")
let FraseGerada = document.getElementById("fraseGerada")
let arrayFrases = ["Acredite no seu potencial.",
                    "Você é mais forte do que imagina.",
                    "Cada passo te aproxima do seu objetivo.",
                    "Desistir não é uma opção.",
                    "Seu esforço de hoje é o sucesso de amanhã."]

botaoGerarFrase.addEventListener("click", selecionaFrase)

function selecionaFrase(){
    const indiceAleatorio = Math.floor(Math.random()* arrayFrases.length)
    FraseGerada.innerHTML = arrayFrases[indiceAleatorio]
    FraseGerada.classList.remove("fraseGerada-animada")
    setTimeout(() =>{
    FraseGerada.classList.add("fraseGerada-animada")
    }, 10)
}