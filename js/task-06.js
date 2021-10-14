let inputElem = document.querySelector('#validation-input');

let inpLength = inputElem.dataset.length;

const input = document.querySelector('input');
inputElem.addEventListener('change', elem => {
  const text = elem.target.value;

  if (text.length === +inpLength) {
    inputElem.classList.add('valid');
    inputElem.classList.remove('invalid');
  } else {
    inputElem.classList.remove('valid');
    inputElem.classList.add('invalid');
  }
});