let popup = document.querySelector('.popup');
let btnProfileEdit = document.querySelector('.profile__edit');
let btnPopupClose = document.querySelector('.popup__close');
let btnPopupSubmit = document.querySelector('.popup__submit');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupData = document.querySelectorAll('.popup__input');
let formData = document.querySelector('.form');

function popupOpen(){
    popup.classList.add("popup_opened");
    popupData[0].value = profileName.textContent;
    popupData[1].value = profileStatus.textContent;
}

function popupClose(){
    popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupData[0].value;
    profileStatus.textContent = popupData[1].value; 
    popup.classList.remove("popup_opened");
}


btnProfileEdit.addEventListener("click", popupOpen);
btnPopupClose.addEventListener("click", popupClose)
formData.addEventListener("submit", formSubmitHandler);





// // Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function formSubmitHandler (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler); 


