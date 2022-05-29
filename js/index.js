import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// const cardElement = document
//   .querySelector('#element')
//   .content.querySelector('.element');
const cardContainer = document.querySelector('.elements'); // Важно
const btnProfileEdit = document.querySelector('.profile__edit');
const popupOpenProfile = document.querySelector('#popup__profile');
const popupTitle = document.querySelector('.popup__title');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupDataName = document.querySelector('#profile-name');
const popupDataStatus = document.querySelector('#profile-status');

const popupAddPhoto = document.querySelector('#popup__photo');
const btnAddPhoto = document.querySelector('.profile__add');
// const popupAddPhotTitle = document.querySelector('#photo__title');
const popupAddPhotoName = document.querySelector('#photo-name');
const popupAddPhotoLink = document.querySelector('#photo-link');

const formDataProfile = document.querySelector('#profile-form');
const formDataPhoto = document.querySelector('#photo-form');

// const popupImage = document.querySelector('#popup-image');
// const popupPicture = document.querySelector('.popup__picture');
// const popupImageCaption = document.querySelector('.popup__caption');
const popupImageClose = document.querySelector('#popup__image-close');

//const profileCloseBtn = document.querySelector('#popup__close');
//const btnPopupAddPhotoClose = document.querySelector('#photo__close');
const popups = document.querySelectorAll('.popup');
const cardForm = document.forms.photoAdd;
let closeByEscape;

// const handleDeleteCard = (evt) => {
//  evt.target.closest('.element').remove();
//};

//const handleLikeCard = (evt) => {
//  evt.target.classList.toggle('element__like_liked');
//};

// //const generateCard = (cardData) => {
//  // const newCard = cardElement.cloneNode(true);

//   const titleCard = newCard.querySelector('.element__name');
//   titleCard.textContent = cardData.name;

//   const imageLink = newCard.querySelector('.element__image');
//   imageLink.src = cardData.link;


// document.addEventListener('click', function (evt) {
//      openPopup(popupImage);
//      popupPicture.src = evt.target.src;
//      console.log(evt.target.textContent);
//      popupPicture.setAttribute('alt', evt.target.querySelector('.element__name').textContent);
//      popupImageCaption.textContent = evt.target.querySelector('.element__name').textContent;
     
//    });
//   imageLink.setAttribute('alt', cardData.name);

// //  const deleteCard = newCard.querySelector('.element__thrash');
// //  deleteCard.addEventListener('click', handleDeleteCard);

//  // const likeCard = newCard.querySelector('.element__like');
//  // likeCard.addEventListener('click', handleLikeCard);

//   return newCard;
// };

// const renderCard = (cardData) => {
//   cardContainer.prepend(generateCard(cardData));
// };

// initialCards.forEach((cardData) => {
//   renderCard(cardData);
// });

const saveProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = popupDataName.value;
  profileStatus.textContent = popupDataStatus.value;
  closePopup(popupOpenProfile);
};

const addNewCard = () => {
  const newCard = new Card(popupAddPhotoName.value, popupAddPhotoLink.value);
  const generateNewCard = newCard.generateCard();
  cardContainer.prepend(generateNewCard);
}

const addPhotoCard = (evt) => {
  evt.preventDefault();
  addNewCard();
  
  closePopup(popupAddPhoto);
  const btnPopupSubmit = document.querySelector('#photo__submit');
  btnPopupSubmit.classList.add('popup__submit_inactive');
  btnPopupSubmit.setAttribute('disabled', true);
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
});

btnAddPhoto.addEventListener('click', function () {
  openPopup(popupAddPhoto);
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









initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  cardContainer.prepend(cardElement);
});