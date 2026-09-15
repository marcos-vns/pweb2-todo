import { createTask, updateProgress } from "./handleTasks";

const username = "Marcos Vinicius";
let tasks = 0;

const app = document.getElementById('app');

const headerElement = document.createElement('header');
app.appendChild(headerElement);

const titleElement = document.createElement('h1');
titleElement.innerText = "TodoList";
titleElement.classList.add('header-title');
headerElement.appendChild(titleElement);

const welcomeElement = document.createElement('p');
welcomeElement.innerText = "Bem vindo, ";

headerElement.appendChild(welcomeElement);

const inputElement = document.createElement('input');
inputElement.type = "text";
app.appendChild(inputElement);

const buttonElement = document.createElement('button');
buttonElement.type = "submit";
buttonElement.innerText = "Adicionar";
app.appendChild(buttonElement);

const taskListProgressElement = document.createElement('p');

const noTaskElement = document.createElement('div');
const noTaskIcon = document.createElement('img');
const noTaskMessageElement = document.createElement('p');
noTaskMessageElement.innerText = "Nenhum registro encontrado!";
noTaskElement.appendChild(noTaskIcon);
noTaskElement.appendChild(noTaskMessageElement);

// noTaskElement.addEventListener('toggle', (event) => );

app.appendChild(noTaskElement);

const tasksListElement = document.createElement('div');
app.appendChild(tasksListElement);

buttonElement.addEventListener('click', () => {
  if(inputElement.value === "") return

  createTask(inputElement.value, tasksListElement);
  inputElement.value = "";
});

