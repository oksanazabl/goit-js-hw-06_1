'use strict';

const textElem = document.getElementById("text");
const inputElem = document.getElementById("font-size-control");

textElem.style.fontSize = '50px';

inputElem.addEventListener("input", (elem) => {
const size = inputElem.value;
 
 textElem.style.fontSize = `${size}px`;
});

