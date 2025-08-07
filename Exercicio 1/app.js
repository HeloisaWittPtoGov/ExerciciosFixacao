let campoValor1 = document.getElementById("valor1")
let campoValor2 = document.getElementById("valor2")
let botaoSomar = document.getElementById("soma")
let botaoSubtrair = document.getElementById("subtrair")
let botaoMultiplicar = document.getElementById("multiplicar")
let botaoDividir = document.getElementById("dividir")
let valorResultado = document.getElementById("resultado")
let resultado = 0;

botaoSomar.addEventListener("click", somar)
botaoSubtrair.addEventListener("click",subtrair)
botaoMultiplicar.addEventListener("click",multiplicar)
botaoDividir.addEventListener("click",dividir)

function somar(){
    if(campoValor1.value != "" && campoValor2.value != "" ){
        let valor1 = Number(campoValor1.value)
        let valor2 = Number(campoValor2.value)
        resultado = valor1 + valor2
        valorResultado.innerHTML = resultado
    } else{
        aviso()
    }
}

function subtrair(){
    if(campoValor1.value != "" && campoValor2.value != ""){
        let valor1 = Number(campoValor1.value)
        let valor2 = Number(campoValor2.value)
        resultado = valor1 - valor2
        valorResultado.innerHTML = resultado
    } else{
        aviso()
    }
}

function multiplicar(){
    if(campoValor1.value != "" && campoValor2.value != ""){
        let valor1 = Number(campoValor1.value)
        let valor2 = Number(campoValor2.value)
        resultado = valor1 * valor2
        valorResultado.innerHTML = resultado
    } else{
        aviso()
    }
}

function dividir(){
    if(campoValor1.value != "" && campoValor2.value != ""){
        let valor1 = Number(campoValor1.value)
        let valor2 = Number(campoValor2.value)
        resultado = valor1 / valor2
        valorResultado.innerHTML = resultado
    } else{
        aviso()
    }
}
function aviso(){
    valorResultado.innerHTML = "ERRO! É necessário informar os valores"
}

console.log(resultado)