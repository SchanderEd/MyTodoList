import { todoList, todoInput } from './dom-elements.js';
import { clearInput } from './util.js';

let todoCase = '';
let deleteBtn = '';

const createCase = () => {

  const createCaseItem = document.createElement('li');
  createCaseItem.classList.add('case');

  const createDescr = document.createElement('p');
  createDescr.innerHTML = todoInput.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = 'Удалить';
  deleteBtn.classList.add('delete');

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = 'Сделано'
  doneBtn.classList.add('done');

  todoList.appendChild(createCaseItem);
  createCaseItem.appendChild(createDescr);
  createCaseItem.appendChild(deleteBtn);
  createCaseItem.appendChild(doneBtn);

  clearInput();
};

export { createCase, todoCase, deleteBtn };