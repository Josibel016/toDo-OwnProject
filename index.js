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
    console.log(tasks);

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

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent = tarefa.descricao;

    const Editbtn = document.createElement('button')
    Editbtn.classList.add ('app_button-edit')

    Editbtn.onclick = ()=>{
        const novaDescricao = prompt('enter your new task')
        li.textContent = novaDescricao
        tarefa.descricao=novaDescricao;
        salvarTask()
        mostrarTasksNaTela()
    }
    const imagemBotao=document.createElement('img')
    imagemBotao.setAttribute('src', './imagens/edit.png');
    
    Editbtn.append(imagemBotao)
   
    
    
 // Create and append the delete button to each task

 const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        const index = tasks.indexOf(tarefa);
        if (index > -1) {
            tasks.splice(index, 1); // Remove the task from the array
            salvarTask(); // Update local storage
            mostrarTasksNaTela(); // Refresh the task list
        }
    });

    li.appendChild(deleteBtn); // Append the delete button to the task item
    li.appendChild(Editbtn);
    ulTarefas.appendChild(li); // Append the task item to the task list
}

mostrarTasksNaTela()