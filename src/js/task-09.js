'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const setBg = () => {
  
  document.body.style.backgroundColor = getRandomHexColor();
  color.innerHTML = "#" + getRandomHexColor();
}

genNewCol.addEventListener("click", setBg);
setBg();
