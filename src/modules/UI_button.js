import { inputFlag } from "./UI_input_module";
import { dropdownMenuFlag } from "./UI_dropdownMenu_module";

const uiBtn = document.querySelector('.UI-btn');

// Функция для определения активности кнопки, зависящее от заполнения поля E-mail и выпадающего меню
function btnActivity() {
    if (inputFlag && dropdownMenuFlag) {
        uiBtn.style.background = 'linear-gradient(210deg, #3D28E3, #DD80ED)';
    } else {
        uiBtn.style.background = '#CBCBCC';
    }
}

uiBtn.addEventListener('mousedown', function() {
    uiBtn.style.background = 'linear-gradient(10deg, #3D28E3, #DD80ED)';
});

uiBtn.addEventListener('mouseup', btnActivity);

uiBtn.addEventListener('mouseenter', function() {
    uiBtn.style.background = 'linear-gradient(30deg, #3D28E3, #DD80ED)';
});

uiBtn.addEventListener('mouseleave', btnActivity);

 
