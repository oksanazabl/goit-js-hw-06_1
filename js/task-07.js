const textElem = document.getElementById("text");

const inputElem = document.getElementById("font-size-control");

inputElem.addEventListener("input", (elem) => {
  const size = inputElem.value;
 
  textElem.style.fontSize = size + "px";
});