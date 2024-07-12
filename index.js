const textArea = document.getElementById("new-task");
const todoContainer = document.querySelector(".todo-container");
const btnAddTask = document.getElementById("add-task-btn");
const ulTarefas = document.getElementById('task-list');
const taskInProcess = document.getElementById('taskInProcess');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let tarefaSelecionada = null;

btnAddTask.addEventListener('click', function(event) {
    event.preventDefault();
    novaTarefa();
    textArea.value = "";
    salvarTask();
    mostrarTasksNaTela();
});

function novaTarefa() {
    const newTask = textArea.value.trim();

    if (newTask !== "") {
        const novaTarefa = {
            descricao: newTask
        };
        tasks.push(novaTarefa);
    }
}

function salvarTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function mostrarTasksNaTela() {
    debugger
    ulTarefas.innerHTML = '';
    tasks.forEach(tarefa => {
        criarElementoTarefa(tarefa);
    });
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = tarefa.descricao;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
        const novaDescricao = prompt('Enter your new task');
        if (novaDescricao !== null) {
            tarefa.descricao = novaDescricao;
            salvarTask();
            mostrarTasksNaTela();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        const index = tasks.indexOf(tarefa);
        if (index > -1) {
            tasks.splice(index, 1);
            salvarTask();
            mostrarTasksNaTela();
        }
    });

    buttonsContainer.appendChild(editBtn);
    buttonsContainer.appendChild(deleteBtn);

    li.appendChild(buttonsContainer);
    ulTarefas.appendChild(li);

    li.onclick = () => {
        taskInProcess.textContent = tarefa.descricao;
       document.querySelectorAll('.task-item-active')
       .forEach(elemento => {
        elemento.classList.remove('task-item-active');
       })

       if (tarefaSelecionada==tarefa){
        taskInProcess.textContent='';
        tarefaSelecionada=null
        return
       }

        li.classList.add('task-item-active');
       

        tarefaSelecionada=tarefa;


    }
    return li
}


mostrarTasksNaTela();
