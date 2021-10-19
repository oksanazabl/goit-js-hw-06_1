'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const numColor = document.querySelector('.color');

const setBg = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  numColor.textContent = color;
}

genNewCol.addEventListener("click", setBg);
setBg();
