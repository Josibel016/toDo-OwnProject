const textArea= document.getElementById("new-task")
const todoContainer = document.querySelector(".todo-container");
const btnAddTask = document.getElementById("add-task-btn");
const ulTarefas = document.getElementById('task-list')
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

btnAddTask.addEventListener('click', function(event){
    event.preventDefault();
    novaTarefa()
    textArea.value="";
    salvarTask();
    mostrarTasksNaTela();
    console.log(tasks)

})

function novaTarefa (){
    const NewTask = textArea.value.trim();

    if (NewTask !== ""){

    const adcNovaTarefa = {
        descricao: NewTask
    }
    tasks.push(adcNovaTarefa)
}}

function salvarTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function mostrarTasksNaTela(){
   ulTarefas.innerHTML='';
   tasks.forEach (tasks =>{
    criarElementoTarefa(tasks);
   })

}
 function criarElementoTarefa(tarefa){
    const li = document.createElement('li')
    li.classList.add('task-item');
    li.textContent = tarefa.descricao;
    ulTarefas.appendChild(li);


 }