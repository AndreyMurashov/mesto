import './index.css';
import {
  profileEditBtn, formEditProfile, config, formAddNewCard,
  popupAddNewCardOpenBtn, initialCards, nameInput, jobInput
} from '../utils/constants.js';
import Section from "../components/Section.js";
import FormValidator from '../components/FormValidator.js';
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";


/* Функции */
// Заносим данные в форму попапа редактирования профиля


// функционал создания новой карточки
// const createCard = (data) => {
//   const card = new Card({
//     data: data,
//     handleCardClick: (name, link) => {
//       viewImagePopup.open(name, link);
//     }}, '.element-template');
//   const cardElement = card.generateCard();
//   return cardElement;
// };


/* Профиль юзера */
// создание экземпляра класса, отвечающего за отображение информации о пользователе
const userInfo = new UserInfo({
  username: '.profile__title',
  job: '.profile__description'
});



function fillInEditProfileFormInputs({ username, job }) {
    nameInput.value = username;
    jobInput.value = job;
  };
  

// создание попапа с формой редактирования профиля
const editProfilePopup = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (dataForm) => {
    userInfo.setUserInfo({
      username: dataForm.username,
      job: dataForm.job
    });
    editProfilePopup.close();
  }
});

editProfilePopup.setEventListeners();



// Обработчик кнопки Edit попапа редактирования профиля
profileEditBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  fillInEditProfileFormInputs({
    username: info.username,
    job: info.job
  });
  editProfilePopup.open();
});


/* Карточки с изображениями */
// создание попапа с формой добавления новой карточки
const addCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_new-card',
  handleFormSubmit: (formData) => {
    cardsList.addItem(createCard(formData));
    addCardPopup.close();
  }
});
// добавляем слушатели этому попапу:
addCardPopup.setEventListeners();
// обработчик открытия попапа
popupAddNewCardOpenBtn.addEventListener('click', () => {
  formAddNewCardValidator.toggleButtonState();
  addCardPopup.open();
})
// отрисовка карточек на странице из массива
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, '.elements');
cardsList.renderItems();


/* Попап просмотра изображения */
const viewImagePopup = new PopupWithImage('.popup_type_image');
viewImagePopup.setEventListeners();




/* Валидация форм */
// валидация формы редактирования профиля
const formEditProfileValidator = new FormValidator(config, formEditProfile);
formEditProfileValidator.enableValidation();
// валидация формы добавления новой карточки
const formAddNewCardValidator = new FormValidator(config, formAddNewCard);
formAddNewCardValidator.enableValidation();