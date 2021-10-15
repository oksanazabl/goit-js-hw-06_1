'use strict';

let create = document.querySelector('[data-create]');
let destroy = document.querySelector('[data-destroy]');
let boxes = document.getElementById('boxes');
create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const elemSize = basicSize + i * 10;
    const divElem = document.createElement('div');
    divElem.style.cssText = `width: ${elemSize}px; height: ${elemSize}px;`;
    divElem.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divElem);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
