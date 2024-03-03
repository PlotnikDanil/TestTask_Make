import { inputFlag } from "./UI_input_module";

const dropdownBTN = document.querySelector('.dropdown-btn');
const menuList = document.querySelector('.menu-list');
const listElement = document.querySelectorAll('.list-element');
const arrow = document.querySelector('.arrow');
const listElementContent = document.querySelector('.list-element-content');

const uiBtn = document.querySelector('.UI-btn');

//Переменная отражающая наличие выбранного пользователем значения для выпадающего меню
let dropdownMenuFlag = false;

//Функция для реализации выпадающего меню
function toggleDropdown() {

    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
        arrow.style.transform = 'rotate(45deg)';
  
    } else {
        menuList.style.display = 'block';
        arrow.style.transform = 'rotate(225deg)';
        
        listElement.forEach(function(elem) {
            //обработчик события, для изменения значения в инпуте на выбранное пользователем из списка
            elem.addEventListener('click', function(event) {
                event.preventDefault();
                listElementContent.innerText = elem.innerText;
                dropdownMenuFlag = true;
                //Условие для активации кнопки
                if (inputFlag && dropdownMenuFlag) {
                    uiBtn.style.background = 'linear-gradient(210deg, #3D28E3, #DD80ED)';
                }
            })
        });
    }
}

dropdownBTN.addEventListener('click', toggleDropdown);

dropdownBTN.addEventListener('focus', function() {
    dropdownBTN.style.borderColor = 'rgb(61, 40, 225)';
});

export {dropdownMenuFlag};