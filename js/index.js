import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const cardContainer = document.querySelector('.elements');
const btnProfileEdit = document.querySelector('.profile__edit');
const popupOpenProfile = document.querySelector('#popup__profile');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupDataName = document.querySelector('#profile-name');
const popupDataStatus = document.querySelector('#profile-status');
const popupAddPhoto = document.querySelector('#popup__photo');
const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhotoName = document.querySelector('#photo-name');
const popupAddPhotoLink = document.querySelector('#photo-link');
const formDataProfile = document.querySelector('#profile-form');
const formDataPhoto = document.querySelector('#photo-form');
const popupImageClose = document.querySelector('#popup__image-close');
const popups = document.querySelectorAll('.popup');
const cardForm = document.forms.photoAdd;
let closeByEscape;
let cardElement;

const valSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input_error-text-active',
};



const saveProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = popupDataName.value;
  profileStatus.textContent = popupDataStatus.value;
  closePopup(popupOpenProfile);
};

const addPhotoCard = (evt) => {
  evt.preventDefault();
  const newCardData = {name: popupAddPhotoName.value, link: popupAddPhotoLink.value };
  createCard(newCardData);
  cardContainer.prepend(cardElement);
  closePopup(popupAddPhoto);
  cardForm.reset();
};

const openPopup = (pop) => {
  pop.classList.add('popup_opened');
  closeByEscape = (evt) => {
    if (evt.key == 'Escape') {
      closePopup(pop);
    }
  };
  document.addEventListener('keydown', closeByEscape);
};

const closePopup = (pop) => {
  pop.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

btnProfileEdit.addEventListener('click', function () {
  popupDataName.value = profileName.textContent;
  popupDataStatus.value = profileStatus.textContent;
  openPopup(popupOpenProfile);
  const curentForm = document.forms.profileEdit;
  const profileFormValidator = new FormValidator(valSettings, curentForm);
  profileFormValidator.enableValidation();
});

btnAddPhoto.addEventListener('click', function () {
  openPopup(popupAddPhoto);
  const curentForm = document.forms.photoAdd;
  const photoFormValidator = new FormValidator(valSettings, curentForm);    
  photoFormValidator.enableValidation();
});

formDataPhoto.addEventListener('submit', addPhotoCard);
formDataProfile.addEventListener('submit', saveProfile);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

const createCard = (item) => {
  const newCard = new Card(item, '#element');
  cardElement = newCard.generateCard();
  
  return cardElement;
}

initialCards.forEach((item) => {
  createCard(item);
  cardContainer.prepend(cardElement);
  });

export { openPopup };