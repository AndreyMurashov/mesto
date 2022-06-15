// Импорты //
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  cardContainer,
  btnProfileEdit,
  popupOpenProfile,
  profileName,
  profileStatus,
  popupDataName,
  popupDataStatus,
  popupAddPhoto,
  btnAddPhoto,
  popupAddPhotoName,
  popupAddPhotoLink,
  formDataProfile,
  formDataPhoto,
  popups,
  photoForm,
  profileForm,
  valSettings,  
} from '../utils/constants.js';

// Карточки с изображениями  //

let cardElement;
const createCard = (item) => {
  const newCard = new Card(item, '#element');
  cardElement = newCard.generateCard();

  return cardElement;
};

const cardsList = new Section({
  item: initialCards,
  renderer: (card) => {
    cardsList.addItem(createCard(card));
  },
}, '.elements');

cardsList.renderItems();


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

const userData = new UserInfo({ name: '.profile__name', status: '.profile__status' });

// const saveProfile = (evt) => {
//   evt.preventDefault();
//   profileName.textContent = popupDataName.value;
//   profileStatus.textContent = popupDataStatus.value;
//   closePopup(popupOpenProfile);
// };

  const currentFormData = {
  name: profileName.textContent,
  status: profileStatus.textContent
  }

  const editProfilePopup = new PopupWithForm('#popup__profile', currentFormData);
  editProfilePopup.setEventListeners(popupOpenProfile);
  

btnProfileEdit.addEventListener('click', function () {

  const infoAboutUser = userData.getUserInfo();
  // console.log(infoAboutUser);
  
  popupDataName.value = infoAboutUser.name;
  popupDataStatus.value = infoAboutUser.status;
  editProfilePopup.open();
});

//formDataProfile.addEventListener('submit', saveProfile);







// Попап добавления карточки //

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

btnAddPhoto.addEventListener('click', function () {
  const addPhotoPopup = new PopupWithForm('#popup__photo');
  addPhotoPopup.open();
  addPhotoPopup.setEventListeners(popupAddPhoto);
 
  // openPopup(popupAddPhoto);
  // photoForm.reset();
  
});

formDataPhoto.addEventListener('submit', addPhotoCard);

// Валидация //
const profileValidator = new FormValidator(valSettings, profileForm);
profileValidator.enableValidation();
profileValidator.resetValidation();

const photoValidator = new FormValidator(valSettings, photoForm);
photoValidator.enableValidation();
photoValidator.resetValidation();

// export { openPopup };