let dataNascimento = document.getElementById("dataNascimento")
let botaoGravar = document.getElementById("gravar")
let idadeResultado = document.getElementById("idadeResultado")

botaoGravar.addEventListener("click", calculaIdade)

function calculaIdade(){
    const hoje = new Date()
    const nascimento = new Date(dataNascimento.value)

    if(isNaN(nascimento.getTime())){
        idadeResultado.innerHTML = "Data Inválida"
        return
    }

    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mes = hoje.getMonth() - nascimento.getMonth()

    if(mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
        idade --;
    }
    idadeResultado.innerHTML = idade
}