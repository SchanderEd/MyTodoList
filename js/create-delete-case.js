import { todoInput, addCaseBtn, todoList } from './dom-elements.js';
import { createCase } from './create-dom-elements.js';
import { isEnterKey } from './util.js';

const onClickAddCase = () => {
  if (todoInput.value !== '') {
    createCase();
  }
};

const onAddCaseEnter = (evt) => {
  if (isEnterKey(evt) && todoInput.value !== '') {
    evt.preventDefault();
    createCase();
  }
};

addCaseBtn.addEventListener('click', onClickAddCase);
todoInput.addEventListener('keydown', onAddCaseEnter);

const onCaseBtn = () => {
  todoList.addEventListener('click', (evt) => {
    let targetCase = evt.target.closest('.case');

    if (evt.target.className === 'delete') {
      targetCase.remove();
    };
    targetCase.classList.add('done-case');
  });
};

todoList.addEventListener('click', onCaseBtn);