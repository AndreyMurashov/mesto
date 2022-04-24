const initialCards = [
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

const card = document.querySelector('#element').content.querySelector('.element');

const popup = document.querySelector('.popup');
const body = document.querySelector('.body');
const btnProfileEdit = document.querySelector('.profile__edit');
const btnPopupClose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupDataName = document.querySelector('#popup__name');
const popupDataStatus = document.querySelector('#popup__status');
const formData = document.querySelector('.popup__form');

const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhoto = document.querySelector('.popup-add-photo');
const btnPopupAddPhotoClose = document.querySelector('.popup-add-photo__close');
const addPhotoName = document.querySelector('.profile-add-photo__name');
const addPhotoLink = document.querySelector('.profile-add-photo__status');
const popupAddPhotoName = document.querySelector('#photo-name');
const popupAddPhotoLink = document.querySelector('#photo-link');
const formDataAddPhoto = document.querySelector('.popup-add-photo__form');

const cardContainer = document.querySelector('.elements');

const popupImage = document.querySelector('.popup-image');
const popupPicture = document.querySelector('.popup-image__picture');
const popupImageCaption = document.querySelector('.popup-image__caption');
const popupImageClose = document.querySelector('.popup-image__close');


const popupOpen = () => {
    popup.classList.add('popup_opened');
    popupDataName.value = profileName.textContent;
    popupDataStatus.value = profileStatus.textContent;
};

const popupClose = () => {
    popup.classList.remove('popup_opened');
};

const formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = popupDataName.value;
    profileStatus.textContent = popupDataStatus.value;
    popupClose();
};

const popupAddPhotoOpen = () => {
  popupAddPhoto.classList.add('popup-add-photo_opened');
};

const popupAddPhotoClose = () => {
  popupAddPhoto.classList.remove('popup-add-photo_opened');
};

const formAddPhotoSubmitHandler = (evt) => {
  evt.preventDefault();
  renderCard({ name: popupAddPhotoName.value, link: popupAddPhotoLink.value });
  popupAddPhotoClose();
  popupAddPhotoName.value = '';
  popupAddPhotoLink.value = '';
};

const handleDeleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

const handleLikeCard = (evt) => {
  evt.target.classList.toggle('element__like_liked');
};

const handlerPopupImageClose = () => {
  popupImage.classList.remove('popup-image_opened');
  popupPicture.src = '';
};

const generateCard = (cardData) => {
  const newCard = card.cloneNode(true);

  const titleCard = newCard.querySelector('.element__name');
  titleCard.textContent = cardData.name;

  const imageLink = newCard.querySelector('.element__image');
  imageLink.src = cardData.link;
  imageLink.addEventListener('click', function (evt) {
    popupImage.classList.add('popup-image_opened');
    popupPicture.src = evt.srcElement.currentSrc;
    popupPicture.setAttribute('alt', titleCard.textContent);
    popupImageCaption.textContent = titleCard.textContent;
  });
  imageLink.setAttribute('alt', cardData.name);
  
  const deleteCard = newCard.querySelector('.element__thrash');
  deleteCard.addEventListener('click', handleDeleteCard);

  const likeCard = newCard.querySelector('.element__like');
  likeCard.addEventListener('click', handleLikeCard);

  return newCard;
};

const renderCard = (cardData) => {
  cardContainer.prepend(generateCard(cardData));
};

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

btnProfileEdit.addEventListener('click', popupOpen);
btnPopupClose.addEventListener('click', popupClose);
formData.addEventListener('submit', formSubmitHandler);

btnAddPhoto.addEventListener('click', popupAddPhotoOpen);
btnPopupAddPhotoClose.addEventListener('click', popupAddPhotoClose);
formDataAddPhoto.addEventListener('submit', formAddPhotoSubmitHandler);

popupImageClose.addEventListener('click', handlerPopupImageClose)