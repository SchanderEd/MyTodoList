import { todoInput, addCaseBtn, todoList } from './dom-elements.js';
import { createCase, cases, todoCase } from './create-dom-elements.js';
import { isEnterKey } from './util.js';

const clickCaseBtn = () => {
  if (todoInput.value !== '') {
    createCase();
    console.log(cases)
  }
};

const addCaseEnter = (evt) => {
  if (isEnterKey(evt) && todoInput.value !== '') {
    evt.preventDefault();
    createCase();
  }
};

addCaseBtn.addEventListener('click', clickCaseBtn);
todoInput.addEventListener('keydown', addCaseEnter);
todoList.addEventListener('click', (evt) => {
  for (let i = 0; i < cases.length - 1; i++) {
    if(evt.target.id === cases[i].id) {
      todoList.removeChild(cases[i])
    }
  }
})