let popup = document.querySelector('.popup');
let btnProfileEdit = document.querySelector('.profile__edit');
let btnPopupClose = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupDataName = document.querySelector('#name');
let popupDataStatus = document.querySelector('#status');
let formData = document.querySelector('.popup__form');

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



// 5 спринт


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
  ];


const elementTemplate = document.querySelector('#element').content;
let elementsOnline = document.querySelector('.elements');

function galeryCreate() {
for(let i = 0; i < initialCards.length; i++){
const userElement = elementTemplate.querySelector('.element').cloneNode(true);

userElement.querySelector('.element__image').src = initialCards[i].link;
userElement.querySelector('.element__name').textContent = initialCards[i].name;


elementsOnline.append(userElement);
};
}
galeryCreate();

///////////////////////////////////////////////////////////////////////


let btnAddPhoto = document.querySelector('.profile__add');
let popupAddPhoto = document.querySelector('.popup-add-photo');
let btnPopupAddPhotoClose = document.querySelector('.popup-add-photo__close');
let addPhotoName = document.querySelector('.profile-add-photo__name');
let addPhotoLink = document.querySelector('.profile-add-photo__status');
let popupAddPhotoName = document.querySelector('#photo-name');
let popupAddPhotoLink = document.querySelector('#photo-link');
let formDataAddPhoto = document.querySelector('.popup-add-photo__form');

function popupAddPhotoOpen() {
    popupAddPhoto.classList.add('popup-add-photo_opened');
}

function popupAddPhotoClose() {
    popupAddPhoto.classList.remove('popup-add-photo_opened');
}

function formAddPhotoSubmitHandler(evt) {
    evt.preventDefault();
    initialCards.unshift({name: popupAddPhotoName.value, link: popupAddPhotoLink.value});
    popupAddPhotoClose();
    popupAddPhotoName.value = '';
    popupAddPhotoLink.value = '';
}


btnAddPhoto.addEventListener('click', popupAddPhotoOpen);
btnPopupAddPhotoClose.addEventListener('click', popupAddPhotoClose)
formDataAddPhoto.addEventListener('submit', formAddPhotoSubmitHandler);


console.log(initialCards);
