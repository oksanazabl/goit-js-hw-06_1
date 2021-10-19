'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setBg = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  color. = getRandomHexColor();
}

genNewCol.addEventListener("click", setBg);
setBg();
