const cardElement = document
  .querySelector('#element')
  .content.querySelector('.element');
const cardContainer = document.querySelector('.elements');
const btnProfileEdit = document.querySelector('.profile__edit');
const popupOpenProfile = document.querySelector('#popup__profile');
const popupTitle = document.querySelector('.popup__title');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupDataName = document.querySelector('#profile__name');
const popupDataStatus = document.querySelector('#profile__status');

const popupAddPhoto = document.querySelector('#popup__photo');
const btnAddPhoto = document.querySelector('.profile__add');
const popupAddPhotTitle = document.querySelector('#photo__title');
const popupAddPhotoName = document.querySelector('#photo-name');
const popupAddPhotoLink = document.querySelector('#photo-link');

const formDataProfile = document.querySelector('#profile-form');
const formDataPhoto = document.querySelector('#photo-form');

const popupImage = document.querySelector('#popup-image');
const popupPicture = document.querySelector('.popup__picture');
const popupImageCaption = document.querySelector('.popup__caption');
const popupImageClose = document.querySelector('.popup__image-close');

const btnPopupClose = document.querySelector('#popup__close');
const btnPopupAddPhotoClose = document.querySelector('#photo__close');

// Генерация карточек
const handleDeleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

const handleLikeCard = (evt) => {
  evt.target.classList.toggle('element__like_liked');
};

const generateCard = (cardData) => {
  const newCard = cardElement.cloneNode(true);

  const titleCard = newCard.querySelector('.element__name');
  titleCard.textContent = cardData.name;

  const imageLink = newCard.querySelector('.element__image');
  imageLink.src = cardData.link;
  imageLink.addEventListener('click', function () {
    openPopup(popupImage);
    popupPicture.src = imageLink.src;
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

// Открытие попапов
const saveProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = popupDataName.value;
  profileStatus.textContent = popupDataStatus.value;
  closePopup(popupOpenProfile);
};

const addPhotoCard = (evt) => {
  evt.preventDefault();
  renderCard({
    name: popupAddPhotoName.value,
    link: popupAddPhotoLink.value,
  });
  closePopup(popupAddPhoto);
  popupAddPhotoName.value = '';
  popupAddPhotoLink.value = '';
};

const openPopup = (pop) => {
  pop.classList.add('popup_opened');

  const popupCloseKey = (evt) => {
    if (evt.key == 'Escape') {
      closePopup(pop);
      document.removeEventListener('keydown', popupCloseKey);
    }
  };
  document.addEventListener('keydown', popupCloseKey);
};

btnProfileEdit.addEventListener('click', function () {
  popupDataName.value = profileName.textContent;
  popupDataStatus.value = profileStatus.textContent;
  openPopup(popupOpenProfile);
});

btnAddPhoto.addEventListener('click', function () {
  openPopup(popupAddPhoto);
});

//  Закрытие попапов

const closePopup = (pop) => {
  pop.classList.remove('popup_opened');
};

btnPopupClose.addEventListener('click', function () {
  closePopup(popupOpenProfile);
});

btnPopupAddPhotoClose.addEventListener('click', function () {
  closePopup(popupAddPhoto);
});

popupImageClose.addEventListener('click', function () {
  closePopup(popupImage);
});

formDataPhoto.addEventListener('submit', addPhotoCard);
formDataProfile.addEventListener('submit', saveProfile);

popupOpenProfile.addEventListener('click', function (evt) {
  closePopup(evt.target);
});

popupAddPhoto.addEventListener('click', function (evt) {
  closePopup(evt.target);
});

popupImage.addEventListener('click', function (evt) {
  closePopup(evt.target);
});
