//Обработка отправки формы form.login-form должна быть по событию submit.
//При отправке формы страница не должна перезагружаться.
//Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
//Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

//'use strict';
const form = document.querySelector('form.login-form');
//const btnSubmit = form.querySelector('submit');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    //console.log('click');
    
    const formData = new FormData(event.currentTarget);

    if (
        event.currentTarget.elements.email.value === '' ||
        event.currentTarget.elements.password.value === ''
    ) {
        return alert("Пожалуйста заполните все обязательные поля!!!");
    }
    const userInfo = {};

    formData.forEach((value, name) => {
        userInfo[name] = value;
    });

    console.log(userInfo);
    form.reset();
   // console.log(formData);
   // const formElem = event.currentTarget.elemants;
   // const email = event.currentTarget.email.value;
    //const password = event.currentTarget.password.value;
    
    

}

