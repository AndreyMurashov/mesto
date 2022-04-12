let popup = document.querySelector('.popup');
let btnProfileEdit = document.querySelector('.profile__edit');
let btnPopupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupDataName = document.querySelector('#name');
let popupDataStatus = document.querySelector('#status');
let formData = document.querySelector('.form');

function popupOpen() {
    popup.classList.add('popup_opened');
    popupDataName.value = profileName.textContent;
    popupDataStatus.value = profileStatus.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupDataName.value;
    profileStatus.textContent = popupDataStatus.value;
    popupClose();
}


btnProfileEdit.addEventListener('click', popupOpen);
btnPopupClose.addEventListener('click', popupClose)
formData.addEventListener('submit', formSubmitHandler);

