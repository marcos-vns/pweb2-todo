import { createTask, updateTaskProgress} from "./handleTasks";

const username = "Marcos Vinicius";
localStorage.setItem("username", username);
localStorage.setItem("done", 0);
localStorage.setItem("total", 0);

const app = document.getElementById('app');

const headerElement = document.createElement('header');
app.appendChild(headerElement);

const titleElement = document.createElement('h1');
titleElement.innerText = "TodoList";
titleElement.classList.add('header-title');
headerElement.appendChild(titleElement);

const welcomeElement = document.createElement('p');
welcomeElement.innerText = "Bem vindo, ";

const usernameElement = document.createElement('span');
usernameElement.innerText = username;
usernameElement.classList.add('username');

const welcomeEmoji = " 👋";

welcomeElement.append(usernameElement, welcomeEmoji);

headerElement.appendChild(welcomeElement);

const inputElement = document.createElement('input');
inputElement.type = "text";
app.appendChild(inputElement);

const buttonElement = document.createElement('button');
buttonElement.type = "submit";
buttonElement.innerText = "Adicionar";
app.appendChild(buttonElement);

const noTaskElement = document.createElement('div');
const noTaskIcon = document.createElement('img');
const noTaskMessageElement = document.createElement('p');
noTaskMessageElement.innerText = "Nenhum registro encontrado!";
noTaskElement.appendChild(noTaskIcon);
noTaskElement.appendChild(noTaskMessageElement);

app.appendChild(noTaskElement);

const tasksListElement = document.createElement('div');
tasksListElement.classList.add('task-list');
app.appendChild(tasksListElement);

// todo: transformar done e total em span
const taskListProgressElement = document.createElement('p');

tasksListElement.appendChild(taskListProgressElement);
updateTaskProgress(taskListProgressElement);

buttonElement.addEventListener('click', () => {
  if(inputElement.value === "") return;
  
  createTask(inputElement.value, tasksListElement);
  inputElement.value = "";

  updateTaskProgress(taskListProgressElement);

  noTaskElement.classList.toggle('hidden', tasksListElement.childElementCount > 0);
});

