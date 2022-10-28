import {todoInput} from './dom-elements.js';

const isEnterKey = (evt) => evt.key === 'Enter';
const clearInput = () => todoInput.value = '';
let createId = () => Math.random().toString(16).slice(2);

export {isEnterKey, clearInput, createId};