export function createTask(taskText, tasksListElement){
    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('undone-task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    task.appendChild(checkbox);

    const taskTitle = document.createElement('span');
    taskTitle.innerText = taskText;
    task.appendChild(taskTitle);

    const taskInfos = document.createElement('');

    const currentDate = getCurrentDate();

    const createdAt = document.createElement('p');
    createdAt.innerText = `Criada em: ${currentDate}`;
    task.appendChild(createdAt);
    
    tasksListElement.appendChild(task);
}

function getCurrentDate(){

    const now = new Date();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();

    const currentDate = `${day}/${month}/${year}`

    return currentDate;
}

export function updateProgress(){

}