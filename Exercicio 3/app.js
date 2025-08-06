let botaoMenos = document.getElementById("menos")
let botaoMais = document.getElementById("mais")
let valor = document.getElementById("numero")
let valorAtual = 0;
let aviso = document.getElementById("aviso")


botaoMais.addEventListener("click",adicionar)
botaoMenos.addEventListener("click", subtrair)


valor.innerHTML = valorAtual

function adicionar(){
    valorAtual++
    valor.innerHTML = valorAtual
    verificaAviso()
    }

function subtrair(){
    valorAtual--
    valor.innerHTML = valorAtual
    verificaAviso()
}

function verificaAviso(){
    if(valorAtual < -10 ){
        aviso.innerHTML = "O valor é menor que 10"
    }
    else if(valorAtual > 10){
        aviso.innerHTML = "O valor é maior que 10"
    }
    else{
        aviso.innerHTML = ""
    }
}