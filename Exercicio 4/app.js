let tarefa = document.getElementById("tarefa")
let botaoAdicionar = document.getElementById("adicionar")
let listaTarefas = document.getElementById("listaTarefas")
let botaoConcluir = document.getElementById("concluir")
let botaoRemover = document.getElementById("remover")
let arrayTarefas = []

botaoAdicionar.addEventListener("click",adicionaTarefa)
botaoConcluir.addEventListener("click",concluirTarefa)
botaoRemover.addEventListener("click",removeTarefa)

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
        const checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.dataset.index = i;
        item.appendChild(checkBox)
        item.append(" " + arrayTarefas[i].texto)

         if(arrayTarefas[i].concluida){
            item.classList.add('riscado')
        }
        listaTarefas.appendChild(item)
    }
}
function concluirTarefa(){
    const checkboxes = listaTarefas.querySelectorAll("input[type ='checkbox']")
    for (let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked){
                const index = parseInt(checkboxes[i].dataset.index)
                arrayTarefas[index].concluida = !arrayTarefas[index].concluida
            }
        }
            atualizaListaTarefas()
    }

function removeTarefa(){
    const checkboxes = listaTarefas.querySelectorAll("input[type='checkbox']")
    const indicesParaRemover =  []
        for (let i = arrayTarefas.length -1; i >= 0; i++){
            if(checkboxes[i].checked){
                indicesParaRemover.push(parseInt(checkboxes[i].dataset.index))
                arrayTarefas.splice(i,1)
            }
        }
        indicesParaRemover.sort((a,b) => b -a)

         for(let j = 0; j < indicesParaRemover.length; j++){
            arrayTarefas.splice(indicesParaRemover[j],1)
         }
            atualizaListaTarefas()
    }

    

