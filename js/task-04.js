'use strict';

let valueElem = 0;

const counterValue = document.querySelector('#value');

const delBtn = document.querySelector('#counter').firstElementChild;
const addBtn = document.querySelector('#counter').lastElementChild;

addBtn.addEventListener('click', event => {
 
  valueElem += 1;

  counterValue.innerText = valueElem;
});

delBtn.addEventListener('click', event => {
  
  valueElem -= 1;

  counterValue.innerText = valueElem;
  
});
