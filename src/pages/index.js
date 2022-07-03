// // // Импорты // // //
import './index.css';

import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import Api from '../js/components/Api.js';
import ConfirmOfRemoveCard from '../js/components/ConfirmOfRemoveCard.js';
import {
  btnProfileEdit,
  btnAddPhoto,
  profileForm,
  photoForm,
  nameInput,
  statusInput,
  valSettings,
  avatarPicture,
  avatarForm,
  btnAvatarEdit,
} from '../js/utils/constants.js';
let userId;

// // // Объявления классов // // //
// // Авторизация // //
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '8346a359-6ed5-49d3-ae70-dce8704e2b80',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// // Галерея  // //
const createCard = (data) => {
  const card = new Card({
    data: data,
    cardSelector: '#element',
    userId: userId,
    handleCardClick: (name, link) => {
      openPopupImage.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      removeCardPopup.open();
      removeCardPopup.submitCallback(() => {
        api
          .removeCard(cardId)
          .then(() => {
            removeCardPopup.close();
            card.removeElement();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api
        .setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api
        .removeLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
  });

  const cardElement = card.generateCard();
  return cardElement;
};

const cardsList = new Section(
  {
    renderer: (card) => {
      cardsList.addItem(createCard(card));
    },
  },
  '.elements'
);

// // // Попапы // // //
// // Попап редактирования профиля // //
const userInfo = new UserInfo({
  username: '.profile__name',
  status: '.profile__status',
  avatar: '.profile__avatar',
});

const redUserProfile = new PopupWithForm({
  popupSelector: '#popup__profile',
  handleFormSubmit: (dataForm) => {
    redUserProfile.loading(true);
    api
      .redUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        redUserProfile.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        redUserProfile.loading(false);
      });
  },
});

// // Попап добавления фото // //
const cardElement = new PopupWithForm({
  popupSelector: '#popup__photo',
  handleFormSubmit: (formData) => {
    cardElement.loading(true);
    api
      .addCard(formData)
      .then((formData) => {
        cardsList.addItem(createCard(formData));
        cardElement.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        cardElement.loading(false);
      });
  },
});

// // Попап открытия карточки // //
const openPopupImage = new PopupWithImage('#popup-image');

// // Попап редактирования аватара // //
const changeAvatar = new PopupWithForm({
  popupSelector: '#popup__avatar',
  handleFormSubmit: (data) => {
    changeAvatar.loading(true);
    api
      .redAvatar(data)
      .then((data) => {
        avatarPicture.src = data.avatar;
        changeAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        changeAvatar.loading(false);
      });
  },
});

// // Попап подтверждения удаления // //
const removeCardPopup = new ConfirmOfRemoveCard({
  popupSelector: '#popup__cardDelete',
});

// Валидация //
const profileValidator = new FormValidator(valSettings, profileForm);
const photoValidator = new FormValidator(valSettings, photoForm);
const avatarValidator = new FormValidator(valSettings, avatarForm);

// // // Вызовы // // //
redUserProfile.setEventListeners();
cardElement.setEventListeners();
openPopupImage.setEventListeners();
changeAvatar.setEventListeners();
removeCardPopup.setEventListeners();
profileValidator.enableValidation();
photoValidator.enableValidation();
avatarValidator.enableValidation();

// // // Слушатели // // //
function profileData({ username, status }) {
  nameInput.value = username;
  statusInput.value = status;
}

btnProfileEdit.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  profileData({
    username: info.username,
    status: info.status,
  });
  redUserProfile.open();
  profileValidator.resetValidation();
});

btnAddPhoto.addEventListener('click', () => {
  photoValidator.resetValidation();
  cardElement.open();
});

btnAvatarEdit.addEventListener('click', () => {
  avatarValidator.resetValidation();
  changeAvatar.open();
});
