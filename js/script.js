let popup = document.querySelector('.popup');
let btnProfileEdit = document.querySelector('.profile__edit');
let btnPopupClose = document.querySelector('.popup__close');
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

