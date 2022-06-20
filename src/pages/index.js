// // // Импорты // // //
import './index.css';

import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import {
  initialCards,
  btnProfileEdit,
  btnAddPhoto,
  profileForm,
  photoForm,
  nameInput,
  statusInput,
  valSettings,
} from '../js/utils/constants.js';

// // // Объявления классов // // //
// // Галерея  // //
const createCard = (data) => {
  const card = new Card(
    {
      data: data,
      handleCardClick: (photoName, photoLink) => {
        openPopupImage.open(photoName, photoLink);
      },
    },
    '#element'
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  },
  '.elements'
);

// // // Попапы // // //
// // Попап редактирования профиля // //
const userInfo = new UserInfo({
  name: '.profile__name',
  status: '.profile__status',
});

const redUserProfile = new PopupWithForm({
  popupSelector: '#popup__profile',
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo({
      name: dataForm.profileName,
      status: dataForm.profileStatus,
    });

    redUserProfile.close();
  },
});

// // Попап добавления фото // //
const cardElement = new PopupWithForm({
  popupSelector: '#popup__photo',
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    cardElement.close();
  },
});

// // Попап открытия карточки // //
const openPopupImage = new PopupWithImage('#popup-image');

// Валидация //
const profileValidator = new FormValidator(valSettings, profileForm);
const photoValidator = new FormValidator(valSettings, photoForm);

// // // Вызовы // // //
cardsList.renderItems();
redUserProfile.setEventListeners();
cardElement.setEventListeners();
openPopupImage.setEventListeners();
profileValidator.enableValidation();
photoValidator.enableValidation();


// // // Слушатели // // //
const profileData = ({ name, status }) => {
  nameInput.value = name;
  statusInput.value = status;
};

btnProfileEdit.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  profileData({
    name: info.name,
    status: info.status,
  });
  redUserProfile.open('#popup__profile');
  profileValidator.resetValidation();
});

btnAddPhoto.addEventListener('click', () => {
  photoValidator.resetValidation();
  cardElement.open();
});