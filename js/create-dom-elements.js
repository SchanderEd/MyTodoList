import { todoList, todoInput } from './dom-elements.js';
import { clearInput, createId } from './util.js';
//import {caseObj} from './caseObj.js';

let todoCase = '';
let deleteBtn = '';

let cases = [];

const createCase = () => {
  const todoCase = document.createElement('li');
  const todoDescription = document.createElement('p');

  const caseItem = {
    id: createId(),
    tag: 'li',
    childTag: 'p',
    descr: todoInput.value
  }

  const createItem = {id, tag, childTag, descr} = caseItem => {
    const id = id;
    const todoCase = document.createElement(tag);
    const todoDescription = document.createElement(childTag);
    todoCase.appendChild(todoDescription);
    todoDescription.innerHTML = descr;
  }

  deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', caseItem.id)
  deleteBtn.innerHTML = 'Сделано';
  deleteBtn.classList.add('delete');

  todoDescription.innerHTML = caseItem.descr;
  todoCase.setAttribute('id', caseItem.id);
  todoCase.appendChild(todoDescription);
  todoCase.appendChild(deleteBtn);
  todoList.appendChild(todoCase);

  cases.push(caseItem);
  clearInput();
  return cases, todoCase //deleteBtn,todoCase;
};

export { createCase, todoCase, deleteBtn, cases };