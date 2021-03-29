import { it } from './utils';

// initialize state
const input = <HTMLInputElement>
    document.getElementById('input-box');
const button = document.getElementById('button');
const span = document.getElementById('span-field');

// set event listeners to update state and DOM 
button.addEventListener('click', () => {
    span.textContent = input.value;
})