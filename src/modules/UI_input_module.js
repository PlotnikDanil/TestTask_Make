import { dropdownMenuFlag } from "./UI_dropdownMenu_module";

const textFieldInput = document.querySelector('.textField-input');
const inputLabel = document.querySelector('.input_label');
const errorMessage = document.querySelector('.error-message');

const uiBtn = document.querySelector('.UI-btn');

//Переменная отражающее корректность введенного E-mail в инпут
let inputFlag = false;

//Регулярное выражение, для проверки на корректность введенного E-mail
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

//Функция отражающая реакцию на введение пользователем данных в инпут
function inpt () {
  inputLabel.style.visibility = 'visible';
  textFieldInput.style.borderBottom = '4px solid #3E29E3';
}

//Изменение инпута при введении E-mail
function email(event) {
  //Условие при корректном вводе E-mail
  if (event.target.value.match(emailPattern)) {
    inputLabel.style.visibility = 'visible';
    textFieldInput.style.borderBottom = '4px solid #3E29E3';
    inputLabel.style.color = '#7D7D7D';
    errorMessage.innerHTML = '';
    inputFlag = true;
    //Условие для активации кнопки
    if (inputFlag && dropdownMenuFlag) {
      uiBtn.style.background = 'linear-gradient(210deg, #3D28E3, #DD80ED)';
  }
  //Условие при пустой строке инпут
  } else if (event.target.value == '') {
    inputLabel.style.color = '#7D7D7D';
    inputLabel.style.visibility = 'hidden';
    errorMessage.innerHTML = '';
    textFieldInput.style.borderBottom = '4px solid #979797';
    //Условие при некорректном вводе E-mail
  } else if ((event.target.value) && (!event.target.value.match(emailPattern))) {
    textFieldInput.style.borderBottom = '4px solid #E80F3B';
    inputLabel.style.color = '#E80F3B';
    errorMessage.innerHTML = 'Некорректный ввод почты'
  }
}

textFieldInput.addEventListener('focus', inpt);
textFieldInput.addEventListener('change', email);
textFieldInput.addEventListener('blur', email);

export {inputFlag};