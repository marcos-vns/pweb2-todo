import { createTask } from "./handleTasks";

const username = "Marcos Vinicius";

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

const tasksListElement = document.createElement('div');
app.appendChild(tasksListElement);

buttonElement.addEventListener('click', () => {
  createTask(inputElement.value, tasksListElement);
  inputElement.value = "";
});

