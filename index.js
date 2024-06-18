const textArea= document.getElementById("new-task")
const todoContainer = document.querySelector(".todo-container");
const btnAddTask = document.getElementById("add-task-btn");

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

btnAddTask.addEventListener('click', function(evento){
    evento.preventDefault();
    novaTarefa()
    textArea.value="";
    salvarTask();
    console.log(tasks)
})

function novaTarefa (){
    const NewTask = textArea.value;

    const adcNovaTarefa = {
        descricao: NewTask
    }
    tasks.push(adcNovaTarefa)
}

function salvarTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function mostrarTasksNaTela(){
   

}