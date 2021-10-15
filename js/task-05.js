'use strict';

let inputElem = document.querySelector('#name-input');
inputElem.addEventListener('input', onInputChange);

let outputElem = document.querySelector('#name-output');

function onInputChange(event) {
  inputElem = event.currentTarget.value;
  console.log(inputElem);

  inputElem !== ' ' ? (outputElem.innerText = inputElem.trim()) : 'Anonymous';
}