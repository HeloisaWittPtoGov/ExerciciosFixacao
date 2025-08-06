let campoValor1 = document.getElementById("valor1")
let campoValor2 = document.getElementById("valor2")
let botaoSomar = document.getElementById("soma")
let valorResultado = document.getElementById("resultado")
let resultado = 0;

botaoSomar.addEventListener("click", somar)

function somar(){
    if(campoValor1.value != "" && campoValor2.value != "" ){
        let valor1 = Number(campoValor1.value)
        let valor2 = Number(campoValor2.value)
        resultado = valor1 + valor2
        valorResultado.innerHTML = resultado
    } else{
        valorResultado.innerHTML = "ERRO! É necessário informar os valores"
    }
}

console.log(resultado)