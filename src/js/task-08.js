'use strict';
const userForm = document.querySelector('form.login-form');
console.log(userForm);

function FormSubmit(event) {
    const userFormElem = currentTarget.elements;
    const email = userFormElem.email.value;
    const password = userFormElem.password.value;
    event.preventDefault();
}

