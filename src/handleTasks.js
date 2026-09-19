export function createTask(taskText, tasksListElement){
    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('undone-task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', (event) => {
        if(event.target.checked){
            tasksListElement.appendChild(task);
            task.classList.add('done-task');
            task.classList.remove('undone-task');

            localStorage.setItem("done", Number(localStorage.getItem("done")) + 1);
            updateTaskProgress(tasksListElement);
            return;
        }

        task.classList.add('undone-task');
        task.classList.remove('done-task');
        localStorage.setItem("done", Number(localStorage.getItem("done")) - 1);
        updateTaskProgress(tasksListElement);
    });

    task.appendChild(checkbox);

    const taskTitle = document.createElement('span');
    taskTitle.innerText = taskText;
    task.appendChild(taskTitle);

    const taskInfos = document.createElement('div');
    taskInfos.classList.add('task-infos');
    task.appendChild(taskInfos);

    const currentDate = getCurrentDate();

    const createdAt = document.createElement('p');
    createdAt.innerText = `Criada em: ${currentDate}`;
    task.appendChild(createdAt);
    taskInfos.append(taskTitle, createdAt);

    const deleteButton = document.createElement('button');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = "/delete.svg";
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener('click', () => {
        tasksListElement.removeChild(task);
        localStorage.setItem("total", Number(localStorage.getItem("total") - 1));
        updateTaskProgress(tasksListElement);
    });

    task.appendChild(deleteButton);
    
    tasksListElement.prepend(task);
    updateTotalTasks();

}

function getCurrentDate(){

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const currentDate = `${day}/${month}/${year}`

    return currentDate;
}

function updateTotalTasks(){
    const totalTasks = Number(localStorage.getItem("total")) + 1;
    localStorage.setItem("total", totalTasks);
}

export function updateTaskProgress(taskListProgressElement){
    const doneTasks = localStorage.getItem("done");
    const totalTasks = localStorage.getItem("total");
    console.log(taskListProgressElement.innerText);
}