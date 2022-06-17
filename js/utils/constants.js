export const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
];

export const cardContainer = document.querySelector('.elements');
export const element = document.querySelector('.element');
export const elementImage = document.querySelector('.element__image');
export const btnProfileEdit = document.querySelector('.profile__edit');
export const popupOpenProfile = document.querySelector('#popup__profile');
export const popupImage = document.querySelector('#popup-image');
export const profileName = document.querySelector('.profile__name');
export const profileStatus = document.querySelector('.profile__status');
export const popupDataName = document.querySelector('#profile-name');
export const popupDataStatus = document.querySelector('#profile-status');
export const popupAddPhoto = document.querySelector('#popup__photo');
export const btnAddPhoto = document.querySelector('.profile__add');
export const popupAddPhotoName = document.querySelector('#photo-name');
export const popupAddPhotoLink = document.querySelector('#photo-link');
export const formDataProfile = document.querySelector('#profile-form');
export const formDataPhoto = document.querySelector('#photo-form');
export const popups = document.querySelectorAll('.popup');
export const photoForm = document.forms.photoAdd;
export const profileForm = document.forms.profileEdit;

export const valSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input_error-text-active',
};

export const currentFormData = {
  name: profileName.textContent,
  status: profileStatus.textContent
  }