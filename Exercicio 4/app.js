let tarefa = document.getElementById("tarefa")
let botaoAdicionar = document.getElementById("adicionar")
let listaTarefas = document.getElementById("listaTarefas")
let arrayTarefas = []

botaoAdicionar.addEventListener("click",adicionaTarefa)

function adicionaTarefa(){
    if(tarefa.value != ""){
    arrayTarefas.push({
       texto: tarefa.value,
       concluida: false
    })
    tarefa.value = ""
    atualizaListaTarefas()
    }
}

function atualizaListaTarefas(){
    listaTarefas.innerHTML = ""
    for(let i = 0; i < arrayTarefas.length; i ++){
        const item = document.createElement("li")
        item.textContent = arrayTarefas[i].texto
        
        if(arrayTarefas[i].concluida){
            item.classList.add('riscado')
        }

        const botaoConcluir = document.createElement("button")
        botaoConcluir.textContent = " Concluir"

        botaoConcluir.addEventListener("click",function(){
            arrayTarefas[i].concluida = true
            atualizaListaTarefas()

        })

        item.appendChild(texto)
        item.appendChild(botaoConcluir)
        listaTarefas.appendChild(item)
    }
}

    

