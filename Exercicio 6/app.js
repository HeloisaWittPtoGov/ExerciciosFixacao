let dataDesejada = document.getElementById("dataDesejada")
let botaoGravar = document.getElementById("gravar")
let diferencaDias = document.getElementById("diferencaDias")

botaoGravar.addEventListener("click",calculaDias)

function calculaDias(){
    const hoje = new Date()
    const data = new Date(dataDesejada.value)

    hoje.setHours(0,0,0,0)
    data.setHours(0,0,0,0)

    const diferencaMs = data - hoje
    
    const diferenca = Math.floor(diferencaMs/(1000*60*60*24))
  
    diferencaDias.innerHTML = diferenca

}