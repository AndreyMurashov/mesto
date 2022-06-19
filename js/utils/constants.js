export const initialCards = [
  {
    photoName: 'Байкал',
    photoLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    photoName: 'Холмогорский район',
    photoLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    photoName: 'Камчатка',
    photoLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    photoName: 'Иваново',
    photoLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    photoName: 'Челябинская область',
    photoLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    photoName: 'Архыз',
    photoLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
];

 export const btnProfileEdit = document.querySelector('.profile__edit');
 export const btnAddPhoto = document.querySelector('.profile__add');
 export const photoForm = document.forms.photoAdd;
 export const profileForm = document.forms.profileEdit;
 export const nameInput = profileForm.querySelector('#profile-name');
 export const statusInput = profileForm.querySelector('#profile-status');

export const valSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input_error-text-active',
};