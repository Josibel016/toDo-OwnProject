const textArea= document.getElementById("new-task")
const todoContainer = document.querySelector(".todo-container");
const btnAddTask = document.getElementById("add-task-btn");

const tasks = [];

btnAddTask.addEventListener('click', function(evento){
    evento.preventDefault;
    novaTarefa()
    textArea.value="";
    salvarTask();
})

function novaTarefa (){
    const NewTask = textArea.value;

    const adcNovaTarefa = {
        descricao: NewTask
    }
    tasks.push(adcNovaTarefa)
}

function salvarTask(){
    localStorage.setItem('tasks to do:',JSON.stringify(tasks))
}
