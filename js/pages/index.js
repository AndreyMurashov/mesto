// // // Импорты // // //
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  cardContainer,
  element,
  btnProfileEdit,
  popupOpenProfile,
  profileName,
  profileStatus,
  popupDataName,
  popupDataStatus,
  popupImage,
  popupAddPhoto,
  btnAddPhoto,
  popupAddPhotoName,
  popupAddPhotoLink,
  elementImage,
  formDataProfile,
  formDataPhoto,
  popups,
  photoForm,
  profileForm,
  valSettings,  
  currentFormData
} from '../utils/constants.js';
let cardElement;

// // // Объявления классов // // //
// // Карточки с изображениями  // //
// Класс Card //
const createCard = (data) => {
  const newCard = new Card({data: data, handleCardClick: (name, link) => { openPopupImage.open(name, link)}}, '#element');
  cardElement = newCard.generateCard();

  return cardElement;
};

// Класс Section //
const cardsList = new Section({ item: initialCards, renderer: (item) => { cardsList.addItem(createCard(item)); }}, '.elements');


// // // Попапы // // //
// // Попап редактирования профиля // //
const userData = new UserInfo({ name: '.profile__name', status: '.profile__status' });
const editProfilePopup = new PopupWithForm('#popup__profile', currentFormData);

// // Попап добавления фото // //
const addPhotoCard = (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: popupAddPhotoName.value,
    link: popupAddPhotoLink.value,
  };
  createCard(newCardData);
  cardContainer.prepend(cardElement);
  closePopup(popupAddPhoto);
};


// // // Попап открытия карточки // // //
const openPopupImage = new PopupWithImage ();


// Валидация //
const profileValidator = new FormValidator(valSettings, profileForm);
const photoValidator = new FormValidator(valSettings, photoForm);


// // // Вызовы // // //
cardsList.renderItems(); // генерация карточек 
editProfilePopup.setEventListeners(popupOpenProfile); // редактирование профиля
openPopupImage.setEventListeners(popupImage); // открытие карточки
formDataPhoto.addEventListener('submit', addPhotoCard); //добавление карточки
profileValidator.enableValidation();
profileValidator.resetValidation();
photoValidator.enableValidation();
photoValidator.resetValidation();


// // // Слушатели // // //
btnProfileEdit.addEventListener('click', function () {
  const infoAboutUser = userData.getUserInfo();
  popupDataName.value = infoAboutUser.name;
  popupDataStatus.value = infoAboutUser.status;
  editProfilePopup.open();
});

btnAddPhoto.addEventListener('click', function () {
  const addPhotoPopup = new PopupWithForm('#popup__photo');
  addPhotoPopup.open();
  addPhotoPopup.setEventListeners(popupAddPhoto);
 
  // openPopup(popupAddPhoto);
  // photoForm.reset();
  
});

// Попапы общее //

// const openPopup = (pop) => {
//   pop.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
// };

// const closeByEscape = (evt) => {
//   if (evt.key == 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   }
// };

// const closePopup = (pop) => {
//   pop.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
// };

// popups.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_opened')) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains('popup__close')) {
//       closePopup(popup);
//     }
//   });
// });


// Попап редактирования профиля //
// const saveProfile = (evt) => {
//   evt.preventDefault();
//   profileName.textContent = popupDataName.value;
//   profileStatus.textContent = popupDataStatus.value;
//   closePopup(popupOpenProfile);
// };



//formDataProfile.addEventListener('submit', saveProfile);


// Попап открытия карточки //

// elementImage.addEventListener('click', () => {
//   this._openPopupImage(this._element);
// });





// Попап добавления карточки //




// export { openPopup };