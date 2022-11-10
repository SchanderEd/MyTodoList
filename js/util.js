import { todoInput } from './dom-elements.js';

const isEnterKey = (evt) => evt.key === 'Enter';
const clearInput = () => todoInput.value = '';

export { isEnterKey, clearInput };