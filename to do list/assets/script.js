var entrada = document.getElementById('addtask')
var tasks = document.getElementById("toDoList")



function adicionar(){
 var div = document.createElement('div')
 tasks.appendChild(div)

 var confere = document.createElement('input')
 confere.setAttribute("type", "checkbox")
 confere.setAttribute("id", "check")
 div.appendChild(confere)
 
 var tarefa = document.createElement('label')
 tarefa.setAttribute("for", "check")

 div.appendChild(tarefa)

 tarefa.innerHTML = entrada.value
}