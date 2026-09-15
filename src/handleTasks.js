export function createTask(taskText, tasksListElement){
    const task = document.createElement('div');
    const taskTitle = document.createElement('span');
    taskTitle.innerText = taskText;
    task.appendChild(taskTitle);
    
    tasksListElement.appendChild(task);
}